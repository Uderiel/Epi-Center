/* Public shop entry is separate from staff/key access and the ability to leave. */
(function(r,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiBusinessAvailability=a;})(globalThis,function(){
'use strict';
function evaluate({name,scheduledOpen,closed=false,staff=[]}){
 const working=staff.filter(a=>a.present===true&&a.working===true);
 if(!scheduledOpen||closed)return {open:false,reason:'closed',message:name+' is closed at this time.',staff:working};
 if(!working.length)return {open:false,reason:'unstaffed',message:name+' is not open at this time. No staff member is available to serve customers.',staff:[]};
 return {open:true,reason:null,message:name+' is open.',staff:working};
}
function requireEntry(status){if(!status.open)throw Error(status.message);return status;}
return Object.freeze({evaluate,requireEntry});
});
