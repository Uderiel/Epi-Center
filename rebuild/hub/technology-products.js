/* Authored department knowledge; browsing never creates stock, orders or devices. */
(function(r,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiTechnologyProducts=a;})(globalThis,function(){
'use strict';
const catalog=Object.freeze([
 {id:'alarms',name:'Alarm systems',description:'Alarm systems for home and property security.',available:true},
 {id:'cameras',name:'Security camera systems',description:'Camera systems for monitoring a property.',available:true},
 {id:'home-bots',name:'Domestic home-care bots',description:'Domestic bots that can cook, clean and keep a home tidy.',available:true},
 {id:'display-stands',name:'Home form-display stands',description:'The display stands used by the Form Repository, also sold for displaying forms at home.',available:true},
 {id:'storage',name:'Data storage',description:'Products and services for storing data.',available:true},
 {id:'data-security',name:'Data security',description:'Products and services for protecting stored data.',available:true},
 {id:'phones',name:'Player cell phones',description:'The cell phones used by players are a planned product. Devices and phone functions are not available yet.',available:false}
].map(Object.freeze));
return Object.freeze({catalog,get:id=>catalog.find(p=>p.id===id)||null});
});
