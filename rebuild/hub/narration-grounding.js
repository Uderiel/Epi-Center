/* Validate object-view narration against a frozen event, not generated history. */
(function(r,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiNarrationGrounding=a;})(globalThis,function(){
const RULES='The only consciousness in the footwear is the original player (you). The shoes have no mind or personality. Priya is the separate, unchanged wearer; item-binding never affects her mind, perception or identity. Do not assign feelings, submission, surrender, acceptance, confusion or loss of awareness to the player. Describe only the present recorded senses/event. No invented workday, return from work, yesterday history, door position, windows, cedar, sachets or material. Do not restate numbers, percentages, resource values, dice, timestamps or statistics in narrative prose; the exact mechanical receipt is displayed separately. Failed opposed checks can still reduce binding through completed Common mastery-progress consolidation; decreasing binding is not deeper submission. Completed mastery progress alone is not full form mastery or release: use formMastered and releaseEligible. No headings or narrator labels. Use brief second-person prose; ordinary physical third-person wearer actions must already be recorded.';
function validate(text,facts,experience=null){if(facts?.source!=='priya-flats')return [];const t=String(text||''),issues=[];
 if(/^\s*#|\b(?:Experience Narrator|Narrator)\s*:/i.test(t))issues.push('Remove headings and narrator labels.');
 const times=t.match(/\b(morning|afternoon|evening|night)(?:time)?\s+(?:light|sun|sunlight|sky|glow)/gi)||[];if(facts.light&&times.some(x=>!x.toLowerCase().startsWith(facts.light))||facts.light==='night'&&/\b(?:sunlight|sunlit)\b/i.test(t))issues.push('Match the recorded light; do not invent daylight.');
 if(/\b(?:resolve|mastery|percent(?:age)?|d20|d50)\b/i.test(t))issues.push('Keep statistic labels and values in the exact receipt; describe effort and binding qualitatively.');
 if(/\d/.test(t))issues.push('Do not restate numerical mechanics or timestamps; preserve the separate exact receipt.');
 if(/\b(?:flats|shoes|footwear)(?:['’]s|['’])?\s+(?:(?:dim|scattered|fading|own)\s+)*(?:consciousness|awareness|mind|willpower|perception)|\b(?:their|its)\s+(?:consciousness|awareness|mind|willpower)/i.test(t))issues.push('The original player is the only consciousness; address the player as you, not a shoe mind.');
 if(/Priya['’]s\s+(?:perception|mind|consciousness|willpower|awareness)|\b(?:her own skin|her own body|she breathes easier|she breathed easier)\b/i.test(t))issues.push('Priya is not bound or transformed; do not transfer the player binding to the wearer or invent her reaction.');
 if(/\byou (?:feel|become|are|grow) (?:relieved|happy|sad|afraid|content|submissive|accepting|defeated|resigned)\b|\brelief is palpable\b/i.test(t))issues.push('Do not assign an emotional reaction to the player.');
 if(/\b(?:passive acceptance|submission|surrender|defiance.{0,35}(?:dissipat|vanish|fade)|scattered awareness|dim consciousness|los(?:e|es|ing|t).{0,25}awareness)\b/i.test(t))issues.push('Do not decide the player emotions, surrender or awareness.');
 const placed=facts.lastPlacement,daysApart=placed?Math.floor(facts.at/1440)-Math.floor(placed.at/1440):null;
 if(/\b(?:after (?:returning|coming) (?:home )?from work|after work|returned from work|returning from work|commute home)\b/i.test(t)&&placed?.reason!=='work')issues.push('No work-related placement was recorded; do not invent a commute or prior workday.');
 if(/\byesterday\b/i.test(t)&&daysApart!==1||/\blast night\b/i.test(t)&&(daysApart!==1||placed.at%1440<1080)||/\bearlier today\b/i.test(t)&&daysApart!==0)issues.push('That placement history is not supported by the recorded date.');
 if(/\b(?:cedar|sachet|ajar|dust motes|shaft of|closet door|polished leather|gleaming leather|laces|shoelaces|sneakers|coffee maker|leather conditioner|rosemary|sage)\b/i.test(t))issues.push('Those room objects, door/light-source details or material finishes are not in the recorded snapshot.');
 if(/\b(?:flats|shoes)[^.!?\n]{0,90}(?:waiting patiently|hopes?|wishes?|wants?)\b/i.test(t))issues.push('Do not give the footwear a personality or wishes.');
 if((!facts.material||facts.material==='unrecorded')&&/\b(?:leather|suede|polished|gleaming)\b/i.test(t))issues.push('The footwear material is unrecorded; do not invent leather or suede.');
 if(experience?.after?.binding<experience?.before?.binding&&/\b(?:binding|pressure|control)[^.!?\n]{0,50}(?:intensif|increase|tighten|deepen)|\bdeeper\s+(?:into\s+)?submission/i.test(t))issues.push('Binding decreased; do not describe it tightening or increasing.');
 if(!(experience?.permanentBound||facts.permanentBound)&&/\b(?:forever bound|permanently bound|no possibility of resistance|any possibility of resistance)\b/i.test(t))issues.push('No permanent binding was recorded.');
 return [...new Set(issues)];}
function validateDialogue(text,actor,history=[]){const t=String(text||''),issues=[];
 const first=/^\s*(?:[*_]+)?(Priya|Nadia|Richard|Daniel|Charity|Eve)\s+(?:looks?|looked|glances?|glanced|smiles?|smiled|says?|said|leans?|leaned|adjusts?|adjusted|pushes?|pushed|swivels?|swiveled)\b/i.exec(t);
 if(first&&!actor.name.toLowerCase().startsWith(first[1].toLowerCase()))issues.push('The reply speaks as another character. Speak only as '+actor.name+'.');
 const words=value=>String(value||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(Boolean),tokens=new Set(words(t));
 if(tokens.size>=18)for(const h of history.filter(x=>x.role==='assistant')){const prev=new Set(words(h.content));if(prev.size<18)continue;const common=[...tokens].filter(x=>prev.has(x)).length;if(common/Math.max(tokens.size,prev.size)>=.78){issues.push('This repeats a previous reply. Answer the current question and continue the actual conversation without restarting.');break;}}
 return issues;
}
function validateRoom(text,record){const t=String(text||''),known=String(record||'').toLowerCase(),issues=[];
 // Concrete unsupported fixtures repeatedly observed in owner reports.
 for(const prop of ['gauzy curtains','textbooks','coffee cups','mailboxes','potted plant','overturned cushions','snack bags','vanilla air freshener','security guard','third-floor','apartment 407','new marketing associate','lavender sachet','cedar'])if(t.toLowerCase().includes(prop)&&!known.includes(prop))issues.push('Unrecorded scene detail: '+prop+'. Use only the recorded room and event.');
 return issues;
}
return Object.freeze({RULES,validate,validateDialogue,validateRoom});});
