/* Canonical outdoor travel pace. Indoor movement keeps its existing rules. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('../combat/kibbles-form'):r.EpiKibblesForm);if(n)module.exports=a;else r.EpiTravelModes=a;})(globalThis,function(F){
'use strict';
const modes=Object.freeze({walk:Object.freeze({id:'walk',minutes:8,stamina:0}),jog:Object.freeze({id:'jog',minutes:4,stamina:2})});
function get(id='walk'){if(!modes[id])throw Error('Unknown travel pace.');return modes[id];}
function current(s){return get(s.settings?.travelMode||'walk');}
function pool(s){const f=s.forms?.[s.activeForm];if(f?.completedTransformation&&f.resources)return f.resources;if(!s.combatResources)s.combatResources={health:100,stamina:100,resolve:100,arousal:0,...s.devVitals?.resources};return s.combatResources;}
function validate(s,id=current(s).id){const p=get(id);if(s.encounter?.active||!F.capabilities(s).walking)throw Error('Your current body cannot travel this route.');if(p.stamina&&Number(pool(s).stamina)<p.stamina)throw Error('Jogging requires 2 Stamina for each outdoor tile. Switch to walking or recover.');return p;}
function charge(s,id=current(s).id){const p=validate(s,id);pool(s).stamina-=p.stamina;return p;}
function select(s,id){get(id);s.settings||={};s.settings.travelMode=id;if(s.hub?.journey){s.hub.journey.active=false;s.hub.journey.paused=true;s.hub.journey.reason='Travel pace changed; choose or resume the route.';}return current(s);}
return Object.freeze({modes,get,current,pool,validate,charge,select});
});
