/* Original 0.8.67 transaction/scheduling engine, retained by final 0.8.84. Current adapter owns all game authority. */
(function(r){const Autonomy867=(()=>{
 const copy=x=>JSON.parse(JSON.stringify(x));
 const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
 function transaction(patches){
  if(!Array.isArray(patches)||!patches.length)return {ok:false,reason:'No state effects supplied',changes:[]};
  const applied=[],changes=[];
  try{
   for(const p of patches){
    if(!p.target||typeof p.key!=='string'||!p.label)throw Error('Invalid state effect');
    const had=Object.prototype.hasOwnProperty.call(p.target,p.key),before=p.target[p.key];
    if(equal(before,p.value))continue;
    applied.push({target:p.target,key:p.key,had,before});
    p.target[p.key]=copy(p.value);
    if(!equal(p.target[p.key],p.value))throw Error('State effect verification failed: '+p.label);
    changes.push({field:p.label,before:before===undefined?null:copy(before),after:copy(p.value)});
   }
   if(!changes.length)throw Error('No state change; action was not completed');
   return {ok:true,changes};
  }catch(e){
   for(const p of applied.reverse()){if(p.had)p.target[p.key]=p.before;else delete p.target[p.key];}
   return {ok:false,reason:e.message,changes:[]};
  }
 }
 function createEngine({profiles,actions,store,adapter,random=Math.random}){
  const registry=new Map(actions.map(a=>[a.id,a]));
  if(registry.size!==actions.length||new Set(profiles.map(p=>p.id)).size!==profiles.length)throw Error('Duplicate autonomy ID');
  function state(p,now){return store.actors[p.id]??={sequence:0,lastSeen:now,pending:null,cooldowns:{},needs:copy(p.needs||{}),sleeping:false,readyForSleep:false,posture:'standing',memory:[],history:[]};}
  function schedule(p,now){const day=adapter.calendarDay?.(now)??Math.floor(now/1440),minute=now%1440;return (day%7===0||day%7===6?p.schedules.weekend:p.schedules.weekday).find(x=>x.start<=minute&&minute<x.end);}
  function reason(a,p,st,c,now){
   if(!a||a.disabled)return a?.disabled||'Unavailable action';
   if(!c.active)return c.reason||'Actor is inactive';
   if(a.requiresControl!==false&&!c.control)return 'Body control is unavailable';
   if(c.externalCommitment)return 'An existing player commitment blocks autonomy';
   if(adapter.authority){const blocked=adapter.authority(a,p,st,c,now);if(blocked)return blocked;}
   if(c.conditions?.unsafe&&!a.safety)return 'Unsafe conditions require a safety action';
   if(a.capabilities?.some(k=>!p.capabilities.includes(k)))return 'Missing physical capability';
   if(a.locations&&!a.locations(c,p).includes(c.location))return 'Location is not eligible';
   if(a.rooms&&!a.rooms.includes(c.room))return 'Room is not eligible';
   if(a.windows&&!a.windows.some(([start,end])=>start<=now%1440&&now%1440<end))return 'Outside action time window';
   if(a.minTrust!==undefined&&(c.trust??0)<a.minTrust)return 'Relationship restriction';
   if(a.requiredItems?.some(id=>!c.items?.[id]||(c.items[id].location&&!['inventory','equipped'].includes(c.items[id].location))))return 'Required item is unavailable';
   if(a.requiredResources?.some(r=>(c.resources?.[r.id]??0)<r.quantity))return 'Required resource is unavailable';
   if((st.cooldowns[a.id]??-Infinity)>now)return 'Action cooldown';
   return a.check?.(c,st,p)||'';
  }
  function eligible(p,st,c,now){const slot=schedule(p,now);return (slot?.activities||[]).map(id=>registry.get(id)).filter(a=>!reason(a,p,st,c,now));}
  function decide(p,st,c,now,rng=random){
   if(st.nextAction){const next=registry.get(st.nextAction);if(!reason(next,p,st,c,now))return next;}
   const candidates=eligible(p,st,c,now).map(a=>({a,priority:typeof a.priority==='function'?a.priority(c,st,p):a.priority||0,weight:Math.max(0,(p.weights?.[a.id]??a.weight??1)*(a.modifier?.(c,st,p)??1))})).filter(x=>x.weight>0);
   if(!candidates.length)return null;
   const best=Math.max(...candidates.map(x=>x.priority)),pool=candidates.filter(x=>x.priority===best),sum=pool.reduce((n,x)=>n+x.weight,0);
   let roll=Number(rng());if(!Number.isFinite(roll))throw Error('Random value must be finite');
   roll=Math.max(0,Math.min(1-Number.EPSILON,roll))*sum;
   for(const x of pool){roll-=x.weight;if(roll<0)return x.a;}
   return pool.at(-1).a;
  }
  function record(p,st,event){
   const e={actor:p.id,name:p.name,...event};
   st.history.push(e);st.history=st.history.slice(-(p.historyLimit||60));
   if(e.outcome==='completed'){st.memory.push({action:e.action,at:e.at,location:e.location});st.memory=st.memory.slice(-(p.memoryLimit||20));}
   adapter.onEvent?.(p,st,e);
   return e;
  }
  function process(p,from,to){
   const st=state(p,from);
   if(to<=from||to<=st.lastSeen)return;
   const start=Math.max(from,st.lastSeen),before=adapter.context(p,st,start);
   st.lastSeen=to;
   if((before.present??before.active)&&!before.externalCommitment){if(Number.isFinite(st.needs.fatigue))st.needs.fatigue=Math.max(0,Math.min(100,st.needs.fatigue+(to-start)/60*(st.sleeping?-p.recoveryPerHour:p.fatiguePerHour)));}
   adapter.think?.(p,st,adapter.context(p,st,to),to);
   if(before.dialogueTurn||before.manualMovement)return;
   if(st.sleeping&&before.sleepInterrupted&&adapter.interrupt){const result=transaction(adapter.interrupt(p,st,before));record(p,st,{id:p.id+':'+(++st.sequence),action:'sleep',started:start,at:to,location:before.location,room:before.room,outcome:result.ok?'interrupted':'failed',reason:'Physical movement interrupted sleep',changes:result.changes});}
   if(!before.active||!before.control||before.externalCommitment){
    if(st.pending){record(p,st,{...st.pending,at:to,outcome:'cancelled',reason:before.reason||'Control or commitment changed',changes:[]});st.pending=null;}
    return;
   }

   if(!st.pending){
    const a=decide(p,st,before,start);if(!a)return;
    delete st.nextAction;const duration=Number(a.duration);if(!Number.isFinite(duration)||duration<=0)throw Error('Action duration must be positive');
    st.pending={id:p.id+':'+(++st.sequence),action:a.id,started:start,due:start+duration,location:before.location,room:before.room,guard:adapter.guard?.(a,p,st,before)||null};
   }
   const pending=st.pending,a=registry.get(pending.action),current=adapter.context(p,st,to);
   let failure=current.location!==pending.location||current.room!==pending.room?'Physical location changed during action':reason(a,p,st,current,to);
   if(!failure&&pending.guard&&!equal(pending.guard,adapter.guard?.(a,p,st,current)))failure='Relevant physical state changed during action';
   if(!failure&&to<pending.due)return;
   st.pending=null; // Claim once before effects, including failures and re-entrant calls.
   if(st.history.some(e=>e.id===pending.id))return;
   let result;
   try{result=failure?{ok:false,reason:failure,changes:[]}:transaction(adapter.plan(a,p,st,current,to));}
   catch(e){result={ok:false,reason:e.message,changes:[]};}
   st.cooldowns[pending.action]=to+(result.ok?(a.cooldown??0):5);
   record(p,st,{...pending,at:to,outcome:result.ok?'completed':'failed',reason:result.reason||'',changes:result.changes});
   if(st.consent?.actionId===pending.action)delete st.consent;
   if(result.ok&&a.followUp&&registry.has(a.followUp))st.nextAction=a.followUp;
  }
  function pump(from,to){for(const p of profiles)process(p,from,to);}
  return {pump,state,schedule,reason,eligible,decide,registry,profiles,transaction};
 }
 return {createEngine,transaction};
})();
if(typeof module==="object"&&module.exports)module.exports=Autonomy867;else r.EpiLegacyAutonomy=Autonomy867;})(globalThis);
