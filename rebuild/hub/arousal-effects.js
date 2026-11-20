/* Positive arousal changes share the active-carrier modifier; resets/floors remain separate. */
(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f(require);else r.EpiArousalEffects=f(null,r);})(globalThis,function(req,r){
const get=(p,k)=>req?req(p):r[k];
function multiplier(s,actorId='player'){const R=get('./relationships','EpiRelationships');return actorId==='player'||actorId===R.player(s)?(get('./bimbo-virus-identity','EpiBimboVirusIdentity').carrier(s)?2:1):(get('./bimbo-virus-policy','EpiBimboVirusPolicy').npcCarrier(s,actorId)?2:1);}
function gain(s,pool,amount,{actorId='player',maximum=100}={}){if(!pool||!Number.isFinite(pool.arousal)||!Number.isFinite(amount)||amount<0)throw Error('Use an actual arousal pool and nonnegative gain.');const before=pool.arousal,factor=multiplier(s,actorId);pool.arousal=Math.min(maximum,before+amount*factor);return {before,after:pool.arousal,delta:pool.arousal-before,multiplier:factor};}
function syncCombat(s){const u=s.encounter?.active?s.encounter.engine?.units?.find(u=>u.id==='player'):null;if(u)u.arousalGainMultiplier=multiplier(s);}
return Object.freeze({multiplier,gain,syncCombat});});
