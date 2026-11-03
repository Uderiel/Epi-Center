/* Extract audited source definitions; never execute the cumulative game's UI. */
const fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto');
const file='epi-center-v0.8.84-attribute-foundation-corrections.html',source=fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n');
function between(start,end){const a=source.indexOf(start);if(a<0)throw Error(start);const b=source.indexOf(end,a+start.length);if(b<0)throw Error(end);return source.slice(a+start.length,b);}
const literal=(a,b)=>vm.runInNewContext('('+between(a,b)+')',{}, {timeout:1000});
const shoes=literal('const SHOES849=',';\nconst CLOTHES849'),dresser=literal('const DRESSER849=',';\nconst SHOES849'),bath=literal('const BATH_ITEMS851=',';\nBATH_ITEMS851');
const sandbox={SHOES849:shoes};vm.createContext(sandbox);
vm.runInContext('const CATALOG850=[];'+between('const CATALOG850=[];','function items850')+';globalThis.catalog=CATALOG850;',sandbox,{timeout:1000});
// CATALOG850's declaration is kept separate from its pure data initializer.
const catalog=sandbox.catalog;
for(const [id,name,location,kind] of bath)catalog.push({id:'bath-'+id,name,location,kind,slot:'',order:catalog.length});
for(const [id,name,order] of [['ring-silver','Simple silver ring',5],['ring-gold','Delicate gold ring',6],['bracelet','Understated bracelet',7]])catalog.push({id,name,order,location:'closet-accessories',slot:id==='bracelet'?'bracelet':'ring',kind:'accessory'});
const roomDescriptions=Object.fromEntries([...source.matchAll(/ERIN_ROOMS835\.(\w+)\.description=('(?:\\.|[^'\\])*')/g)].map(m=>[m[1],vm.runInNewContext(m[2],{},{timeout:1000})]));
const data={roomDescriptions,source:{path:file,sha256:crypto.createHash('sha256').update(source).digest('hex')},dresser,catalog:catalog.filter(x=>x.id!=='shoes-0'),tvModes:literal('const MODES840=',';\nfunction livingState840'),food:literal('const KITCHEN_ITEMS844=',';\nfunction kitchen844'),recipes:literal('const RECIPES844=',';\nfunction kitchenLog844')};
fs.writeFileSync('rebuild/hub/erin-household-data.js','/* Generated from final authored 0.8.84 household data; unique shoes-0 excluded. */\n(function(r){const data='+JSON.stringify(data,null,2)+';if(typeof module==="object"&&module.exports)module.exports=data;else r.EpiErinHouseholdData=data;})(globalThis);\n');
const engine=('const Autonomy867='+between('const Autonomy867=','\nconst ACTIONS867')).replace('const day=Math.floor(now/1440),minute=now%1440','const day=adapter.calendarDay?.(now)??Math.floor(now/1440),minute=now%1440');
fs.writeFileSync('rebuild/hub/legacy-autonomy.js','/* Original 0.8.67 transaction/scheduling engine, retained by final 0.8.84. Current adapter owns all game authority. */\n(function(r){'+engine+'\nif(typeof module==="object"&&module.exports)module.exports=Autonomy867;else r.EpiLegacyAutonomy=Autonomy867;})(globalThis);\n');
console.log(data.catalog.length+' distinct household definitions; original autonomy engine extracted.');

const portrait=source.match(/const ERIN_TEST_PORTRAIT822='data:image\/jpeg;base64,([^']+)';/);if(!portrait)throw Error('Missing original portrait');fs.writeFileSync('rebuild/hub/assets/erin-legacy-portrait.jpg',Buffer.from(portrait[1],'base64'));
