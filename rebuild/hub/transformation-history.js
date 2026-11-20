/* Durable recorded milestones, independent of the rolling live-feed limit. */
(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f(require);else r.EpiTransformationHistory=f(null,r);})(globalThis,function(req,r){
const get=(p,k)=>req?req(p):r[k];
function entries(s){const A=get('./bimbo-virus-appearance','EpiBimboVirusAppearance'),record=A.record(s);if(!record)return [];return (record.events||[]).filter(e=>e.kind==='stage-milestone').map(e=>{const applied=record.events.find(a=>a.kind==='appearance-change'&&a.stage===e.stage);return {stage:e.stage,gameMinute:e.gameMinute,text:e.stage===1?A.describe(1):applied?.values?A.describe(e.stage,applied.values):e.event||'Stage reached; appearance application is pending.'};}).filter((e,i,all)=>all.findIndex(x=>x.stage===e.stage)===i).sort((a,b)=>a.stage-b.stage);}
function text(s,stage){return entries(s).find(e=>e.stage===stage)?.text||'Stage reached; appearance application is pending.';}
return Object.freeze({entries,text});});
