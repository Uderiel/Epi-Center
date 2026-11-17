const assert=require('node:assert/strict');
const Q=require('./priya-flats'),P=require('./priya');
let count=0;function test(name,f){f();count++;console.log('PASS '+name);}
function fresh(){const s={attributes:{Willpower:4},forms:{},hub:{location:'applewood'},worldClock:{minutes:600},world:{}};const q=Q.state(s);Object.assign(q,{active:true,place:'closet',mastered:true,resources:{resolve:50},internal:{progress:100,influence:0}});Object.assign(P.state(s),{location:'Central Hub N',room:null,activity:'Taking a personal walk',commute:null});return s;}
test('CP062 absence away from work permits reversion in an empty apartment',()=>{const s=fresh();assert.equal(Q.canRelease(s),true);assert.equal(Q.rollContext(s).mode,'advantage');});
test('CP062 Priya home blocks reversion regardless of attention or hearing',()=>{const s=fresh();Object.assign(P.state(s),{location:'applewood',activity:'Sleeping',asleep:true});assert.equal(Q.canRelease(s),false);});
test('CP062 a visitor in apartment 2F blocks reversion while Priya is away',()=>{const s=fresh();s.world.priyaHomePresence=[{id:'visitor',unit:'2F',present:true}];assert.equal(Q.canRelease(s),false);});
test('CP062 a neighbor in another apartment does not share the player space',()=>{const s=fresh();s.world.priyaHomePresence=[{id:'neighbor',unit:'2G',present:true}];assert.equal(Q.canRelease(s),true);});
test('CP062 another actor on the same outdoor tile blocks reversion',()=>{const s=fresh();Q.state(s).place='park';s.hub.location='Central Hub NE';s.world.spacePresence=[{id:'passerby',location:'Central Hub NE',present:true}];assert.equal(Q.canRelease(s),false);s.world.spacePresence[0].location='Central Hub E';assert.equal(Q.canRelease(s),true);});
test('CP062 being worn and either incomplete progression gate still block release',()=>{const s=fresh(),q=Q.state(s);q.place='worn';assert.equal(Q.canRelease(s),false);q.place='closet';q.internal.influence=1;assert.equal(Q.canRelease(s),false);q.internal.influence=0;q.internal.progress=99;assert.equal(Q.canRelease(s),false);});
console.log(count+' Priya flats cases passed');
