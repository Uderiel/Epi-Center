/* Owner-approved Lee appearance in the shared24-field template; portrait approved and connected locally. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('./appearance-alignment'):r.EpiAppearanceAlignment,n?require('./location-details'):r.EpiLocationDetails,n?require('./appearance-template'):r.EpiAppearanceTemplate);if(n)module.exports=a;else r.EpiLeeAppearance=a;})(globalThis,function(A,D,T){
'use strict';const p=D.locations['Form Repository'].staffProfiles.lee,regional=Object.fromEntries(['footSize','legs','hips','buttocks','waist','back','chest','arms','hands','fingers','voice','face','ears','genitalAnatomy'].map(key=>[key,{material:'Skin',surfaceColour:'Red'}]));
const approvedDimensions={waist:33.5,hips:40,underChest:35.5,chest:40,shoulderWidth:17,armLength:24.5,inseam:34};
const answers={...regional,
 footSize:{...regional.footSize,presence:'Present',count:'2',type:'Humanlike feet',sizeMode:'Shoe size',size:11,sizingSystem:'US men’s',width:'Medium',arch:'Medium',sole:'Humanlike sole',digits:'5',nails:'Claws',covering:'Skin',texture:'Custom',textureCustom:'Thick and leathery',markings:'Not specified'},
 legs:{...regional.legs,count:'2',type:'Human legs',length:'Average',build:'Custom',buildCustom:'Defined restrained musculature',covering:'Skin',grooming:'Custom',groomingCustom:'No body hair'},
 hips:{...regional.hips,width:'Narrow',shape:'Straight',proportions:'Balanced'},
 buttocks:{...regional.buttocks,size:'Medium',shape:'Rounded'},
 waist:{...regional.waist,width:'Medium',abdomen:'Flat',muscle:'Defined'},
 back:{...regional.back,width:'Medium',shoulders:'Level',back:'Tapered',posture:'Upright',wingsPresence:'Absent'},
 chest:{...regional.chest,type:'Flat / pectoral',size:'Medium',shape:'Custom',shapeCustom:'Defined, moderately developed pectorals'},
 arms:{...regional.arms,count:'2',type:'Human arms',length:'Average',muscle:'Defined',grooming:'Custom',groomingCustom:'No body hair'},
 hands:{...regional.hands,count:'2',type:'Human hands',size:'Average',width:'Average'},
 fingers:{...regional.fingers,count:'5',length:'Average',thickness:'Slender',nails:'Claws',nailLength:'Short',nailShape:'Custom',nailShapeCustom:'Tapered claw-like tips',nailColour:'Custom',nailColourCustom:'Hardened black',nailMaterial:'Custom',nailMaterialCustom:'Hardened claw-like tissue, composition unspecified'},
 voice:{...regional.voice,neck:'Average',pitch:'Low',quality:'Custom',qualityCustom:'Quiet, measured and clearly resonant'},
 face:{...regional.face,shape:'Custom',shapeCustom:'Angular oval',jaw:'Custom',jawCustom:'Defined jaw',chin:'Not specified',cheeks:'Custom',cheeksCustom:'Restrained cheekbones',noseSize:'Average',noseShape:'Straight',lipFullness:'Medium',lipShape:'Not specified',salivation:'Average',facialHair:'Clean-shaven',complexion:[{kind:'Clear/even complexion'}]},
 eyes:{count:'2',size:'Average',shape:'Almond',iris:'Custom',irisCustom:'Black iris and pupil blending visually',sclera:'Red',material:'Not specified'},
 ears:{...regional.ears,count:'2',size:'Average',shape:'Custom',shapeCustom:'Slightly pointed'},
 hair:{colour:'Black',length:'Short',texture:'Straight',density:'Dense',style:'Custom',styleCustom:'Swept back',material:'Not specified'},
 skin:{material:'Skin',surfaceColour:'Red',texture:'Custom',textureCustom:'Thick and leathery; face smooth and poreless',markings:[{kind:'Custom',detail:'Demonic carved runes matching the collar and shackles',location:'Upper chest below the collarbones',prominence:'Visible when uncovered'}],bodyHair:'Custom',bodyHairCustom:'No body hair'},
 genitalAnatomy:{...regional.genitalAnatomy,configuration:'Penis and testes',length:{mode:'Enter measurement',value:10,unit:'in'},testes:'Large'},
 tail:{presence:'Present',description:'Custom',descriptionCustom:p.appearance.tail,material:'Skin',surfaceColour:'Red'},
 scent:{natural:'Custom',naturalCustom:'No natural body scent',strength:'No noticeable scent',perspiration:'Custom',perspirationCustom:'None; does not sweat',temperature:'Custom',temperatureCustom:'102°F baseline;104°F for one game hour after actually consuming ice cream'}
};
const record=A.record({id:'npc:lee-singh',name:'Lee Singh',bodyType:'humanoid',raw:{gender:'Male',height:'6 ft 2 in',weight:'195 lb',build:p.appearance.build,skin:p.appearance.skin,hair:p.appearance.hair,eyes:p.appearance.eyes,ears:p.appearance.ears,face:p.appearance.face+'; '+p.appearance.horns,footSize:'Toes end in hardened black claws',voice:p.voice},answers,exact:approvedDimensions,source:['Owner-approved detailed appearance proposal2026-11-24'],notes:[
 'Adult independent male incubus NPC; early-forties appearance is not a chronological age. No collectible Lee form.',
 'Owner approved humanoid-reference proposal:33.5waist,40hips,35.5under-chest,40chest,17shoulders,24.5shoulder-to-wrist,34inseam in inches. These are accepted design values, not a universal nonhuman calculator change.',
 'Horns remain within Face; Wings within Back; all24 existing fields and their order are retained. Tail approximately3ft, spade-tipped, thick red leathery skin.',
 'Only real recorded ice-cream consumption triggers104°F for60game minutes; baseline102°F. This grants no heat damage, fever, sweat, light, supernatural sight, claw attack or flight.',
 'Classic matching garments, wrist/ankle shackles and runic throat collar remain separate worn belongings; no invented restraint, curse, chain or rune power.',
 'Exact chronological age, horn substance, eye tissue, hair substance, claw composition and unrequested intimate details remain unspecified. Portrait owner-approved and connected locally; no publication.'
]});
const precise=T.serialize({schema:1,mode:'universal',answers:record.answers},{requireComplete:true,review:{values:approvedDimensions,sources:Object.fromEntries(Object.keys(approvedDimensions).map(k=>[k,'entered']))}});for(const field of T.fields)if(field.parts.some(part=>part.kind==='exact'&&approvedDimensions[part.measurement]!=null))record.appearance[field.key]=precise[field.key];
function freeze(x){if(x&&typeof x==='object'){Object.values(x).forEach(freeze);Object.freeze(x);}return x;}return freeze({...record,measurements:{units:'in',values:approvedDimensions,sources:Object.fromEntries(Object.keys(approvedDimensions).map(k=>[k,'owner-approved proposal']))},portrait:p.portrait,status:'Detailed appearance and portrait approved, connected locally; unpublished'});
});
