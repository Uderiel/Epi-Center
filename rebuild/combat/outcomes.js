/* Epi-Center experimental encounter-outcome layer.
 * Standalone: not connected to live Play. All removal effects must be authored.
 */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiCombatOutcomes=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const REMOVALS=new Set(['knockout','death','destroyed','incapacitated','surrender','retreat','capture','containment','transformed','conversion']);
const EFFECTS=new Set(['damage','pressure','condition','remove','allegiance','recover','objective','transform']);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const copy=x=>JSON.parse(JSON.stringify(x));
function create(config){
 if(!Array.isArray(config.units)||!config.units.length)throw Error('units required');
 const ids=new Set();
 const units=config.units.map(x=>{if(!x.id||ids.has(x.id))throw Error('unique unit ids required');ids.add(x.id);return {id:x.id,team:x.team||x.id,originalTeam:x.team||x.id,player:!!x.player,hp:x.hp??100,maxHp:x.hp??100,mental:0,arousal:0,tracks:{},conditions:[],removal:null,allegianceUntil:null,actionsLost:0};});
 return {units,round:1,events:[],objective:copy(config.objective||{type:'opposition'}),finished:false,winner:null};
}
const unit=(s,id)=>{const u=s.units.find(x=>x.id===id);if(!u)throw Error('unknown unit '+id);return u;};
const effective=u=>!u.removal;
function record(s,type,data){s.events.push({round:s.round,type,...data});}
function remove(s,id,reason,options={}){
 if(!REMOVALS.has(reason))throw Error('unrecognized removal');
 const u=unit(s,id);if(u.removal)return false;
 if(reason==='transformed'&&!options.finalResistancePassed)throw Error('transformation requires final resistance resolution');
 u.removal={reason,expires:options.expires??null,reversible:options.reversible!==false};
 record(s,'removed',{id,reason});return true;
}
function apply(s,ability,actorId,targetId,context={}){
 if(s.finished)throw Error('encounter finished');
 const a=unit(s,actorId),t=unit(s,targetId);
 if(!effective(a))throw Error('removed actor cannot act');
 if(!ability||!Array.isArray(ability.effects))throw Error('authored effects required');
 const applied=[];
 for(const e of ability.effects){
  if(!EFFECTS.has(e.type))throw Error('unknown effect '+e.type);
  if(e.type==='damage'){const n=Math.max(0,Number(e.amount)||0);t.hp=clamp(t.hp-n,0,t.maxHp);applied.push({type:e.type,amount:n});if(t.hp===0&&e.finisher)remove(s,t.id,e.finisher);}
  else if(e.type==='pressure'){if(!['mental','arousal'].includes(e.channel))throw Error('pressure channel required');const n=Math.max(0,Number(e.amount)||0);t[e.channel]=clamp(t[e.channel]+n,0,100);applied.push({type:e.type,channel:e.channel,amount:n});}
  else if(e.type==='condition'){t.conditions.push({id:e.id,expires:e.expires??null,source:a.id});applied.push({type:e.type,id:e.id});}
  else if(e.type==='remove'){if(!context.eligible)throw Error('authored removal requires validated eligibility');remove(s,t.id,e.reason,{expires:e.expires,reversible:e.reversible});applied.push({type:e.type,reason:e.reason});}
  else if(e.type==='allegiance'){if(!context.eligible)throw Error('allegiance requires validated eligibility');t.team=e.team||a.team;t.allegianceUntil=e.expires??null;applied.push({type:e.type,team:t.team});}
  else if(e.type==='recover'){if(e.channel==='hp')t.hp=clamp(t.hp+(Number(e.amount)||0),0,t.maxHp);else if(['mental','arousal'].includes(e.channel))t[e.channel]=clamp(t[e.channel]-(Number(e.amount)||0),0,100);else throw Error('unknown recovery channel');if(e.restoreRemoval&&t.removal?.reversible)t.removal=null;applied.push({type:e.type,channel:e.channel});}
  else if(e.type==='transform'){if(!e.sourceId||!e.outcome)throw Error('transformation source and outcome required');const key=e.sourceId+':'+a.id;const n=Math.max(0,Number(e.amount)||0);t.tracks[key]=clamp((t.tracks[key]||0)+n,0,100);applied.push({type:e.type,source:key,buildup:t.tracks[key]});if(t.tracks[key]>=100){if(context.finalResistanceSuccess===undefined)throw Error('final resistance required');if(context.finalResistanceSuccess){t.tracks[key]=Number.isFinite(e.resistedBuildup)?clamp(e.resistedBuildup,0,99):50;record(s,'transformation-resisted',{id:t.id,source:key});}else{remove(s,t.id,'transformed',{finalResistancePassed:true,reversible:e.reversible});record(s,'transformation-outcome',{id:t.id,source:key,outcome:e.outcome});}}}
  else if(e.type==='objective'){if(!context.eligible)throw Error('objective action requires validated eligibility');s.objective.progress=(s.objective.progress||0)+Math.max(0,Number(e.amount)||0);applied.push({type:e.type,progress:s.objective.progress});}
 }
 record(s,'ability',{actor:actorId,target:targetId,ability:ability.id||'unnamed',applied});return applied;
}
function advance(s){
 s.round++;
 for(const u of s.units){
  u.conditions=u.conditions.filter(c=>c.expires===null||c.expires>s.round);
  if(u.removal?.expires!==null&&u.removal?.expires<=s.round&&u.removal.reversible)u.removal=null;
  if(u.allegianceUntil!==null&&u.allegianceUntil<=s.round){u.team=u.originalTeam;u.allegianceUntil=null;}
 }
}
function evaluate(s){
 const active=s.units.filter(effective),teams=[...new Set(active.map(u=>u.team))];
 const obj=s.objective;
 if(obj.type==='retrieve'&&(obj.progress||0)>=(obj.required||1)){s.finished=true;s.winner=obj.team;return {finished:true,winner:s.winner,reason:'objective'};}
 if(obj.type==='escape'&&(obj.progress||0)>=(obj.required||1)){s.finished=true;s.winner=obj.team;return {finished:true,winner:s.winner,reason:'escape'};}
 if(teams.length<=1){s.finished=true;s.winner=teams[0]||null;return {finished:true,winner:s.winner,reason:'opposition-neutralized'};}
 return {finished:false,winner:null,reason:'contested',activeByTeam:Object.fromEntries(teams.map(team=>[team,active.filter(u=>u.team===team).length]))};
}
return {create,unit,apply,remove,advance,evaluate,REMOVALS:[...REMOVALS]};
});
