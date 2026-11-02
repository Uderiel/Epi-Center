/* Eve's authored lore answers, separate from quest advancement and private forms. */
(function(r,f){const api=f(typeof module==='object'&&module.exports?require('./legacy-0884-data'):r.EpiLegacy0884);if(typeof module==='object'&&module.exports)module.exports=api;else r.EpiAuthoredDialogue=api;})(globalThis,function(D){
function eve(save,raw){if(!raw||!/^(Central Hub (?:Spire|N|NE|E|SE|S|SW|W|NW))$/.test(save.hub?.location||''))return null;if(/\b(quest|first steps|hangry|report|reward|complete)\b/i.test(raw))return null;return D.eveResponses.find(x=>new RegExp(x.pattern,'i').test(raw))?.text||null;}
return Object.freeze({eve});
});
