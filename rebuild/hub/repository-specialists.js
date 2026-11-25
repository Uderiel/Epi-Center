/* Repository specialist actors. Facility services remain unavailable until their contracts exist. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiRepositorySpecialists=factory(null,root);})(globalThis,function(req,root){
'use strict';
const get=(path,key)=>req?req(path):root[key],LOCATION='Form Repository';
const keys={'anya-singh':'anya',spectra:'spectra'},now=s=>s.worldClock?.minutes||0;
const profiles=()=>get('./location-details','EpiLocationDetails').locations[LOCATION].staffProfiles;
const Scene=()=>get('./scene-presence','EpiScene'),R=()=>get('./relationships','EpiRelationships');
const cleanId=id=>R().entity(String(id||'')).replace(/^npc:/,'');
function member(id){return Object.hasOwn(keys,cleanId(id));}
function presentation(s){return JSON.stringify([s.activeForm||null,s.erinRestoration?.stage||0,s.appearance?.face||null]);}
const appearance={
 'anya-singh':'An adult young-looking succubus, five feet five inches, with a slender, lightly muscular build, narrow waist and pronounced hips; smooth faintly luminous dark-pink skin, shoulder-length black waves, amber eyes with black sclera, small black horns and pointed ears. A small black beauty mark lies below her left eye and a faint calligraphic capital C on her outer thigh. Black claws, bare feet, a four-and-a-half-foot heart-spade tail, long tongue and sharp fangs. Securely fitted minimal black leather with metal accents, a runic collar and wrist and ankle shackles. No wings. Actual age is private and unspecified. The visible mark does not disclose its meaning.',
 spectra:'An adult female-presenting purple spirit with a semi-transparent, wispy manifestation, long dark-violet hair, swept-back black horns, pointed ears and a five-foot heart-spade tail. Same manifested height as Aniya; exact numerical height is unspecified. Dense combat musculature, developed shoulders, defined arms and abdomen, powerful thighs and calves. A circular burned chest scar remains visible through the scar opening of a single-piece leotard and structured leather corset with metal ribbing and front clasps. Spectral spiked bracers, thigh guards, throat guard and shoulder pauldrons; bare hands and feet. No chronological age is specified.'
};
const identity={
 'anya-singh':'Anya Singh is Lee and Aniya’s adult daughter and the Repository’s cursed-item specialist. Exceptionally capable in security and storage systems; curious about cursed items, impulsive and quicker to anger than her parents. She wants freedom but remains inside the Repository. Her parents care about her judgment and self-control. An interest in a curse never establishes that it is safe or that a removal service has been performed.',
 spectra:'Spectra is an independent adult female-presenting spirit and conversion specialist, a trusted consultant-partner to Lee and Aniya and an aunt-like moral mentor to Anya. Observant, precise, patiently protective and quietly resolute, with occasional dry humor. She takes on too much responsibility and can withhold concerns rather than ask for help. She values continuity, craftsmanship and protecting others. She does not date at any relationship score; she appreciates an offer graciously and is content with friendship.'
};
const voice={
 'anya-singh':'Confident, quick, teasing dated English; less polished than Aniya. Limited unfamiliar idioms. Focused and enthusiastic about curses; short temper without constant hostility. One to three short spoken sentences, at most seventy words; no regional accent, gestures, scene introductions or stock closing question.',
 spectra:'Calm low voice, deliberate concise wording, careful explanations and occasional dry humor. Firm privacy boundaries without hostility. One to three short spoken sentences, at most seventy words; no regional accent, gestures, scene introductions or stock closing question.'
};
function actor(s,id){
 id=cleanId(id);if(!member(id))return null;
 s.world||={};const q=s.world.formRepository||={};q.staff||={};const key=keys[id],p=profiles()[key],E=get('../combat/engine','EpiCombat');
 if(!q.staff[key]){const u=E.combatant({id,name:p.name,rarity:p.rarity,attributes:p.attributes});q.staff[key]={...u,id,name:p.name,location:LOCATION,room:id==='spectra'?'G':'C',present:true,working:false,role:p.role,activity:id==='spectra'?'Working downstairs; conversion service awaits facility integration':'Available to assist with security and storage records',history:[],inventory:{}};}
 const a=q.staff[key];E.reconcileResourceProfile(a,id);get('./repository-physiology','EpiRepositoryPhysiology').bind(a,id);return a;
}
function available(s,id,{contact=false}={}){
 id=cleanId(id);if(!member(id)||s.encounter?.active||!s.world?.formRepository?.inside||s.hub?.location!==LOCATION)return false;
 const a=actor(s,id);return !!(a.present&&!a.absence&&!a.busy&&!a.sleeping&&a.location===LOCATION&&(!a.recoveryUntil||a.recoveryUntil<=now(s))&&(contact?Scene().present(s,id):Scene().canHear(s,id)));
}
function social(s,id){
 const row=R().record(s,'npc:'+cleanId(id));row.memory.specialist||={presentations:{},ordinaryAwards:[],giftAt:null};const m=row.memory.specialist,k=presentation(s);
 if(!Object.hasOwn(m.presentations,k))Object.defineProperty(m.presentations,k,{value:{},enumerable:true,writable:true,configurable:true});
 return {record:row,m,face:m.presentations[k]};
}
function heardName(s,id){const c=social(s,id);return cleanId(id)!=='anya-singh'||(R().peek(s,'npc:'+cleanId(id))??0)>=50?c.face.name||null:null;}
function hear(s,id,text){
 if(!available(s,id)||!get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).speech)return;
 const p=get('./roleplay-input','EpiRoleplayInput').parse(String(text||''));if(!p.expressed||p.privateNarration)return;
 const match=p.expressed.match(/^(?:(?:hello|hi)[,!]?\s*)?(?:my name is|you can call me|call me)\s+([\p{L}\p{M}][\p{L}\p{M} '\-]{0,58})(?:[.!?,]|$)/iu);
 if(match&&!/^not\b/i.test(match[1]))social(s,id).face.name=match[1].trim();
}
function scar(s){const score=R().peek(s,'npc:spectra')??0;return score>=100?'I gave my life so Lee and Aniya could escape. Aniya was carrying Anya. It was my choice; please do not blame them or place me above them.':score>=75?'A sacrifice that had to be made to preserve new life.':score>=50?'It was a gift I was happy to give.':'An unfortuitous gift to a friend.';}
function context(s,id,message=''){
 id=cleanId(id);const score=R().peek(s,'npc:'+id)??0,q=String(message),name=heardName(s,id),facts=[identity[id],appearance[id]];
 facts.push('Use actual co-presence. No numerical age, private history, new items, tools, appointments, completed services, contact, gifts or effects may be invented. Narration never changes game state. Paid curse removal and form conversion are not operational; do not invent a quote or start one. No hidden Countess history or mark meaning is public knowledge.');
 if(id==='spectra'){
  facts.push('She works on removed, submitted, unequipped forms, never on a wearing player. Selective solidity permits careful work. She normally stays downstairs and is not freely available for casual talk. Preferred gifts are kinetic sculptures; interests include motion, balance, craftsmanship and cybernetic integration. Her journal is private. Touch is eligible at ninety relationship with agreement, not automatic; family comforting contact has its own established familiarity.');
  if(/\b(?:scar|wound|injury|past|sacrifice|died|death)\b/i.test(q))facts.push('Only this disclosure is currently authorized: '+scar(s));
  else facts.push('Her past is private. No history disclosure is part of this topic.');
 }else{
  facts.push('She enjoys romance novels and studying cursed items. She helps her parents with real security and storage work. Customer names are used from fifty relationship only when actually heard in this appearance. Ordinary compliments do not authorize advances. Her actual age, powers and restraints have private particulars. Feeding and other special quest/arrangement controllers are not available; dialogue cannot begin or complete them.');
 }
 return {dossier:facts.join(' '),communication:voice[id],publicIdentity:name||(id==='anya-singh'?'the visitor':'the nearby visitor'),relationshipScore:score};
}
function dialogueContract(id){id=cleanId(id);return {protocol:'npc-response-v1',source:'repository-specialist-dialogue-v1',actorId:'npc:'+id,choices:[{id:'conversation',meaning:'Answer the actual latest message in '+profiles()[keys[id]].name+'’s own words.',constraints:['Spoken dialogue only, without scene actions or analysis.','Use only supplied personal facts. A visitor’s story is not your own biography.','No prices, stock, new services, transactions, contact, powers, effects, appointments or private history beyond the selected disclosure.','No action or relationship change is authorized by this reply. Preserve the supplied character voice. A job or interest does not establish any previous personal work, cataloguing, customer case or anecdote.']}]};}
function generated(raw,{id,dossier='',message='',history=[]}={}){
 id=cleanId(id);let parsed;try{parsed=JSON.parse(String(raw));}catch{throw Error('Unreadable specialist reply; authored answer preserved.');}
 if(!parsed||Array.isArray(parsed)||parsed.choice!=='conversation'||typeof parsed.dialogue!=='string'||!parsed.dialogue.trim()||parsed.dialogue.length>8000)throw Error('Invalid specialist dialogue; authored answer preserved.');
 for(const key of ['action','effects','offer','relationshipDelta'])if(parsed[key]!=null&&parsed[key]!==false)throw Error('Dialogue cannot supply a gameplay action.');
 let rawSpeech=parsed.dialogue;
 const singleQuotes=/(?<![\p{L}\p{N}])'((?:[^']|(?<=[\p{L}\p{N}])'(?=[\p{L}\p{N}]))+)'(?![\p{L}\p{N}])/gu;
 if(/^\s*'/.test(rawSpeech)){
  const fragments=[...rawSpeech.matchAll(singleQuotes)],outside=rawSpeech.replace(singleQuotes,' ');
  if(/\b(?:thinks?|thought|silently|private thought)\b/i.test(outside))throw Error('Private thoughts are not audible dialogue.');
  if(fragments.length&&(!outside.trim()||/\b(?:Anya(?: Singh)?|Spectra)\s+(?:leans?|smiles?|reaches?|turns?|moves?|steps?|nods?|touches?|extends?|floats?)\b/i.test(outside)))rawSpeech=fragments.map(x=>x[1]).join(' ');
 }
 const D=get('./repository-dialogue','EpiRepositoryDialogue'),speech=D.openSpeech(rawSpeech),checked=D.validate(speech,{speechOnly:true,evidence:[message,...history.filter(x=>x.role==='user').map(x=>x.content)]});
 if(/\b(?:I|we)(?:['’]ve| have| had)?\s+(?:once\s+)?(?:catalogu?ed|processed|removed|converted|handled|encountered|worked on|met|visited)\b|\b(?:items?|forms?|customers?|curses?)\s+(?:that\s+)?(?:I|we)(?:['’]ve| have| had)?\s+(?:catalogu?ed|processed|removed|converted|handled|encountered|worked on|met)\b/i.test(speech))checked.errors.push('An interest or job does not establish an unrecorded past work case.');
 if(/\b(?:Spectra|Anya(?: Singh)?)\s+(?:smiles?|leans?|reaches?|turns?|moves?|steps?|nods?|touches?|extends?|floats?)\b/i.test(speech))checked.errors.push('Specialist narration is not speech.');
 if(/\b(?:I(?:['’]ll| will)|let me)\s+(?:convert|remove|sell|fetch|give|equip|drain|summon|escort)\b|\b(?:costs?|price|charge|pay)\s+(?:is\s+)?\d|\b(?:your|the) (?:form|conversion|order)\s+is\s+(?:ready|finished|complete)\b/i.test(speech))checked.errors.push('An unavailable service or new action cannot be supplied by dialogue.');
 if(/\b(?:Countess|army|potential property|take your place|take her place)\b/i.test(speech))checked.errors.push('Unselected hidden lore.');
 if(id==='spectra'&&!dossier.includes('I gave my life')&&/\b(?:Lee|Aniya|Anya)\b.{0,60}\b(?:pregnan|carrying|escape|sacrific|died|saved)|\b(?:sacrificed|died|saved|gave my life)\b.{0,60}\b(?:Lee|Aniya|Anya)\b/i.test(speech))checked.errors.push('This scar disclosure is not authorized.');
 if(id==='spectra'&&!dossier.includes('preserve new life')&&!dossier.includes('I gave my life')&&/\b(?:new life|pregnant|pregnancy|unborn)\b/i.test(speech))checked.errors.push('This scar disclosure is not authorized.');
 if(id==='spectra'&&/\b(?:I(?:['’]d| would| will| can)|let us|let['’]s)\s+(?:date|go on a date)|\bI\s+(?:love you|want to be your (?:partner|girlfriend|lover))\b/i.test(speech))checked.errors.push('Spectra does not date.');
 if(checked.errors.length)throw Error(checked.errors.join(' '));return checked.text;
}
function reply(s,id,raw=''){
 id=cleanId(id);if(!available(s,id))throw Error('That specialist is not available in your physical room.');
 const p=get('./roleplay-input','EpiRoleplayInput').parse(String(raw));if(!p.expressed||p.privateNarration)return {minutes:0,text:'Your unspoken thoughts remain private.',private:true};
 if(!get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).speech)throw Error('This body cannot speak aloud.');
 const q=p.expressed,seen=get('./repository-social-boundaries','EpiRepositorySocialBoundaries').context(s,'npc:'+id,q);hear(s,id,q);let text;
 if(seen)text=seen.reply;
 else if(id==='spectra'&&/\b(?:scar|wound|injury|past|sacrifice|died|death)\b/i.test(q))text=scar(s);
 else if(/\b(?:date|dating|romance|romantic relationship)\b/i.test(q)&&id==='spectra')text='I am pleased you thought to ask. As a spirit, I am content with good friends; I do not date.';
 else if(/\b(?:how old|your age|birth|years old)\b/i.test(q))text=id==='spectra'?'I prefer to keep my age private.':'That is one detail I shall keep to myself.';
 else if(/\b(?:convert|conversion|cybernetic|remove|removal|curse)\b/i.test(q))text=id==='spectra'?'I work on a form after it has been removed and submitted. Conversion bookings are not available yet.':'Cursed items are fascinating. The removal service is not available yet, so I cannot quote or perform it.';
 else if(/\b(?:interests?|hobbies|gifts?|enjoy|sculpture|novels?)\b/i.test(q))text=id==='spectra'?'Motion, balance and careful craftsmanship interest me. A well-made kinetic sculpture is a thoughtful gift.':'Romance novels and cursed items hold my attention, for rather different reasons.';
 else text=id==='spectra'?'I am listening. What would you like to ask?':(heardName(s,id)?heardName(s,id)+'. ':'')+'What have you brought to my attention?';
 if(id==='spectra'&&/\b(?:scar|wound|injury|past|sacrifice|died|death|date|dating|your age|how old)\b/i.test(q))social(s,id).face.privacyDeclined=true;
 actor(s,id).history.push({at:now(s),playerId:R().player(s),heard:q,reply:text,presentation:presentation(s)});actor(s,id).history=actor(s,id).history.slice(-60);actor(s,id).engagedUntil=now(s)+2;
 return {minutes:2,text};
}
// Called by the shared award controller, not by generated text. Rolling windows survive reloads.
function awardDelta(s,kind,delta){
 const {m}=social(s,'spectra'),at=now(s);m.ordinaryAwards=m.ordinaryAwards.filter(x=>at-x.at<1440);
 if(delta<=0)return delta;
 if(kind==='preferred-gift')return m.giftAt!==null&&at-m.giftAt<10080?0:5;
 if(!['specific-compliment','thoughtful-interest','favor'].includes(kind))return 0;
 return Math.max(0,Math.min(delta,2-m.ordinaryAwards.reduce((sum,x)=>sum+x.delta,0)));
}
function recordAward(s,kind,result){if(!result.applied||result.delta<=0)return;const {m}=social(s,'spectra');if(kind==='preferred-gift')m.giftAt=now(s);else m.ordinaryAwards.push({at:now(s),delta:result.delta});}
function giftReady(s){const {m}=social(s,'spectra');return m.giftAt===null||now(s)-m.giftAt>=10080;}
function processSpeech(s,id,raw,{event}={}){
 if(cleanId(id)!=='spectra')return null;
 const B=get('./repository-social-boundaries','EpiRepositorySocialBoundaries'),actual=B.heardEvent(s,'npc:spectra',raw,event);if(!actual)return null;
 const {face}=social(s,'spectra');face.receipts||={};const receipt='speech:'+actual.id;
 if(Object.hasOwn(face.receipts,receipt)){const saved=face.receipts[receipt];return saved?{...saved,applied:false,delta:0,duplicate:true}:null;}
 const parsed=get('./roleplay-input','EpiRoleplayInput').parse(String(raw));const text=parsed.privateNarration||!parsed.expressed||B.classify(raw)?.neutralRepair?'':parsed.expressed;
 let topic=null,delta=0,replyText=null;
 if(text&&!/\b(?:suppose|imagine|hypothetical|never|not|sorry|apolog)\b/i.test(text)){
  if(/\b(?:hero|heroine|saint|martyr|better than (?:lee|aniya)|above (?:lee|aniya))\b/i.test(text)){
   topic='hero-worship';delta=face.heroCorrected?-3:0;face.heroCorrected=true;replyText='Please do not make a monument of me. I made my choice; that does not place me above anyone.';
  }else if(/\b(?:lee|aniya)\b.{0,65}\b(?:fault|blame|coward|selfish|sacrificed you|let you die)|\b(?:fault|blame)\b.{0,40}\b(?:lee|aniya)\b/i.test(text)){
   topic='blaming-survivors';delta=-3;replyText='My choice is no reason to condemn them. Please leave that judgment there.';
  }else if(/\b(?:scar|wound|past|history|your age|how old|dating|date me)\b/i.test(text)&&/\b(?:insist|anyway|must|have to|demand|answer me)\b/i.test(text)&&face.privacyDeclined){
   topic='privacy-pressure';delta=-3;replyText='I have answered as much as I wish to. Respect that boundary.';
  }
 }
 let result=null;
 if(topic){const outcome=R().event(s,'npc:spectra','boundary-pressure','spectra:'+presentation(s)+':'+receipt,{delta});result={...outcome,kind:'spectra-boundary',topic,text:replyText,warning:true,eventId:receipt};}
 face.receipts[receipt]=result;for(const old of Object.keys(face.receipts).slice(0,-100))delete face.receipts[old];actual.relationshipOutcomes||={};if(result)actual.relationshipOutcomes['npc:spectra']=result;return result;
}
function parents(s){const sp=Scene().space(s,'anya-singh');return ['lee-singh','aniya-singh'].filter(id=>{const a=Scene().actor(s,id);return a?.present&&!a.absence&&!a.busy&&Scene().sameRoom(Scene().space(s,id),sp);});}
function guardEntry(s){const p=s.world?.formRepository?.specialistConduct?.players?.[R().player(s)];if(p?.bannedUntil>now(s))throw Error('Repository entry is temporarily barred for another '+(p.bannedUntil-now(s))+' game minutes. Your stored forms remain safe.');}
function observeAnya(s,event,result){
 if(!result?.warning||!available(s,'anya-singh')||event!==s.world?.localSpeech?.at(-1)||event.playerId!==R().player(s)||!event.listeners?.includes('npc:anya-singh')||event.directedTo&&event.directedTo!=='npc:anya-singh')return null;
 const q=s.world.formRepository.specialistConduct||={players:{},receipts:{},history:[]},who=R().player(s),receipt=who+':'+event.id;
 if(Object.hasOwn(q.receipts,receipt))return q.receipts[receipt];
 if(!Object.hasOwn(q.players,who))Object.defineProperty(q.players,who,{value:{strikes:0},enumerable:true,writable:true,configurable:true});
 const p=q.players[who];if(now(s)>=p.calmAt)p.strikes=0;const witnessed=parents(s);p.strikes=Math.min(3,p.strikes+1);p.calmAt=now(s)+2+(witnessed.length?2:5);
 const row={eventId:receipt,strikes:p.strikes,at:now(s),witnessedBy:witnessed,removed:false};actor(s,'anya-singh').emotionalState={strikes:p.strikes,visiblyHeated:p.strikes>=2,calmAt:p.calmAt};
 result.text=p.strikes===1?(witnessed.length?'Mind your tongue, especially when you speak about my family. This is a warning.':'You come into my family’s shop and speak like that? Insolent mortal. Mind your tongue.'):(witnessed.length?'You have been warned. Choose your next words carefully; this is your final chance.':'Mortal garbage. I warned you. One more remark, and you are finished here.');
 if(witnessed.length&&p.strikes<3)result.text+=' '+(witnessed.includes('aniya-singh')?'Aniya':'Lee')+' intervenes, urging Anya to calm herself and offering to take over the exchange.';
 if(p.strikes===3){const facility=s.world.formRepository,room=facility.room,Sleep=get('./sleeping-contact','EpiSleepingContact');
  if(['A','B','C'].includes(room)&&!s.encounter?.active&&!Sleep.sleeping(s,who)){
   const F=get('./arousal-feeding','EpiArousalFeeding');if(F.current(s))F.stop(s,'Staff end feeding to address the disturbance.');
   Sleep.recordSleep(s,{resolved:true,actorId:who,sleeping:true});facility.room='A';facility.inside=false;delete facility.leeProximity;Sleep.recordSleep(s,{resolved:true,actorId:who,sleeping:false});
   row.minutes=room==='A'?1:2;row.removed=true;row.wokenOutside=true;p.bannedUntil=now(s)+row.minutes+720;
   result.text='Anya releases a focused sleep flare. Staff escort you through the public lobby and wake you outside. You are barred for twelve game hours; your stored forms remain safe.';
  }else result.text='Anya ends the exchange and calls for assistance. No completed removal is recorded.';
 }
 q.history.push(row);q.history=q.history.slice(-80);q.receipts[receipt]=row;for(const old of Object.keys(q.receipts).slice(0,-100))delete q.receipts[old];result.conduct=row;return row;
}
function tick(s,at=now(s)){
 const q=s.world?.formRepository;if(!q?.staff)return [];const a=actor(s,'anya-singh'),sp=actor(s,'spectra');
 if(s.encounter?.active)return [];
 const incidents=Object.values(q.specialistConduct?.players||{});for(const p of incidents)if(p.strikes&&at>=p.calmAt){p.strikes=0;p.cooledAt=p.calmAt;}if(incidents.length)a.emotionalState={strikes:Math.max(0,...incidents.map(p=>p.strikes||0)),visiblyHeated:incidents.some(p=>p.strikes>=2)};
 if(sp.recoveryUntil&&at>=sp.recoveryUntil){delete sp.recoveryUntil;sp.dissipated=false;}
 const pending=sp.busy||sp.conversionActive===true||sp.recoveryUntil>at||sp.absence||!sp.present||sp.location!==LOCATION;
 const waiting=s.hub?.location===LOCATION&&q.inside&&['A','B','C'].includes(q.room);
 const occupied=n=>n&&n.location===LOCATION&&n.present&&!n.absence&&(n.busy||n.engagedUntil>at);
 if(!pending&&waiting&&[q.staff.lee,q.staff.aniya,a].every(occupied)){
  sp.room='C';sp.backup=true;sp.activity='Helping a waiting customer while all three family members are occupied';
 }else if(sp.backup&&!sp.busy&&!(sp.engagedUntil>at)){
  sp.room='G';sp.backup=false;sp.activity='Working downstairs; conversion service awaits facility integration';
 }
 return [];
}
function initiative(s){
 if(!available(s,'anya-singh')||actor(s,'anya-singh').engagedUntil>now(s)||s.world?.formRepository?.specialistConduct?.players?.[R().player(s)]?.strikes)return null;
 const q=s.world.formRepository,entry=q.security?.accessLogs?.filter(e=>e.action==='entry'&&e.actorId===R().player(s)).at(-1);
 // Reuse the ambient system's ten-minute quiet interval; at most one opening per actual visit/appearance.
 if(!entry||now(s)-entry.at<10)return null;const {face}=social(s,'anya-singh');if(face.initiatedVisit===entry.id)return null;face.initiatedVisit=entry.id;
 const name=heardName(s,'anya-singh'),text=(name?name+', have':'Have')+' you brought me something interesting, or are you here about the records?';
 return {speaker:'Anya Singh',actorId:'npc:anya-singh',text,at:now(s),origin:'dialogue',initiative:true,initiativeTopic:'customer-interest',initiativeGoal:text,preserveAuthored:true};
}
function contact(s,kind){
 if(!['handclasp','hug'].includes(kind)||!available(s,'spectra',{contact:true}))throw Error('Ask Spectra for contact only when she is present and available within reach.');
 if(!get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).manipulation)throw Error('This body cannot perform that contact.');
 if((R().peek(s,'npc:spectra')??0)<90)return {minutes:0,text:'I appreciate the thought, but I am not comfortable with physical contact.',accepted:false};
 const a=actor(s,'spectra');a.history.push({at:now(s),playerId:R().player(s),contact:kind,agreed:true});return {minutes:1,text:'Spectra agrees to a brief '+(kind==='hug'?'hug':'handclasp')+' and selectively becomes solid for the contact.',accepted:true,tone:'standard'};
}
for(const [id,key]of Object.entries(keys))Scene().registerActor(id,{name:profiles()[key].name,actor:s=>actor(s,id),space:s=>{const a=actor(s,id);return a.present&&!a.absence&&!a.dissipated&&a.location===LOCATION?LOCATION+':'+a.room:null;},relationshipPolicy:{datingEnabled:false,positive:id==='spectra'?['Specific appreciation +1; thoughtful relevant conversation or completed useful help +2; combined rolling daily limit +2','Preferred kinetic-sculpture gift +5 once per seven game days']:['Preferred gift +5','Thoughtful conversation about curses or interests +2'],negative:id==='spectra'?['Pressing after a privacy boundary or persisting in hero worship: -3','Blaming Lee or Aniya for her sacrifice: -3','Belittling her work or deliberately breaking an accepted commitment: -2']:['Repeated private questioning after refusal, family disrespect or unwelcome advances: -3 and warning'],weights:id==='spectra'?{'specific-compliment':1,'thoughtful-interest':2,'personal-sharing':0,'considerate-kindness':0,'shared-media':0}:undefined,interactionProfile:{interests:id==='spectra'?{craft:['craftsmanship','balance','kinetic','sculpture','cybernetics']}: {curses:['curse','curses','cursed item'],romance:['romance','novel','novels']},gifts:id==='spectra'?['kinetic sculpture']:['romance novel','BDSM toy','chastity device']}},ai:{dossier:identity[id],communication:voice[id]}});
return Object.freeze({member,actor,available,context,reply,tick,initiative,contact,scar,hear,heardName,awardDelta,recordAward,giftReady,processSpeech,dialogueContract,generated,observeAnya,guardEntry,appearance});
});
