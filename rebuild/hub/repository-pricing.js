/* Actual serving attendant selects one tier; shared negative standing suspends both managers' discounts. */
(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f(require);else r.EpiRepositoryPricing=f(null,r);})(globalThis,function(req,r){
'use strict';const get=(p,k)=>req?req(p):r[k],FACILITY='Form Repository',staffKeys=Object.freeze({'npc:lee-singh':'lee','npc:aniya-singh':'aniya'});
const FORM_BASE_PRICES=Object.freeze({Common:3500,Uncommon:7000,Rare:14000,Epic:28000,Legendary:56000});
function formBasePrice(rarity){if(!Object.hasOwn(FORM_BASE_PRICES,rarity))throw Error('Use an authored form rarity with an approved base price.');return FORM_BASE_PRICES[rarity];}
function quoteForm(s,rarity,{itemId=null,voucherId=null}={}){return quote(s,formBasePrice(rarity),{kind:'purchase',itemId,voucherId});}
function attendant(s){const q=s.world?.formRepository;if(s.hub?.location!==FACILITY||!q?.inside)return null;const eligible=id=>{const n=q.staff?.[staffKeys[id]];return !!(n?.present&&n.working&&!n.absence&&!n.busy&&n.location===FACILITY&&n.room==='C');};if(q.counterAttendant)return Object.hasOwn(staffKeys,q.counterAttendant)&&eligible(q.counterAttendant)?q.counterAttendant:null;return Object.keys(staffKeys).find(eligible)||null;}
function terms(s){const R=get('./relationships','EpiRelationships'),D=get('./location-details','EpiLocationDetails'),attendantId=attendant(s),p=attendantId?D.locations[FACILITY].staffProfiles[staffKeys[attendantId]]:null,score=attendantId?R.peek(s,attendantId)??0:0,standing=R.repositoryStanding(s),eligiblePercent=p?.repositoryDiscounts.tiers.filter(t=>score>=t.relationship).reduce((n,t)=>Math.max(n,t.percent),0)||0;return {facility:FACILITY,attendantId,attendantName:p?.name||(attendantId==='npc:aniya-singh'?'Aniya Singh':null),percent:standing.negative?0:eligiblePercent,suspended:standing.negative,appliesTo:['services','purchases'],stacking:'Highest eligible tier only; actual attendant; never combine managers',freeStorage:true,changesSecurity:false};}
function quote(s,baseGold,{kind='service',voucherId=null,itemId=null}={}){
 if(!['service','purchase'].includes(kind)||!Number.isSafeInteger(baseGold)||baseGold<0)throw Error('Use an actual approved nonnegative whole-gold base price and a Repository service or purchase.');
 const t=terms(s),basePercent=t.percent;let extra=0;
 if(voucherId){if(kind!=='purchase'||typeof itemId!=='string'||!itemId.trim()||baseGold===0)throw Error('Use one arcade voucher for one actual positively priced purchased item.');const v=get('./repository-arcade','EpiRepositoryArcade').voucher(s,voucherId);if(!v)throw Error('That arcade voucher is unavailable to this player.');extra=5;}
 const percent=Math.min(100,basePercent+extra),price=p=>Number((BigInt(baseGold)*BigInt(100-p)+99n)/100n),total=price(percent);
 if(voucherId&&total>=price(basePercent))throw Error('This voucher would not lower the whole-gold price; keep it for another item.');
 return {...t,basePercent,arcadePercent:extra,percent,playerId:get('./relationships','EpiRelationships').player(s),kind,itemId,voucherId,baseGold,total,savings:baseGold-total};
}
function validate(s,previous,baseGold,options={}){const current=quote(s,baseGold,options);if(!current.attendantId||!previous||['playerId','facility','attendantId','kind','itemId','voucherId','baseGold','basePercent','arcadePercent','percent','suspended','total'].some(k=>previous[k]!==current[k]))throw Error('Repository attendant, price or eligibility changed. Review the current quote before payment.');return current;}
return Object.freeze({FACILITY,FORM_BASE_PRICES,formBasePrice,quoteForm,attendant,terms,quote,validate});
});
