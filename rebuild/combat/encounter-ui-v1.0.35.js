/* v1.0.35 encounter field. Presentation only: no implicit save mutation or combat resolution. */
(function(root){
'use strict';
const ACTIONS={Main:['Basic Attack','Strong Attack','Grapple','Defensive Posture','Attempt to Flee','Submit / Surrender'],Minor:['Analyze Opponent','Escape Physical Restraint','Resist Mental','Resist Arousal','Help Player Resist'],Reaction:['Dodge','Counter Attack'],Inventory:['Use Item','Equip Item']};
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(encounter,options={}){
 if(!encounter?.active)return '';
 const units=Array.isArray(encounter.opponents)?encounter.opponents:[];
 const target=units.find(x=>x.id===options.targetId)||units[0]||{};
 const tab=ACTIONS[options.tab]?options.tab:'Main';
 const meter=(key,r,max)=>{const n=Math.max(0,Number(r?.[key])||0),m=Math.max(1,Number(max?.[key])||100);return '<div>'+escape(key)+' '+n+'/'+m+'<div class="ec-encounter-meter"><span style="width:'+Math.min(100,n/m*100)+'%"></span></div></div>';};
 const pool=(r,m)=>['health','stamina','resolve','arousal'].filter(k=>r&&Object.prototype.hasOwnProperty.call(r,k)).map(k=>meter(k,r,m)).join('');
 const targetOptions=units.map(x=>'<option value="'+escape(x.id)+'" '+(x.id===target.id?'selected':'')+'>'+escape(x.name||x.id)+'</option>').join('');
 return '<details class="ec-encounter" id="ecEncounter" '+(options.collapsed?'':'open')+'><summary>Encounter · Round '+escape(encounter.round||1)+' · '+escape(target.name||'Opponent')+'</summary><p class="ec-encounter-note">Initiative: '+escape(encounter.initiative||'Pending')+'</p><label for="ecTarget">Target</label><select id="ecTarget">'+targetOptions+'</select><div class="ec-encounter-grid"><section><b>'+escape(target.name||'Opponent')+'</b>'+pool(target.resources,target.max)+'</section><section><b>Your condition</b>'+pool(encounter.playerResources,encounter.playerMax)+'</section></div><p class="ec-encounter-note">Conditions: '+escape((encounter.conditions||[]).join(', ')||'None')+' · Transformation '+escape(encounter.transformation||0)+'%</p><div class="ec-encounter-tabs">'+Object.keys(ACTIONS).map(k=>'<button type="button" data-ec-tab="'+k+'" aria-selected="'+(tab===k)+'">'+k+'</button>').join('')+'</div><div class="ec-encounter-grid">'+ACTIONS[tab].map(a=>'<button type="button" data-ec-action="'+escape(a)+'" disabled title="Canonical combat dispatcher not yet connected">'+escape(a)+'</button>').join('')+'</div><p class="ec-encounter-note">Actions unlock only after combat rules and persistence are integrated.</p></details>';
}
root.EpiEncounterUI=Object.freeze({render,ACTIONS});
})(typeof globalThis!=='undefined'?globalThis:this);