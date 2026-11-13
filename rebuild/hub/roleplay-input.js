/* Player punctuation carries narrative meaning; narration is never a spoken command. */
(function(r,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiRoleplayInput=a;})(globalThis,function(){
function parse(value){const raw=String(value||''),narration=[];const expressed=raw.replace(/\*{1,2}([^*]+)(?:\*{1,2}|$)/g,(_,text)=>{text=text.trim();const kind=/\b(dream|dreaming|dreamt|dreamed|nightmare)\b/i.test(text)?'dream':/\b(imagine|imagining|fantasi[sz]|hypothetical)\w*/i.test(text)?'imagined':/\b(think|thought|silently|unspoken|wonder|feel|remember|inner|internally|mind|mentally)\w*/i.test(text)?'unspoken':'action';narration.push({kind,text,spoken:false});return ' ';}).replace(/\s+/g,' ').trim();return {expressed,narration,onlyNarration:!!narration.length&&!expressed,privateNarration:narration.some(x=>x.kind!=='action')};}
return Object.freeze({parse});
});
