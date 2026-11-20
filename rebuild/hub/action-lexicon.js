/* Shared player-facing grammar and action vocabulary. Examples describe requests,
   never automatic success, permissions or invented physical outcomes. */
(function(r,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiActionLexicon=a;})(globalThis,function(){
'use strict';
const families=[
 ['travel','Movement','go', ['travel to','head to','walk to','move to','go to','return to','make my way to'], 'destination', 'Use actual known paths; restrictions and interruptions apply.'],
 ['enter','Movement','enter',['enter','go inside','step into'],'place','The entrance must be reachable and entry permitted.'],
 ['exit','Movement','exit',['exit','leave','step out of'],'place','Use the actual exit and return path.'],
 ['interact','Observation and objects','interact',['interact with','check the options for','see what I can do with'],'target','Start a conversation or inspect available object actions; no destructive default.'],
 ['examine','Observation and objects','inspect',['examine','inspect','look at','look closely at','study'],'target','Describe only something actually perceptible here.'],
 ['listen','Observation and objects','listen',['listen to','listen for'],'target','Requires an implemented hearing/sound action.'],
 ['sniff','Observation and objects','sniff',['sniff','sniff at','smell'],'target','Uses actual scent/body/contact rules; no invented scent or contact.'],
 ['take','Inventory and equipment','take',['pick up','take','grab','collect'],'item','Only available items that the controller permits taking.'],
 ['inventory','Inventory and equipment','take',['put'],'item','Put {item} into my inventory; existing ownership and equipped state matter.'],
 ['equip','Inventory and equipment','equip',['equip','put on','wear','don'],'item','Use the owned item/form; mastery, binding and anatomy restrictions apply.'],
 ['unequip','Inventory and equipment','remove',['unequip','take off','remove'],'item','Removal can be refused by the existing form/item rules.'],
 ['use','Inventory and equipment','use',['use','activate'],'item','The actual item needs a supported use action.'],
 ['open','Observation and objects','open',['open','browse','look inside'],'target','Use an available object/drawer view; locks and privacy remain.'],
 ['close','Observation and objects','close',['close','shut'],'target','Close an actually open object or curtain.'],
 ['read','Observation and objects','read',['read','read through'],'target','Requires an accessible book, document, note or message.'],
 ['eat','Food and care','eat',['eat','nibble','munch on'],'item','Consumes a real serving and uses its actual time/effects.'],
 ['drink','Food and care','drink',['drink','sip','take a sip of'],'item','Consumes or uses the actual available drink.'],
 ['chew','Food and care','chew',['chew','start chewing'],'item','Starts the owned item’s real timer.'],
 ['clean','Food and care','clean',['clean','wash','wipe down','tidy'],'target','Uses the actual care/cleaning controller and available supplies.'],
 ['apply','Food and care','apply',['apply','put on a layer of'],'item','Consumes an actual application and records its effects.'],
 ['talk','Conversation','talk',['talk to','speak to','start a conversation with','chat with'],'person','Select a present recipient without needing the recipient menu.'],
 ['compliment','Conversation','compliment',['compliment','pay a compliment to'],'person','An outward social act; the NPC reacts under their own rules.'],
 ['praise','Conversation','praise',['praise','congratulate'],'person','Uses existing praise/relationship rules, including deduplication.'],
 ['criticize','Conversation','criticize',['criticize','criticise','critique'],'person','The NPC may disagree; no fabricated player quotation.'],
 ['flirt','Conversation','flirt',['flirt with','show romantic interest in'],'person','Expresses interest, never acceptance or permission for contact.'],
 ['kiss','Contact requests','kiss',['kiss','ask to kiss','ask for a kiss from'],'person','A request, not completed contact. Requires the target’s actual decision.'],
 ['hug','Contact requests','hug',['hug','offer a hug to','ask for a hug from'],'person','Use the existing offered/accepted contact controller.'],
 ['pet','Contact requests','pet',['pet','gently stroke'],'person','Requires a present receptive target and the appropriate body.'],
 ['give','Trade and requests','give',['give','offer'],'item to {person}','Transfers only a real item through its actual gift/trade controller.'],
 ['borrow','Trade and requests','borrow',['borrow','ask to borrow'],'item','The owner can refuse; an actual loan record is required.'],
 ['return','Trade and requests','return',['return','give back'],'item','Returns the actual borrowed item, not a newly created copy.'],
 ['buy','Trade and requests','buy',['buy','purchase'],'item','Selecting goods is separate from paying the actual quote.'],
 ['pay','Trade and requests','pay',['pay','check out','pay at'],'register','Must be at an actual available checkout.'],
 ['start','Ongoing activities','start',['start','resume','continue'],'activity','Starts/resumes the actual activity; no free elapsed time.'],
 ['stop','Ongoing activities','pause',['stop','pause','put away'],'activity','Pauses/ends the actual activity and its effects as authored.'],
 ['wait','Ongoing activities','wait',['wait'],'duration','Only supported durations/controllers advance game time.'],
 ['accept','Decisions','accept',['accept','agree to'],'offer','An actual pending offer must exist.'],
 ['decline','Decisions','decline',['decline','turn down'],'offer','Refuses an actual offer without inventing a penalty.'],
 ['knock','Movement','knock',['knock on','rap on','tap on'],'door','At a real doorstep, resolve the actual knock/visit response.']
].map(([id,category,canonical,verbs,slot,note])=>Object.freeze({id,category,canonical,verbs:Object.freeze(verbs),slot,note,examples:Object.freeze(id==='buy'?['I buy {item}','I purchase {item}','I add {item} to my basket']:id==='wait'?['I wait one hour','I wait an hour']:id==='give'?['I give {item} to {person}','I offer {item} to {person}']:id==='inventory'?['I put {item} into my inventory','I put {item} in my bag','I add {item} to my inventory']:verbs.slice(0,3).map(v=>'I '+v+' {'+slot+'}'))}));
const syntaxExamples=Object.freeze([
 {id:'speech',category:'Conversation',examples:['I speak aloud: "Hello, everyone."','I say to {person}: "Thank you for helping."','I tell {person}: "Could we talk?"'],note:'Only the provided words are spoken; nearby listeners and body capabilities apply.'},
 {id:'help',category:'Help and knowledge',examples:['Eve, how do I {action}?','Hey Eve, what can I do here?','Show common action phrases'],note:'Remote A.S.S. help uses the same live lexicon.'},
 {id:'database',category:'Help and knowledge',examples:['Show my database','Search my codex for {subject}','What have I learned about {subject}?'],note:'Only learned/owned knowledge is shown.'},
 {id:'fields',category:'Decisions',examples:['Set {field} to {value}','Choose {field} as {value}','Save form identity'],note:'Select actual available fields/options, then explicitly submit.'}
]);
function parse(text){let q=String(text||'').trim().replace(/^I\s+(?:(?:am going) to\s+)?/i,'').replace(/[*!]+$/,'').trim();q=q.replace(/^(?:please\s+|could I\s+|can I\s+)/i,'');
 let m=q.match(/^(?:speak aloud|say aloud|say|speak|call out)(?:\s+to\s+([^:"“]+))?\s*[:,-]?\s*["“]([\s\S]+)["”][.!?]*$/i)||q.match(/^tell\s+([^:"“]+)\s*[:,-]?\s*["“]([\s\S]+)["”][.!?]*$/i);if(m)return {id:'speech',target:m[1]?.trim()||null,words:m[2]};
 m=q.match(/^(?:speak aloud|say aloud|call out)\s*[:,-]?\s+(.+)$/i);if(m)return {id:'speech',target:null,words:m[1]};
 m=q.match(/^(?:put|add)\s+(.+?)\s+(?:in|into|to)\s+(?:my |the )?(?:inventory|bag|backpack)[.!?]?$/i);if(m)return {id:'inventory',canonical:'take',target:m[1].trim(),quantity:1};
 m=q.match(/^(?:put|add)\s+(.+?)\s+(?:in|into|to)\s+(?:my |the )?basket[.!?]?$/i);if(m)return {id:'buy',canonical:'buy',target:m[1].trim(),quantity:1};
 const choices=families.filter(f=>f.id!=='inventory').flatMap(f=>f.verbs.map(v=>({f,v}))).sort((a,b)=>b.v.length-a.v.length);
 for(const {f,v}of choices){if(q.toLowerCase()===v.toLowerCase())return {id:f.id,canonical:f.canonical,target:null,quantity:1};if(!q.toLowerCase().startsWith(v.toLowerCase()+' '))continue;let target=q.slice(v.length).trim().replace(/[.!?]+$/,'').replace(/^(?:the|my|a|an)\s+/i,'');let reciprocal=false;if(f.id==='sniff'&&/\s+(?:back|in return)$/i.test(target)){target=target.replace(/\s+(?:back|in return)$/i,'');reciprocal=true;}const quantities={one:1,two:2,three:3,four:4,five:5};let quantity=1;const amount=target.match(/^(\d+|one|two|three|four|five)\s+(.+)$/i);if(amount&&['take','inventory','buy','give'].includes(f.id)){quantity=Number(amount[1])||quantities[amount[1].toLowerCase()];target=amount[2];}return {id:f.id,canonical:f.canonical,target:target||null,quantity,reciprocal};}return null;}
function entry(id){return families.find(f=>f.id===id)||syntaxExamples.find(f=>f.id===id)||null;}
function reference(){const groups={};for(const f of [...families,...syntaxExamples]){groups[f.category]||=[];groups[f.category].push(f.examples.join(' / ')+' — '+f.note);}return Object.entries(groups).map(([name,rows])=>name+'\n'+rows.join('\n')).join('\n\n')+'\nBraces are placeholders, not literal commands. Use names of actual known people, rooms and items. These are request patterns; success depends on the game state. “I want to …” states a desire rather than executing an action. A because-clause is purpose, not another command.';}
function guidance(query){const q=String(query||'').toLowerCase();if(/want|desire|intention|because|purpose/.test(q))return '“I travel to …” is an action. “I want to travel to …” states a desire and starts no travel. A reason such as “because I want to buy candy” stays context; it never automatically buys anything.';if(/travel|path|walk|location|room|move/.test(q))return 'For movement, try “I travel to {known location}”, “I head to {room}”, or “I go to {destination}”. The route uses actual pathing and checks restrictions at each step.';if(/interact|object|item|pick up|inventory|equip/.test(q))return 'For objects, try “I interact with {object}”, “I examine {object}”, “I pick up {item}”, “I put {item} into my inventory”, or “I equip {item or form}”. Available actions, ownership and your current body still matter.';if(/talk|speak|say|compliment|flirt|praise|critic/.test(q))return 'For people, try “I talk to {name}”, “I compliment {name}”, or “I say to {name}: "your actual words"”. Interest is a request, not agreement from the other person.';if(/sniff|smell|dart/.test(q))return 'With an appropriate body and Dart actually nearby, try “I sniff Dart back” or “I sniff Dart in return”. Existing sniff offers, barriers and boundaries still apply.';if(/kiss|hug|contact/.test(q))return '“I ask to kiss {name}” describes a request. It never establishes the other person’s agreement or starts contact by itself. The target’s actual response and any required warning come first.';return 'You can describe movement, observation, item use, conversation or a request in ordinary words. Say “show common action phrases” for the grouped reference. Asterisks can describe an outward action; private thoughts remain private.';}
return Object.freeze({families,syntaxExamples,parse,entry,reference,guidance});
});
