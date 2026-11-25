/* Owner-authored staff physiology, identified by stable NPC IDs, never by a player's name. */
(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f(require);else r.EpiRepositoryPhysiology=f(null,r);})(globalThis,function(req,r){
'use strict';
const keys=Object.freeze({'lee-singh':'lee','aniya-singh':'aniya','anya-singh':'anya',spectra:'spectra'});
function policy(id){const key=String(id||'').replace(/^npc:/,'');if(!Object.hasOwn(keys,key))return null;const D=req?req('./location-details'):r.EpiLocationDetails;return D?.locations?.['Form Repository']?.staffProfiles?.[keys[key]]?.physiology||null;}
function bind(actor,id){if(!actor)return actor;const p=policy(id);if(!p)return actor;actor.physiology={...p};actor.needs||={};actor.needs.ordinaryNeedsExempt=true;return actor;}
function temperature(s,id){const p=policy(id)?.skinTemperature;if(!p)return null;const key=String(id).replace(/^npc:/,''),t=s.world?.repositoryPhysiology?.temperatures?.[key],C=req?req('./world-clock'):r.EpiWorldClock,now=C.ensure(s).minutes;return {unit:p.unit,value:t&&now>=t.at&&now<t.until?p.afterIceCream:p.baseline,baseline:p.baseline,raisedUntil:t&&now>=t.at&&now<t.until?t.until:null};}
function afterConsumption(s,id,item){const p=policy(id)?.skinTemperature,key=String(id).replace(/^npc:/,'');if(!p||item?.status!=='consumed'||item.holder!==id||!Number.isFinite(item.consumedAt)||!(item.foodId==='praline-ice-cream'||item.tags?.includes('ice-cream')))return false;s.world||={};const x=s.world.repositoryPhysiology||={temperatures:{}};x.temperatures||={};if(x.temperatures[key]?.eventId===item.id)return false;x.temperatures[key]={eventId:item.id,at:item.consumedAt,until:item.consumedAt+p.durationMinutes};return true;}
return Object.freeze({policy,bind,temperature,afterConsumption});
});
