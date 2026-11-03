/* Shared object registry for discovery, interface actions and text commands. */
(function(r,f){const node=typeof module==='object'&&module.exports;const api=f(node?require('./erin-restoration'):r.EpiErin);if(node)module.exports=api;else r.EpiWorldObjects=api;})(globalThis,function(E){
'use strict';
const definitions=new Map();
function register(id,definition){if(definitions.has(id))throw Error('Duplicate object definition');definitions.set(id,definition);}
function list(s,scope='location'){return [...definitions].flatMap(([id,d])=>d.visible(s,scope)?[{id,name:d.name(s),actions:d.actions(s),labels:d.labels||{},description:d.description||''}]:[]);}
function act(s,id,action){if(s.encounter?.active)throw Error('Finish the encounter before interacting with world objects.');const d=definitions.get(id);if(!d||!d.visible(s,'location')&&!d.visible(s,'inventory'))throw Error('That object is not available here.');if(!d.actions(s).includes(action))throw Error('That action is not available for this object.');return d.perform(s,action);}
register(E.ITEM,{
 name:E.itemName,
 visible(s,scope){const e=E.state(s);if(scope==='inventory')return ['inventory','equipped'].includes(e.heels.location);return e.heels.location==='world'?s.hub.location==='Central Hub NW'&&e.heels.discovered:e.heels.location==='closet'?E.inside(s)&&s.world.applewood.room==='closet':false;},
 actions(s){const l=E.state(s).heels.location;return ['examine',...(l==='world'?['take']:l==='equipped'?['unequip']:l==='closet'?['retrieve']:['equip',...(E.inside(s)&&s.world.applewood.room==='closet'?['store']:[])])];},
 perform(s,a){return a==='examine'?E.examineHeels(s):a==='take'?E.take(s):a==='equip'?E.equip(s):a==='unequip'?E.remove(s):E.storeHeels(s);}
});
register('applewood-3c',{
 name:()=> 'Unit 3C · Erin’s apartment door',
 visible:(s,scope)=>scope==='location'&&s.hub.location===E.ENTRANCE&&!E.inside(s),
 actions:()=>['examine','enter'],
 perform(s,a){s.world.examined||={};s.world.examined[E.ENTRANCE]=true;if(a==='examine'){s.world.applewood.doorExamined=true;return 'The apartment directory lists Unit 3C, Erin’s apartment. Its private door is closed. You can attempt entry; an eligible transformed body is required.';}return E.enter(s);}
});
function intent(text){const q=text.trim().replace(/[.!?]+$/,'');const m=q.match(/^(?:i\s+)?(examine|inspect|look at|look closer at|pick up|pickup|take|collect|equip|put on|wear|unequip|remove|take off|store|retrieve|enter|approach|open|use)\s+(?:the\s+|my\s+)?(.+)$/i);if(!m)return null;const aliases={'inspect':'examine','look at':'examine','look closer at':'examine','pick up':'take',pickup:'take',collect:'take','put on':'equip',wear:'equip',remove:'unequip','take off':'unequip',approach:'enter',open:'enter'};const target=m[2];return /\b(?:heels|red shoes)\b/i.test(target)?{id:E.ITEM,action:aliases[m[1].toLowerCase()]||m[1].toLowerCase()}:/\b(?:3c|apartment door|erin.s apartment)\b/i.test(target)?{id:'applewood-3c',action:aliases[m[1].toLowerCase()]||m[1].toLowerCase()}:null;}
return Object.freeze({register,list,act,intent});
});
