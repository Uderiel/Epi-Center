/* Explicit out-of-story QA repair. Never called by gameplay reversion or AI. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('../combat/kibbles-form'):r.EpiKibblesForm,n?require('./erin-life'):r.EpiErinLife,n?require('./shared-activities'):r.EpiSharedActivities);if(n)module.exports=a;else r.EpiDevReturnHuman=a;})(globalThis,function(F,Life,Shared){
'use strict';
const copy=x=>JSON.parse(JSON.stringify(x));
const reason='Developer return to human (out of story)';
function repair(s){
 const at=s.worldClock?.minutes??0,w=s.world||={},h=s.hub||={};
 const receipt={at,reason,from:{location:h.location,form:s.activeForm||s.form?.id||null},encounter:s.encounter?copy(s.encounter):null};
 const api=name=>typeof module==='object'&&module.exports?require('./'+name[0]):globalThis[name[1]];
 const exposure=api(['bimbo-virus-exposure','EpiBimboVirusExposure']);
 exposure.stopForMovement(s,at);
 const relationships=api(['relationships','EpiRelationships']), player=relationships.player(s);
 for(const row of Object.values(w.intimateEncounters?.[player]?.records||{}))if(!row.cancelled&&!row.result)api(['intimate-encounter','EpiIntimateEncounter']).cancel(s,row.id);
 for(const row of Object.values(w.encounterContinuity?.[player]?.records||{}))if(row.phase!=='ended')api(['encounter-continuity','EpiEncounterContinuity']).end(s,row.id,reason);
 // Close the actual private controller, including an interrupted escort, before relocation.
 // Ending continuity alone leaves an escort waiting forever for arrival in room D.
 const privateScene=api(['private-encounter','EpiPrivateEncounter']);
 const privateRow=privateScene.current(s);
 if(privateRow?.status==='offered')privateScene.decline(s);
 else if(privateRow&&['escorting','active','shared-rest'].includes(privateRow.status))privateScene.end(s,reason);
 const invitation=w.burkesSweets?.privateSceneInvitations?.[player];
 if(invitation)invitation.active=false;
 // End only this player's outstanding bridge turns/offers. Keep resolved receipts and sequence IDs.
 const bridge=w.npcActions?.[player];
 if(bridge){
  for(const session of Object.values(bridge.sessions||{})){
   api(['kissing','EpiKissing']).cancelPending(s,session.id);
   api(['fluid-contact','EpiFluidContact']).cancelPending(s,session.id);
   if(session.pending?.kind==='private'&&api(['private-encounter','EpiPrivateEncounter']).current(s)?.status==='offered')api(['private-encounter','EpiPrivateEncounter']).decline(s);
   session.pending=null;session.status='ended';session.currentTurn=null;
   if(session.watch)session.watch.status='ended';
  }
  for(const turn of Object.values(bridge.turns||{}))if(turn.status==='pending'){
   turn.status='cancelled';turn.cancelledAt=at;turn.reason=reason;
  }
 }
 for(const [key,memory] of Object.entries(w.burkesSweets?.tits?.memories||{})){
  let identity;try{identity=JSON.parse(key);}catch{continue;}
  if(identity[0]!==player)continue;
  memory.hugPending=false;
  if(memory.kissConversation&&memory.kissConversation.status!=='active')memory.kissConversation.status='cancelled';
 }
 // The replaced save makes in-flight callbacks stale; persist a truthful terminal feed status too.
 for(const entry of h.feed||[])if(entry.npcActionTurn&&!entry.aiGenerated&&!entry.npcActionReceipt)
  entry.aiFailure='Developer recovery cancelled this pending NPC turn; no action was executed.';
 // Use lifecycle interruption, never completion or ordinary mastery/reversion helpers.
 if(w.sharedActivities?.current)Shared.stop(s,at,reason);
 if(s.erinRestoration){
  const e=s.erinRestoration;
  receipt.erin={stage:e.stage,released:e.released};
  Life.interrupt(s,reason);
  // Unmastered Erin's appearance adapter ignores `released`; stage must be zero.
  if(!e.mastered)e.stage=0;
  e.released=true;e.exposureMinutes=0;
  if(e.heels?.location==='equipped')e.heels.location='inventory';
  if(s.equipment?.feet==='shoes-0')delete s.equipment.feet;
  if(e.life?.sleepCycle)e.life.sleepCycle.active=false;
 }
 const cat=w.priyaCat;
 if(cat){
  receipt.catStay={phase:cat.phase,progress:cat.progress,startedAt:cat.startedAt,duration:cat.duration};
  if(cat.phase==='staying'){cat.phase='ready';cat.progress=0;cat.startedAt=null;}
  else if(cat.phase==='learning')cat.phase='expectation';
  cat.carriedBy=null;cat.carryName=null;cat.contact=null;cat.pending=null;cat.harnessWorn=false;
  if(cat.collar){cat.collar.equipped=false;cat.collar.belief=0;cat.collar.protesting=false;}
  cat.history||=[];cat.history.push({at,kind:'developer-interruption',text:reason});
 }
 const flats=w.priyaFlats;
 if(flats?.active){receipt.flats={place:flats.place,stage:flats.stage};flats.active=false;flats.stage=0;flats.released=true;flats.place='released';flats.held=false;}
 // Keep each owned form, mastery, resources and internal progress; clear only binding flags.
 const owners=[s.forms?.[receipt.from.form],s.forms?.[s.formBinding?.id],s.erinRestoration,receipt.flats?flats:null].filter(Boolean);
 receipt.binding=s.formBinding?copy(s.formBinding):null;
 for(const o of owners){delete o.permanentBound;if(o.internal)delete o.internal.permanentBound;}
 delete s.formBinding;
 for(const o of Object.values(s.forms||{}))o.completedTransformation=false;
 s.activeForm=null;delete s.form;delete s.kibblesPreviousForm;
 // Retain actually spent encounter resources instead of healing to pre-combat pools.
 const combatPool=s.encounter?.active?s.encounter.engine?.units?.find(u=>u.id==='player')?.resources:null;
 if(combatPool){const owner=s.forms?.[receipt.from.form];if(owner)owner.resources=copy(combatPool);else s.combatResources=copy(combatPool);}
 // Archive the encounter for diagnosis; do not run victory/escape/reward resolution.
 delete s.encounter;
 F.clearAttachment(s);
 if(s.kibblesBehavior?.handler)s.kibblesBehavior.handler=null;
 const nh=w.nadiaHome;
 if(nh?.canineKennel)nh.canineKennel.closed=false;
 if(nh?.guests?.collar)nh.guests.collar.equipped=false;
 for(const key of ['applewood','applewoodBuilding','priyaHome','nadiaHome','richardHome','technologyCenter','cherishedTouch','burkesSweets']){
  const room=w[key];if(!room)continue;room.inside=false;
  for(const k of ['fixture','fixtureResult','fixtureParents','nav','transition'])delete room[k];
 }
 delete h.journey;delete h.currentActivity;delete h.travel;
 h.location='Central Hub Spire';h.channel='world';delete h.recipientId;delete h.recipientDraft;
 h.devReturns||=[];h.devReturns.push(receipt);
 return 'OUT OF STORY — Developer return to the current human/base body at Central Spire. Active form restraints and binding cleared; unfinished stay and encounter interrupted without completion or rewards. Identity, mastery, possessions, progress, resources and world time retained. Unrelated conditions are unchanged.';
}
return Object.freeze({repair});
});
