/* Recorded in-game maintenance only: no invented footage, downloadable patches or loosened permissions. */
(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f(require,null);else r.EpiLeeRoutine=f(null,r);})(globalThis,function(req,r){
const get=(p,k)=>req?req(p):r[k];
function security(s){const q=get('./form-repository','EpiFormRepository').state(s);q.security||={sequence:0,accessLogs:[],footage:[],updates:{},installed:[],checks:[]};return q.security;}
function record(s,event){if(event?.resolved!==true)throw Error('Security observations require an actual resolved controller event.');const q=security(s),row={id:++q.sequence,at:get('./world-clock','EpiWorldClock').ensure(s).minutes,...event};q.accessLogs.push({...row});q.footage.push({...row,kind:'recorded-camera-event'});q.accessLogs=q.accessLogs.slice(-1000);q.footage=q.footage.slice(-1000);return row.id;}
function queueUpdate(s,update,{resolved=false}={}){if(!resolved||typeof update?.id!=='string'||!update.id||typeof update.version!=='string'||!update.version)throw Error('Queue an actual available in-game security update.');const q=security(s);if(q.updates[update.id])return q.updates[update.id];return q.updates[update.id]={id:update.id,version:update.version,status:'available'};}
function tick(s,to=get('./world-clock','EpiWorldClock').ensure(s).minutes){const q=s.world?.formRepository,n=q?.staff?.lee;if(!n)return [];const x=q.routine||={lastMinute:to,rotation:0,history:[],reviewedAccessThrough:0,reviewedFootageThrough:0};if(to<=x.lastMinute)return [];const sec=security(s),Q=get('./form-repository','EpiFormRepository'),B=get('./lee-belongings','EpiLeeBelongings'),out=[];
for(let at=Math.floor(x.lastMinute)+1;at<=Math.floor(to);at++){
 if(['responding','assisting','returning'].includes(q.backup?.status)){x.status='backup';continue;}
 if(!n.present||!n.working||n.location!==Q.id||n.absence){x.status='absent';continue;}
 const customers=Q.inside(s)&&q.room==='C'||(s.world?.localPlayers||[]).some(p=>p.present&&p.space===Q.id+':C'),feeding=Object.values(s.world?.arousalFeeding||{}).some(f=>f.active?.npcId===Q.who&&f.active.at<=at&&at<=f.active.until);
 if(customers||n.busy||feeding||at<=(n.engagedUntil??-1)){x.status='serving';n.activity='Attending to the service desk';continue;}
 const update=Object.values(sec.updates).find(u=>u.status==='available');let task,details={};
 if(update){update.status='installed';update.installedAt=at;sec.installed.push({id:update.id,version:update.version,at});task='Applying available security update';details={updateId:update.id};}
 else {const logs=sec.accessLogs.filter(e=>e.id>x.reviewedAccessThrough&&e.at<=at),footage=sec.footage.filter(e=>e.id>x.reviewedFootageThrough&&e.at<=at);
  if(logs.length){x.reviewedAccessThrough=logs.at(-1).id;task='Reviewing recorded access logs';details={reviewedIds:logs.map(e=>e.id)};}
  else if(footage.length){x.reviewedFootageThrough=footage.at(-1).id;task='Reviewing recorded security footage';details={reviewedIds:footage.map(e=>e.id)};}
  else {const rotation=x.rotation++%6,h=B.state(s);if(rotation<3){task=rotation===0?'Checking security-system operation':rotation===1?'Reviewing access-control configuration':'Checking system maintenance status';sec.checks.push({at,task,issuesResolved:false,permissionsChanged:false});sec.checks=sec.checks.slice(-100);}
   else if(rotation===3&&h.items.puzzleBox?.quantity>0)task='Working on a mechanical puzzle box';
   else if(rotation===4&&h.items.lockPuzzle?.quantity>0)task='Examining a lock puzzle';
   else task=h.items.securityBook?.quantity>0?'Reading his security reference book':'Checking security-system operation';}
 }
 n.previousActivity=n.activity;n.activity=task;x.status='quiet-work';x.history.push({at,task,...details});x.history=x.history.slice(-100);out.push({at,task});
}
x.lastMinute=to;return out;}
return Object.freeze({security,record,queueUpdate,tick});});
