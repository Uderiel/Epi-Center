/* Temporary action-driven time restored from v0.8.84; no wall-clock/offline ticking. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiWorldClock=api;})(globalThis,function(){
'use strict';
const DAYS=Object.freeze(['Mon','Tue','Wed','Thu','Fri','Sat','Sun']);
const COSTS=Object.freeze({travel:8,inspect:1,dialogue:2,survey:5,wait:60});
const VR_MONTH_DAYS=30,SUNSET=19*60,SUNRISE=7*60;
function calendar(save){const {day}=view(save);return {month:Math.floor((day-1)/VR_MONTH_DAYS)+1,dayOfMonth:(day-1)%VR_MONTH_DAYS+1,daysInMonth:VR_MONTH_DAYS};}
// Three closing nights of each deterministic VR month; the final sunrise is next month.
function lunarWindows(save,from,to){if(!Number.isSafeInteger(from)||!Number.isSafeInteger(to)||from<0||to<from)throw Error('Use a nondecreasing whole game-minute calendar interval.');const span=VR_MONTH_DAYS*1440,windows=[];for(let m=Math.max(0,Math.floor(from/span)-1);m<=Math.floor(to/span);m++)for(let night=1;night<=3;night++){const start=m*span+(VR_MONTH_DAYS-4+night)*1440+SUNSET,end=start+1440-SUNSET+SUNRISE;if(end>from&&start<=to)windows.push({id:'vr-month-'+(m+1)+'-night-'+night,night,start,end});}return windows;}
function ensure(save){if(Number.isSafeInteger(save.worldClock?.minutes)&&save.worldClock.minutes>=0)return save.worldClock;let minutes=540,elapsed=Math.max(0,Math.floor(Number(save.devVitals?.minutes)||0));const old=save.erin817;const match=String(save.hub?.gameTime||'').match(/Day\s+(\d+)\s*[·|]\s*(\d{1,2}):(\d{2})/i);if(old&&Number.isFinite(old.clock)&&Number.isFinite(old.minute)){minutes=(Math.max(1,Math.floor(Number(old.day)||1))-1)*1440+Math.max(0,Math.floor(old.clock))*60+Math.max(0,Math.floor(old.minute));}else if(match){minutes=(Math.max(1,+match[1])-1)*1440+(+match[2])*60+(+match[3]);}else minutes+=elapsed;save.worldClock={version:1,minutes,elapsed};return save.worldClock;}
function view(save){const c=ensure(save),daily=c.minutes%1440;return {day:Math.floor(c.minutes/1440)+1,hour:Math.floor(daily/60),minute:daily%60,elapsed:c.elapsed||0};}
function phase(save){const v=view(save);return v.hour>=7&&v.hour<19?'day':'night';}
function label(save){const v=view(save);return DAYS[(v.day-1)%7]+' · '+String(v.hour).padStart(2,'0')+':'+String(v.minute).padStart(2,'0');}
function greeting(save,at=ensure(save).minutes){const m=at%1440;return m<300?'Hello':m<720?'Good morning':m<1080?'Good afternoon':'Good evening';}
function formatText(text){return String(text??'').replace(/Day\s+(\d+)\s*·\s*(\d{1,2}:\d{2})/g,(_,day,time)=>DAYS[(Number(day)-1)%7]+' · '+time);}
function advance(save,minutes){if(!Number.isSafeInteger(minutes)||minutes<0||minutes>100000)throw Error('Enter a whole number of minutes from 0 to 100000.');const c=ensure(save);c.minutes+=minutes;c.elapsed=(c.elapsed||0)+minutes;return view(save);}
return Object.freeze({DAYS,COSTS,VR_MONTH_DAYS,SUNSET,SUNRISE,calendar,lunarWindows,ensure,view,phase,label,greeting,formatText,advance});
});
