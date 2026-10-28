/* Epi-Center encounter outcome contract — v1.
 * Pure data boundary: describes an encounter result without applying it to a save.
 * No default defeat = game over; no automatic form stage, mastery or faction mutation.
 * Existing combat prototypes remain independent until explicitly adapted.
 */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiEncounterContract=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const OBJECTIVES=new Set(['completed','failed','changed','abandoned','unresolved']);
const TACTICAL=new Set(['victory','defeat','draw','retreat','surrender','unresolved']);
const FREEDOM=new Set(['free','restrained','captured','unknown']);
const copy=x=>JSON.parse(JSON.stringify(x));
function create(input){
 if(!input||typeof input!=='object'||!input.encounterId)throw Error('encounterId required');
 const tactical=input.tactical||{result:'unresolved',winnerIds:[]};
 const objective=input.objective||{result:'unresolved'};
 if(!TACTICAL.has(tactical.result))throw Error('invalid tactical result');
 if(!OBJECTIVES.has(objective.result))throw Error('invalid objective result');
 if(!Array.isArray(tactical.winnerIds))throw Error('winnerIds must be an array');
 if(!Array.isArray(input.participants)||!input.participants.length)throw Error('participants required');
 const ids=new Set();
 const participants=input.participants.map(p=>{
  if(!p||typeof p.id!=='string'||!p.id||ids.has(p.id))throw Error('participant IDs must be unique');
  ids.add(p.id);
  const freedom=p.freedom||'unknown';
  if(!FREEDOM.has(freedom))throw Error('invalid freedom state');
  if(p.consequences!==undefined&&!Array.isArray(p.consequences))throw Error('consequences must be an array');
  if(p.availableActions!==undefined&&!Array.isArray(p.availableActions))throw Error('availableActions must be an array');
  return {id:p.id,freedom,consequences:copy(p.consequences||[]),availableActions:copy(p.availableActions||[])};
 });
 if(tactical.winnerIds.some(id=>!ids.has(id)))throw Error('unknown winner ID');
 return {schema:1,encounterId:String(input.encounterId),tactical:copy(tactical),objective:copy(objective),participants,events:copy(input.events||[]),appliedToPersistentState:false};
}
function validate(record){return create(record);}
return Object.freeze({create,validate,TACTICAL:[...TACTICAL],OBJECTIVES:[...OBJECTIVES],FREEDOM:[...FREEDOM]});
});
