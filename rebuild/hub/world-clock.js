/* Temporary action-driven time restored from v0.8.84; no wall-clock/offline ticking. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiWorldClock=api;})(globalThis,function(){
'use strict';
const DAYS=Object.freeze(['Mon','Tue','Wed','Thu','Fri','Sat','Sun']);
const COSTS=Object.freeze({travel:8,inspect:1,dialogue:2,survey:5,wait:60});
function ensure(save){if(Number.isSafeInteger(save.worldClock?.minutes)&&save.worldClock.minutes>=0)return save.worldClock;let minutes=540,elapsed=Math.max(0,Math.floor(Number(save.devVitals?.minutes)||0));const old=save.erin817;const match=String(save.hub?.gameTime||'').match(/Day\s+(\d+)\s*[·|]\s*(\d{1,2}):(\d{2})/i);if(old&&Number.isFinite(old.clock)&&Number.isFinite(old.minute)){minutes=(Math.max(1,Math.floor(Number(old.day)||1))-1)*1440+Math.max(0,Math.floor(old.clock))*60+Math.max(0,Math.floor(old.minute));}else if(match){minutes=(Math.max(1,+match[1])-1)*1440+(+match[2])*60+(+match[3]);}else minutes+=elapsed;save.worldClock={version:1,minutes,elapsed};return save.worldClock;}
function view(save){const c=ensure(save),daily=c.minutes%1440;return {day:Math.floor(c.minutes/1440)+1,hour:Math.floor(daily/60),minute:daily%60,elapsed:c.elapsed||0};}
function phase(save){const v=view(save);return v.hour>=7&&v.hour<19?'day':'night';}
function label(save){const v=view(save);return DAYS[(v.day-1)%7]+' · '+String(v.hour).padStart(2,'0')+':'+String(v.minute).padStart(2,'0');}
function formatText(text){return String(text??'').replace(/Day\s+(\d+)\s*·\s*(\d{1,2}:\d{2})/g,(_,day,time)=>DAYS[(Number(day)-1)%7]+' · '+time);}
function advance(save,minutes){if(!Number.isSafeInteger(minutes)||minutes<0||minutes>100000)throw Error('Enter a whole number of minutes from 0 to 100000.');const c=ensure(save);c.minutes+=minutes;c.elapsed=(c.elapsed||0)+minutes;return view(save);}
return Object.freeze({DAYS,COSTS,ensure,view,phase,label,formatText,advance});
});
