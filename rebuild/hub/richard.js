/* Persistent civilian manager: authored boundaries, graph travel and exactly-once extra work. */
(function(root,factory){const n=typeof module==='object'&&module.exports;const api=factory(n?require('./technology-center'):root.EpiTechnologyCenter,n?require('./hub-world'):root.EpiHubWorld,n?require('./world-clock'):root.EpiWorldClock,n?require('./erin-restoration'):root.EpiErin,n?require('../combat/kibbles-form'):root.EpiKibblesForm);if(n)module.exports=api;else root.EpiRichard=api;})(globalThis,function(T,W,C,Erin,F){
'use strict';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number(v)||0)),copy=x=>JSON.parse(JSON.stringify(x));
// Implementation allocation: Mental-primary civilian. Earlier assistant values were provisional and Arousal-primary.
const definition=Object.freeze({id:'richard',name:'Richard Carter',kind:'npc',classification:'civilian',role:'Sales and Marketing Manager',residence:'Applewood Apartments · Floor 7 · Suite D',appearance:'A younger, charming man with dark brown hair and hazel eyes, a lean athletic build and carefully kept professional clothes.',personality:'Ambitious and controlling, Richard values Erin’s competence and knows how much he relies on her. Stress makes him seek additional help; he regards thanks and extra pay as fair compensation.',attributes:Object.freeze({Endurance:4,Fitness:4,Intuition:5,Reflexes:4,Willpower:7,Reasoning:7,Stability:6,Presence:5,Insight:5,Influence:4}),max:Object.freeze({health:100,stamina:100,resolve:100,arousal:100})});
const BONUS=50,WORK_MINUTES=20;
const REPORT_SECTIONS=Object.freeze([
 Object.freeze({
  minute:5, title:'Sales summary',
  facts:'Weekly sales rose after the promotion. Returns stayed near their usual level.',
  prompt:'Summarize the sales result and what happened to returns in one or two sentences.',
  matches: text => reviewReportAnswer(0,text).accepted
 }),
 Object.freeze({
  minute:10, title:'Explain the discrepancy',
  facts:'The sales tracker counts pending orders. The shipment report counts shipped orders only.',
  prompt:'Explain why the two reports can show different totals.',
  matches: text => reviewReportAnswer(1,text).accepted
 }),
 Object.freeze({
  minute:15, title:'Recommend an action',
  facts:'Richard needs comparable figures for his next briefing. Pending orders can still change before shipment.',
  prompt:'Recommend a practical next step before Richard briefs the team.',
  matches: text => reviewReportAnswer(2,text).accepted
 })
]);
// Local meaning checks: synonym groups and light spelling tolerance; original prose is never rewritten.
function nearWord(a,b){if(a===b)return true;if(a.length<5||b.length<5||Math.abs(a.length-b.length)>1)return false;if(a.length===b.length){const d=[];for(let i=0;i<a.length;i++)if(a[i]!==b[i])d.push(i);return d.length===1||d.length===2&&d[1]===d[0]+1&&a[d[0]]===b[d[1]]&&a[d[1]]===b[d[0]];}const shorter=a.length<b.length?a:b,longer=a.length>b.length?a:b;let i=0,j=0,skips=0;while(i<shorter.length&&j<longer.length){if(shorter[i]===longer[j]){i++;j++;}else{skips++;j++;if(skips>1)return false;}}return true;}
function reviewReportAnswer(index,raw){const text=String(raw).toLowerCase().replace(/[’]/g,"'").replace(/[^a-z0-9'\s]/g,' '),words=text.split(/\s+/).filter(Boolean),has=(...terms)=>terms.some(term=>term.includes(' ')?text.includes(term):words.some(w=>nearWord(w,term))),missing=[];let conflicting=false;
 if(index===0){const sales=has('sales','revenue','orders','business'),up=has('rose','risen','up','grew','growth','higher','increase','increased','improved','improvement','better','climbed','stronger','more','picked up'),returns=has('return','returns','refund','refunds','sent back','sending back'),steady=has('steady','stable','flat','unchanged','usual','constant','consistent','same','normal','level','similar','little change','did not change',"didn't change",'no change','not changed');if(!sales||!up)missing.push('explain that sales improved');if(!returns||!steady)missing.push('explain that returns stayed roughly the same');conflicting=/\b(?:sales|revenue|orders|business)\b.{0,30}\b(?:fell|declined|dropped|decreased|worse)\b/.test(text)||/\b(?:returns?|refunds?)\b.{0,25}\b(?:soared|surged|doubled)\b/.test(text)||/\b(?:sales|revenue)\b.{0,15}\b(?:not|never)\b.{0,12}\b(?:increased|improved|higher)\b/.test(text);}
 else if(index===1){const pending=has('pending','unshipped','open','outstanding','awaiting','unfilled','unfulfilled','not yet shipped',"haven't shipped",'have not shipped',"haven't gone out",'not gone out','waiting','not dispatched','not sent','not delivered'),shipped=has('shipped','shipment','shipments','shipping','dispatch','dispatched','deliveries','delivered','sent','fulfilled','gone out'),difference=has('counts','count','includes','include','excludes','totals','total','tracker','report','reports','only','just','one','other','both');if(!pending)missing.push('mention orders still pending or not yet sent');if(!shipped||!difference)missing.push('distinguish those orders from the shipped-only report');conflicting=/\b(?:both|each)\b.{0,35}\b(?:count|counts|include|includes)\b.{0,18}\bpending\b/.test(text)&&!has('not','unlike','rather');}
 else if(index===2){const action=has('reconcile','reconciling','reconciliation','breakdown','break down','split','distinguish','compare','comparison','comparing','check','checking','verify','confirm','match','separate','separately','align','review','label','update','standardize','consistent','consistency','same basis','same definition','like for like'),subject=has('pending','shipped','shipment','orders','order','reports','report','totals','total','figures','tracker','counts','data','numbers','definitions','unfilled','outstanding');if(!action||!subject)missing.push('suggest checking or aligning the figures, or separating pending orders before the briefing');}
 else missing.push('choose the current report section');
 if(conflicting)missing.push('remove the claim that conflicts with the source facts');return {accepted:missing.length===0,missing,conflicting};}
const REPORT_DRAFT_LIMIT=480;
function firstUnanswered(task){
 return REPORT_SECTIONS.findIndex((_,index)=>!task.report?.answers?.[index]);
}
function canWorkAtDesk(save){
 return !save.encounter?.active && T.inside(save) && T.state(save).room==='F' &&
  employee(save) && F.capabilities(save).manipulation;
}
function reportSection(save){
 const {task,work}=state(save);
 if(task?.status!=='working'||!work||!canWorkAtDesk(save)||work.form!==(save.activeForm||'baseline'))return null;
 const index=firstUnanswered(task),section=REPORT_SECTIONS[index];
 if(!section||task.progress<section.minute)return null;
 return {index,section,draft:task.report?.draft||''};
}
function saveReportDraft(save,text){
 if(!reportSection(save))throw Error('Resume the report at Erin’s desk to edit this section.');
 const task=state(save).task;
 task.report||={answers:[],draft:''};
 task.report.draft=String(text).slice(0,REPORT_DRAFT_LIMIT);
}
function reportAnswerIsBrief(text){
 const words=text.match(/[\p{L}\p{N}]+/gu)||[];
 return text.length<=REPORT_DRAFT_LIMIT && words.length>=3 && words.length<=80;
}
function submitReportSection(save,index,interpreted=false){
 const current=reportSection(save);
 if(!current||current.index!==index)throw Error('That report section is no longer open.');
 const answer=current.draft.trim();
 if(!reportAnswerIsBrief(answer))throw Error('Write a short answer in one or two sentences.');
 const review=reviewReportAnswer(index,answer);if(review.conflicting||!review.accepted&&interpreted!==true)throw Error('Using the source notes, please '+review.missing.join('; ')+'. Your wording is welcome and your draft is saved.');
 const task=state(save).task;
 task.report||={answers:[],draft:''};
 task.report.answers[index]=answer;
 task.report.draft='';
 return current.section.title+' accepted. '+(firstUnanswered(task)===-1?'Finish the remaining work at the desk.':'Continue preparing the report.');
}
function calendar(at){const day=Math.floor(at/1440);return {day,weekday:day%7,minute:at%1440};}
function goal(at,s){const {weekday,minute}=calendar(at);if(weekday>=5||minute<510||minute>=((s.task&&['accepted','working','ready'].includes(s.task.status))?1080:1020))return {location:'applewood',room:null,activity:'At home'};if(minute<540)return {location:T.id,room:'G',activity:'Commute and prepare for the workday'};if(minute>=720&&minute<750)return {location:T.id,room:'J',activity:'Lunch break'};if(minute>=630&&minute<645)return {location:T.id,room:'F',activity:'Check in with Erin'};if(minute>=660&&minute<670)return {location:T.id,room:'L',activity:'Collect printed reports'};if(minute>=900&&minute<915)return {location:T.id,room:'H',activity:'Sales team check-in'};if(minute>=915&&minute<930)return {location:T.id,room:'H_W',activity:'Marketing team check-in'};return {location:T.id,room:'G',activity:minute>=1020?'After-hours administration':'Review sales and marketing reports'};}
function state(save){save.world||={};if(!save.world.richard){const at=C.ensure(save).minutes,s={schema:1,lastMinute:at,location:'applewood',room:null,activity:'At home',stress:30,fatigue:10,relationship:0,resources:{health:100,stamina:100,resolve:100,arousal:0},day:calendar(at).day,refusals:0,completedToday:0,nextOfferAt:at,task:null,history:[],paid:{},work:null,commute:null,view:false};const g=goal(at,s);s.location=g.location;s.room=g.room;s.activity=g.activity;save.world.richard=s;}const s=save.world.richard;s.paid||={};s.history||=[];s.resources||={health:100,stamina:100,resolve:100,arousal:0};return s;}
function present(save){const s=state(save);return T.inside(save)&&s.location===T.id&&s.room===T.state(save).room;}
function relationship(save){return clamp(save.devVitals?.relationships?.['npc:Richard']??state(save).relationship,-100,100);}
function changeRelationship(save,amount){const n=clamp(relationship(save)+amount,-100,100);state(save).relationship=n;if(save.devVitals?.relationships&&Object.hasOwn(save.devVitals.relationships,'npc:Richard'))save.devVitals.relationships['npc:Richard']=n;}
function path(start,target,neighbors){const q=[[start]],seen=new Set([start]);while(q.length){const p=q.shift(),id=p.at(-1);if(id===target)return p;for(const n of neighbors(id))if(!seen.has(n)){seen.add(n);q.push([...p,n]);}}return [];}
function roomPath(a,b){return path(a,b,id=>T.rooms[id]?.exits||[]);}
function worldPath(a,b){return path(a,b,id=>W.edges.flatMap(([x,y])=>x===id?[y]:y===id?[x]:[]));}
function step(s,g){if(s.location===T.id&&s.room){const target=g.location===T.id?g.room:'A';if(s.room!==target){s.room=roomPath(s.room,target)[1]||s.room;s.activity='Walking to '+(T.rooms[target]?.name||target);return;}if(g.location!==T.id){s.room=null;s.activity='Taking the elevator downstairs';return;}}
 if(s.location!==g.location){const next=worldPath(s.location,g.location)[1];if(!next){s.activity='Route unavailable';return;}if(!s.commute||s.commute.to!==next)s.commute={to:next,remaining:8};s.activity='Commuting';if(--s.commute.remaining<=0){s.location=next;s.commute=null;}return;}
 if(g.location===T.id&&!s.room){s.room='A';s.activity='Taking the elevator to the third floor';return;}s.activity=g.activity;}
function guard(save,speech=true){if(save.encounter?.active)throw Error('Finish the encounter before speaking with Richard.');if(!present(save))throw Error('Richard is not in your current room.');if(speech&&!F.capabilities(save).speech)throw Error('Your current voice cannot speak intelligible human words to Richard.');}
function employee(save){return Erin.full(save);}
function offer(save,at=C.ensure(save).minutes){const s=state(save);if(!employee(save))return 'Richard glances at the reports. “I handle extra assignments with my secretary, Erin.”';const cal=calendar(at);if(cal.weekday>=5||cal.minute<540||cal.minute>=1020)return '“Let’s leave additional assignments for office hours.”';if(s.task&&['offered','accepted','working','ready'].includes(s.task.status))return taskText(save);if(s.refusals>=3)return '“You’ve made your boundary clear. I’ll handle today’s extra work another way.”';if(s.completedToday>=2||at<s.nextOfferAt)return '“Nothing else just now. Thank you.”';s.task={id:'richard-summary-'+cal.day+'-'+(s.completedToday+s.refusals+1),type:'summary',status:'offered',progress:0,offeredAt:at};s.nextOfferAt=at+60;return '“Erin, could you prepare a concise summary of today’s reports and the talking points for my next briefing? I know I lean on your reliability. I’ll make sure there’s a little extra in your pay for going above and beyond.”';}
function respondOffer(save,choice){
 if(!['accept','decline'].includes(choice))throw Error('Choose Accept or Decline.');
 if(save.encounter?.active||!employee(save)||!F.capabilities(save).manipulation)throw Error('This report offer requires Erin and usable hands outside an encounter.');
 if(!(T.inside(save)&&T.state(save).room==='F')&&!present(save))throw Error('Respond at Erin’s Reception F computer or directly to Richard.');
 const s=state(save),task=s.task;if(choice==='accept'&&['accepted','working','ready'].includes(task?.status))return {minutes:0,text:taskText(save)+' This assignment is already accepted; use Work for its next step.'};if(choice==='decline'&&task?.status==='declined')return {minutes:0,text:'This assignment is already declined.'};if(task?.status!=='offered')throw Error('No report offer is awaiting a decision.');
 if(choice==='accept'){task.status='accepted';return {minutes:1,text:'Report assignment accepted and saved. Prepare it at Erin’s Reception F computer: three short written sections, twenty minutes total. No deadline is currently recorded.'};}
 s.refusals++;task.status='declined';s.work=null;s.nextOfferAt=C.ensure(save).minutes+(s.refusals>=2?180:60);return {minutes:1,text:'Report assignment declined and saved. Richard will handle the additional report another way.'};
}
function workStep(save){const current=reportSection(save),s=state(save);if(!canWorkAtDesk(save)||s.task?.status!=='working'||!s.work)throw Error('Start or resume the report at Erin’s Reception F desk.');if(current)throw Error('Write the current section before continuing.');const index=firstUnanswered(s.task),target=REPORT_SECTIONS[index]?.minute??WORK_MINUTES;return {minutes:Math.max(0,Math.min(5,target-s.task.progress)),text:'You continue preparing the report using the department source notes.'};}
function taskText(save){const t=state(save).task;if(!t)return 'No additional assignment is active.';return ({offered:'Richard has asked for an additional report summary. You may accept or decline.',accepted:'Additional report summary accepted. Work at Erin’s desk in F when you are ready.',working:'Preparing the additional report summary · '+Math.floor(t.progress)+'/'+WORK_MINUTES+' game minutes.',ready:'The report summary is ready. Deliver it to Richard in person.',completed:'The additional report summary was delivered and paid.',declined:'The additional assignment was declined.'})[t.status]||'No active assignment.';}
function tick(save,from,to){const s=state(save),messages=[];let start=Math.max(from,s.lastMinute);if(to<=start)return messages;for(let at=start+1;at<=to;at++){if(save.encounter?.active&&save.encounter.opponentId==='richard'){s.lastMinute=at;continue;}const c=calendar(at);if(c.day!==s.day){s.day=c.day;s.refusals=0;s.completedToday=0;if(s.task?.status==='offered')s.task=null;}
 const was=present(save),g=goal(at,s);step(s,g);const resting=s.location==='applewood'||s.room==='J';s.stress=clamp(s.stress+(resting?-.08:.025),0,100);s.fatigue=clamp(s.fatigue+(resting?-.06:.015),0,100);if(resting)for(const k of ['health','stamina','resolve'])s.resources[k]=clamp(s.resources[k]+.1,0,100);
 if(s.work){
  const valid=s.task?.status==='working'&&canWorkAtDesk(save)&&s.work.form===(save.activeForm||'baseline');
  if(!valid){
   s.work=null;
   if(s.task?.status==='working')s.task.status='accepted';
   messages.push('Your summary work pauses; its completed progress is saved.');
  }else{
   const index=firstUnanswered(s.task), checkpoint=REPORT_SECTIONS[index]?.minute;
   if(checkpoint===undefined||s.task.progress<checkpoint){
    s.task.progress=Math.min(WORK_MINUTES,s.task.progress+1);
    if(s.task.progress===checkpoint)messages.push(REPORT_SECTIONS[index].title+' is ready to write at Erin’s desk.');
    if(s.task.progress===WORK_MINUTES&&checkpoint===undefined){
     s.task.status='ready';
     s.work=null;
     messages.push('The additional report summary is ready to deliver to Richard.');
    }
   }
  }
 }
 if(was&&!present(save))s.view=false;if(present(save)&&!was)messages.push('Richard enters '+T.rooms[s.room].name+'.');
 if(present(save)&&!save.encounter?.active&&employee(save)&&c.minute>=840&&c.minute<1020&&s.stress>=35&&(!s.task||['declined','completed'].includes(s.task.status))&&s.completedToday<2&&s.refusals<3&&at>=s.nextOfferAt)messages.push(offer(save,at));s.lastMinute=at;
 }return messages.slice(-8);}
function act(save,action,text=''){guard(save,action!=='examine');const s=state(save),at=C.ensure(save).minutes;let result='';if(action==='greet')result=employee(save)?'“Erin. Good to see you. I’m reviewing the department reports. Let me know if there’s something we need to discuss.”':'“Richard, Sales and Marketing Manager. What can I help you with?”';
 else if(action==='examine')return {minutes:1,text:definition.appearance+' '+definition.personality};
 else if(action==='schedule')result='“My usual office hours are nine to five, Monday through Friday. I check in with the teams and take lunch in the sales break room. Extra hours depend on what actually needs doing.”';
 else if(action==='extra')result=offer(save);
 else if(action==='accept'){if(s.task?.status!=='offered')throw Error('There is no additional assignment awaiting acceptance.');if(!employee(save))throw Error('This assignment was offered to Erin.');s.task.status='accepted';result='“Thank you. A concise report summary and the key talking points, please. Use your desk when you’re ready.”';}
 else if(action==='decline'||action==='boundary'){if(action==='decline'&&s.task?.status!=='offered')throw Error('There is no additional assignment awaiting a decision.');s.refusals++;if(s.task&&['offered','accepted','working'].includes(s.task.status)){s.task.status='declined';s.work=null;}s.nextOfferAt=at+(s.refusals>=2?180:60);result=s.refusals===1?'“All right. I know I ask a lot of you. I’ll rearrange it.”':s.refusals===2?'“Understood. I’ve been leaning on you when things pile up. I’ll reduce the extra requests.”':'“You’ve been clear. I won’t keep pressing today; I’ll handle it another way.”';}
 else if(action==='deliver'){if(s.task?.status!=='ready')throw Error('Finish preparing the summary before delivering it.');if(s.paid[s.task.id])throw Error('This task has already been paid.');s.paid[s.task.id]=true;s.task.status='completed';s.task.completedAt=at;s.history.push(copy(s.task));s.history=s.history.slice(-30);s.completedToday++;s.nextOfferAt=at+60;save.gold=(Number(save.gold)||0)+BONUS;changeRelationship(save,2);s.stress=clamp(s.stress-8,0,100);result='“This is exactly what I needed. Thank you, Erin. I’ll make sure your extra effort is reflected in your pay.”';return {minutes:2,text:result,receipt:'Additional report summary completed · +50 gold.'};}
 else if(action==='persuade'){s.stress=clamp(s.stress-3,0,100);result='“You’re right that the priority work comes first. Let’s leave the extra report until there’s room for it.”';if(s.task?.status==='offered'){s.task.status='declined';s.nextOfferAt=at+180;}}
 else result='Richard listens. “If this is about the reports, my schedule, or an extra assignment, tell me which you mean.”';return {minutes:2,text:result};}
function beginWork(save){if(save.encounter?.active)throw Error('Finish the encounter before working.');const s=state(save);if(!T.inside(save)||T.state(save).room!=='F')throw Error('Prepare the summary at Erin’s desk in F.');if(!employee(save)||!F.capabilities(save).manipulation)throw Error('This assignment requires Erin’s current human form and usable hands.');if(s.task?.status==='offered')respondOffer(save,'accept');if(!s.task||!['accepted','working'].includes(s.task.status))throw Error('Accept Richard’s additional assignment before beginning work.');s.task.report||={answers:[],draft:''};s.task.status='working';s.work={form:save.activeForm||'baseline',erin:true};return {minutes:0,text:'You begin preparing the additional report summary at Erin’s desk. It requires '+(WORK_MINUTES-s.task.progress)+' game minutes of work here.'};}
function parse(raw){const q=String(raw).replace(/\*[^*]*\*/g,' ').trim().toLowerCase().replace(/[’]/g,"'").replace(/[.!]+$/,'');if(/\?/.test(q)&&!/^(?:what|when|how|do you|could you)/.test(q))return null;if(/^(?:no(?:[ ,.!]|$)|no thanks|no thank you|(?:i )?(?:decline|refuse)\b)|\b(?:i don['’]?t|i do not|i won['’]?t|i will not)\s+(?:accept|do|prepare|write|take|work on)\b|\bnot taking\b/.test(q))return 'decline';if(/^(?:yes|sure|of course|certainly)(?:\b|[,.!])|\b(?:i accept|i agree|i['’]?ll (?:gladly )?(?:do|prepare|write|have)|i will (?:gladly )?(?:do|prepare|write|have))\b/.test(q))return 'accept';if(/\b(?:stop asking|no more extra|respect my boundary|too much extra)\b/.test(q))return 'boundary';if(/^(?:i )?(?:attack|fight|hit|punch|strike|challenge)(?: you| richard)?$/.test(q))return 'attack';if(/\b(?:deliver|hand (?:you|richard))\b.*\b(?:summary|report|talking points)\b/.test(q))return 'deliver';if(/^(?:i )?(?:accept|agree|yes|sure|i'll do it|i will do it)(?: (?:the |that |your )?(?:extra |additional )?(?:task|assignment|summary|report))?$/.test(q))return 'accept';if(/\b(?:prepare|work(?:ing)? on|begin working on|start working on|write|draft|resume)\b.*\b(?:summary|report|talking points)\b/.test(q))return 'work';if(/\b(?:prioriti[sz]e|postpone|later|workload|overwhelmed)\b/.test(q))return 'persuade';if(/\b(?:extra (?:work|task|assignment)|additional (?:work|task|assignment)|need.*help)\b/.test(q))return 'extra';if(/\b(?:schedule|office hours|when.*work|lunch)\b/.test(q))return 'schedule';if(/^(?:i )?(?:examine|inspect|look at)(?: you| richard)?$/.test(q))return 'examine';if(/^(?:hello|hi|hey|good (?:morning|afternoon|evening))(?: richard)?$/.test(q))return 'greet';return null;}
function worldIntent(raw){const q=String(raw).trim();if(/\b(?:report|summary|assignment)\b/i.test(q)&&['accept','decline'].includes(parse(q)))return parse(q);if(/\b(?:not|never|don't|won't)\b/i.test(q)||/\?/.test(q))return null;if(/^(?:i )?(?:examine|inspect|look at) richard[.!]?$/i.test(q))return 'examine';if(/^(?:i )?(?:attack|fight|hit|punch|strike|challenge) richard[.!]?$/i.test(q))return 'attack';if(/\b(?:prepare|work(?:ing)? on|begin working on|start working on|write|draft|resume)\b.*\b(?:summary|report|talking points)\b/i.test(q))return 'work';if(/^(?:i )?(?:talk|speak) (?:to|with) richard[.!]?$/i.test(q))return 'greet';if(/^(?:i )?(?:deliver|hand richard).*\b(?:summary|report|talking points)\b/i.test(q))return 'deliver';return null;}
function combatant(save){guard(save,false);if(!F.equipped(save)&&!save.encounter?.outcome?.mastery&&Object.values(save.encounter?.anatomy?.coverage||{}).some(n=>n>0))throw Error('Resolve the retained hostile attachment before beginning another encounter.');const s=state(save);if(s.resources.health<=0||s.resources.resolve<=0||s.resources.arousal>=100)throw Error('Richard cannot begin another confrontation in his current condition.');return {...copy(definition),resources:copy(s.resources),team:'opponent'};}
function aggression(save){guard(save,false);changeRelationship(save,-20);const s=state(save);s.stress=clamp(s.stress+20,0,100);s.work=null;if(s.task?.status==='working')s.task.status='accepted';return '“Stop. We can settle this without fighting.”';}
function applyCombat(save,encounter){const s=state(save);s.resources=copy(encounter.engine.units.find(u=>u.id==='richard').resources);if(!encounter.active&&!encounter.applied){encounter.applied=true;s.lastConflict={at:C.ensure(save).minutes,outcome:copy(encounter.outcome)};return 'The confrontation ends. No form, transformation, mastery, money or equipment changes hands.';}return '';}
return Object.freeze({reviewReportAnswer,REPORT_SECTIONS,respondOffer,workStep,REPORT_DRAFT_LIMIT,reportSection,saveReportDraft,reportAnswerIsBrief,submitReportSection,definition,BONUS,WORK_MINUTES,state,present,relationship,calendar,goal,roomPath,worldPath,tick,act,beginWork,parse,worldIntent,taskText,combatant,aggression,applyCombat});
});
