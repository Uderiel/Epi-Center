/* Universal read-only readiness for form resistance drawers. No RNG or game action. */
(function(r,f){const api=f();if(typeof module==='object'&&module.exports)module.exports=api;else r.EpiResistanceAvailability=api;})(globalThis,function(){
'use strict';
function assess({at,internal,resolve,active=true,full=true,mastered=false,bound=false,combat=false,decisionReady=false,escapeReady=false,reason=''}={}){
 const finiteTime=Number.isSafeInteger(at)&&at>=0,scheduled=Number.isFinite(internal?.nextAt),remaining=finiteTime&&scheduled?Math.max(0,internal.nextAt-at):null;
 const blocked=!active?'No unmastered form is present.':combat?'Finish the encounter before internal resistance.':bound?'This form is permanently bound; resistance is unavailable.':mastered?'This form is mastered; you retain control.':!full?(reason||'Complete the form’s existing resistance prerequisites first.'):!Number.isFinite(resolve)||resolve<=0?'No legal resistance roll is available at zero Resolve.':'';
 const eligible=!blocked,turnReady=eligible&&finiteTime&&scheduled&&remaining===0;
 const actions={resist:turnReady&&resolve>=3,desperate:turnReady,recover:turnReady,decision:eligible&&finiteTime&&decisionReady===true,escape:eligible&&finiteTime&&escapeReady===true};
 const ready=actions.resist||actions.desperate||actions.decision||actions.escape;
 return {ready,remaining,actions,reason:blocked||(ready?'Resistance roll available.':remaining===null?'Resistance timing has not been initialized.':'Next internal action in '+remaining+' game minutes.')};
}
return Object.freeze({assess});
});
