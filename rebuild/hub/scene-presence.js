/* One physical hearing/recipient boundary, shared by dialogue and scene invalidation. */
(function(r,f){const a=f(typeof module==='object'&&module.exports?require('./roleplay-input'):r.EpiRoleplayInput);if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiScene=a;})(globalThis,function(I){
const homes=new Map(),extraActors=new Map(),roomGroups=new Map();function registerHome(id,adapter){homes.set(id,adapter);}function registerActor(id,adapter){const L=typeof module==='object'&&module.exports?require('./relationships'):globalThis.EpiRelationships;if(adapter.relationshipPolicy)L.register('npc:'+id,adapter.relationshipPolicy);if(adapter.ai&&(!adapter.ai.dossier||typeof adapter.ai.dossier!=='string'||!adapter.ai.communication||typeof adapter.ai.communication!=='string'))throw Error('Registered AI actors require authored dossier and communication fields.');extraActors.set(id,adapter);defs[id]={name:adapter.name,unit:adapter.unit};}
const defs={richard:{name:'Richard Carter',unit:'7A'},daniel:{name:'Daniel Mercer',unit:'4C'},nadia:{name:'Nadia Voss',unit:'6E'},priya:{name:'Priya Shah',unit:'2F'}};
function registeredLocation(s){for(const [id,h] of homes){if(!h.inside(s)||!h.rooms)continue;const space=h.space(s),room=typeof h.room==='function'?h.room(s):space?.split(':').at(-1),d=h.rooms[room];if(d)return {location:s.hub?.location,room,roomName:d.name,description:d.description||'',heading:(h.title||s.hub?.location||id)+' · '+d.name,space,registered:true};}return null;}
function aiProfile(id){const a=extraActors.get(String(id).replace(/^npc:/,''));return a?.ai?{...a.ai,name:a.name}:null;}
function registrationIssues(){const L=typeof module==='object'&&module.exports?require('./relationships'):globalThis.EpiRelationships;return [...extraActors].filter(([id])=>!L.policy('npc:'+id).authored).map(([id])=>'Missing authored relationship triggers: '+id).concat([...extraActors].filter(([id,a])=>!a.ai&&id!=='dart').map(([id])=>'Missing AI profile: '+id));}
function actor(s,id){if(extraActors.has(id))return extraActors.get(id).actor(s);return id==='richard'?s.world?.richard:id==='daniel'?s.world?.department?.daniel:id==='nadia'?s.world?.marketing?.nadia:s.world?.priya;}
function player(s){for(const h of homes.values())if(h.inside(s))return h.space(s);const q=s.world?.priyaFlats;if(q?.active){if(q.place==='closet')return 'applewood:2F:closet';if(q.place==='worn'||q.place==='carried')return space(s,'priya',true);}if(s.world?.priyaHome?.inside)return 'applewood:2F:'+s.world.priyaHome.room;if(s.world?.applewood?.inside)return 'applewood:3C:'+s.world.applewood.room;if(s.world?.technologyCenter?.inside)return 'Technology Center:3:'+s.world.technologyCenter.room;if(s.world?.cherishedTouch?.inside)return 'Cherished Touch:'+s.world.cherishedTouch.room;const b=s.world?.applewoodBuilding;if(s.hub?.location==='applewood'&&b?.inside)return 'applewood:floor:'+b.floor;return (s.hub?.location||'Central Hub Spire')+':outside';}
function space(s,id,carried=false){if(extraActors.has(id))return extraActors.get(id).space(s);const a=actor(s,id);if(!a)return null;if(!carried&&(a.commute||/^(Walking|Taking the elevator|Commuting|Jogging)\b/.test(a.activity||'')))return null;if(a.location==='Technology Center')return a.room?'Technology Center:3:'+a.room:null;if(a.spaceOverride)return a.spaceOverride;if(a.room&&roomGroups.get(a.location)?.has(a.room))return a.location+':'+a.room;if(a.location==='applewood'){if(id==='nadia'&&a.homeRoom==='hall'&&!s.world?.nadiaHome?.inside){const H=typeof module==='object'&&module.exports?require('./nadia-household'):globalThis.EpiNadiaHousehold;if(H?.doorPresent(s))return 'applewood:floor:6';}if(id==='priya'&&a.host&&a.host.until>(s.worldClock?.minutes||0)&&!s.world?.priyaHome?.inside)return 'applewood:floor:2';return 'applewood:'+defs[id].unit+':'+(a.homeRoom||'living');}return a.location+':outside';}
function registerRoomGroup(location,name,zones){if(!location||!name||!Array.isArray(zones)||!zones.length)throw Error('Register an authored physical room and its movement zones.');let rows=roomGroups.get(location);if(!rows)roomGroups.set(location,rows=new Map());for(const zone of zones){if(rows.has(zone)&&rows.get(zone)!==name)throw Error('A movement zone cannot belong to two physical rooms.');rows.set(zone,name);}}
function perceptionSpace(raw){if(!raw)return null;for(const [location,zones]of roomGroups){if(raw.startsWith(location+':')){const zone=raw.slice(location.length+1);if(zones.has(zone))return location+':physical-room:'+zones.get(zone);}}return raw;}
function sameRoom(first,second){return !!first&&!!second&&perceptionSpace(first)===perceptionSpace(second);}
function canHear(s,id){if(!!defs[id]&&sameRoom(space(s,id),player(s)))return true;for(const h of homes.values())if(h.inside(s)&&h.canHear?.(s,id))return true;return false;}
function canSee(s,id){if(!canHear(s,id))return false;const a=actor(s,id);if(a?.visible===false)return false;if(id==='lee-singh'&&s.world?.formRepository?.leeBelongings?.care?.status==='active'&&s.world.formRepository.leeBelongings.care.kind==='change')return false;return true;}
function present(s,id){return !!defs[id]&&space(s,id)===player(s);}

function listeners(s){return Object.entries(defs).filter(([id])=>canHear(s,id)&&!actor(s,id)?.sleeping).map(([id,d])=>({id:'npc:'+id,name:d.name})).concat((s.world?.localPlayers||[]).filter(p=>p.present&&sameRoom(p.space,player(s))).map(p=>({id:p.id,name:p.name})));}
function speak(s,text,directedTo=null){
 if(s.world?.priyaFlats?.active)throw Error('An inanimate body cannot speak aloud.');
 const node=typeof module==='object'&&module.exports,P=node?require('./bimbo-virus-penalties'):globalThis.EpiBimboVirusPenalties,V=node?require('./bimbo-virus-presentation'):globalThis.EpiBimboVirusPresentation,R=node?require('./relationships'):globalThis.EpiRelationships;
 const parsed=I.parse(P?.speechImpaired(s)?P.spoken(s,text):V?.translate(s,text).text??text);
 let spoken=parsed.expressed.replace(/^(?:speaking to (?:the )?(?:room|conference room)|to (?:the )?room)\s*[:,]?\s*/i,'').trim();
 if(!spoken)return null;
 const address=spoken.match(/^(?:I (?:say|speak|talk) to|speaking to|to)\s+([^:\n]{1,60}):\s*(.*)$/i);
 if(address){
  const recipient=R.entity(address[1]);
  if(!recipient.startsWith('npc:')||!defs[recipient.slice(4)])throw Error('That named recipient is not an available local character.');
  if(directedTo&&R.entity(directedTo)!==recipient)throw Error('The named recipient conflicts with the selected recipient.');
  directedTo=recipient;spoken=address[2].trim();if(!spoken)return null;
 }
 const heard=listeners(s);
 if(directedTo&&!heard.some(x=>x.id===directedTo))throw Error('That recipient is no longer in your room or tile.');
 s.world||={};s.hub||={};const events=s.world.localSpeech||=[];
 const e={id:(s.hub.speechSequence=(s.hub.speechSequence||0)+1),at:s.worldClock?.minutes||0,space:player(s),playerId:R.player(s),presentationKey:JSON.stringify([s.activeForm||null,s.erinRestoration?.stage||0,s.appearance?.face||null]),speaker:s.name,text:spoken,directedTo,listeners:heard.map(x=>x.id)};
 events.push(e);s.world.localSpeech=events.slice(-40);
 const Shared=node?require('./relationship-interactions'):globalThis.EpiRelationshipInteractions;
 for(const target of (directedTo?[directedTo]:e.listeners.filter(id=>id.startsWith('npc:'))))Shared?.conversation(s,target,spoken,{event:e});
 return e;
}
return Object.freeze({registerLocation:registerHome,registerHome,registerActor,registeredLocation,aiProfile,registrationIssues,defs,actor,player,space,present,canHear,listeners,speak,registerRoomGroup,perceptionSpace,sameRoom,canSee});
});
