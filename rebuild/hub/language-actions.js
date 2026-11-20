/* Intent slots + contextual entity resolution. Parsing never changes game state. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(n?require('./roleplay-input'):r.EpiRoleplayInput,n?require('./text-actions'):r.EpiTextActions,n?require('./action-lexicon'):r.EpiActionLexicon);if(n)module.exports=a;else r.EpiLanguageActions=a;})(globalThis,function(I,T,L){
function analyze(raw){const p=I.parse(raw);if(p.privateNarration)return {mode:'private'};const parts=p.narration.filter(n=>n.kind==='action');if(parts.length>1)return {mode:'clarify',text:'Please give one action at a time.'};let text=parts[0]?.text||p.expressed;text=text.trim().replace(/[*!]+$/,'');
 const desire=text.match(/^(?:I\s+(?:want|wish|hope|plan|intend|would like|would love|will|am going)\s+(?:to\s+)?|I['’]d\s+(?:like|love)\s+to\s+)(.+)$/i);if(desire)return {mode:'desire',statement:text,intent:L.parse(desire[1]),actionTaken:false};
 const speech=L.parse(text);if(speech?.id==='speech')return {mode:'speech',...speech};
 const purpose=text.match(/\s+(?:because\s+|in order to\s+|so that\s+|so I can\s+)(.+)$/i),main=purpose?text.slice(0,purpose.index).trim():text;
 const q=T.input(main);if(!q)return {mode:'private'};if(q.clarify)return {mode:'clarify',text:q.clarify};const intent=L.parse(q.text);return intent?{mode:/^(?:can|could|may|would)\s+(?:I|you)\b|^please\b/i.test(main)?'request':'action',...intent,purpose:purpose?{text:purpose[1].trim(),observable:false}:null,main}:{mode:'unrecognized'};
}
function recognize(raw){const a=analyze(raw);return ['action','request','speech'].includes(a.mode)?a:null;}
function name(value){return String(value||'').toLowerCase().replace(/[’']/g,'').replace(/\b(?:the|my)\b/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
function resolve(target,entities,{lastId=null}={}){const q=name(target);if(['her','him','them','it','that person','that item'].includes(q)&&lastId){const row=entities.find(x=>x.id===lastId);if(row)return {kind:'target',target:row};}const exact=entities.filter(e=>[e.name,...e.aliases||[]].some(x=>name(x)===q)),matches=exact.length?exact:entities.filter(e=>q&&name(e.name).split(' ')[0]===q);const unique=[...new Map(matches.map(e=>[e.id,e])).values()];return unique.length===1?{kind:'target',target:unique[0]}:unique.length?{kind:'ambiguous',targets:unique}:{kind:'missing'};}
return Object.freeze({analyze,recognize,resolve});
});
