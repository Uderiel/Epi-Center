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
function relationshipBarsMarkup(){syncRelationshipEncounters();const rows=EpiRelationships.list(save);return '<section class="card" aria-label="Your relationships"><h3>Relationships</h3><p>Each relationship is specific to your character and that individual.</p>'+(rows.length?rows.map(r=>{const kind=r.id.startsWith('form:')?'Form':r.id.startsWith('npc:')?'NPC':'Entity',score=r.value>0?'+'+r.value:String(r.value);return '<div class="relationship-row"><strong>'+htmlEscape(r.name)+' · '+kind+'</strong><p>'+htmlEscape(score+' / 100 · '+r.meaning.label)+'</p><meter style="display:block;width:100%" min="-100" max="100" value="'+r.value+'" aria-label="'+htmlEscape(r.name+' relationship')+'">'+htmlEscape(score)+'</meter></div>';}).join(''):'<p>No encounters recorded yet.</p>')+'</section>';}
