/* Owner-approved werewolf visual facts in the universal 24-field appearance template. */
(function(r,f){const a=f(typeof module==='object'&&module.exports?require('./appearance-alignment'):r.EpiAppearanceAlignment);if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiWerewolfAppearance=a;})(globalThis,function(A){
'use strict';
const tissue=Object.fromEntries(['footSize','legs','hips','buttocks','waist','back','chest','arms','hands','fingers','voice','face','ears','genitalAnatomy','skin','tail'].map(k=>[k,{material:'Skin'}]));
const record=A.record({id:'form:repository-male-werewolf',name:'Markus',bodyType:'humanoid',exact:{chest:52,waist:36,hips:44},raw:{
 age:'Adult; exact age not specified',gender:'Male',height:'6 ft 8 in',weight:'Approximately285 lb',
 build:'Broad shoulders, deep chest, thick upper back, narrow waist and powerful thighs; muscular adult hunter build; upright digitigrade posture',
 footSize:'Two broad hind paws, approximately14inches long, each with four keratin-clawed weight-bearing toes and tough textured black pads',
 legs:'Two powerful digitigrade legs with dense muscular thighs and charcoal-gray fur',
 hips:'44-inch hip circumference, balanced with the powerful thighs',buttocks:'Muscular, rounded hindquarters',waist:'36-inch narrow waist with a defined abdomen beneath the fur',back:'Broad shoulders and thick upper back; coarser fur ruff around neck and shoulders',
 chest:'52-inch broad, deep chest with prominent pectorals and lighter silver-gray fur',
 arms:'Two muscular, fur-covered humanoid arms',hands:'Two functional gripping hands with black pads',
 fingers:'Five fingers per hand with curved black claws',face:'Strong brow, black nose, pronounced wolf muzzle and prominent natural canine fangs of enamel and dentin; lighter silver-gray muzzle and throat',
 genitalAnatomy:'Canine-type sheathed penis with a penile knot (bulbus glandis), separate testes and recorded length nine inches; measurement state and testes size not specified',eyes:'Two amber eyes with pale sclera and round black pupils',ears:'Two upright expressive wolf ears',hair:'Head fur continuous with the charcoal-gray coat; coarser neck-and-shoulder ruff',
 skin:'Visible covering is dense charcoal-gray fur, lighter silver-gray at muzzle, throat and chest; living biological dark charcoal skin and tissue beneath the unmarked coat; approved silver-gray muzzle, throat and chest pattern retained',
 voice:'Thick muscular neck; low, resonant voice with a gravelly edge and clear articulated speech through the muzzle; irritation adds a growling undertone and relaxed speech a quiet chesty rumble',tail:'Bushy fur-covered tail approximately three feet long',scent:'Strong musky natural scent and warm skin, especially noticeable after exertion; very high perspiration tendency'
},answers:{...tissue,
 footSize:{...tissue.footSize,surfaceColour:'Custom',surfaceColourCustom:'Black paw pads beneath charcoal-gray fur',presence:'Present',count:'2',type:'Paws',sizeMode:'Physical measurement',length:{mode:'Enter measurement',value:14,unit:'in'},width:'Wide',sole:'Paw pads',digits:'4',nails:'Claws',covering:'Fur',texture:'Custom',textureCustom:'Tough, textured paw pads'},
 legs:{...tissue.legs,count:'2',type:'Digitigrade legs',build:'Muscular',covering:'Fur'},
 hips:{...tissue.hips,proportions:'Balanced'},buttocks:{...tissue.buttocks,size:'Custom',sizeCustom:'Muscular hindquarters',shape:'Rounded'},chest:{...tissue.chest,type:'Flat / pectoral',size:'Custom',sizeCustom:'Broad, prominent pectorals',shape:'Broad'},waist:{...tissue.waist,width:'Narrow',muscle:'Defined'},back:{...tissue.back,width:'Broad',posture:'Upright'},
 arms:{...tissue.arms,count:'2',type:'Custom',typeCustom:'Muscular, fur-covered humanoid arms',muscle:'Defined'},
 hands:{...tissue.hands,surfaceColour:'Custom',surfaceColourCustom:'Black pads on dark charcoal skin with charcoal-gray fur',count:'2',type:'Custom',typeCustom:'Five-fingered clawed hands with a functional grip and dark pads'},
 fingers:{...tissue.fingers,nailMaterial:'Custom',nailMaterialCustom:'Animal claw keratin',count:'5',nails:'Claws',nailShape:'Custom',nailShapeCustom:'Curved',nailColour:'Custom',nailColourCustom:'Black'},
 face:{...tissue.face,salivation:'High',noseShape:'Custom',noseShapeCustom:'Black canine nose on a pronounced wolf muzzle; prominent canine fangs'},
 eyes:{count:'2',iris:'Amber',sclera:'Custom',scleraCustom:'Pale eye whites',material:'Custom',materialCustom:'Natural canine/werewolf eye tissue'},ears:{...tissue.ears,count:'2',shape:'Custom',shapeCustom:'Upright, expressive wolf ears'},
 genitalAnatomy:{...tissue.genitalAnatomy,configuration:'Penis and testes',length:{mode:'Enter measurement',value:9,unit:'in'},variation:'Custom',variationCustom:'Canine-type sheathed penis with a penile knot (bulbus glandis); testes are separate',grooming:'Natural'},voice:{...tissue.voice,neck:'Thick',pitch:'Low',quality:'Custom',qualityCustom:'Resonant with a gravelly edge; clear speech through the muzzle; growling undertone when irritated and quiet chesty rumble when relaxed'},scent:{natural:'Musky',strength:'Strong',perspiration:'Very high',temperature:'Warm'},hair:{material:'Fur'},skin:{...tissue.skin,surfaceColour:'Custom',surfaceColourCustom:'Dark charcoal',markings:[{kind:'None'}],bodyHair:'Custom',bodyHairCustom:'Dense charcoal-gray fur with silver-gray muzzle, throat and chest'},
 tail:{...tissue.tail,presence:'Present',description:'Custom',descriptionCustom:'Bushy, fur-covered tail approximately three feet long'}
},source:['Owner-approved male-werewolf appearance block,2026-11-24','Owner requirement to use the appearance template'],notes:[
 'All24ordered fields are present. Schema compliance does not mean every anatomical detail has been authored.',
 'Humanoid body type intentionally avoids canine foreleg/paw defaults; living biological tissues, canine eyes, keratin claws and natural fangs are now explicitly owner-approved. Two gripping hands and two hind paws are distinct.',
 'Physical paw length, toe count, high salivation and very high perspiration are owner-approved. Strong musky scent and warm skin are also owner-approved. No human shoe conversion, viscosity, automatic drooling event, exact temperature or new gameplay modifier is inferred.',
 'Unmarked means no additional distinguishing marks; the approved silver-gray muzzle, throat and chest coloration is retained.',
 'This is a reusable appearance record only. It creates no NPC, form inventory, skills, powers, stock, worn body or appearance mutation.'
]});
function freeze(x){if(x&&typeof x==='object'){Object.values(x).forEach(freeze);Object.freeze(x);}return x;}
return freeze({...record,status:'Approved visual facts;24-field schema-compliant; unresolved details explicit; no actor or sale stock'});
});
