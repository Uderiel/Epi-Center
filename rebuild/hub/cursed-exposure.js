/* Cursed-object pressure accrues from actual worn game minutes, independently of anatomy. */
(function(r,f){const api=f();if(typeof module==='object'&&module.exports)module.exports=api;else r.EpiCursedExposure=api;})(globalThis,function(){
'use strict';
function advance(owner,minutes,{worn,mastered=owner.mastered,interval=60,gain=5}={}){if(!Number.isFinite(minutes)||minutes<0||!Number.isFinite(interval)||interval<=0||!Number.isFinite(gain)||gain<0)throw Error('Invalid cursed exposure interval.');if(!worn||mastered||minutes===0)return null;const x=owner.cursedExposure||={version:1,wornMinutes:0,remainder:0,pulses:0};x.wornMinutes+=minutes;x.remainder+=minutes;const count=Math.floor(x.remainder/interval);x.remainder%=interval;if(!count)return null;x.pulses+=count;if(owner.internal?.commonConsolidation&&(owner.rarity||'Common')==='Common')return null;const before=Math.max(0,Math.min(100,Number(owner.internal?.influence??owner.influence)||0)),after=Math.min(100,before+count*gain);owner.influence=after;if(owner.internal)owner.internal.influence=after;return after>before?{before,after,count,gain:after-before}:null;}
return Object.freeze({advance});
});
