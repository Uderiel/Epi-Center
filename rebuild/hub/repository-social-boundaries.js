/* Approved Singh-family privacy and fidelity boundaries. Only actual heard speech can score. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiRepositorySocialBoundaries=factory(null,root);})(globalThis,function(req,root){
'use strict';
const get=(path,key)=>req?req(path):root[key];
const IDS=['npc:lee-singh','npc:aniya-singh','npc:anya-singh'];
const TOPICS=['age','nature','powers','restraints','family','advances','disrespect'];
const now=s=>s.worldClock?.minutes||0;
const face=s=>JSON.stringify([s.activeForm||null,s.erinRestoration?.stage||0,s.appearance?.face||null]);
const normalize=value=>String(value||'').trim().replace(/\s+/g,' ');
function member(id){return IDS.includes(get('./relationships','EpiRelationships').entity(id));}
function memory(s,id,create=false){
 const R=get('./relationships','EpiRelationships'),key=R.entity(id),who=R.player(s);
 const record=create?R.record(s,key):s.world?.relationships?.actors?.[key]?.[who];
 if(!record)return null;
 if(create)record.memory.repositoryBoundaries||={presentations:{}};
 const rows=record.memory?.repositoryBoundaries?.presentations;if(!rows)return null;
 const presentation=face(s);
 if(create&&!Object.hasOwn(rows,presentation))Object.defineProperty(rows,presentation,{value:{topics:{},receipts:{}},enumerable:true,writable:true,configurable:true});
 return Object.hasOwn(rows,presentation)?rows[presentation]:null;
}
function expressed(raw){
 const p=get('./roleplay-input','EpiRoleplayInput').parse(raw);
 if(!p.expressed||p.privateNarration)return null;
 const text=p.expressed.trim();
 // Reported, imagined, denied and quoted language is not a resolved personal demand.
 if(/\b(?:hypothetically|imagine|pretend|what if|if i|if we|suppose|someone said|she said|he said|they said|you said|never said|didn['’]t say|not saying|i (?:am|'m) sorry|i apologiz[es]|i apologise)\b/i.test(text))return null;
 if(/["“”]/.test(text)||/\b(?:do not|don't|don’t|never|not|isn't|isn’t|aren't|aren’t)\b/i.test(text)&&!/\b(?:i (?:will not|won't|won’t) take no|i (?:do not|don't|don’t) care|doesn['’]t deserve)\b/i.test(text))return null;
 return text;
}
function classify(raw){
 const parsed=get('./roleplay-input','EpiRoleplayInput').parse(raw);
 if(parsed.expressed&&!parsed.privateNarration&&/^(?:i (?:respect|accept) your (?:privacy|boundary|boundaries|decision)|i(?: am|['’]m) sorry\b|i apologiz[es]\b|i apologise\b|i (?:will|shall) (?:respect|leave) (?:your|that|it)|let us return to business\b)/i.test(parsed.expressed.trim()))return {neutralRepair:true};
 const text=expressed(raw);if(!text)return null;const q=text.toLowerCase();
 const pressure=/\b(?:i insist|tell me anyway|answer me|you must|you have to|i demand|i (?:will not|won't|won’t) take no|i (?:do not|don't|don’t) care)\b/.test(q);
 const family=/(?:your (?:wife|husband|partner|daughter|family|marriage|relationship)|\b(?:lee|aniya|anya)(?: singh)?\b)/;
 const insult=/\b(?:idiot|stupid|useless|pathetic|worthless|whore|slut|bitch|asshole|bastard|disgrace|joke|sham|fraud)\b/;
 if(family.test(q)&&insult.test(q)||/\b(?:leave|abandon|cheat on|betray) your (?:wife|husband|partner)\b|\b(?:lee|aniya|your (?:wife|husband|partner)) doesn['’]t deserve you\b/.test(q))return {topic:'family',penalty:true};
 if(/^(?:you(?: are|['’]re| sound) (?:an? |such an? )?(?:idiot|stupid|useless|pathetic|worthless|bitch|asshole)|shut (?:the fuck )?up|fuck (?:you|off))\b/.test(q))return {topic:'disrespect',directRude:true,penalty:true};
 // Feeding is a separately consented service, never permission for additional advances.
 const feeding=/\b(?:feed|feeding|arousal)\b/.test(q)&&!/\b(?:sex|sleep with|make out|date me|undress|naked)\b/.test(q);
 if((!feeding||pressure)&&/\b(?:kiss me|let me kiss you|i (?:want to|will) kiss you|make out|sleep with me|have sex|date me|go on a date|undress|take (?:off your|your .{0,20} off)|let me touch|i (?:want to|will) touch your|be my (?:lover|girlfriend|boyfriend))\b/.test(q))return {topic:'advances',penalty:true};
 const question=/\?|^(?:please\s+)?(?:what|why|when|how|who|are|is|do|does|did|can|could|would|tell|explain|describe|show)\b/.test(q)||pressure;
 if(!question)return null;
 // A customer's item, service rules and the published inhibited aura rate are not private anatomy/history.
 if(/\b(?:my|this|a cursed|the cursed|customer['’]?s?) (?:collar|shackles|manacles|item)\b|\b(?:removal service|service prices?|deposit|withdraw|registration|discount|ownership|does (?:your|the) aura stack|how (?:much|many) arousal|arousal (?:rate|gain)|same room|five minutes|5 minutes)\b/.test(q))return null;
 if(/\b(?:how old|your age|your birthday|birth year|when were you born|what year were you born|how many years (?:old|have you)|real age|(?:lee|aniya|anya)(?: singh)?['’]s age)\b/.test(q))return {topic:'age',penalty:false};
 if(/\b(?:your|those|the) (?:collar|shackles|manacles|restraints|runes)\b|\b(?:why|how).{0,30}\b(?:collar|shackles|manacles)\b/.test(q))return {topic:'restraints',penalty:false};
 if(/\b(?:your (?:powers?|abilities)|how (?:powerful|strong) are you|pheromones|sleep flare|unrestrained power)\b/.test(q))return {topic:'powers',penalty:false};
 if(/\b(?:succubus|succubi|incubus|incubi|demonic nature|your nature|your species)\b/.test(q)){
  if(/^(?:what (?:are you|species are you)|are you (?:an? )?(?:succubus|incubus))\s*[?.!]*$/.test(q))return {topic:'nature',public:true};
  return {topic:'nature',penalty:false};
 }
 if(pressure)return {followUp:true};
 return null;
}
function line(id,topic,warning){
 if(id==='npc:anya-singh'){if(!warning)return topic==='age'?'That is a detail I shall keep to myself.':topic==='restraints'?'The collar and shackles inhibit our powers. The private particulars are not open for discussion.':'I do not discuss those private particulars. Ask me about the work instead.';return topic==='advances'?'Compliments are welcome. Further advances are not. Respect that boundary.':'Mind your tongue, especially when speaking about my family. This is a warning.';}
 const lee=id==='npc:lee-singh';
 if(!warning){
  if(topic==='age')return lee?'My age is a private matter. Kindly leave it there.':'A lady is entitled to a little mystery, my dear. My age is private; do leave it there.';
  if(topic==='restraints')return lee?'The runic collar and shackles are visible. Their private particulars are not open for discussion.':'The collar and shackles inhibit much of our power. The private particulars are not a subject I shall pursue, my dear.';
  if(topic==='powers')return lee?'My defensive ability is a security measure. I do not discuss its private particulars.':'Our inhibited aura affects players in the same room. I do not discuss the private particulars of our powers, my dear.';
  return lee?'I am an incubus. My private nature and history are not open for further questioning.':'I am a succubus, my dear. My private nature and history are not open for further questioning.';
 }
 if(topic==='family')return lee?'Treat my family and our relationships respectfully. This is a warning.':'A little wit is welcome, my dear. Disrespect toward my family is not. Consider that a warning.';
 if(topic==='advances')return lee?'A compliment is welcome. Further advances are not. Kindly respect that boundary; this is a warning.':'A compliment is quite pleasant. That does not invite further advances, my dear. Consider yourself warned.';
 if(topic==='disrespect')return 'Really, now. People are conducting business here. Speak politely, my dear. This is a warning.';
 return lee?'I have already declined that subject. Kindly respect the answer. This is a warning.':'My dear, curiosity is charming. Insistence after an answer is considerably less so. That is a warning.';
}
function eventFor(s,id,raw,event){
 const R=get('./relationships','EpiRelationships'),S=get('./scene-presence','EpiScene'),key=R.entity(id),text=normalize(raw);
 const actual=event||(s.world?.localSpeech||[]).at(-1);
 if(!actual||!(s.world?.localSpeech||[]).includes(actual)||actual.playerId!==R.player(s)||actual.presentationKey!==face(s)||actual.at!==now(s)||normalize(actual.text)!==text||actual.space!==S.player(s)||!actual.listeners.includes(key)||actual.directedTo&&actual.directedTo!==key||!S.canHear(s,key.slice(4)))return null;
 if(!get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).speech)return null;
 return actual;
}
function process(s,id,raw,{event}={}){
 const R=get('./relationships','EpiRelationships'),key=R.entity(id);if(!member(key))return null;
 const actual=eventFor(s,key,raw,event);if(!actual)return null;
 const m=memory(s,key,true),receipt='speech:'+actual.id;
 if(Object.hasOwn(m.receipts,receipt)){const saved=m.receipts[receipt];return saved?{...saved,applied:false,delta:0,duplicate:true}:null;}
 let found=classify(raw);if(found?.directRude&&!['npc:aniya-singh','npc:anya-singh'].includes(key))found=null;let result=null;
 if(found?.neutralRepair)result={kind:'repository-boundary',topic:'boundary-respect',text:key==='npc:lee-singh'?'Thank you. We can proceed calmly; our boundaries and the ownership checks still apply.':'Very good, my dear. We can return to business. Our boundaries remain as stated.',warning:false,delta:0,applied:false,eventId:receipt,at:actual.at};
 else if(found){
  const topic=found.followUp?m.lastTopic:found.topic;
  if(topic&&TOPICS.includes(topic)){
   if(found.public)result={kind:'repository-boundary',topic,text:key==='npc:lee-singh'?'I am an incubus, and the Repository manager.':key==='npc:anya-singh'?'I am a succubus, and the Repository’s cursed-item specialist.':'I am a succubus, my dear, and the Repository co-manager.',warning:false,delta:0,applied:false,eventId:receipt};
   else{
    const warning=found.penalty||!!m.topics[topic];
    const initialCriticism=key==='npc:aniya-singh'&&found.directRude&&!m.topics[topic],delta=initialCriticism?(R.policy(key).weights?.criticism??R.weights.criticism):-3;
    const outcome=warning?R.event(s,key,initialCriticism?'criticism':'boundary-pressure','repository:'+face(s)+':'+receipt,{delta}):{applied:false,delta:0};
    result={...outcome,kind:'repository-boundary',topic,text:line(key,topic,warning),warning,eventId:receipt,at:actual.at};
    m.topics[topic]={declinedAt:m.topics[topic]?.declinedAt??actual.at,lastAt:actual.at};m.lastTopic=topic;
   }
  }
 }
 if(result){const actor=get('./scene-presence','EpiScene').actor(s,key.slice(4));if(actor)actor.engagedUntil=actual.at+2;}
 if(key==='npc:aniya-singh'&&result?.warning)get('./aniya-conduct','EpiAniyaConduct')?.observe(s,actual,result);
 if(key==='npc:anya-singh'&&result?.warning)get('./repository-specialists','EpiRepositorySpecialists').observeAnya(s,actual,result);
 m.receipts[receipt]=result;
 // Only the forty actual speech events are replayable; keep a bounded larger receipt window.
 for(const old of Object.keys(m.receipts).slice(0,-100))delete m.receipts[old];
 actual.relationshipOutcomes||={};actual.relationshipOutcomes[key]=result;
 return result;
}
function context(s,id,raw){
 const R=get('./relationships','EpiRelationships'),key=R.entity(id),e=(s.world?.localSpeech||[]).at(-1);
 if(!member(key)||!e||e.playerId!==R.player(s)||e.presentationKey!==face(s)||normalize(e.text)!==normalize(raw)||!e.listeners?.includes(key)||e.directedTo&&e.directedTo!==key||!get('./scene-presence','EpiScene').canHear(s,key.slice(4)))return null;
 const result=e.relationshipOutcomes?.[key];
 return result?.kind==='repository-boundary'?{source:'resolved-heard-speech',eventId:result.eventId,topic:result.topic,warning:result.warning===true,relationshipDelta:result.delta,reply:result.text,limits:'The controller already recorded this exchange. Preserve its boundary and result; do not apply another penalty or invent an escort, sleep effect or consent.'}:null;
}
return Object.freeze({member,classify,process,context,heardEvent:eventFor});
});
