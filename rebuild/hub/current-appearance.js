/* One live, read-only body view for display, inspection and request freshness. */
(function(r,f){const a=f((name,global)=>typeof module==='object'&&module.exports?require(name):r[global]);if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiCurrentAppearance=a;})(globalThis,function(get){
'use strict';
const copy=x=>JSON.parse(JSON.stringify(x)),REGIONS=Object.freeze({feet:['footSize'],legs:['legs'],hands:['hands','fingers'],arms:['arms','back'],hair:['hair'],face:['face','eyes','ears','lips','lipColor','lipGloss','lipClosingAbility'],hips:['hips','waist','buttocks'],torso:['chest','back'],wings:['back'],tail:['tail']});
function aligned(s,body){const catalogue=get('./appearance-catalog','EpiAppearanceCatalog');return catalogue?catalogue.current(s,body):copy(body);}
function current(save){const s=copy(save),Cat=get('./priya-cat','EpiPriyaCat'),Flats=get('./priya-flats','EpiPriyaFlats'),E=get('./erin-restoration','EpiErin'),K=get('../combat/kibbles-form','EpiKibblesForm');if(Flats?.active(s))return aligned(s,Flats.body(s));const id=s.activeForm||s.form?.id,form=id&&s.forms?.[id];let body,household=true;
 if(Cat?.active(s)){body=copy(Cat.form(s)?.appearance||{});household=false;}
 else if(id&&!['erin','kibbles'].includes(id)&&form?.completedTransformation){body=copy(form.appearance||form.body||form.livingProfile?.body||{});household=false;}
 else body=K.body(s,E.body(s,s.appearance||{}));
 // Normalize the reached body before appearance alterations so added care/style details retain the known anatomy.
 body=aligned(s,body);
 if(household)body=get('./erin-household','EpiErinHousehold')?.body(s,body)||body;
 for(const [name,global]of [['./player-clothing','EpiPlayerClothing'],['./cherished-shop','EpiCherishedShop'],['./charity-household','EpiCharityHousehold'],['./lip-cosmetics','EpiLipCosmetics'],['./candy-effects','EpiCandyEffects']])body=get(name,global)?.body(s,body)||body;
 // The structured face field must not keep a superseded lip-fullness value beside the live alteration.
 if(body.lips&&typeof body.face==='string')body.face=body.face.replace(/(\bLip fullness:\s*)[^;]+/i,(_,label)=>label+body.lips);
 body=aligned(s,body);if(body.lips&&typeof body.face==='string')body.face=body.face.replace(/(\bLip fullness:\s*)[^;]+/i,(_,label)=>label+body.lips);return get('./bimbo-virus-physiology','EpiBimboVirusPhysiology').appearance(s,body);
}
function select(save,regions=['body']){const appearance=current(save),keys=regions.includes('body')?Object.keys(appearance):[...new Set(regions.flatMap(k=>REGIONS[k]||[]))];return Object.fromEntries(keys.filter(k=>Object.hasOwn(appearance,k)).map(k=>[k,appearance[k]]));}
function inspection(save,{regions=['body'],kind='observe',raw='',request=raw}={}){const e=save.erinRestoration,erin=!!(e?.stage>0&&!(e.mastered&&e.released)&&(!save.activeForm||save.activeForm==='erin')&&!save.world?.priyaFlats?.active),E=get('./erin-restoration','EpiErin');return {source:'current-body-awareness',request,kind,regions:[...regions],formId:save.activeForm||save.form?.id||(erin?'erin':null),appearance:select(save,regions),controllerResolved:true,currentAppearanceOnly:true,audience:'owner',spokenWords:false,currentAppearanceIsPhysical:true,...(erin?{physicalChanges:{source:'recorded-erin-heels',reachedStage:e.stage,fullyTransformed:e.stage===23,affectedRegions:[...new Set(E.data.stages.slice(0,e.stage).map(row=>row[0]))],realBodyChanges:true,notOnlyFootwear:true}}:{})};}
function signature(save){return JSON.stringify(current(save));}
return Object.freeze({REGIONS,current,select,inspection,signature});
});
