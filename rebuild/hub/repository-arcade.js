/* Free solo lobby games on the existing activity clock. No stock or checkout is invented. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiRepositoryArcade=factory(null,root);})(globalThis,function(req,root){
'use strict';
const get=(p,k)=>req?req(p):root[k],ADAPTER='repository-arcade',LEE_SCORE=900;
const games=Object.freeze({duel:Object.freeze({id:'duel',name:'Rift Duel',genre:'Fighting',reflexWeight:3,intuitionWeight:2,weightTotal:5}),front:Object.freeze({id:'front',name:'Neon Front',genre:'Run-and-gun',reflexWeight:1,intuitionWeight:1,weightTotal:2}),circuit:Object.freeze({id:'circuit',name:'Vector Circuit',genre:'Racing',reflexWeight:2,intuitionWeight:3,weightTotal:5})});
const now=s=>get('./world-clock','EpiWorldClock').ensure(s).minutes,R=()=>get('./relationships','EpiRelationships'),A=()=>get('./shared-activities','EpiSharedActivities');
function state(s){s.world||={};const q=s.world.repositoryArcade||={schema:1,players:{},boards:{}};return q;}
function player(s){const q=state(s),id=R().player(s);if(!Object.hasOwn(q.players,id))Object.defineProperty(q.players,id,{value:{claimed:{},vouchers:{},runs:{}},enumerable:true,writable:true,configurable:true});return q.players[id];}
function body(s){return JSON.stringify([s.activeForm||null,s.erinRestoration?.stage||0,s.world?.priyaFlats?.active||false]);}
function attributes(s){const E=get('../combat/engine','EpiCombat'),f=s.forms?.[s.activeForm]||(Object.hasOwn(s,'activeForm')?null:s.form),complete=!!f&&(f.completedTransformation||Number(f.transformationStage??f.stage??0)>=23),base=complete?f.attributes:get('./erin-restoration','EpiErin').attributes(s,s.attributes);return get('./equipment-regions','EpiEquipmentRegions').attributes(s,E.baseAttributes(base));}
function available(s){return s.hub?.location==='Form Repository'&&s.world?.formRepository?.inside===true&&s.world.formRepository.room==='A'&&!s.encounter?.active&&get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).manipulation&&!get('./sleeping-contact','EpiSleepingContact').sleeping(s,R().player(s));}
function guard(s){if(!available(s))throw Error('Use an arcade cabinet in the lobby with a body able to operate its controls, while awake and out of combat.');get('./aniya-conduct','EpiAniyaConduct').guardEntry(s);}
function bonus(game,stats){return Math.floor((game.reflexWeight*Math.max(0,Number(stats.Reflexes)||0)+game.intuitionWeight*Math.max(0,Number(stats.Intuition)||0))/game.weightTotal);}
function stage(game,die,stats){if(!Number.isInteger(die)||die<1||die>20)throw Error('Invalid saved arcade die.');const skill=bonus(game,stats),total=die+skill;return {die,skill,total,success:die===20||die!==1&&total>=15,points:10*total,attributes:{Reflexes:Number(stats.Reflexes)||0,Intuition:Number(stats.Intuition)||0}};}
function current(s){const q=s.world?.sharedActivities?.current;return q?.adapter===ADAPTER&&q.playerId===R().player(s)?q:null;}
function begin(s,id,{rng=Math.random}={}){
 guard(s);if(!Object.hasOwn(games,id))throw Error('Choose an actual lobby arcade game.');if(s.world?.sharedActivities?.current)throw Error('Finish or stop the current activity first.');
 const Lobby=get('./repository-lobby','EpiRepositoryLobby');Lobby?.release(s,'You leave the lobby seat to use the arcade controls');
 const dice=Array.from({length:5},()=>get('../combat/engine','EpiCombat').d20(rng).natural),at=now(s),offer=A().offer(s,ADAPTER,'arcade',id,at);offer.dice=dice;
 return A().respond(s,offer.id,true,at);
}
function stop(s){if(!current(s))throw Error('No arcade session is running for this player.');return A().stop(s,now(s),'You stop playing the arcade game');}
function wait(s,all=false){guard(s);const q=current(s);if(!q)throw Error('No arcade session is running for this player.');if(q.status==='paused')throw Error('Resume the activity before continuing.');return {minutes:all?5-q.elapsed:1,text:'You continue playing '+games[q.gameId].name+'.'};}
function board(s,id){if(!Object.hasOwn(games,id))throw Error('Unknown arcade cabinet.');return [...(s.world?.repositoryArcade?.boards?.[id]||[])].map(row=>({name:row.name||'---',score:row.score,seed:!!row.seed})).concat([{name:'LEE',score:LEE_SCORE,seed:true}]).sort((a,b)=>b.score-a.score||Number(b.seed)-Number(a.seed));}
function vouchers(s){const id=R().player(s),rows=s.world?.repositoryArcade?.players;if(!rows||!Object.hasOwn(rows,id))return [];return Object.values(rows[id].vouchers||{}).filter(v=>v.ownerId===id&&v.status==='available').map(v=>({...v}));}
function voucher(s,id){return vouchers(s).find(v=>v.id===id)||null;}
function complete(s,q,at){
 if(q.playerId!==R().player(s)||q.body!==body(s)||!available(s)||q.stages.length!==5)throw Error('The completed arcade session no longer matches the actual player/body/location.');
 const p=player(s),key='arcade-run:'+q.id;if(Object.hasOwn(p.runs,key))return p.runs[key].text;
 const score=q.stages.reduce((sum,r)=>sum+r.points,0),wins=q.stages.filter(r=>r.success).length,record=score>LEE_SCORE,result={id:key,activityId:q.id,gameId:q.gameId,ownerId:q.playerId,at,score,wins,won:wins>=3,beatLee:record,stages:q.stages.map(r=>({...r}))};
 let prize='';if(record){const rows=state(s).boards[q.gameId]||=[],old=rows.find(r=>r.ownerId===q.playerId);if(!old||score>old.score){const row={ownerId:q.playerId,runId:key,score,name:old?.name||null,at};if(old)rows.splice(rows.indexOf(old),1,row);else rows.push(row);result.nameEntryAvailable=!row.name;}
  if(!Object.hasOwn(p.claimed,q.gameId)){const id='arcade-voucher:'+q.gameId+':'+q.playerId;p.claimed[q.gameId]={runId:key,at};p.vouchers[id]={id,ownerId:q.playerId,gameId:q.gameId,runId:key,percent:5,status:'available',earnedAt:at};result.voucherId=id;prize=' You earn one single-use five-percent item voucher, adding five percentage points to the applicable purchase discount.';}
 }
 result.text=games[q.gameId].name+': '+score+' points; '+wins+' of five stages cleared. '+(result.won?'You win the game.':'The game ends in defeat.')+(record?' You beat Lee’s '+LEE_SCORE+'-point record and may enter three-letter arcade initials.':' Lee’s record stands.')+prize;
 p.runs[key]=result;for(const old of Object.keys(p.runs).slice(0,-60))delete p.runs[old];return result.text;
}
function submitName(s,id,name){
 guard(s);const p=player(s),run=Object.hasOwn(p.runs,String(id))?p.runs[id]:null,text=String(name||'').trim().toUpperCase();
 if(!run?.beatLee||run.ownerId!==R().player(s)||!/^[A-Z]{3}$/.test(text))throw Error('Enter exactly three letters for your arcade initials on an actual record-breaking run.');
 const row=state(s).boards[run.gameId]?.find(r=>r.ownerId===run.ownerId&&r.runId===run.id);if(!row)throw Error('Only your current leaderboard record can be named.');row.name=text;run.nameEntryAvailable=false;return {minutes:0,text:'Your arcade record is listed as '+text+'. This does not disclose or verify another identity.'};
}
function pendingNames(s){const id=R().player(s);return Object.values(s.world?.repositoryArcade?.players?.[id]?.runs||{}).filter(r=>r.nameEntryAvailable&&s.world.repositoryArcade.boards[r.gameId]?.some(b=>b.ownerId===id&&b.runId===r.id));}
// No player checkout calls this yet. Later stock/payment code must commit this quote atomically with its own verified receipt.
function consume(s,id,{resolved=false,receiptId,playerId,itemId,quote}={}){
 const who=R().player(s),rows=s.world?.repositoryArcade?.players?.[who],v=rows&&Object.hasOwn(rows.vouchers||{},id)?rows.vouchers[id]:null;
 if(!resolved||!receiptId||!itemId||playerId!==who||!quote||quote.kind!=='purchase'||quote.itemId!==itemId||quote.voucherId!==id)throw Error('A completed single-item purchase receipt and matching quote are required.');
 if(v?.status==='redeemed'){if(v.receiptId===receiptId&&v.itemId===itemId)return {duplicate:true,consumed:false};throw Error('That arcade voucher has already been used.');}
 if(!v||v.ownerId!==who||v.status!=='available')throw Error('That arcade voucher is unavailable to this player.');
 get('./repository-pricing','EpiRepositoryPricing').validate(s,quote,quote.baseGold,{kind:'purchase',itemId,voucherId:id});
 v.status='redeemed';v.receiptId=receiptId;v.itemId=itemId;v.redeemedAt=now(s);return {consumed:true,id,receiptId,itemId};
}
A().register(ADAPTER,{
 describe(s,kind,id){guard(s);if(kind!=='arcade'||!Object.hasOwn(games,id))throw Error('Choose an actual arcade cabinet.');return {kind:'arcade',arg:id,gameId:id,title:games[id].name,duration:5,space:'Form Repository:A',identity:body(s),playerId:R().player(s),participants:['player']};},
 prepare(s,o){if(!Array.isArray(o.dice)||o.dice.length!==5||o.dice.some(n=>!Number.isInteger(n)||n<1||n>20))throw Error('An arcade session needs five saved dice.');return {body:body(s),dice:o.dice.slice(),stages:[],startText:'You begin '+games[o.gameId].name+' for free. Five one-minute stages; clear three to win. You can stop at any time.'};},
 lead(){return 'player';},
 check(s,q){return q.playerId!==R().player(s)||q.body!==body(s)||!available(s)?{invalid:'The arcade play ends because your player, body, location or availability changed'}:{};},
 step(s,q,at){const r=stage(games[q.gameId],q.dice[q.elapsed-1],attributes(s));q.stages.push({...r,at});return ['Arcade stage '+q.elapsed+'/5: '+(r.success?'cleared':'missed')+' · '+r.points+' points.'];},
 detail(){return [];},complete
});
return Object.freeze({games,LEE_SCORE,state,available,attributes,bonus,stage,current,begin,stop,wait,board,vouchers,voucher,pendingNames,submitName,consume});
});
