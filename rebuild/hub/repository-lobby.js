/* Public waiting-area fixtures; custody, clocks and movement stay in their shared controllers. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiRepositoryLobby=factory(null,root);})(globalThis,function(req,root){
'use strict';
const get=(p,k)=>req?req(p):root[k],ADAPTER='repository-lobby',LOC='Form Repository';
const A=()=>get('./shared-activities','EpiSharedActivities'),R=()=>get('./relationships','EpiRelationships'),now=s=>get('./world-clock','EpiWorldClock').ensure(s).minutes;
const seats=Object.freeze({sofa:'Futuristic lobby sofa',armchair:'Futuristic lobby armchair'});
const articles=Object.freeze({
 custody:Object.freeze({id:'custody',title:'Digital custody and rightful ownership',text:'A form can be stored by a facility without changing its rightful owner. Depositing a form and withdrawing it are distinct actions. Common, Uncommon and Rare forms use Standard Storage; Epic and Legendary forms use High-Security Storage. Those classifications describe custody, not permission to enter the storage rooms.'}),
 interfaces:Object.freeze({id:'interfaces',title:'Biological and cybernetic interfaces',text:'Biological and cybernetic form designs can combine living structure with mechanical systems. A conversion needs a compatibility assessment; appearance alone does not establish eligibility. Any Repository conversion is work on a removed, submitted form, rather than a form still being worn. This overview is not a booking or a completed conversion.'}),
 security:Object.freeze({id:'security',title:'Secure systems and public spaces',text:'A reception floor can offer clear sightlines and convenient customer service while protecting private storage. Seeing or hearing a staff member does not authorize access to their work area. Reliable custody depends on checking ownership and permissions separately from personal familiarity.'})
});
function here(s){return s.hub?.location===LOC&&s.world?.formRepository?.inside===true&&s.world.formRepository.room==='A';}
function body(s){return JSON.stringify([s.activeForm||null,s.erinRestoration?.stage||0,s.world?.priyaFlats?.active||false]);}
function awake(s){return !get('./sleeping-contact','EpiSleepingContact').sleeping(s,R().player(s));}
function guard(s,{hands=false,walking=false}={}){
 if(!here(s)||s.encounter?.active||!awake(s))throw Error('Use the waiting-area fixtures while awake in the actual lobby and out of combat.');
 const caps=get('../combat/kibbles-form','EpiKibblesForm').capabilities(s);if(hands&&!caps.manipulation)throw Error('This body cannot handle and read the lobby magazines.');if(walking&&!caps.walking)throw Error('This body cannot move onto or away from the seat.');get('./aniya-conduct','EpiAniyaConduct').guardEntry(s);
}
function row(s,create=false){const id=R().player(s),q=s.world?.repositoryLobby;if(!create)return q?.players?.[id]||null;s.world||={};const x=s.world.repositoryLobby||={players:{}};if(!Object.hasOwn(x.players,id))Object.defineProperty(x.players,id,{value:{body:body(s),seat:null,posture:'standing',history:[],articles:{}},enumerable:true,writable:true,configurable:true});return x.players[id];}
function posture(s){const p=row(s);return p&&here(s)&&p.body===body(s)&&get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).posture!=='inanimate'?{posture:p.posture,seat:p.seat?seats[p.seat]:null}:null;}
function current(s){const q=s.world?.sharedActivities?.current;return q?.adapter===ADAPTER&&q.playerId===R().player(s)?q:null;}
function stop(s){if(!current(s))return {minutes:0,text:'You are not waiting or reading in the lobby.'};return A().stop(s,now(s),'You end the lobby activity');}
function release(s,reason='You leave the waiting-area seat'){
 const p=row(s);if(p){p.seat=null;p.posture='standing';p.body=body(s);p.history.push({at:now(s),action:'stand',reason});p.history=p.history.slice(-40);}return p;
}
function sit(s,id){
 guard(s,{walking:true});if(!Object.hasOwn(seats,id))throw Error('Choose the lobby sofa or armchair.');
 const active=s.world?.sharedActivities?.current;if(active&&active.adapter!==ADAPTER)A().stop(s,now(s),'You leave the other activity to take a lobby seat');
 const p=row(s,true);p.body=body(s);p.seat=id;p.posture='seated';p.history.push({at:now(s),action:'sit',seat:id});p.history=p.history.slice(-40);return {minutes:1,text:'You sit on the '+(id==='sofa'?'sofa':'armchair')+'’s soft futuristic cushions. You can stand or leave whenever you wish.'};
}
function stand(s){guard(s,{walking:true});const p=posture(s);if(!p||p.posture!=='seated')return {minutes:0,text:'You are already standing.'};release(s);return {minutes:1,text:'You stand up from the lobby seat.'};}
function begin(s,kind,arg){
 guard(s,{hands:kind==='read'});if(!['read','wait'].includes(kind))throw Error('Choose reading or waiting.');if(s.world?.sharedActivities?.current)throw Error('Finish or stop your current activity first.');
 const at=now(s),offer=A().offer(s,ADAPTER,kind,String(arg),at);return A().respond(s,offer.id,true,at);
}
function wait(s,minutes){if(!Number.isSafeInteger(minutes)||minutes<1||minutes>100000)throw Error('Choose a whole number of waiting minutes from1to100000.');return begin(s,'wait',minutes);}
function read(s,id){if(!Object.hasOwn(articles,id))throw Error('Choose an actual lobby magazine article.');return begin(s,'read',id);}
function continueActivity(s,all=false){guard(s);const q=current(s);if(!q)throw Error('No lobby reading or waiting activity is running.');if(q.status==='paused')throw Error('Resume before continuing.');return {minutes:Math.min(q.duration-q.elapsed,all?q.duration:1),text:q.kind==='read'?'You continue reading the magazine.':'You continue waiting.'};}
function inspect(s,id){
 guard(s);const text=id==='table'?'The illuminated table displays animated concentric digital patterns across its smooth surface. Integrated light accents match the lobby’s bright technological styling.':Object.hasOwn(seats,id)?'The '+(id==='sofa'?'sofa':'armchair')+' has a sleek molded-polymer frame and very soft futuristic cushions.':id==='magazines'?'The lobby technology magazines contain short articles on digital custody, biological/cybernetic interfaces and secure systems. They remain here for customers to read.':null;
 if(!text)throw Error('That lobby fixture is not available.');return {minutes:1,text};
}
function depart(s,reason='You leave Room A'){
 const q=current(s);if(q)A().stop(s,now(s),reason);release(s,reason);
}
function reconcile(s){const p=row(s);if(p&&p.posture==='seated'&&(!here(s)||p.body!==body(s)))release(s,'Your room or body changed');}
function readingHistory(s){return Object.values(row(s)?.articles||{}).map(x=>({...x}));}
A().register(ADAPTER,{
 describe(s,kind,arg){guard(s,{hands:kind==='read'});let duration,title;if(kind==='wait'){duration=Number(arg);if(!Number.isSafeInteger(duration)||duration<1||duration>100000)throw Error('Choose a valid waiting duration.');title='Lobby waiting';}else if(kind==='read'&&Object.hasOwn(articles,arg)){duration=5;title=articles[arg].title;}else throw Error('Choose an actual lobby activity.');return {kind,arg,title,duration,identity:body(s),body:body(s),space:LOC+':A',playerId:R().player(s),participants:['player']};},
 prepare(s,o){row(s,true);return {startText:o.kind==='read'?'You begin reading “'+o.title+'”. This takes five game minutes; you can stop or leave at any time.':'You begin waiting for '+o.duration+' game minutes. You can stop, stand or leave whenever you wish.'};},
 lead(){return 'player';},
 check(s,q){reconcile(s);const hands=get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).manipulation;return !here(s)||s.encounter?.active||!awake(s)||q.playerId!==R().player(s)||q.body!==body(s)||q.kind==='read'&&!hands?{invalid:'Your lobby activity ends because your room, player, body or availability changed'}:{};},
 detail(){return [];},
 complete(s,q,at){
  if(!here(s)||q.playerId!==R().player(s)||q.body!==body(s))throw Error('The lobby activity no longer matches your location or body.');
  if(q.kind==='wait')return 'You finish waiting for '+q.duration+' game minutes. You remain free to explore the public rooms.';
  const article=articles[q.arg],p=row(s,true),text=article.title+'\n'+article.text;
  p.articles[q.arg]||={id:q.arg,title:article.title,text:article.text,readAt:at};
  get('./player-guide','EpiPlayerGuide').learn(s,{id:'repository-magazine:'+q.arg,name:article.title,kind:'location',fact:article.text,source:'Read in a Form Repository lobby technology magazine'});
  return 'You finish the article.\n'+text+'\nIt is recorded in your database. The magazine stays in the lobby.';
 }
});
const W=get('./world-objects','EpiWorldObjects');
for(const id of ['sofa','armchair','table','magazines'])W.register('repository-lobby:'+id,{
 name:()=>seats[id]||(id==='table'?'Illuminated digital-pattern table':'Lobby technology magazines'),visible:(s,scope)=>scope==='location'&&here(s),
 actions:s=>['examine',...(Object.hasOwn(seats,id)&&get('../combat/kibbles-form','EpiKibblesForm').capabilities(s).walking?['sit']:[])],labels:{sit:'Sit'},perform:(s,a)=>a==='sit'?sit(s,id):inspect(s,id)
});
return Object.freeze({ADAPTER,seats,articles,here,posture,current,sit,stand,wait,read,stop,continueActivity,inspect,depart,release,reconcile,readingHistory});
});
