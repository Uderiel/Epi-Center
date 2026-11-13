/* Canine perception and event memory. No human dialogue or numeric bond penalties. */
(function(r,f){const api=f();if(typeof module==='object'&&module.exports)module.exports=api;else r.EpiKibblesBehavior=api;})(globalThis,function(){
'use strict';
const CRATE='NE Alley (4)',KNOWN=['sit','stay','roll over','beg','speak','shake'];
const TEMPERAMENT={physical:['loyal','protective'],mental:['curious','obedient'],arousal:['playful','mischievous']};
// Explicit implementation defaults; not new mastery gates or relationship mathematics.
const DEFAULTS=Object.freeze({defeatInfluence:100,escapeAttribute:'Fitness',escapeRequiresFullEncasement:true});
function ensure(s){s.kibblesBehavior||={version:1,events:{},bond:{},memories:{},promises:{},places:{},routes:{},tricks:{},crate:{ball:true,blanket:true,food:0},history:[]};const b=s.kibblesBehavior;b.preferences||={toilet:'Central Hub NE',territory:['Central Hub NE','Central Hub N','Central Hub E'],patrol:['Central Hub NE','Central Hub N','Central Hub NW','Central Hub W','Central Hub SW','Central Hub S','Central Hub SE','Central Hub E']};b.places||={};b.routes||={};b.events||={};b.routineMemory||={lastToiletAt:null,lastPatrolAt:null};if(b.routineMemory.lastPatrolAt==null)b.routineMemory.lastPatrolAt=s.worldClock?.minutes??0;return b;}
function presence(s){return !!(s.activeForm==='kibbles'&&s.forms?.kibbles?.completedTransformation)||!s.encounter?.outcome?.mastery&&Number(s.encounter?.anatomy?.coverage?.head)>=100;}
function temperament(archetype){const a=String(archetype||'physical').toLowerCase();return TEMPERAMENT[a]||TEMPERAMENT.physical;}
function event(s,{id,type,now,location=s.hub.location,...data}){const b=ensure(s);if(!id||b.events[id])return null;if(type==='praise'&&!data.completedActivity||type==='fulfil-promise'&&!b.promises[data.subject||'play'])return null;b.events[id]=true;b.last={id,type,now,location,...data};if(['storm','noise','threat','dog-pack','capture','collar','leash','kennel','trusted-danger','mistreat'].includes(type))b.rest=null;b.history.push({...b.last,id});b.history=b.history.slice(-60);let text;
 switch(type){
 case 'care':b.bond.careReceived=true;if(b.bond.hurt&&!b.boundaryViolation){b.bond.hurt=false;b.bond.forgiven=true;}text='Warmth, a loosened stance and a familiar scent: being cared for feels safe.';break;
 case 'respect':b.bond.boundariesRespected=true;if(b.bond.hurt&&!b.boundaryViolation){b.bond.hurt=false;b.bond.forgiven=true;}text='The tense ears soften. Space offered freely becomes a reassuring memory.';break;
 case 'praise':if(!data.completedActivity)return null;b.bond.praiseReceived=true;text='A bright lift of ears and tail answers praise for what actually happened.';break;
 case 'mistreat':case 'bad-dog':case 'break-promise':b.bond.hurt=true;b.bond.lastHurt=type;text='Ears flatten; the trusting warmth recedes into a wary, unsettled feeling.';break;
 case 'promise':b.promises[data.subject||'play']={at:now,until:now+60};text='A brief image of '+(data.subject==='food'?'food':'a thrown ball')+' catches the canine attention.';break;
 case 'fulfil-promise':if(!b.promises[data.subject||'play'])return null;delete b.promises[data.subject||'play'];b.bond.promisesKept=true;text='Anticipation becomes an actual shared experience; a dependable memory settles in.';break;
 case 'ball-thrown':b.ballOffered=true;text='A real ball arcs through view; ears lift and muscles spring toward it.';break;
 case 'food':b.memories.food={location,until:now+60};text='An intense food scent, salivation and the remembered place linger briefly.';break;
 case 'crate-touch':text='A stiff stance and warning growl guard the worn blanket and favorite ball. They belong here.';break;
 case 'collar':case 'leash':case 'kennel':
  if(!data.trusted){b.bond.hurt=true;text='The closing space or restraint brings rigid posture and a frightened warning.';b.boundaryViolation=true;break;}
  b.handler={...b.handler,id:data.actorId,trusted:true,[type]:true};text=type==='kennel'?'A frustrated whine; the image is of reaching the familiar handler, then open air.':'A familiar scent and the expectation of a shared walk draw attention toward the trusted handler.';break;
 case 'unrestrain':if(b.handler)b.handler={...b.handler,collar:false,leash:false,kennel:false};text='Open space and the freedom to move let attention settle.';break;
 case 'territorial-intrusion':case 'crate-intrusion':text='An unfamiliar scent cuts across the home trail. A stiff posture turns toward the crate.';break;
 case 'storm':case 'noise':case 'flashing-lights':case 'threat':case 'medical':case 'capture':text='Muscles tighten; ears pin back. A sharp warning bark and an urgent image of distance replace curiosity.';break;
 case 'stranger':case 'authority':text='Nose working, body held cautiously: unfamiliar scent first, distance before contact.';break;
 case 'child':text='A bouncing invitation gives way to a watchful stance beside the small human.';break;
 case 'trusted-danger':text='A familiar human’s distress cuts through every food scent. The body turns to protect.';break;
 case 'dog-pack':text='Hackles rise; a warning bark alerts the handler before any approach.';break;
 case 'brushing':text='A brief pleasant rub gives way to a restless shift away from continued brushing.';break;
 default:text='A flick of ears, a shift of scent, an image of movement: attention changes without words.';
 }
 return text;
}
function recall(s,now){const b=ensure(s);for(const [key,p] of Object.entries(b.promises))if(now>=p.until)delete b.promises[key];if(b.memories.food&&now>=b.memories.food.until)delete b.memories.food;return b;}
function reinforce(s,trick,now,withTreat){const b=ensure(s),name=String(trick).trim().toLowerCase();if(!name||name.length>40)throw Error('Name a trick using 1–40 characters.');if(!withTreat)throw Error('New trick learning needs a real treat reinforcement.');const t=b.tricks[name]||={started:now,last:now,learned:false};if(now-t.started>=1440&&now>t.last)t.learned=true;t.last=now;return {name,learned:t.learned||KNOWN.includes(name),text:t.learned||KNOWN.includes(name)?'The familiar cue brings the practiced movement and a pleased tail wag.':'A cue, a movement and a treat begin a new association. Reinforce it again after about one game day.'};}
function markRoute(s,from,to,now){const b=ensure(s),key=[from,to].sort().join(' ↔ '),route=b.routes[key]||={from,to,started:now,last:now,familiar:false};if(now-route.started>=2880&&now>route.last)route.familiar=true;route.last=now;b.places[to]||={first:now};b.places[to].scentMarked=true;b.places[to].last=now;return route;}
function rememberMark(s,location,at){const b=ensure(s),p=b.places[location]||={first:at};if(p.markedAt==null||at-p.markedAt>=60){p.markCount=(p.markCount||0)+1;p.markedAt=at;}p.scentMarked=true;p.last=at;b.routineMemory.lastToiletAt=at;if(p.markCount>=3)b.preferences.toilet=location;return p;}
function recordTravel(s,from,to,at){const b=ensure(s),key=[from,to].sort().join(' ↔ '),r=b.routes[key]||={from,to,started:at,last:at,familiar:false};r.visits=(r.visits||0)+1;r.last=at;if(r.visits>=3&&at-r.started>=2880)r.familiar=true;b.lastRoute={from,to};b.places[to]||={first:at};b.places[to].last=at;return r;}
function cue(s,name,c={}){const b=ensure(s),n=String(name).trim().toLowerCase();if(!KNOWN.includes(n)&&!b.tricks[n]?.learned)return {performed:false,text:'An ear flick and a puzzled look: that cue has not yet become a learned movement.'};if(!c.mastered&&n==='roll over'&&!(b.bond.careReceived&&b.bond.boundariesRespected)&&!c.familiar)return {performed:false,text:'A guarded posture protects the belly. The vulnerable movement needs familiarity and freely offered cooperation.'};if(!c.mastered&&(c.frightened||c.distracted&&!c.treat))return {performed:false,text:'Attention pulls toward the urgent scent or movement instead of the cue.'};b.lastHelpful={type:n,at:c.now};return {performed:true,text:n==='speak'?'A bark answers the familiar cue; no human words emerge.':'The familiar '+n+' cue becomes a practiced canine movement, followed by an expectant glance.'};}
function perceive(s,c){const b=recall(s,c.now),traits=temperament(c.archetype),recent=b.last&&c.now-b.last.now<30?b.last:null;let emotion='attentive',activity='explore',image='Layered scents trace the open park paths; ears turn toward movement.',target;
 if(c.trustedDanger){activity='protect';emotion='guarded';image='A familiar human’s distress rises above food and play; a protective stance follows.';}
 else if(c.territorialIntrusion){activity='guard-crate';emotion='guarded';target=CRATE;image='An unfamiliar scent lies across the home trail. Nose low, muscles braced: the crate must be checked.';}
 else if(c.threat||recent&&(['capture','medical','threat','dog-pack','storm','noise','flashing-lights'].includes(recent.type)||['collar','kennel'].includes(recent.type)&&!recent.trusted)){activity='seek-safety';emotion='frightened';image='Ears flatten and the world narrows to distance, open air and a safe familiar scent.';}
 else if(b.handler?.kennel){activity='seek-handler';emotion='frustrated';image='A whine presses toward the familiar handler and the closed barrier. Freedom and protection feel frustratingly out of reach.';}
 else if(c.indoors&&(c.bladderUrgent||c.bladderDue&&!c.sleeping)){activity='go-outside';emotion='frustrated';image='Pressure in the bladder; the image of open ground repeats insistently. This living space should stay clean.';}
 else if(c.bladderUrgent){activity='mark';image='Bladder pressure takes priority; nearby open ground and a familiar scent bring relief.';}
 else if(c.bladderDue&&!c.sleeping){activity='mark';target=b.preferences.toilet;image='A familiar patch of open ground draws the nose: time for the usual toilet stop.';}
 else if((!c.sleeping||c.hunger>=85)&&(c.hunger>=70&&!b.crate.food||c.mealDue||c.newlyEncased||c.freshFoodScent)){activity='seek-food';emotion='attentive';target=b.crate.food?CRATE:b.memories.food?.location;image='An empty-belly pull, a searching nose, the image of food; a hand-held offer still warrants caution.';}
 else if(c.bladderUrgent){activity='mark';image='Nose to ground, an old scent and the urge to leave a fresh territorial mark.';}
 else if(c.squirrel&&!c.sleeping&&!c.fatigued&&!b.handler?.leash&&!b.handler?.kennel){activity='chase-squirrel';emotion='excited';image='A darting squirrel! Ears prick; a racing green-and-brown image crowds the senses.';}
 else if(c.ball&&!c.sleeping&&!c.fatigued){activity='fetch';emotion='excited';image='The arc of a ball, taut muscles, the joyful certainty of running and bringing it back.';}
 else if(c.sleeping){activity=b.rest.kind;emotion='content';target=b.rest.location;image='Steady breathing and a settled body: sleep continues in the familiar resting place.';}
 else if(c.fatigued||c.quietHours){activity=c.location===CRATE?'deep-sleep':'nap';emotion='content';target=c.quietHours?CRATE:undefined;image=c.location===CRATE?'The worn blanket’s familiar scent invites deep sleep.':'A cool patch near the park edge; ears stay lightly tuned while the body rests.';}
 else if(recent&&['food','care','praise','respect','fulfil-promise'].includes(recent.type)){activity=recent.type==='food'?'eat':'shared-rest';emotion='content';image='A satisfied warmth, an easy tail and a welcome pause in the busy stream of scents.';}
 else if(recent&&['mistreat','bad-dog','break-promise','crate-touch'].includes(recent.type)){activity='keep-distance';emotion='guarded';image='A wary step back and a remembered boundary; the ears stay low.';}
 else if(c.territoryDue){activity='scent-check';target=c.territoryDue;image='An old scent trail calls for a quiet check of a familiar territory marker.';}
 else if(c.archetype==='arousal'){activity='play';emotion='excited';image='A leaf tumbles invitingly; springing paws and a mischievous sideways glance seek a game.';}
 else if(c.archetype==='mental'){activity='track';image='A new scent separates into layers; a familiar cue draws an attentive ear.';}
 else if(c.archetype==='physical'){activity='patrol';image='The paths carry familiar scents; a steady watch checks that nearby companions are safe.';}
 if(c.unengaged&&!recent&&['explore','patrol','track','play'].includes(activity)){emotion='bored';if(activity==='explore')activity='nap';}
 if(recent&&recent.gender&&recent.gender===s.forms?.kibbles?.personalization?.gender&&!c.threat)image+=' The same-gender human draws a cautious, interested sniff.';
 const pressureWindow=['eat','shared-rest','nap','deep-sleep'].includes(activity)||emotion==='bored';return {traits,emotion,activity,target,image,pressureWindow,handlerFocused:!!(b.handler?.trusted&&(b.handler.collar||b.handler.leash||b.handler.kennel)),knownTricks:[...new Set([...KNOWN,...Object.keys(b.tricks).filter(k=>b.tricks[k].learned)])]};
}
function insight(s,c){const p=perceive(s,c);return p.image+' '+(c.location===CRATE?'Under the crate’s familiar wood scent lie the ball and worn blanket.':ensure(s).places[c.location]?.scentMarked?'A familiar scent mark anchors this place in memory.':'The nose sorts recent foot traffic from the older scents beneath it.');}
// Questions describe the same perception used by routines; words grant no physical effects.
function reply(s,raw,c={}){const n=s.devVitals?.needs||{},at=s.worldClock?.minutes??540;
 c={now:at,location:s.hub?.location,hunger:n.hunger||0,bladderUrgent:n.bladder>=100,fatigued:n.fatigue>=100,quietHours:at%1440>=1320||at%1440<360,...c};
 const p=perceive(s,c),b=ensure(s),q=String(raw).toLowerCase();let text;
 if(/\b(smell|scent|sniff|notice|sense|clues?)\b/.test(q))text=insight(s,c);
 else if(/\b(hungry|hunger|food|eat|snack|treat|feed)\b/.test(q))text=c.hunger>=70||c.mealDue||c.newlyEncased?'An empty-belly pull and a searching nose answer with an image of food.':b.crate.food?'The remembered crate carries the reassuring scent of stored food.':'No urgent empty-belly pull rises; a food image briefly catches an attentive ear.';
 else if(/\b(bladder|outside|toilet|pee)\b/.test(q))text=c.bladderUrgent?'Pressure in the bladder sends a repeated image of open ground and familiar scent marks.':'Open air and familiar scent marks come to mind, without an urgent bladder pressure.';
 else if(/\b(tricks?|learned|commands?|cues?)\b|do you know/.test(q))text='Familiar cues bring images of practiced movements: '+p.knownTricks.join(', ')+'. No movement follows from this question alone.';
 else if(/\b(remember|memory|familiar|home|crate|blanket)\b/.test(q)){const place=b.places[c.location];text=c.location===CRATE?'The worn blanket, favorite ball and familiar wood scent anchor the feeling of home.':place?.scentMarked?'A familiar scent mark anchors this place in memory.':'The remembered crate, worn blanket and favorite ball form a small, familiar picture of home.';}
 else if(/\b(trust|relationship|friends?|like me|upset|angry|sorry)\b/.test(q))text=b.bond.hurt?'Ears stay low; a wary feeling recalls a hurt or boundary. Space and consistent care matter more than words alone.':b.bond.careReceived||b.bond.boundariesRespected||b.bond.promisesKept?'A familiar scent brings warmth, softened ears and the memory of shared care.':'An attentive sniff and cautious curiosity; familiarity is still being built through shared experiences.';
 else if(/\b(play|fetch|ball)\b/.test(q))text=p.emotion==='frightened'||c.fatigued?p.image:'A brief image of a thrown ball and bounding paws answers the suggestion. The game has not started.';
 else if(/\b(sleep|nap|tired|rest)\b/.test(q))text=c.fatigued||c.quietHours?p.image:'The thought of the familiar blanket flickers past; ears remain attentive to the current surroundings.';
 else text=p.image;
 return text+(s.forms?.kibbles?.mastered?' Your intentions remain yours; the canine impression offers information without taking an action.':' The impression is private; any struggle over an action follows the existing influence rules.');
}
return Object.freeze({CRATE,KNOWN,TEMPERAMENT,DEFAULTS,ensure,presence,temperament,event,recall,reinforce,markRoute,rememberMark,recordTravel,cue,perceive,insight,reply});
});
