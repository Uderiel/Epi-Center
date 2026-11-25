/* Public lobby/display/reception; secured storage requires actual specialist escort, never affinity. */
(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f(require,null);else r.EpiRepositoryAccess=f(null,r);})(globalThis,function(req,r){
const get=(p,k)=>req?req(p):r[k],PUBLIC=Object.freeze(['A','B','C']),SECURED=Object.freeze(['D','E','F','G']),SPECIALISTS=Object.freeze(['npc:anya-singh','npc:spectra']);
function body(s){return JSON.stringify([s.activeForm||null,s.erinRestoration?.stage||0]);}
function source(s,row){if(!row||!SPECIALISTS.includes(row.specialistId))return null;const receipt=s.world?.formRepository?.serviceReceipts?.[row.serviceId],R=get('./relationships','EpiRelationships');if(!receipt||receipt.status!=='accepted'||receipt.playerId!==R.player(s)||receipt.specialistId!==row.specialistId)return null;return receipt;}
function nearby(s,id){const S=get('./scene-presence','EpiScene');return s.hub?.location==='Form Repository'&&S.present(s,id.slice(4));}
function escorted(s,room){const row=s.world?.formRepository?.escort,receipt=source(s,row);return !!(row?.active&&row.playerId===get('./relationships','EpiRelationships').player(s)&&row.body===body(s)&&receipt?.escortRooms?.includes(room)&&nearby(s,row.specialistId));}
function canEnter(s,room){if(PUBLIC.includes(room))return true;if(!SECURED.includes(room))return false;return escorted(s,room);}
function guardEntry(s,room){if(!canEnter(s,room))throw Error('Storage and specialist areas are locked and secured. Entry requires an actual specialist escort; relationship does not grant access.');}
function authorizeEscort(s,specialistId,serviceId){const row={specialistId,serviceId},receipt=source(s,row);if(!receipt||!nearby(s,specialistId))throw Error('An actual present specialist and accepted service are required for an escort.');const R=get('./relationships','EpiRelationships'),T=get('./world-clock','EpiWorldClock');s.world.formRepository.escort={...row,playerId:R.player(s),active:true,body:body(s),at:T.ensure(s).minutes};return s.world.formRepository.escort;}
function endEscort(s){if(s.world?.formRepository?.escort)s.world.formRepository.escort.active=false;}
return Object.freeze({PUBLIC,SECURED,SPECIALISTS,canEnter,guardEntry,authorizeEscort,endEscort,escorted});});
