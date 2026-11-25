/* Controller-resolved four-warning chain. Relationship scoring stays in the shared ledger. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiAniyaConduct=factory(null,root);})(globalThis,function(req,root){
'use strict';const get=(path,key)=>req?req(path):root[key],now=s=>s.worldClock?.minutes||0;
function state(s){s.world||={};return s.world.aniyaConduct||={players:{},receipts:{},history:[]};}
function player(s,create=false){const id=get('./relationships','EpiRelationships').player(s),q=create?state(s):s.world?.aniyaConduct;if(!q)return null;if(create&&!Object.hasOwn(q.players,id))Object.defineProperty(q.players,id,{value:{strikes:0,lastRudeAt:null,bannedUntil:null},enumerable:true,writable:true,configurable:true});return q.players[id]||null;}
function active(s){return !!s.world?.formRepository?.staff?.aniya?.present&&!s.world.formRepository.staff.aniya.absence&&get('./scene-presence','EpiScene').canHear(s,'aniya-singh');}
function temperature(s,at=now(s)){const rows=s.world?.aniyaConduct?.players||{};return Math.max(102,...Object.values(rows).filter(p=>p.lastRudeAt!==null&&at>=p.lastRudeAt&&at-p.lastRudeAt<5).map(p=>102+Math.min(2,Math.max(0,p.strikes-1))));}
function status(s){const p=player(s),at=now(s);return {strikes:p&&p.lastRudeAt!==null&&at-p.lastRudeAt<5?p.strikes:0,temperatureF:temperature(s),banned:!!p?.bannedUntil&&at<p.bannedUntil,bannedUntil:p?.bannedUntil??null,minutesRemaining:p?.bannedUntil?Math.max(0,p.bannedUntil-at):0};}
function guardEntry(s){get('./repository-specialists','EpiRepositorySpecialists')?.guardEntry(s);const p=status(s);if(p.banned)throw Error('Repository entry is temporarily barred for another '+p.minutesRemaining+' game minutes after the misconduct incident. Your stored forms remain safe.');}
function tick(s,at=now(s)){
 const q=s.world?.aniyaConduct;if(!q)return [];
 const events=[];for(const p of Object.values(q.players))if(p.lastRudeAt!==null&&at-p.lastRudeAt>=5&&p.strikes){p.strikes=0;p.intervened=false;p.cooledAt=p.lastRudeAt+5;events.push({kind:'aniya-calmed',at:p.cooledAt,text:'Aniya closes her eyes, breathes deeply and settles her temper. Her skin temperature returns to its usual warmth.'});}
 const a=s.world?.formRepository?.staff?.aniya,back=q.returning;
 if(a&&back){while(back.path.length&&at>=back.nextAt){a.room=back.path.shift();q.history.push({kind:'staff-return-step',at:back.nextAt,room:a.room});back.nextAt++;}if(!back.path.length&&at>=back.completedAt){a.working=back.working;a.activity=back.activity;q.returning=null;q.history.push({kind:'returned-inside',at:back.completedAt,room:a.room});}}
 if(a)a.skinTemperature={unit:'F',value:temperature(s,at),baseline:102};
 return events;
}
function route(s,room=s.world?.formRepository?.room,target='A'){
 const Q=get('./form-repository','EpiFormRepository'),queue=[[room]],seen=new Set([room]);
 // The approved public front is connected. Never invent a route through locked storage.
 if(!['A','B','C'].includes(room))return null;
 while(queue.length){const path=queue.shift();if(path.at(-1)===target)return path;for(const next of Q.rooms[path.at(-1)]?.routes||[])if(['A','B','C'].includes(next)&&!seen.has(next)){seen.add(next);queue.push([...path,next]);}}
 return null;
}
function remove(s,p,eventId){
 const q=state(s),facility=s.world.formRepository,a=facility.staff.aniya,path=route(s),Sleep=get('./sleeping-contact','EpiSleepingContact'),R=get('./relationships','EpiRelationships');
 if(!path||!a||s.encounter?.active||Sleep.sleeping(s,R.player(s)))return {removed:false,text:'Aniya ends the exchange and calls for staff assistance. No sleep or removal has been recorded because the current situation cannot complete the escort.'};
 const original={room:a.room,working:!!a.working,activity:a.activity},at=now(s),minutes=path.length;
 const Feeding=get('./arousal-feeding','EpiArousalFeeding');if(Feeding.current(s))Feeding.stop(s,'Staff end feeding before handling the misconduct incident.');
 // A controlled NPC escort carries the sleeping customer; it does not grant customer access.
 Sleep.recordSleep(s,{resolved:true,actorId:R.player(s),sleeping:true});
 const sleepEvent={kind:'sleep',at,body:s.activeForm||null,eventId};
 for(let i=1;i<path.length;i++)facility.room=path[i];
 facility.inside=false;facility.room='A';delete facility.leeProximity;
 Sleep.recordSleep(s,{resolved:true,actorId:R.player(s),sleeping:false});
 a.room='A';a.working=false;a.activity='Calming after escorting a disruptive customer to the exit';
 const back=route(s,'A',original.room).slice(1);
 q.returning={...original,path:back,nextAt:at+minutes+1,completedAt:at+minutes+back.length};
 p.bannedUntil=at+minutes+720;p.removedAt=at+minutes;
 const row={kind:'sleep-escort-wake',eventId,playerId:R.player(s),at,completedAt:at+minutes,sleepEvent,route:[...path,'outside'],wokenOutside:true,exclusionMinutes:720,bannedUntil:p.bannedUntil,staffRemainedInside:true};
 q.history.push(row);q.history=q.history.slice(-80);
 get('./lee-routine','EpiLeeRoutine').record(s,{resolved:true,actorId:R.player(s),action:'aniya-misconduct-escort',route:row.route,eventId});
 return {removed:true,minutes,row,text:'Aniya releases a focused flare of pheromones from her skin. You fall asleep. Staff escort you through Lobby A and wake you outside the Repository. You are barred for twelve game hours; your stored forms and belongings remain untouched.'};
}
function observe(s,event,result){
 if(!result?.warning||!active(s))return null;
 const R=get('./relationships','EpiRelationships'),actual=(s.world?.localSpeech||[]).at(-1);
 if(event!==actual||event.playerId!==R.player(s)||!event.listeners?.includes('npc:aniya-singh')||event.directedTo&&event.directedTo!=='npc:aniya-singh')return null;
 const q=state(s),receipt=R.player(s)+':'+event.id;if(Object.hasOwn(q.receipts,receipt))return q.receipts[receipt];
 tick(s);const p=player(s,true);p.strikes=Math.min(4,p.strikes+1);p.lastRudeAt=now(s);
 const row={strikes:p.strikes,temperatureF:102+Math.min(2,p.strikes-1),at:now(s),eventId:receipt,removed:false};
 let line=p.strikes===1?result.text:p.strikes===2?'Aniya takes a measured breath. “You had better be careful before you speak again, my dear. That is a warning.”':p.strikes===3?'Aniya’s expression hardens. “One more disrespectful remark, and you will be escorted off the premises. This is your final warning.”':'';
 const Lee=s.world.formRepository.staff.lee,S=get('./scene-presence','EpiScene');
 if(!p.intervened&&p.strikes<4&&Lee?.present&&Lee.working&&!Lee.busy&&!Lee.absence&&S.canSee(s,'lee-singh')){p.intervened=true;row.leeIntervened=true;line+=' Lee intercedes: “Treat my family respectfully.” Aniya gives him a brief, annoyed look. “I could have handled it, Lee. Still, it is rather dear of you to care.”';}
 if(p.strikes===4){const out=remove(s,p,receipt);Object.assign(row,out);line=out.text;}
 s.world.formRepository.staff.aniya.skinTemperature={unit:'F',value:row.temperatureF,baseline:102};
 result.text=line;result.conduct=row;q.receipts[receipt]=row;
 for(const old of Object.keys(q.receipts).slice(0,-100))delete q.receipts[old];
 return row;
}
return Object.freeze({status,temperature,tick,guardEntry,observe});
});
