/* Owner-approved Aniya visual facts and portrait in the existing24-field universal template. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('./appearance-alignment'):r.EpiAppearanceAlignment,n?require('./location-details'):r.EpiLocationDetails);if(n)module.exports=a;else r.EpiAniyaAppearance=a;})(globalThis,function(A,D){
'use strict';const p=D.locations['Form Repository'].staffProfiles.aniya,f=p.appearanceApprovedFacts,skin=Object.fromEntries(['footSize','legs','hips','buttocks','waist','back','chest','arms','hands','fingers','voice','face','ears','genitalAnatomy'].map(k=>[k,{material:'Skin',surfaceColour:'Red'}]));
const record=A.record({id:'npc:aniya-singh',name:'Aniya Singh',bodyType:'humanoid',raw:{gender:'Female',build:'Adult succubus with full approximately C proportions, a waspish waist and pronounced hips',hair:f.hair,face:f.face+'; longer sharper canine fangs than Lee; tongue approximately three times normal adult human length; thicker salivary glands producing more viscous saliva; small swept-back dark horns',skin:f.skin,eyes:f.eyes,ears:f.ears,footSize:f.footwear+'; '+f.claws,voice:p.characterBrief.voice},answers:{...skin,
 chest:{...skin.chest,type:'Breasts',cup:'C',shape:'Rounded'},waist:{...skin.waist,width:'Custom',widthCustom:'Very narrow and waspish'},hips:{...skin.hips,width:'Wide',shape:'Rounded',proportions:'Fuller'},
 hair:{length:'Custom',lengthCustom:'Mid-shoulder',colour:'Black',texture:'Wavy',style:'Custom',styleCustom:'Styled shoulder-length waves'},
 eyes:{count:'2',iris:'Custom',irisCustom:'Golden',sclera:'Black'},ears:{...skin.ears,count:'2',size:'Custom',sizeCustom:'Longer and more pronounced than Lee’s',shape:'Pointed'},
 fingers:{...skin.fingers,count:'5',nails:'Claws',nailLength:'Long',nailShape:'Custom',nailShapeCustom:'Longer and sharper than Lee’s',nailColour:'Custom',nailColourCustom:'Black'},
 footSize:{...skin.footSize,presence:'Present',count:'2',type:'Humanlike feet',digits:'5',nails:'Claws',covering:'Skin',sizeMode:'Not specified'},legs:{...skin.legs,count:'2'},arms:{...skin.arms,count:'2'},hands:{...skin.hands,count:'2',type:'Human hands'},
 face:{...skin.face,chin:'Custom',chinCustom:'Softly rounded and less prominent',salivation:'High',facialHair:'Clean-shaven',complexion:[{kind:'Clear/even complexion'}]},
 skin:{material:'Skin',surfaceColour:'Red',texture:'Custom',textureCustom:'Fine leathery texture; softly shaped adult face'},
 genitalAnatomy:{...skin.genitalAnatomy,configuration:'Vulval anatomy',swelling:'Swollen'},
 voice:{...skin.voice,pitch:'Low',quality:'Husky'},
 tail:{presence:'Present',description:'Custom',descriptionCustom:'Approximately five feet long, red, with a heart-like spade tip and sharp potentially lethal edge',material:'Skin',surfaceColour:'Red'},
 scent:{natural:'Custom',naturalCustom:'No natural body scent',strength:'No noticeable scent',perspiration:'Custom',perspirationCustom:'None',temperature:'Custom',temperatureCustom:'102°F baseline'}
},source:['Owner-confirmed visual/anatomical details','Owner-approved revised portraitv2'],notes:[
 'Approved portrait establishes depicted face, red skin, golden/black eyes, black shoulder-length waves, outfit and body silhouette. Exact chronological age, height, weight and circumference proposals remain unspecified until approved numerically.',
 'C cup does not generate a circumference without approved under-chest input. Proposed5ft8/150lb/26waist/40.5hips/32.5under-chest/35.5chest are not silently made canon from an image.',
 'Clothing is separate from body material. Minimal supple leather stays against the skin; barefoot preference is not a movement bonus.',
 'Face holds tongue, fangs and salivary details; saliva frequency High and viscosity are distinct. No new top-level field and no invented drooling event, speech impairment, venom or additional anatomy.',
 'Claws/fangs and sharp-edged tail are owner-authored natural weapons; damage statistics and actual attacks remain unresolved.',
 'Passive aura, heat/sleep/escort and full routine mechanics remain unfinished; no preview image is evidence that those mechanics work.'
]});
function freeze(x){if(x&&typeof x==='object'){Object.values(x).forEach(freeze);Object.freeze(x);}return x;}return freeze({...record,portrait:p.portrait,status:'Owner-approved revised portrait and visual facts connected locally; numerical calibration proposals remain unknown; unpublished'});
});
