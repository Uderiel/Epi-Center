/* Technology Center floor-three authored interior. Design-only module until wired to live navigation. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiTechnologyCenter=api;})(globalThis,function(){
'use strict';
const rooms={
 A:{name:'Elevator Bank',description:'Polished steel elevator doors line the quiet third-floor landing. The magnetically guided lifts connect this floor to the building lobby.',exits:['B','E','H']},
 B:{name:'Restroom Stalls',description:'Fully enclosed restroom stalls feature cherry-wood detailing and cloudy glass for privacy.',exits:['A','C']},
 C:{name:'Urinals',description:'A tiled restroom area with neatly maintained urinals.',exits:['B','D']},
 D:{name:'Sinks and Mirrors',description:'A row of mirrors, sinks, and hand-soap dispensers stands beneath bright, even lighting.',exits:['C']},
 E:{name:'Conference Room',description:'A long mahogany table anchors the conference room over industrial-gray carpeting. Glass windows face north, east and west, with blinds for privacy. A presentation screen occupies the south wall; encrypted video calls are supported.',exits:['A','F','G']},
 F:{name:"Erin's Office",description:'A mahogany desk faces the doorway. Windows to the east and south have adjustable blinds; leather visitor chairs, plants, and a rug soften the professional space.',exits:['E','G','H']},
 G:{name:"Richard's Office",description:'A carefully organized managerial office displays professional credentials and photographs. Softer carpeting and privacy features distinguish it from the cubicles. The desktop uses biometric security.',exits:['E','F']},
 H:{name:'Employee Cubicles',description:'An orderly arrangement of workstations serves the sales and marketing staff. Low partitions provide modest privacy without isolating the floor.',exits:['A','F','I','J','K','L','M']},
 I:{name:'Emergency Stairwell and Cleaning',description:'A clearly marked emergency stairwell adjoins a secured cleaning and maintenance area.',exits:['H']},
 J:{name:'Sales Break Room',description:'A modest break area for sales staff offers seating and space for short meals between assignments.',exits:['H']},
 K:{name:'Marketing Break Room',description:'A separate staff break area gives the marketing team somewhere to take meals and short breaks.',exits:['H']},
 L:{name:'Office Equipment',description:'Water coolers stand near the shared printer and fax equipment, with shelves for paper and routine supplies.',exits:['H']},
 M:{name:'Intern Workspace',description:'A compact office cubicle is assigned to the junior intern. Its practical desk and basic storage reflect an entry-level position.',exits:['H']}
};
for(const [id,r] of Object.entries(rooms)){r.id=id;r.exits=Object.freeze(r.exits);Object.freeze(r);}
Object.freeze(rooms);
function state(save){save.world||={};save.world.technologyCenter||={floor:3,room:'A',visited:{A:true}};const s=save.world.technologyCenter;if(!rooms[s.room])s.room='A';s.visited||={};s.visited[s.room]=true;return s;}
function routes(save){return rooms[state(save).room].exits.map(id=>({id,name:rooms[id].name}));}
function move(save,id){const s=state(save);if(!rooms[id]||!rooms[s.room].exits.includes(id))throw Error('That office room is not directly accessible.');s.room=id;s.visited[id]=true;return {id,minutes:1,text:rooms[id].description};}
function inspect(save){return rooms[state(save).room].description;}
return Object.freeze({id:'technology-center',name:'Technology Center',mapNumber:98,northOf:26,floor:3,rooms,state,routes,move,inspect});
});
