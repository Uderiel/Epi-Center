/* Foreground elapsed time only. One game minute per ten active real seconds. */
(function(r,f){const api=f();if(typeof module==='object'&&module.exports)module.exports=api;else r.EpiLiveTime=api;})(globalThis,function(){
'use strict';
const MS_PER_GAME_MINUTE=10000,MAX_SAMPLE_GAP=5000;
function enabled(save){return save.settings?.liveTime!==false;}
function create(at=0){return {last:at,remainder:0};}
function reset(clock,at){clock.last=at;}
function sample(clock,at,{enabled=true,visible=true,focused=true,combat=false,play=true,composing=false}={}){const delta=at-clock.last;clock.last=at;if(!enabled||!visible||!focused||combat||!play||composing||!Number.isFinite(delta)||delta<=0||delta>MAX_SAMPLE_GAP)return 0;clock.remainder+=delta;const minutes=Math.floor(clock.remainder/MS_PER_GAME_MINUTE);clock.remainder%=MS_PER_GAME_MINUTE;return minutes;}
return Object.freeze({MS_PER_GAME_MINUTE,MAX_SAMPLE_GAP,enabled,create,reset,sample});
});
