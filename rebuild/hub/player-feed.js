/* Player wording is immutable; physical identity and owner-only alias are separate. */
(function(r,f){const n=typeof module==='object'&&module.exports,api=f(n?require('./form-living'):r.EpiFormLiving);if(n)module.exports=api;else r.EpiPlayerFeed=api;})(globalThis,function(P){
'use strict';
function stamp(s,entry){if(entry.origin!=='player'&&!entry.playerAction||entry.actor)return entry;const f=P.current(s),original=String(s.name||'Player'),name=f?.name||original,who=String(entry.speaker||original),suffix=entry.playerAction?' · '+who:who.startsWith(original)?who.slice(original.length):' · '+({world:'Location',npc:'NPC',players:'Player',form:'Form'}[s.hub?.channel]||'Location');return {...entry,speaker:name+suffix,...(entry.origin==='player'?{inputText:String(entry.text??'')}:{}),actor:{formId:f?.id||null,publicName:name},ownerAlias:f?original:null,audience:'owner',channel:s.hub?.channel||'world'};}
function speaker(entry,{owner=true}={}){if(!entry.actor){const raw=entry.speaker||'A.S.S.';return raw.replace(/^Erin(?= ·|$)/,'Erin Lillard').replace(/^Richard(?= ·|$)/,'Richard Carter');}const name=entry.actor.publicName,suffix=String(entry.speaker||name).slice(name.length);return name+(owner&&entry.ownerAlias?' ('+entry.ownerAlias+')':'')+suffix;}
function text(entry){return entry.inputText??entry.canonicalText??entry.text??'';}
function publicEntry(entry){if(entry.audience==='owner'||entry.channel==='form'||/Private/i.test(entry.speaker||'')||/private intention:/i.test(entry.text||''))return null;const out={speaker:speaker(entry,{owner:false}),text:entry.origin==='player'?text(entry):entry.text,gameAt:entry.gameAt,origin:entry.origin};return out;}
function publicActor(entry){return entry.actor?{formId:entry.actor.formId,publicName:entry.actor.publicName}:null;}
return Object.freeze({stamp,speaker,text,publicEntry,publicActor});
});
