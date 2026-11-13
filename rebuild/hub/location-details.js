/* Owner location sheets: mapped reference data, separate from executable shop services. */
(function(r,f){const api=f();if(typeof module==='object'&&module.exports)module.exports=api;else r.EpiLocationDetails=api;})(globalThis,function(){
'use strict';
const room=(id,name,description,exits,level,x,y,w=170,h=100)=>({id,name,description,exits,level,box:[x,y,w,h]});
const locations={
 'Form Repository':{
  reference:64,source:['4528.jpg'],hours:'Open 24 hours daily',schedule:{weekdays:[0,1440],weekends:[0,1440]},
  summary:'A round-the-clock facility for personally owned forms and cursed objects, with a waiting lobby, illuminated form displays, a service desk and secure sublevel suites.',
  staff:[['Lee Singh','Manager'],['Anya Singh','Co-manager'],['Amya Singh','Cursed-item specialist · name transcription provisional'],['Spectra','Form-conversion specialist']],
  entrance:'The western entrance opens into the Entry Lobby. The Form Display connects the lobby to Standard Form Storage; Reception opens from that storage area. Stairs there lead to the secure sublevel.',
  levels:[{id:'ground',name:'Ground floor',width:450,height:350},{id:'sublevel',name:'Sublevel',width:450,height:350}],
  rooms:[
   room('A','Entry Lobby','A worn leather sofa and armchair surround an illuminated coffee table that creates concentric sand art. Technology magazines and arcade machines occupy the waiting area.',['B'],'ground',20,20),
   room('B','Form Display','Illuminated circular stands present commonly used, less-used and popular forms, alongside shop and player-sale displays. No sale stock or price is created by viewing a display.',['A','D'],'ground',20,220),
   room('C','Reception / Service Desk','The counter handles personally owned form storage and retrieval. Form trades, form purchases and cursed-object sales are planned services.',['D'],'ground',240,20),
   room('D','Standard Form Storage / Sublevel Access','Forms are secured through data compression into a repository. Stairs, encrypted security equipment and a monitoring station are here.',['B','C','E'],'ground',240,180),
   room('E','High-Security Form Storage','Staff-key access protects the higher-security servers. Legendary storage adds biometric and polymorphic hexadecimal encryption; standard server access codes rotate every thirty minutes.',['D','F','G'],'sublevel',240,80,170,220),
   room('F','Cursed-Item Removal Suite','A dedicated suite for removing unwanted cursed items. The proposed quote depends on severity, exposure duration, influence, origin and whether the item is living or inanimate. No removal price or successful release is implied.',['E'],'sublevel',20,20),
   room('G','Conversion Suite','Two display-like stands are surrounded by precise hydraulic conversion arms. Eligible biological and cybernetic forms may be convertible; faction exceptions apply. A conversion core is required, rarity stays unchanged and the proposed service resets current Tier Mastery. This service is not active.',['E'],'sublevel',20,220)
  ],
  offerings:['Personally owned form deposit and retrieval: existing repository transport controls remain available.','Shop/player form sales, trading and cursed-object sales: planned; stock, prices and trade rules not implemented.','Cursed-item removal: planned; quoting and curse-resolution rules not implemented.','Biological/cybernetic conversion: planned; eligibility, conversion cores and Tier Mastery reset not implemented.']
 },
 'Pet Boutique':{
  reference:65,source:['4553.jpg','4554.jpg'],advertisement:'Hey you! Who better to get your pets the things they need than me? The only pet store ran by pets… I mean… c’mon! — Sal',hours:'Monday–Friday: 24 hours; weekend hours not specified',schedule:{weekdays:[0,1440],weekends:null},
  summary:'Sal’s pet shop combines accessory displays, a register, an adoption office, boarding kennels and a play area, with separate grooming, treatment and breeding rooms.',
  staff:[['Sal','Manager · anthro rat'],['Trixie','Fertility and reproductive-care specialist · anthro canine'],['Terrence','Groomer · anthro canine, British bulldog']],
  entrance:'The north entrance opens into the Store / Pet Display / Visiting Area. Its hallway connects the register and adoption office. The drawing separates the kennel and service wing on the sublevel; stair access is through the adoption office.',
  levels:[{id:'ground',name:'Ground floor',width:450,height:390},{id:'sublevel',name:'Sublevel',width:450,height:540}],
  rooms:[
   room('A','Store / Pet Display / Visiting Area','Accessory shelves sit to the right of the entrance and pet displays to the left. Displays are scheduled for 08:00–12:00 and 16:00–20:00. A visiting space allows meeting a potential pet before adoption.',['D'],'ground',20,20,390,100),
   room('B','Register','The register is the proposed payment point for accessories, grooming, reproductive care and boarding. These services have no active price list.',['D'],'ground',20,160),
   room('C','Adoption Office / Stairs','A desk and comfortable chairs serve proposed registration, naming and care arrangements. Stairs lead downstairs. No ownership, pet identity or existing Kibbles personalization changes occur here.',['D','E'],'ground',20,280),
   room('D','Hallway','Smooth polished concrete and photographs of successful adoptions line the connecting passage.',['A','B','C'],'ground',240,160,170,220),
   room('E','Kennels / Play Area','Adaptive smart kennels are designed to expand for their occupants and provide cleaning, heating or cooling, food, water and a soft resting mat. The proposed boarding schedule allows appropriate play and overnight settling from 22:00 to 06:00. No confinement or care service runs from this reference.',['C','F','G','H'],'sublevel',20,20,170,500),
   room('F','Grooming Room','Terrence’s wash basin, drying area, trimming and styling station are kept stocked with clean towels and supplies for coat, fur and nail care.',['E'],'sublevel',240,20,170,140),
   room('G','Treatment Room','Trixie’s treatment and observation space supports planned fertility and reproductive care, with a treatment table and overnight observation arrangements. Any future procedure requires the participant’s informed agreement. Viewing this reference performs no treatment or bodily change.',['E'],'sublevel',240,200,170,140),
   room('H','Breeding Room','A private reproductive-care room with species-appropriate amenities for adult, sapient humanoid participants, overseen by Trixie. Participation requires the explicit agreement of the person in the active form; an owner cannot consent for them. Pregnancy and related form rules are future service plans, not effects of inspecting this room.',['E'],'sublevel',240,380,170,140)
  ],
  offerings:['Dog snack: existing purchase action costs 5 gold.','Pet name tag: proposed pet name with owner name on the reverse.','Basic harness: proposed adjustable fit for different animals.','Code-locked collar and smart leash: planned; no locking, ownership or control changes implemented.','Speech-translator collar accessory: proposed help understanding an owner’s speech; not human speech granted to pets.','Obedience training chip: catalog concept only; no forced behavior or training effects implemented.','Adoption, registration, grooming, general care and boarding: planned; no automatic purchase, pet generation or overnight processing.','Fertility care and breeding-room consultations for adult, sapient humanoid participants: planned; require the participant’s informed agreement. No procedure, pregnancy or form restriction is activated by viewing these plans.']
 },
 'Neko Cafe':{
  reference:67,source:['4555.jpg'],advertisement:'Welcome to the new and improved Neko Cafe… Cat’s got your tongue? That’s right: uplifted and enhanced, we offer the finest in cat-friendly cuisine, served with a purr. Also features less cat fur.',hours:'Monday–Friday: 24 hours; Saturday–Sunday: 09:00–17:00',schedule:{weekdays:[0,1440],weekends:[540,1020]},
  summary:'An updated cat-friendly cafe with wall booths, circular tables, a modern kitchen, a register and staff rooms. The decor is distinctly feline while staying professional.',
  staff:[['Nikita','Manager · anthro tabby'],['Ilana','Morning server · anthro white cat'],['Amber','Evening server · anthro black cat'],['Niko','Morning cook · anthro grey cat'],['Luko','Evening cook · anthro black cat']],
  entrance:'The eastern entrance opens into the Dining Area. The Register connects dining to the Hallway, which links the Kitchen and Storage to the manager’s Office.',
  levels:[{id:'ground',name:'Cafe floor',width:660,height:420}],
  rooms:[
   room('A','Dining Area','Wall booths and circular tables provide seating. Servers collect freshly prepared food and drinks from the northwest service counter and drink dispensers.',['C'],'ground',450,20,190,380),
   room('B','Kitchen and Storage','Fresh ingredients arrive daily. The spotless tiled kitchen has a stove, fryer, refrigerator, preparation station, sink, dishwasher and plating station, arranged for neko cat anatomy.',['D'],'ground',20,20,190,130),
   room('C','Register','Customers can pay for meals, redeem coupons or place takeaway orders here. A posted menu is a reference until purchasing and coupon redemption are implemented.',['A','D'],'ground',240,180),
   room('D','Hallway','Photographs of the earlier Neko Cafe and framed old menus line a passage where Nikita can oversee staff without interrupting service.',['B','C','E'],'ground',20,180),
   room('E','Office','Nikita manages the cafe from a desk without guest chairs. A safe and a rack of spare uniforms for temporary or permanent new hires occupy the office.',['D'],'ground',20,300,190,100)
  ],
  offerings:['Drinks: milk, chai tea and water.','Food: tuna salad, salmon rice and assorted sushi.','Catnip Spice: an authored mystery menu entry; no effect, recipe or purchase is invented.','A 50%-off-one-item Neko Cafe coupon already exists as the Hangry Fangs reward. This update does not redeem or consume it.'],
  questPlans:[['Cleaning and dish duty','Safe'],['Investigate Catnip Spice','Risky'],['Investigate the Missing Employee','Dangerous'],['Investigate growling in the back','Dangerous']],
  notes:['Door Cat role is unnamed in the sheet; no identity or schedule invented.','Morning and evening staff are design roles; exact shift boundaries and roaming behavior are not specified.','Quest concepts remain development plans, not accepted quests or discovered journal entries.']
 }
};
function freeze(x){if(x&&typeof x==='object'){for(const v of Object.values(x))freeze(v);Object.freeze(x);}return x;}freeze(locations);
function get(id){return locations[id]||null;}
function status(id,minutes){const d=get(id);if(!d||!Number.isSafeInteger(minutes)||minutes<0)return null;const day=Math.floor(minutes/1440)%7,t=minutes%1440,span=day<5?d.schedule.weekdays:d.schedule.weekends;if(!span)return 'Hours today not recorded';return t>=span[0]&&t<span[1]?'Open now':'Closed now';}
return Object.freeze({locations,get,status});
});
