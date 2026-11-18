/* Reuses Erin's persistent layer frames; each screen has its own Back/result/scroll. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('./priya-home'):r.EpiPriyaHome,n?require('./apartment-navigation'):r.EpiApartmentNav,n?require('../combat/kibbles-form'):r.EpiKibblesForm);if(n)module.exports=a;else r.EpiPriyaHomeNav=a;})(globalThis,function(H,A,F){
'use strict';
const object=(name,description,children=[],storage=false)=>({name,description,children,storage});
const objects={
 sectional:object('Sage sectional','A generous soft-sage sectional with cream and oatmeal cushions leaves space for friends to sit together. Separate storage ottomans provide footrests without built-in recliners.'),
 ottomans:object('Storage ottomans','Separate upholstered footrests can sit beside the sectional while leaving the path and yoga area clear.',['ottoman-storage']),
 'ottoman-storage':object('Ottoman compartments','Lined compartments sit beneath the upholstered lids. You leave Priya’s personal contents undisturbed.',[],true),
 television:object('Television & rom-coms','A modest television faces the sectional. Her light romantic comedies favor awkward first meetings, misunderstandings, well-meant advice and the occasional airport dash.'),
 'coffee-table':object('Oak coffee table','A low oak table sits within reach of the seating without blocking the route across the room.'),
 bookcase:object('Books & keepsakes','Fantasy adventures, romantic comedies and a few personal keepsakes share the shelves.'),
 'writing-desk':object('Window writing desk','A quiet desk by the window gives her writing a place apart from work.',['desk-drawer','notebook']),
 'desk-drawer':object('Desk drawer','A simple wooden drawer beneath the writing surface. Personal papers remain undisturbed.',[],true),
 notebook:object('Closed writing notebook','A closed notebook rests on the desk. The pages are Priya’s private writing.'),
 lighting:object('Salt lamps & crystals','Himalayan pink salt lamps and softly illuminated crystals spread a warm rose-and-amber glow, reflecting Priya’s interest in positive energy.'),
 yoga:object('Yoga space','An uncluttered patch of floor, a rolled mat and a small crystal arrangement give her morning practice room to breathe.'),
 'wellness-charts':object('Chakra & acupuncture charts','Soft tonal chakra and acupuncture diagrams hang in light wood frames. They express Priya’s holistic interests without bright rainbow accents or portrait displays.'),
 'hall-closet':object('Hallway closet','Pale wood, cream storage boxes and neatly folded neutral linens continue the apartment’s peaceful atmosphere.',[],true),
 console:object('Oak entry console','A narrow console and ceramic key dish sit beside the woven runner.',['console-drawer']),
 'console-drawer':object('Console drawer','A shallow drawer fits beneath the console. You leave its private contents in place.',[],true),
 dining:object('Dining table','A compact pale-wood table makes room for company without crowding the kitchen.'),
 cabinets:object('Cream cabinets','Warm cream cabinet fronts meet a pale-stone backsplash.',['upper-cabinet','lower-cabinet']),
 'upper-cabinet':object('Upper cabinet','Shelves sit behind the upper doors. You leave Priya’s kitchen belongings in place.',[],true),
 'lower-cabinet':object('Lower cabinet','Lower storage stays separate from the clear preparation counter.',[],true),
 tea:object('Tea corner','A kettle and tea tins have their own corner of the counter.'),
 bed:object('Bed & reading corner','Ivory bedding, a soft-sage throw and softly glowing salt lamps face a quiet reading chair.'),
 dresser:object('Bedroom dresser','A simple dresser leaves clear paths to the bathroom and walk-in closet.',['dresser-top','dresser-drawers']),
 'dresser-top':object('Dresser top','A clear surface continues the bedroom’s calm, warm palette.'),
 'dresser-drawers':object('Dresser drawers','The drawers hold Priya’s private clothing storage; no belongings are taken.',[],true),
 shower:object('Shower','Pale tile and brushed brass fittings continue the apartment’s gentle colors.'),
 basin:object('Basin & mirror','A simple basin and mirror sit beside neatly folded cream and sage towels.'),
 'bath-storage':object('Bathroom storage','A compact shelf and cabinet keep the bathroom tidy.',[],true),
 outfits:object('Clothing rail','Draped outfits and folded clothes are arranged within easy reach.'),
 'shoe-shelf':object('Shoe shelves','Low shelves leave a clear standing area beside the footwear. The retained original flats stay at their recorded location.'),
 'closet-bench':object('Padded closet bench','A small padded bench faces the clear standing area in this walk-in closet.')
};
objects['litter-box']=object('Cat litter box','A real litter tray with a paw mat stands in a quiet bathroom corner.');objects['cat-bowls']=object('Cat food & water bowls','Separate cat-food and water bowls rest on a washable kitchen mat.');objects['cat-rest']=object('Cat resting & play area','A soft neutral resting pad and scratch/play area stand beside the sectional.');objects['cat-window']=object('Cat window & fire escape','An openable window leads onto a protected landing and connected fire-escape stairs to ground level.');
const roots={living:['sectional','ottomans','television','coffee-table','bookcase','writing-desk','lighting','yoga','cat-rest','cat-window'],hall:['console','wellness-charts','hall-closet'],kitchen:['dining','cabinets','tea','cat-bowls'],bedroom:['bed','dresser'],bath:['shower','basin','bath-storage','litter-box'],closet:['outfits','shoe-shelf','closet-bench']};
function guard(s){if(!H.inside(s)||s.encounter?.active||s.world?.priyaFlats?.active)throw Error('Use these drawers while present in Priya’s apartment outside an encounter.');}
function state(s){const h=H.state(s);let u=h.navigation;if(!u||u.room!==h.room||!Array.isArray(u.layers)||!u.layers.length)u=h.navigation={room:h.room,layers:[A.frames.frame(h.room,'room','',H.rooms[h.room].name)]};return u;}
function current(s){return state(s).layers.at(-1);}
function choices(s){guard(s);const f=current(s);return f.view==='room'?roots[H.state(s).room]:objects[f.object]?.children||[];}
function select(s,id){guard(s);if(!choices(s).includes(id))throw Error('That object is not accessible from the current drawer.');const u=state(s),o=objects[id];A.frames.push(u.layers,A.frames.frame(u.room,o.storage?'storage':'object',id,o.name));return current(s);}
function back(s){guard(s);A.frames.back(state(s).layers);return current(s);}
function root(s){guard(s);const u=state(s);u.layers.splice(1);return current(s);}
function examine(s){guard(s);const f=current(s);const text=f.view==='room'?H.inspect(s):objects[f.object].description;f.result=text;return {minutes:1,text};}
function toggle(s){guard(s);const f=current(s),o=objects[f.object];if(!o?.storage||!F.capabilities(s).manipulation)throw Error('Your current body cannot operate that storage.');H.state(s).openFixtures||={};const open=H.state(s).openFixtures;open[f.object]=!open[f.object];f.result=(open[f.object]?'You open ':'You close ')+o.name.toLowerCase()+'. Personal belongings remain in place.';return {minutes:1,text:f.result};}
function intent(s,raw){if(!H.inside(s))return null;const t=String(raw).trim().toLowerCase().replace(/[.!]+$/,'');if(/\?|\b(?:not|never|don't|do not)\b/.test(t))return null;if(/^(?:go )?back$/.test(t))return {action:'back'};const m=t.match(/^(?:i )?(examine|inspect|open|close|view) (?:the )?(.+)$/);if(!m)return null;const id=choices(s).find(id=>[id,objects[id].name.toLowerCase()].includes(m[2]));if(id)return {action:m[1]==='open'||m[1]==='close'?'open-object':m[1]==='view'?'view':'examine-object',id};const f=current(s);if(objects[f.object]&&[f.object,objects[f.object].name.toLowerCase()].includes(m[2]))return {action:['open','close'].includes(m[1])?'toggle':'examine'};return null;}
return Object.freeze({objects,roots,state,current,choices,select,back,root,examine,toggle,intent});
});
