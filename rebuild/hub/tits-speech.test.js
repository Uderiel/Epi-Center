const assert=require('node:assert/strict'),T=require('./tits'),P=require('./bimbo-virus-presentation');
assert.equal(T.speech('Which one? How do you want to do this?'),'Like, uhm… Which one? Um… How do you want to do this?');
assert.equal(T.speech('Stop. I do not want that.'),'Stop. I do not want that.');
assert.equal(T.speech('It is infectious. Know the risk.'),'It is infectious. Know the risk.');
assert.equal(T.speech(T.speech('Perhaps buy it.')),'Like, uhm… Perhaps buy it.');
const raw='I travel to Burke’s Sweets',s={};assert.deepEqual(P.translate(s,raw),{text:raw});assert.deepEqual(s,{});
assert(T.communication.includes('club speech interference overlay'));
assert(!T.dossier.includes('never every phrase'));
console.log('7 Tits speech checks passed');
