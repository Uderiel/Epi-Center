/* Personal praise upgrades the existing daily compliment allowance to five total, once. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require);else root.EpiAniyaCompliments=factory(null,root);})(globalThis,function(req,root){
'use strict';const get=(path,key)=>req?req(path):root[key],ID='npc:aniya-singh';
function memory(s){return get('./relationships','EpiRelationships').record(s,ID).memory.aniyaCompliments||={receipts:{},pending:null};}
function process(s,id,raw,{event}={}){
 const R=get('./relationships','EpiRelationships');if(R.entity(id)!==ID)return null;
 const B=get('./repository-social-boundaries','EpiRepositorySocialBoundaries'),actual=B.heardEvent(s,ID,raw,event);if(!actual)return null;
 const m=memory(s),receipt='speech:'+actual.id;if(Object.hasOwn(m.receipts,receipt))return m.receipts[receipt]?{...m.receipts[receipt],applied:false,delta:0,duplicate:true}:null;
 const p=get('./roleplay-input','EpiRoleplayInput').parse(raw),text=p.expressed.trim(),U=get('./relationship-interactions','EpiRelationshipInteractions'),scope=U.scope(s,ID),space=get('./scene-presence','EpiScene').perceptionSpace(actual.space);
 if(m.pending&&(m.pending.scope!==scope||m.pending.body!==actual.presentationKey||m.pending.space!==space))m.pending=null;
 let result=null;
 const praise=/\b(?:i (?:really )?(?:like|love|admire|appreciate) your|you(?: are|['’]re| look) (?:so |very )?(?:beautiful|gorgeous|lovely|attractive|alluring)|your .{1,55}(?:beautiful|gorgeous|lovely|striking)|what (?:attracts|draws) me)\b/i.test(text);
 const feature=/\b(?:eyes|gaze|hair|voice|confidence|smile|organization|attention to detail|the way you)\b/i.test(text),reason=/\b(?:because|contrast|the way|makes?|complements?|brings? out|against|why|draws? me|sets? .{1,20} off)\b/i.test(text);
 const hypothetical=p.privateNarration||/\b(?:hypothetically|if i|imagine|pretend|someone said|she said|he said|not saying|do not think|don't think|don’t think|do not find|don't find|don’t find|not (?:beautiful|gorgeous|lovely|attractive))\b/i.test(text);
 const falseFeature=/\b(?:blue|brown|green|grey|gray) eyes\b|\b(?:blond[e]?|white|red) hair\b|\b(?:blue|green|white) skin\b|\byour wings\b/i.test(text);
 if((praise||m.pending&&feature)&&hypothetical)result={kind:'aniya-compliment',text:'We can return to the actual conversation, my dear.',delta:0,applied:false};
 else if((praise||m.pending&&feature)&&falseFeature)result={kind:'aniya-compliment',text:'That description does not match me, my dear. Do pay attention to whom you are addressing.',delta:0,applied:false};
 else if(praise||m.pending&&feature&&reason){
  const visible=get('./scene-presence','EpiScene').canSee(s,'aniya-singh')||/\bvoice\b/i.test(text),specific=/\b(?:gold(?:en)?|black|red|wav(?:y|es)|husky|low|contrast|steady|reassur\w*|comfortable|calm|mischievous|brighten\w*|feel)\b/i.test(text),personal=visible&&feature&&reason&&specific&&text.split(/\s+/).length>=7;
  if(personal){
   const record=R.record(s,ID),generic=record.events['specific-compliment:universal:'+scope+':specific-compliment:compliment']?.delta||0;
   const outcome=R.event(s,ID,'personal-compliment','aniya:'+scope,{delta:Math.max(0,5-generic)});
   R.event(s,ID,'specific-compliment','universal:'+scope+':specific-compliment:compliment',{delta:0});
   result={...outcome,kind:'aniya-personal-compliment',totalAllowance:5,text:'Now, that was rather well observed. You have been paying attention, haven’t you? I do appreciate that.'};m.pending=null;
  }else{
   const outcome=U.award(s,ID,'specific-compliment',scope+':specific-compliment:compliment',{topic:'compliment'});
   result={...outcome,kind:'aniya-compliment',text:'How pleasant. Though I am rather curious what, precisely, has caught your eye.'};
   m.pending={scope,space,body:actual.presentationKey};
  }
 }
 m.receipts[receipt]=result;for(const old of Object.keys(m.receipts).slice(0,-100))delete m.receipts[old];
 if(result){actual.relationshipOutcomes||={};actual.relationshipOutcomes[ID]=result;const a=get('./scene-presence','EpiScene').actor(s,'aniya-singh');if(a)a.engagedUntil=actual.at+2;}
 return result;
}
function context(s,raw){const R=get('./relationships','EpiRelationships'),e=(s.world?.localSpeech||[]).at(-1);if(!e||e.playerId!==R.player(s)||e.presentationKey!==get('./aniya-social','EpiAniyaSocial').presentation(s)||!get('./scene-presence','EpiScene').canHear(s,'aniya-singh')||e.text!==raw||e.directedTo&&e.directedTo!==ID)return null;const result=e.relationshipOutcomes?.[ID];return result?.kind?.startsWith('aniya-')?{action:'repository.compliment',text:result.text,relationshipDelta:result.delta,totalAllowance:result.totalAllowance||1,status:'completed'}:null;}
return Object.freeze({process,context});
});
