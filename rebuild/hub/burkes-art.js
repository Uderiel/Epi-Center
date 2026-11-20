/* Static authored illustrations; neither images nor labels grant staff access or stock. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('./burkes-sweets'):r.EpiBurkesSweets,n?require('./world-clock'):r.EpiWorldClock);if(n)module.exports=a;else r.EpiBurkesArt=a;})(globalThis,function(B,T){
const WIDTH=1100,HEIGHT=733,keys=Object.freeze(['outside','A','B','C','D']);
function path(key,phase){return keys.includes(key)?'assets/burkes-sweets/'+(phase==='night'?'night':'day')+'/'+key.toLowerCase()+'.jpg':null;}
function current(s){if(s.hub?.location!==B.id)return null;const phase=T.phase(s),state=s.world?.burkesSweets,key=state?.inside?state.room:'outside';if(!keys.includes(key))return null;if(key==='D'&&!B.canEnter(s,'D'))return null;return {art:path(key,phase),label:'Burke’s Sweets · '+(key==='outside'?'Storefront':B.rooms[key].name)+' · '+(phase==='night'?'Nighttime':'Daytime'),width:WIDTH,height:HEIGHT};}
return Object.freeze({WIDTH,HEIGHT,keys,path,current});});
