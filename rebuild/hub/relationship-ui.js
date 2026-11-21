/* Visible, encountered entity rows use the same saved pair record as gameplay and Dev. */
function syncRelationshipEncounters(){
 const L=EpiRelationships;L.forms(save);
 const present=EpiScene.listeners(save).filter(x=>x.id.startsWith('npc:')),named=new Set(present.map(x=>x.name));for(const actor of present)L.meet(save,actor.id,actor.name);
 for(const name of knownNPCs())if(!named.has(name))L.meet(save,'npc:'+name,name);
 for(const [id,f] of Object.entries(save.forms||{}))if(f)L.meet(save,'form:'+id,f.personalization?.name||f.publicName||f.name||id);
 if(save.world?.priyaFlats?.active||save.world?.priyaFlats?.conquered)L.meet(save,'form:priya-flats','Priya’s flats');
 const e=save.erinRestoration;if(e&&(e.stage>0||e.mastered||e.heels?.identified))L.meet(save,'form:erin','Erin Lillard');
 const encounter=save.encounter;if(encounter?.engine?.units){encounter.relationshipEntities||={};const q=L.state(save);for(const u of encounter.engine.units.filter(x=>x.id!=='player')){let id=encounter.relationshipEntities[u.id];if(!id){const explicit=u.relationshipEntityId||u.entityId;id=explicit?L.entity(explicit):u.id==='kibbles'?'form:kibbles':EpiScene.defs[u.id]?'npc:'+u.id:'entity:encounter-'+(q.instanceSequence=(q.instanceSequence||0)+1)+':'+u.id;encounter.relationshipEntities[u.id]=id;}if(u.relationshipPolicy)L.register(id,u.relationshipPolicy);L.meet(save,id,u.name||u.id);}}
}
function relationshipRecordMarkup(r){const score=(r.value>0?'+':'')+r.value;return '<section class="knowledge-relationship"><h3>Relationship</h3><p>'+htmlEscape(score+' / 100 · '+(r.value>0&&!EpiBimboVirusPolicy.relationshipRules(save,r.id).deeperRelationshipAllowed?'Positive social affinity':r.meaning.label))+'</p><div class="meter relationship-meter" role="meter" aria-valuemin="-100" aria-valuemax="100" aria-valuenow="'+r.value+'" aria-label="'+htmlEscape(r.name+' relationship')+'"><span style="margin-left:'+Math.min(50,50+r.value/2)+'%;width:'+Math.abs(r.value)/2+'%;background:var(--'+(r.value<0?'red':'mint')+')"></span></div>'+relationshipHistoryMarkup(r.id)+'</section>';}

function relationshipHistoryMarkup(id){const r=EpiRelationships.record(save,id),rows=r.history.filter(e=>e.delta!==0).slice(-5).map(e=>({...e,kind:e.id.split(':')[0]}));return rows.length?'<details><summary>Recent relationship changes</summary>'+rows.map(e=>'<p>'+htmlEscape((e.delta>0?'+':'')+e.delta+' · '+e.kind.replace(/-/g,' '))+'</p>').join('')+'</details>':'';}
