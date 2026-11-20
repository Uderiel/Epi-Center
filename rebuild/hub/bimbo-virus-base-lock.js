/* Permanent replacement of the base body, not a ban on owned forms or future ordinary appearance effects. */
(function(r,f){const a=f(typeof module==='object'&&module.exports?require('./relationships'):r.EpiRelationships);if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiBimboVirusBaseLock=a;})(globalThis,function(R){
function record(s){const rows=s.world?.bimboVirus?.infections;return rows&&Object.hasOwn(rows,R.player(s))?rows[R.player(s)]:null;}
function locked(s){return record(s)?.baseReplaced===true;}
function canRestore(s){return !locked(s)||record(s)?.cured===true;}
function guardRestoration(s){if(!canRestore(s))throw Error('The virus permanently replaced this base form. Nip-Tite will not operate on virus carriers.');}
function reconcile(s){const r=record(s);if(!r?.courseCompleted||r.baseReplaced||!r.namingApplied||!r.attributeTransferApplied)return [];const stages=Array.from({length:13},(_,i)=>i+2);if(stages.some(k=>!r.appearanceApplied?.[k]))return [];r.baseReplaced=true;r.baseLock={permanent:true,restoration:'unavailable',fields:[...new Set(stages.flatMap(k=>r.appearanceApplied[k].fields))]};const e={id:'base-lock',kind:'base-lock',text:'Your transformed appearance is now your permanent base form. Owned forms remain available under their normal rules; returning from them returns to this base body.'};r.events||=[];r.events.push(e);return [e];}
return Object.freeze({record,locked,canRestore,guardRestoration,reconcile});});
