/* v1.0.39: approved stacked encounter dock; no rules or save writes. */
(function(root){
'use strict';
const ACTIONS={Main:['Basic Attack','Strong Attack','Grapple','Defensive Posture','Attempt to Flee','Submit / Surrender'],Minor:['Analyze Opponent','Escape Physical Restraint','Resist Mental','Resist Arousal','Help Player Resist'],Reaction:['Dodge','Counter Attack'],Inventory:['Use Item','Equip Item']};
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(e,o={}){
 if(!e?.active)return '';
 if(!e.discipline)return '<section class="ec-encounter"><b>Choose your tied archetype</b><p>Alignment and offensive attributes are equal. Choose techniques for this encounter; each move keeps its own resource cost.</p>'+e.disciplineOptions.map(d=>'<button type="button" data-ec-discipline="'+d+'">'+escape(d)+' · '+({physical:'Stamina',mental:'Resolve',arousal:'Stamina + Resolve'}[d])+'</button>').join('')+'</section>';
 const target=e.opponents.find(x=>x.id===o.targetId)||e.opponents[0]||{};
 const actions=e.actions||ACTIONS;const phase=e.phase||'player',tab=phase==='opponent'?'Reaction':phase==='player'&&e.mainUsed&&!e.minorUsed?'Minor':(actions[o.tab]?o.tab:'Main');
 const status=phase==='player'?'Your turn · Main '+(e.mainUsed?'spent':'available')+' · Minor '+(e.minorUsed?'spent':'available'):phase==='opponent'?'Kibbles turn · Reaction available':'Turn complete · Review live feed';
 function meter(k,r,m){const n=Math.max(0,Number(r[k])||0),max=Math.max(1,Number(m?.[k])||100);return '<div class="ec-resource"><span>'+k[0].toUpperCase()+k.slice(1)+'</span><span class="ec-encounter-meter"><i style="width:'+Math.min(100,100*n/max)+'%"></i></span><small>'+n+'/'+max+'</small></div>';}
 const enemyPool=['health','stamina','resolve','arousal'].filter(k=>Object.hasOwn(target.resources||{},k)).map(k=>meter(k,target.resources,target.max)).join('');
 const playerPool=['health','stamina','resolve','arousal'].filter(k=>k!=='arousal'||e.supportsArousal).map(k=>meter(k,e.playerResources,e.playerMax)).join('');
 return '<details class="ec-encounter" id="ecEncounter" '+(o.collapsed?'':'open')+'><summary>Encounter · Round '+escape(e.round)+' <span class="ec-phase">'+status+'</span></summary><div class="ec-body"><div class="ec-state">'+
 '<header class="ec-context"><b>'+escape(o.location||'Encounter')+'</b><small>Solo encounter · Round '+escape(e.round)+'</small></header>'+
 '<section class="ec-opponent"><b>'+escape(target.name)+'</b><small>Common · Living form</small>'+enemyPool+(e.opponents.length>1?'<label>Target <select id="ecTarget">'+e.opponents.map(t=>'<option value="'+escape(t.id)+'">'+escape(t.name)+'</option>').join('')+'</select></label>':'')+'</section>'+
 '<details id="ecCondition" class="ec-condition" '+(o.conditionCollapsed?'':'open')+'><summary>Your condition · '+escape(e.alignment||'')+' · Transformation '+escape(e.transformation)+'%</summary><div class="ec-player-pool">'+playerPool+'</div><div class="ec-transform"><span style="width:'+e.transformation+'%"></span></div><small>'+escape(e.conditions.join(' · ')||'No conditions')+'</small></details>'+
 '</div><section class="ec-controls"><div class="ec-encounter-tabs">'+Object.keys(actions).map(k=>'<button type="button" data-ec-tab="'+k+'" aria-selected="'+(tab===k)+'">'+k+'</button>').join('')+'</div>'+
 '<div class="ec-archetype">'+escape(e.alignment)+' · '+escape(e.discipline)+' techniques · '+(e.disciplineOptions?.length>1?'chosen after exact tie':'automatic from attributes')+'</div>'+
 '<div class="ec-action-grid">'+(phase==='review'?[]:actions[tab]).map(a=>'<button type="button" data-ec-action="'+escape(a)+'" '+(e.disabled[a]?'disabled':'')+' title="'+escape(e.disabled[a]||e.effects[a]||'Resolve action')+'">'+escape(a)+' <small>'+escape(e.costs[a])+'</small></button>').join('')+'</div>'+
 (phase==='player'?(e.mainUsed?'<button type="button" id="ecContinue" class="ec-next">End your turn · Skip unused Minor</button>':''):'<button type="button" id="ecContinue" class="ec-next">'+(phase==='opponent'?'Continue without reaction':'Begin your next turn')+'</button>')+'</section></div></details>';
}
root.EpiEncounterUI=Object.freeze({render,ACTIONS});
})(globalThis);
