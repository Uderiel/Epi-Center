/* Shared district geography for Map, Path, location records and save migration. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiHubWorld=api;})(globalThis,function(){
'use strict';
const SPIRE='Central Hub Spire',STORE='Cherished Touch';
const positions=[['NW',1,-1,-1,4],['N',2,0,-1,6],['NE',3,1,-1,4],['W',4,-1,0,6],['C',5,0,0,0],['E',6,1,0,6],['SW',7,-1,1,4],['S',8,0,1,6],['SE',9,1,1,4]];
const directions={NW:'Northwest',N:'North',NE:'Northeast',W:'West',C:'Center',E:'East',SW:'Southwest',S:'South',SE:'Southeast'};
const nodes=positions.map(([direction,number,x,y,benches])=>Object.freeze({id:direction==='C'?SPIRE:'Central Hub '+direction,direction,number,x,y,benches,kind:'hub'}));
const ring=['NW','N','NE','E','SE','S','SW','W'].map(d=>nodes.find(n=>n.direction===d));
const normalize=id=>!id||id==='hub'||id==='Central Hub'?SPIRE:id;
// Reference numbers stay in source only. The owner's downward arrows move NW
// alley labels 90/92/93 into the next row, replacing the crossed-out entries.
const layout=[
[57,58,59,60,61,13,26,27,28,29,30],
[56,94,0,0,0,12,0,0,0,0,31],
[55,0,90,92,93,11,70,71,72,0,32],
[54,0,89,91,69,10,62,73,74,0,33],
[53,0,88,68,1,2,3,63,75,0,34],
[25,24,23,22,4,5,6,14,15,16,17],
[52,0,82,67,7,8,9,64,76,0,35],
[51,0,83,84,66,18,65,77,78,95,36],
[50,96,85,86,87,19,79,80,81,0,37],
[49,0,0,0,0,20,0,0,0,0,38],
[48,47,46,45,44,21,43,42,41,40,39]
].map(row=>Object.freeze(row));
const buildings={62:STORE,63:"Burke's Sweets",64:'Form Repository',65:'Pet Boutique',66:'Daily Needs',67:'Neko Cafe',68:'Zed Shoe and Spa',69:'Going Out of Business',94:'The Doll House',95:'The Cloistered Madame',96:'Nip Tuck Cosmetics'};
function record(number,x,y){const hub=nodes.find(n=>n.number===number);if(hub)return hub;let id,kind='road',alley;
if(buildings[number]){id=buildings[number];kind='building';}
else if(number<=13)id='N. Main Street ('+(number-9)+')';
else if(number<=17)id='E. Docks Street ('+(number-13)+')';
else if(number<=21)id='S. Farm Road ('+(number-17)+')';
else if(number<=25)id='Entertainment Row ('+(number-21)+')';
else if(number<=61)id='Outerloop Road ('+(number-25)+')';
else {kind='alley';alley=number<=75?'NE':number<=81?'SE':number<=87?'SW':'NW';const start={NE:70,SE:76,SW:82,NW:88}[alley];id=alley+' Alley ('+(number-start+1)+')';}
return Object.freeze({id,name:id,number,x,y,kind,alley});}
const worldNodes=Object.freeze(layout.flatMap((row,y)=>row.flatMap((number,x)=>number?[record(number,x-5,y-5)]:[])));
const node=id=>worldNodes.find(n=>n.id===normalize(id));
const isHub=id=>node(id)?.kind==='hub';
function direction(a,b){const dx=Math.sign(b.x-a.x),dy=Math.sign(b.y-a.y);return (dy<0?'N':dy>0?'S':'')+(dx<0?'W':dx>0?'E':'');}
function connected(a,b){if(Math.max(Math.abs(a.x-b.x),Math.abs(a.y-b.y))!==1)return false;if(a.kind==='alley'||b.kind==='alley'){if(a.kind==='alley'&&b.kind==='alley')return a.alley===b.alley;return (a.kind==='alley'?b:a).kind==='road';}return true;}
const edges=Object.freeze(worldNodes.flatMap((a,i)=>worldNodes.slice(i+1).filter(b=>connected(a,b)).map(b=>Object.freeze([a.id,b.id]))));
function migrate(save){save.hub||={};save.hub.location=normalize(save.hub.location);save.world||={};save.world.discovered||={};save.world.visited||={};save.world.npcsDiscovered||={};save.world.hubExpansion||={version:1,visited:{},inspected:{},squirrelIndex:0,moves:0};const h=save.world.hubExpansion;h.visited||={};h.inspected||={};h.squirrelIndex=Number.isInteger(h.squirrelIndex)?((h.squirrelIndex%8)+8)%8:0;h.moves=Math.max(0,Number(h.moves)||0);if(isHub(save.hub.location))h.visited[save.hub.location]=true;if(save.hub.location===STORE){save.world.discovered.cherishedTouch=true;save.world.visited.cherishedTouch=true;}save.world.examined||={};save.world.visited[save.hub.location]=true;return h;}
function routes(save){migrate(save);const location=save.hub.location,from=node(location);const result=[];for(const [a,b] of edges){const id=location===a?b:location===b?a:null;if(id)result.push({id,name:display(id),direction:direction(from,node(id))});}return result;}
function travel(save,destination){const route=routes(save).find(r=>r.id===normalize(destination));if(!route)throw Error('That destination is not a directly connected route.');save.hub.location=route.id;const h=migrate(save);save.world.visited[route.id]=true;h.moves++;h.squirrelIndex=(h.squirrelIndex+([1,1,-1,1,-1,-1,1,1][(h.moves-1)%8])+8)%8;return route;}
function survey(save){migrate(save);if(!isHub(save.hub.location))return 'The Path drawer shows adjacent routes, including diagonals. Open Map to view the whole district. Alleys connect along their passages and to street exits, never directly into neighboring buildings.';const fresh=!save.world.discovered.cherishedTouch;save.world.discovered.cherishedTouch=true;return (fresh?'You discover':'You can still see')+' Cherished Touch north of Central Hub NE. All adjacent locations, including diagonals, appear in Path. Open Map for the whole district.';}
function features(save){const n=node(save.hub.location);if(!n||n.kind!=='hub')return [];if(n.id===SPIRE)return ['A towering black monolithic Spire, with spokes extending toward the eight surrounding Hub areas.','Faint red lines glow sporadically along the Spire.','Floral arrangements, grass and a smaller ring path lead to the eight park paths.'];return [n.benches+' park benches among shrubbery, bushes and floral arrangements.','A peaceful grassy park with clear sight lines between nearby stores and the central Spire.','Evenly spaced lamp posts provide illumination at night.','Eve may appear here as a holographic projection.'];}
function description(id){const n=node(id);if(!n)return 'Location details have not been recorded.';if(n.id===SPIRE)return 'The central Spire stands at the heart of the Hub, surrounded by eight park areas.';if(n.kind==='alley')return 'A passage in the '+n.alley+' alley. Follow the alley or return to a street exit; adjacent buildings cannot be entered from this passage.';if(n.kind==='building')return display(n.id)+'. This location is mapped; its detailed description and interactions are awaiting development.';if(n.kind==='road')return display(n.id)+'. The Path drawer shows neighboring locations; the Map shows the surrounding district.';return 'A peaceful grassy park '+directions[n.direction].toLowerCase()+' of the central Spire. Shrubbery and flowers frame clear sight lines toward nearby stores and the Spire.';}
function inspect(save){const h=migrate(save),n=node(save.hub.location);save.world.examined[save.hub.location]=true;if(!n||n.kind!=='hub')return description(save.hub.location);h.inspected[n.id]=true;let text=features(save).join(' ');if(n.id!==SPIRE){text+=' A manhole-sized circular cover bears an arrow pointing '+directions[direction(n,node(SPIRE))].toLowerCase()+' toward the Spire.';if(n.id===ring[h.squirrelIndex].id){h.squirrelDiscovered=true;save.world.npcsDiscovered.Squirrel=true;text+=' You discover a squirrel moving through the shrubs.';}}return text;}
function display(id,refs=false){const n=node(id),name=id==='NE Alley (4)'?'NE Alley Crate':String(normalize(id)).replace(/ \(\d+\)$/,'');return refs&&n?'#'+n.number+' · '+name:name;}
function knowledge(save){migrate(save);const seen=new Set(Object.keys(save.world.visited).filter(id=>save.world.visited[id]&&node(id)));for(const [id,v] of Object.entries(save.world.hubExpansion.visited))if(v&&node(id))seen.add(id);if(save.world.visited.cherishedTouch)seen.add(STORE);const known=new Set(seen);for(const [a,b] of edges){if(seen.has(a))known.add(b);if(seen.has(b))known.add(a);}return {visited:seen,known};}
function npcs(save){migrate(save);if(!isHub(save.hub.location))return save.hub.location===STORE&&save.world.npcsDiscovered.Charity?['Charity']:[];return ['Eve',...(save.world.hubExpansion.squirrelDiscovered&&save.hub.location===ring[save.world.hubExpansion.squirrelIndex].id?['Squirrel']:[])];}
return Object.freeze({SPIRE,STORE,nodes,worldNodes,layout,edges,directions,normalize,node,isHub,migrate,routes,travel,survey,features,inspect,npcs,description,display,knowledge});
});
