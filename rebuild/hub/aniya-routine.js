/* Independent, read-only custody review; never fabricates stock, form stability or missing incidents. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiAniyaRoutine=factory(null,root);})(globalThis,function(req,root){
'use strict';const get=(path,key)=>req?req(path):root[key];
function tick(s,at=s.worldClock?.minutes||0){const q=s.world?.formRepository,a=q?.staff?.aniya;if(!a)return [];const m=q.aniyaRoutine||={lastAt:at,history:[]};if(at<=m.lastAt)return [];m.lastAt=at;a.supportRoleOnly=false;
 if(!a.present||a.absence||a.location!=='Form Repository'||a.busy||a.engagedUntil>at||get('./aniya-conduct','EpiAniyaConduct').status(s).strikes||s.world?.aniyaConduct?.returning||Object.values(s.world?.arousalFeeding||{}).some(p=>p.active?.npcId==='npc:aniya-singh'))return [];
 if(a.working){m.status='actual-counter-coverage';return [];}
 const rows=Object.entries(s.forms||{}).filter(([,f])=>f?.storage==='repository').map(([id,f])=>({id,ownerId:f.ownerId||null,rarity:f.rarity||null,section:f.repositorySection||null}));
 const signature=JSON.stringify(rows);if(m.lastReview?.signature===signature){m.status='available-for-organization';a.activity='Available for storage organization and customer questions';return [];}
 m.lastReview={at,signature,formIds:rows.map(f=>f.id),missingOwnerIds:rows.filter(f=>!f.ownerId).map(f=>f.id),limits:'Read-only review of actual saved records; no ownership, resource, condition or storage change.'};m.history.push({...m.lastReview});m.history=m.history.slice(-60);m.status='storage-review';a.activity='Reviewing actual storage-location and ownership records';return [{kind:'aniya-storage-review',at,reviewedForms:rows.length}];
}
return Object.freeze({tick});
});
