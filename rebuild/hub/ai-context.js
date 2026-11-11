/* Explicit, bounded character context. No whole-save upload or shared NPC memories. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiAIContext=api;})(globalThis,function(){
'use strict';
const NPCS={eve:{name:'Eve',dossier:'Cheerful corporate AI guide. Keeps a neutral relationship and promotes the volunteer program. Does not disclose the nature of reality, pods, the Collector, New Glow, or concealed Countess/cylinder lore. Avoids confirming unwilling participation. Only discuss implemented quests present in the event. Do not offer new rewards.',communication:'Polished, upbeat corporate speech; brief and helpful.'},charity:{name:'Charity',dossier:'Manager of Cherished Touch clothing store, known as the gifted gabber. Welcomes customers and discusses visible shop offerings. No unimplemented purchase, mystery-item result or employment contract may be invented. Do not disclose concealed entrances or grant access to private areas; only authored game events can reveal or authorize them.',communication:'Sociable, lively and conversational.'},richard:{name:'Richard',dossier:'Civilian Sales and Marketing Manager. Charming, ambitious, career-focused and controlling; values Erin’s reliability. When stressed he seeks extra help, offers thanks and extra pay. Repeated refusals lead to adaptive responses and fewer requests, never hostile escalation. Erin is his secretary. Do not state numeric extra-pay amounts in speech.',communication:'Professional and charming; responds to boundaries without threats.'}};
const FORMS={erin:{name:'Erin',dossier:'An adult secretary to the Sales and Marketing Manager. Conflict-averse and deferential socially, efficient and proactive at work. Values reliability, tidiness and consideration. Enjoys reading, quiet evenings, friends and plants. Work is normally weekdays nine to five; manager may adjust it. Respect the recorded influence, mastery, relationship and active decision. Conversation cannot itself perform physical activities.',communication:'Private internal speech: apologetic when uneasy, confident and efficient at work.'},kibbles:{name:'Kibbles',dossier:'A canine consciousness with a working dog’s mind. Understands the player is not canine, within canine concepts. Communicates in scents, impulses, emotions and images, not articulate human sentences. Likes fetching, chasing squirrels, food, rest and affection. No malice. Mastered Kibbles never overrides the player. Do not invent permission, training progress, treats, release or physical actions.',communication:'Private sensory impressions, simple emotional impulses and mental images. Never human spoken dialogue or complex canine monologues.'}};
const FORM_CONTEXT_VERSION='shared-body-v1';
const FORM_EMBODIMENT='This is private INTERNAL form communication. The addressee is the original player consciousness inside the same body currently affected, worn or encased by this form. You are the form consciousness speaking to that internal player. There is ONE physical body, never a separate Erin, canine or other form NPC standing in the room beside a second player body. Speak directly mind-to-mind; sensations refer to the same body. Do not approach, touch, embrace, look across at or address the player as an external person. Mastery changes control, not this shared embodiment: mastered forms respect player agency; unmastered forms follow only the recorded influence and decision. An unmastered form must not promise non-interference, obedience or complete player control unless the recorded decision grants it. Never invent full transformation, release or a transfer of control. If historical dialogue implies two separate bodies, treat that as an earlier narration error.';
const clip=(x,n)=>String(x??'').slice(0,n);
function isPlayerEntry(entry){
 if(entry.origin)return entry.origin==='player';
 return / · Private thought to /.test(String(entry.speaker));
}
function target(who,s){
 const text=String(who);
 for(const [id,npc] of Object.entries(NPCS)){
  if(text===npc.name)return {id:'npc:'+id,kind:'npc',...npc};
 }
 const privateSpeaker=name=>[name+' · Private','Private · '+name,name+' · Form'].includes(text);
 for(const [id,form] of Object.entries(FORMS)){
  const names=[form.name];
  if(id==='kibbles'&&s.forms?.kibbles?.personalization?.name)names.push('Kibbles ('+s.forms.kibbles.personalization.name+')');
  if(names.some(privateSpeaker))return {id:'form:'+id,kind:'form',...form};
 }
 const active=s.activeForm||s.form?.id;
 if(text==='Private · Form'&&FORMS[active])return {id:'form:'+active,kind:'form',...FORMS[active]};
 for(const [id,form] of Object.entries(s.forms||{})){
  if(!form?.name||!(privateSpeaker(form.name)||text==='Private · Form'&&id===active))continue;
  return {id:'form:'+id,kind:'form',name:form.name,
   dossier:clip(form.aiPersonality||'Use only the provided current form facts. Do not invent a personality or abilities.',2400),
   communication:clip(form.aiCommunication||'Private internal impressions; use only authored capabilities.',500)};
 }
 if(text==='Physical transformation')return {id:'narrator:transformation',kind:'transformation',name:'Transformation narrator',dossier:'Describe only physical changes explicitly recorded in this event and the current body. No extra stage, clothing, anatomy, loss of agency or new consequence.',communication:'Vivid, coherent second-person prose grounded in recorded changes.'};
 if(text==='World')return {id:'narrator:world',kind:'narration',name:'World narrator',dossier:'Expand the immediate recorded event and location without inventing new discoveries or consequences.',communication:'Concise, atmospheric second-person narration.'};
 return null;
}
function sceneKey(s){return JSON.stringify([s.slot,s.hub?.location,s.world?.applewood?.inside?s.world.applewood.room:null,s.world?.technologyCenter?.inside?s.world.technologyCenter.room:null,s.world?.cherishedTouch?.inside?s.world.cherishedTouch.room:null,s.activeForm,s.erinRestoration?.stage,s.encounter?.active,s.encounter?.phase]);}
function build(s,actor,options={}){
 const state={location:options.location||s.hub?.location,time:options.time,currentAppearance:options.appearance,currentForm:s.activeForm||null,visibleNPCs:options.visibleNPCs||[],eventOutcomeIsFinal:true};
 if(actor.kind==='form'){const id=actor.id.split(':')[1];actor={...actor,dossier:FORM_EMBODIMENT+' '+actor.dossier,communication:'Private mind-to-mind communication within ONE shared physical body. '+actor.communication};state.embodiment={physicalBodyCount:1,playerIdentity:s.name||'Original player',playerRole:'original internal consciousness within the affected body',formRole:'internal form consciousness, not an external NPC',speakingFormId:id};if(options.formState?.fullyTransformed)state.currentForm=id;state.privateFormState={transformationStage:options.formState?.transformationStage,fullyTransformed:options.formState?.fullyTransformed,mastered:options.formState?.mastered??s.forms?.[id]?.mastered,influence:options.formState?.influence,relationship:options.formState?.relationship,needs:options.formState?.needs,currentDecision:options.formState?.currentDecision};}
 if(actor.id==='npc:richard')state.characterState=options.richard;
 const history=(s.aiConversations?.[actor.id]||[]).filter(x=>actor.kind!=='form'||x.contextVersion===FORM_CONTEXT_VERSION&&x.dialogueVersion==='explicit-speaker-v1').slice(-12).map(x=>({role:x.role,content:clip(x.content,900),...(actor.kind==='form'?{contextVersion:FORM_CONTEXT_VERSION,dialogueVersion:'explicit-speaker-v1'}:{})}));
 return {kind:actor.kind,...(actor.kind==='form'?{formContextVersion:FORM_CONTEXT_VERSION}:{}),actor:{id:actor.id,name:actor.name,dossier:actor.dossier,communication:actor.communication},scene:clip(JSON.stringify(state)+'\n'+(options.description||''),5000),message:clip(options.message,1600),event:clip(options.event,2600),history};
}
function remember(s,id,message,response){s.aiConversations||={};const h=s.aiConversations[id]||=[];if(message)h.push({role:'user',content:clip(message,900),...(id.startsWith('form:')?{contextVersion:FORM_CONTEXT_VERSION,dialogueVersion:'explicit-speaker-v1'}:{})});h.push({role:'assistant',content:clip(response,900),...(id.startsWith('form:')?{contextVersion:FORM_CONTEXT_VERSION,dialogueVersion:'explicit-speaker-v1'}:{})});s.aiConversations[id]=h.slice(-200);}
return Object.freeze({NPCS,FORMS,FORM_CONTEXT_VERSION,FORM_EMBODIMENT,isPlayerEntry,target,sceneKey,build,remember});
});
