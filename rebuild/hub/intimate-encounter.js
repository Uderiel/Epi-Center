/* Fade-to-black outcome adapter. Only authored controllers call begin/complete;
   dialogue and generated prose cannot establish agreement or create contact. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(...(n?['./bimbo-virus-exposure','./relationships','./world-clock','./scene-presence','./bimbo-virus-policy','./enchanted-effects'].map(require):[r.EpiBimboVirusExposure,r.EpiRelationships,r.EpiWorldClock,r.EpiScene,r.EpiBimboVirusPolicy,r.EpiEnchantedEffects]));if(n)module.exports=a;else r.EpiIntimateEncounter=a;})(globalThis,function(X,R,T,S,P,Resources){
'use strict';
const archetypes=Object.freeze(['gym_bunny','sorority','club_bimbo']);
function state(s){s.world||={};s.world.intimateEncounters||={};return s.world.intimateEncounters[R.player(s)]||={records:{}};}
function guard(s,event){if(event?.resolved!==true||!event.id||!event.npcId?.startsWith('npc:'))throw Error('An authored, controller-resolved encounter is required.');if(s.encounter?.active)throw Error('Finish the combat encounter first.');if(event.playerAgreed!==true||event.npcAgreed!==true||event.disclosed!==true||event.private!==true)throw Error('Record mutual agreement, prior carrier disclosure and a private encounter before contact.');if(!archetypes.includes(event.archetype)||event.carrier!==true)throw Error('Record the NPC carrier’s actual active archetype.');P.guardContact(s,event.npcId,{consented:true,authoredNpcAllowance:event.npcAgreed});}
function begin(s,event,options={}){
 guard(s,event);const q=state(s),old=q.records[event.id];if(old){if(old.npcId!==event.npcId)throw Error('Encounter ID belongs to another participant.');return {duplicate:true,id:event.id};}
 if(!Object.hasOwn(X.thresholds,event.route))throw Error('Record the actual resolved fluid-contact route.');
 const now=T.ensure(s).minutes,checks=s.world?.bimboVirus?.exposures?.[R.player(s)]?.checks.length||0,wasInfected=!!s.world?.bimboVirus?.infections?.[R.player(s)];
 const fluidId='intimate-fluid:'+R.player(s)+':'+event.id,contactId='intimate-contact:'+R.player(s)+':'+event.id;
 X.fluid(s,{id:fluidId,sourceId:event.npcId,resolved:true,bodilyFluid:true,infectious:true,createdAt:now});
 const events=X.begin(s,{id:contactId,fluidId,route:event.route,resolved:true},{...options,at:now});
 q.records[event.id]={id:event.id,npcId:event.npcId,archetype:event.archetype,space:S.player(s),body:s.activeForm||null,at:now,contactId,firstCheck:checks,wasInfected,events};
 return {id:event.id,events};
}
function observe(s,id,event){
 const row=state(s).records[id];if(!row||row.cancelled||row.result||event?.resolved!==true||!['exposed','direct-contact'].includes(event.basis)||!Array.isArray(event.regions))throw Error('Record actual regional observation in an active accepted encounter.');
 if(!P.near(s,row.npcId)||S.player(s)!==row.space||(s.activeForm||null)!==row.body||s.encounter?.active)throw Error('The actual participants and body must remain in the private encounter.');
 const Sweat=typeof module==='object'&&module.exports?require('./perspiration'):globalThis.EpiPerspiration,parts=[...new Set(event.regions)];if(parts.some(k=>!Object.hasOwn(Sweat.regions,k)))throw Error('Unknown sweat region.');
 const q=Sweat.get(s,row.npcId);row.regionalObservations||={};for(const region of parts)row.regionalObservations[region]={region,basis:event.basis,at:T.ensure(s).minutes,description:q?Sweat.label(q.regions[region]||0):'unrecorded',audience:'participants'};
 return Object.values(row.regionalObservations).map(x=>({...x}));
}
function complete(s,event,options={}){
 if(event?.resolved!==true||!event.id)throw Error('An authored completion outcome is required.');const row=state(s).records[event.id];if(!row)throw Error('No accepted encounter is recorded.');if(row.cancelled)throw Error('That encounter was cancelled.');if(row.result)return {...JSON.parse(JSON.stringify(row.result)),duplicate:true};
 if(event.npcId!==row.npcId||!P.near(s,row.npcId)||S.player(s)!==row.space||(s.activeForm||null)!==row.body||s.encounter?.active)throw Error('The recorded participants must still be together in the same body and place.');
 if(event.playerAgreed!==true||event.npcAgreed!==true)throw Error('The encounter cannot complete after agreement is withdrawn.');
 const pool=Resources.pool(s);if(!pool||!Number.isFinite(pool.arousal))throw Error('The active body needs a valid arousal pool.');
 const events=X.end(s,row.contactId,{...options,at:T.ensure(s).minutes}),checks=s.world?.bimboVirus?.exposures?.[R.player(s)]?.checks.slice(row.firstCheck).filter(c=>c.contactId===row.contactId)||[],infected=!!s.world?.bimboVirus?.infections?.[R.player(s)],status=row.wasInfected?'already_infected':checks.some(c=>!c.success)?'infected':infected?'infected_elsewhere':checks.length?'resisted':'threshold_not_reached';
 const NPC=S.actor(s,row.npcId.slice(4)),name=NPC?.name||S.aiProfile(row.npcId)?.name||row.npcId;
 const resolution={status,checks:checks.length};
 const outcome=status==='infected'?'Transmission occurred; incubation has begun.':status==='resisted'?'The transmission check was resisted; no infection began.':['already_infected','infected_elsewhere'].includes(status)?'The player has an existing infection; this encounter did not begin a new incubation.':'Exposure did not reach a transmission check; no infection began.';
 if(event.climax===true)pool.arousal=0;
 row.completedAt=T.ensure(s).minutes;row.privateChecks=JSON.parse(JSON.stringify(checks));row.result={tone:'explicit_adult',eventStatus:'resolved',audience:'owner',archetype:row.archetype,transmission:resolution,privatePerspiration:Object.values(row.regionalObservations||{}),event:'The player and '+name+' share a private, consensual intimate encounter. NPC archetype: '+row.archetype+'. '+outcome+(event.climax===true?' Climax occurred; Arousal resets to 0.':''),events:[...row.events,...events]};
 return JSON.parse(JSON.stringify(row.result));
}
function cancel(s,id,options={}){const row=state(s).records[id];if(!row||row.result||row.cancelled)return {events:[]};const events=X.end(s,row.contactId,{...options,at:T.ensure(s).minutes});row.cancelled=true;row.cancelledAt=T.ensure(s).minutes;return {events};}
function payload(s,id){const row=state(s).records[id];if(!row?.result)throw Error('Complete the recorded encounter before building its payload.');const A=typeof module==='object'&&module.exports?require('./ai-context'):globalThis.EpiAIContext;return A.build(s,{id:'narrator:world-event',kind:'narration',name:'World',dossier:'Summarize the recorded outcome in non-graphic terms. Do not add actions or change the outcome.',communication:'A brief fade-to-black summary.'},{tone:row.result.tone,event:row.result.event,eventStatus:'resolved',message:'Summarize only the recorded outcome.',location:s.hub?.location,physicalContext:{intimateEncounter:{archetype:row.archetype,transmission:row.result.transmission,privatePerspiration:row.result.privatePerspiration}},visibleParticipants:[],hiddenObserver:true});}
function active(s){return Object.values(s.world?.intimateEncounters?.[R.player(s)]?.records||{}).some(r=>!r.result&&!r.cancelled&&r.space===S.player(s)&&r.body===(s.activeForm||null)&&P.near(s,r.npcId));}
return Object.freeze({archetypes,begin,complete,cancel,payload,active,observe});
});
