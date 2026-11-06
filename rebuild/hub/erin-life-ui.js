/* Existing drawers remain projections of one physical room and one set of items. */
function erinLifeMarkup(){if(!EpiErin.present(save))return '';const L=EpiErinLife,{actor:a}=L.runtime(save),e=EpiErin.state(save),h=EpiErinHousehold.state(save),c=L.context(save,a),p=EpiErin.data.profile,pending=a.dialogue.pending;return '<section class="card" id="erinLife"><h3>Erin · Character & routine</h3><p>'+htmlEscape(p.occupation+' · '+p.temperament)+'</p><p>'+htmlEscape('Values: '+p.values.join(', ')+'. Interests: '+p.interests.join(', ')+'.')+'</p><p>Trust '+e.trust+'/100 · Stress '+e.stress+'/100 · '+htmlEscape(c.weekend?'Weekend routine':'Weekday routine')+' · '+htmlEscape(c.night?'Quiet hours':c.hour>=9&&c.hour<17&&!c.weekend?'Work hours':'Personal time')+'</p><p>Actual activity: '+htmlEscape(a.sleeping?'Sleeping in bed':a.pending?'In progress: '+a.pending.action.replace(/-/g,' ')+' · '+Math.max(0,a.pending.due-EpiWorldClock.ensure(save).minutes)+' game minutes remaining':a.posture)+'</p><p>Desired activity: '+htmlEscape(a.intention?.actionId||(c.night?'Prepare for sleep':a.needs.fatigue>=60?'Rest':c.hour>=9&&c.hour<17&&!c.weekend?'Office responsibilities':'Reading or quiet leisure'))+'. An intention or conversation does not move your body.</p>'+(a.sleepCycle?.active?'<button class="btn" data-life="resume-sleep">Resume full sleep · '+Math.max(0,a.sleepCycle.due-EpiWorldClock.ensure(save).minutes)+' minutes remaining</button>':'')+(pending?'<p>Discussion: '+htmlEscape(pending.actionId+' · '+pending.outcome)+'</p>'+(pending.outcome==='agree'?'<button class="btn" data-life="authorize">Authorize agreed activity</button>':''):'')+'<p class="small">Use Form chat to ask what she would prefer, suggest an activity, explain a reason, or decline. Physical routines need time and capability. At 75–100 influence, unmastered Erin decides; you can resist her decision or try to persuade her otherwise. Mastery keeps you in control.</p>'+(h.lastAction?'<p role="status">'+htmlEscape(h.lastAction)+'</p>':'')+'</section>';}
function erinObjectButtons(id,focused=false){const d=EpiErinHousehold.def(id),x=EpiErinHousehold.state(save).items[id],labels={examine:'Examine',take:d.slot?'Carry':'Pick Up',equip:'Equip',unequip:'Unequip',store:'Return to storage',deposit:'Deposit in hamper',retrieve:'Retrieve',use:'Use / Apply'};const tag=focused?'div':'details';return '<'+tag+' class="household-item" data-ui-key="household:'+htmlEscape(id)+'" '+(focused?'open':'')+'>'+(focused?'':'<summary>'+htmlEscape(d.name)+' ×1</summary>')+'<p>'+htmlEscape(x.location+' · '+x.condition)+'</p><div class="actions">'+EpiErinHousehold.actions(save,id).map(a=>'<button class="btn secondary" data-object-id="erin-item:'+htmlEscape(id)+'" data-object-action="'+a+'" '+(save.encounter?.active||!EpiErin.hands(save)?'disabled':'')+'>'+labels[a]+'</button>').join('')+'</div></'+tag+'>';}
function erinOwnedMarkup(){const H=EpiErinHousehold,h=H.state(save),owned=H.data.catalog.filter(d=>h.items[d.id].location==='inventory');return owned.length?'<section class="card"><h3>Carried household belongings</h3>'+(h.lastAction?'<p role="status">'+htmlEscape(h.lastAction)+'</p>':'')+owned.map(d=>erinObjectButtons(d.id)).join('')+'</section>':'';}
function erinLifeAction(action,id=''){try{const L=EpiErinLife,H=EpiErinHousehold;let result;if(action==='authorize')result={minutes:0,text:L.authorize(save)};else if(action==='resume-sleep'){const a=L.runtime(save).actor;if(!a.sleepCycle?.active)throw Error('No unfinished sleep cycle.');result={minutes:Math.max(0,a.sleepCycle.due-EpiWorldClock.ensure(save).minutes),text:'You resume the remaining sleep time.'};}else if(action.startsWith('kitchen:')){L.beforeAction(save,action);result=H.kitchen(save,action.split(':')[1],id);}else if(action==='groceries'){L.beforeAction(save,action);result=H.groceries(save,id);}else if(action==='laundry'){L.beforeAction(save,action);result=H.laundry(save,id);}else if(action==='bathroom'){L.beforeAction(save,action);result=H.bathroom(save,id);}else if(action==='brush'){L.beforeAction(save,action);result=H.use(save,'bath-toothbrush');}else if(action==='item-use'){L.beforeAction(save,action);result=H.use(save,id);}else result=L.manual(save,action,id);H.state(save).lastAction=result.text;EpiApartmentNav.record(save,null,result.text);store();if(result.minutes)advanceGameTime(result.minutes,action==='sleep-cycle'||action==='resume-sleep'?'Full sleep cycle':'Manual household activity');feedEntry('Household',result.text);}catch(error){EpiErinHousehold.state(save).lastAction=error.message;if(EpiErin.inside(save))EpiApartmentNav.record(save,null,error.message);feedEntry('A.S.S.',error.message);}store();render();}
document.addEventListener('click',event=>{const b=event.target.closest?.('[data-life]');if(b&&!b.disabled){closeDrawer();erinLifeAction(b.dataset.life,b.dataset.lifeId||'');}});
for(const d of EpiErinHousehold.data.catalog)EpiWorldObjects.register('erin-item:'+d.id,{name:()=>d.name,visible:(s,scope)=>{const x=EpiErinHousehold.state(s).items[d.id];return scope==='inventory'?['inventory','equipped'].includes(x.location):EpiErin.inside(s)&&EpiErinHousehold.available(s,d)&&!['inventory','equipped'].includes(x.location);},actions:s=>EpiErinHousehold.actions(s,d.id),perform(s,action){if(action!=='examine')EpiErinLife.beforeAction(s,'household-item');const result=EpiErinHousehold.item(s,d.id,action);if(EpiErin.inside(s)){EpiApartmentNav.state(s).item=d.id;EpiApartmentNav.record(s,null,result.text);}EpiErinHousehold.state(s).lastAction=result.text;return result;}});

EpiErinLife.setReporter(message=>feedEntry('Private · Erin',message));
EpiErin.setAuthority((s,kind,destination)=>EpiErinLife.beforeAction(s,kind,destination));

/* Each selected fixture owns its physical actions and storage contents. */
function erinObjectUseMarkup(id){
 if(!EpiErin.inside(save))return '';const H=EpiErinHousehold,h=H.state(save),room=save.world.applewood.room,exam=save.world.applewood.examined;
 const button=(label,action,key='')=>'<button type="button" class="btn secondary" data-life="'+action+'" data-life-id="'+htmlEscape(key)+'" '+(!EpiErin.hands(save)||save.encounter?.active?'disabled':'')+'>'+htmlEscape(label)+'</button>';
 const storage=(location,name)=>'<h4>'+htmlEscape(name)+'</h4>'+erinStorageContents(location);
 const food=location=>'<div class="food-stock">'+Object.entries(H.data.food).filter(([,v])=>v[2]===location).map(([key,v])=>'<div class="listitem"><span>'+htmlEscape(v[0])+' · '+Number(h.kitchen.stock[key]||0)+'</span>'+button('Eat / drink '+v[0],'kitchen:eat',key)+'</div>').join('')+'</div>';
 let out='';
 if(room==='living'){
  if(['sofa','armchair'].includes(id))out+=button(id==='sofa'?'Sit on sofa · 1 min':'Sit in armchair · 1 min','sit',id);
  if(id==='lamp')out+=button('Switch reading lamp · 1 min','lamp');
  if(['television','remote'].includes(id))out+='<p>Television: '+htmlEscape(H.data.tvModes[h.living.tv]||h.living.tv)+'</p><div class="actions">'+Object.entries(H.data.tvModes).map(([key,label])=>button(label,'tv',key)).join('')+'</div>';
  if(id==='book'&&exam['living:book'])out+='<button class="btn secondary" data-erin="read">Read the novel · 1 minute</button>';
  if(id==='fox'&&exam['living:fox'])out+=button(h.living.fox==='carried'?'Return carved fox to shelf':'Carefully pick up carved fox','fox');
  if(['snake','zz','pothos'].includes(id)&&exam['living:'+id])out+=button('Water plant · 1 min','water',id);
 }
 if(room==='bedroom'){
  if(id==='bed')out+=button('Sit on bed · 1 min','sit','bed')+button('Sleep a full cycle · 8 hours','sleep-cycle');
  if(id==='side')out+=button('Switch reading lamp · 1 min','lamp');
  if(id==='ironing')out+=button('Press a work blouse · 8 min','iron');
  if(id==='dresser')out+='<div class="apartment-objects">'+[['dresser-top','Dresser top'],...H.data.dresser.map((d,i)=>['drawer'+(i+1),'Drawer '+(i+1)+' · '+d[0]])].map(([location,name])=>'<button class="btn secondary" data-apartment-storage="'+location+'" data-storage-name="'+htmlEscape(name)+'">'+htmlEscape(name)+' →</button>').join('')+'</div>';
  if(id==='hamper'){const items=H.data.catalog.filter(d=>h.items[d.id].location==='hamper'||d.kind==='clothing'&&['inventory','equipped'].includes(h.items[d.id].location));out+='<h4>Hamper and carried garments</h4>'+items.map(d=>erinObjectButtons(d.id)).join('');}
 }
 if(room==='closet'){const places={wardrobe:['closet-professional','Professional wardrobe'],casual:['closet-casual','Casual wardrobe'],shoes:['closet-shoes','Ordinary footwear'],accessories:['closet-accessories','Accessories']};if(places[id])out+=storage(...places[id]);if(id==='socks')out+='<p>Socks and hosiery are in the bedroom dresser’s fifth drawer.</p>';}
 if(room==='bath'){
  if(id==='toilet')out+=button('Use toilet · 4 min','bathroom','toilet')+storage('bath-toilet','Toilet supplies');
  if(id==='shower')out+=button('Shower · 12 min','bathroom','shower')+button('Relaxing bath · 25 min','bathroom','bath')+storage('bath-shower','Bath & shower supplies');
  if(id==='basin')out+=button('Brush teeth · 3 min','brush')+button('Everyday makeup · 12 min','bathroom','makeup')+button('Remove makeup · 4 min','bathroom','remove-makeup')+storage('bath-sink','Sink supplies');
  if(id==='cabinet')out+=storage('bath-cabinet','Sink cabinet supplies');
  if(id==='medicine')out+=storage('bath-medicine','Medicine cabinet supplies');
 }
 if(room==='kitchen'){
  if(['fridge','freezer','pantry'].includes(id)){out+=button('Open '+id+' · 1 min','kitchen:open',id);if(h.kitchen.opened?.[id])out+=food(id);}
  if(['stove','counter'].includes(id)){out+='<h4>Prepare food</h4><div class="actions">'+Object.entries(H.data.recipes).map(([key,r])=>button(r.name+' · '+r.minutes+' min','kitchen:prepare',key)).join('')+'</div>';}
  if(id==='counter')out+='<h4>Grocery delivery</h4>'+button('Standard delivery · 8 game minutes','groceries','standard')+button('Instant delivery · +3 gold fee','groceries','instant')+(h.groceries.bags.length?button('Put away grocery bags · 4 min','groceries','put-away'):'');
  if(id==='dining')out+=button('Sit at dining table · 1 min','kitchen:seat')+'<p>Prepared meals: '+htmlEscape(h.kitchen.prepared.join(', ')||'None')+'</p>'+button('Eat a prepared meal · 1 min','kitchen:eat','prepared');
  if(id==='sink')out+='<p>Used dishes: '+h.kitchen.dirty+'</p>'+button('Wash used dishes','kitchen:wash');
  if(id==='wine')out+='<p>Wine and other refreshments are listed in their actual kitchen storage. Open the fridge or pantry to check stock.</p>';
 }
 if(room==='hall'&&id==='laundry')out+='<p>Washer & dryer · '+htmlEscape(h.laundry.cycle)+'</p>'+button('Load hamper · 3 min','laundry','load')+button('Wash and dry · 40 min','laundry','wash')+button('Collect clean garments · 3 min','laundry','collect');
 return out?'<section class="fixture-actions" aria-label="Use selected object"><h4>Available actions & contents</h4>'+out+'</section>':'';
}
function householdIntent(raw){
 if(!EpiErin.inside(save))return null;const text=String(raw).trim().toLowerCase().replace(/[.!]+$/,'');if(/\?|^(?:what|why|how|can|could|would|should|do|are|is)\b|\b(?:not|never|don.t|won.t)\b/.test(text))return null;
 const q=text.replace(/^(?:i\s+)?(?:(?:try|attempt|decide|want) to\s+)?/,'');let m;
 if(/^(?:take (?:a |the )?|use (?:the )?)shower$/.test(q))return {action:'bathroom',id:'shower'};
 if(/^(?:take|have) (?:a |the )?bath$/.test(q))return {action:'bathroom',id:'bath'};
 if(/^(?:use (?:the )?toilet|relieve myself)$/.test(q))return {action:'bathroom',id:'toilet'};
 if(/^(?:brush (?:my )?teeth)$/.test(q))return {action:'brush'};
 if((m=q.match(/^sit (?:on|in|at) (?:the )?(sofa|armchair|chair|reading chair|bed|dining table)$/)))return m[1]==='dining table'?{action:'kitchen:seat'}:{action:'sit',id:['chair','reading chair'].includes(m[1])?'armchair':m[1]};
 if(/^(?:sleep (?:in (?:the )?bed|a full cycle)|go to sleep)$/.test(q))return {action:'sleep-cycle'};
 if((m=q.match(/^open (?:the )?(fridge|refrigerator|freezer|pantry)$/)))return {action:'kitchen:open',id:m[1]==='refrigerator'?'fridge':m[1]};
 if((m=q.match(/^(?:cook|prepare|make) (?:a |the )?(.+)$/))){const recipe=Object.entries(EpiErinHousehold.data.recipes).find(([id,r])=>id===m[1]||r.name.toLowerCase()===m[1]);if(recipe)return {action:'kitchen:prepare',id:recipe[0]};}
 if(/^(?:eat|enjoy) (?:the |a )?prepared meal$/.test(q))return {action:'kitchen:eat',id:'prepared'};
 if((m=q.match(/^(?:eat|drink) (?:the |a |some )?(.+)$/))){const food=Object.entries(EpiErinHousehold.data.food).find(([id,v])=>id===m[1]||v[0].toLowerCase()===m[1]);if(food)return {action:'kitchen:eat',id:food[0]};}
 if(/^(?:wash|clean) (?:the |used )?dishes$/.test(q))return {action:'kitchen:wash'};
 if((m=q.match(/^(pick up|take|wear|equip|unequip|remove|use|examine|inspect) (?:the |my )?(.+)$/))){const name=m[2].replace(/[’']/g,''),d=EpiErinHousehold.data.catalog.find(d=>d.id===name||d.name.toLowerCase().replace(/[’']/g,'').replace(/^erin.?s /,'')===name||d.name.toLowerCase().replace(/[’']/g,'')===name);if(d)return {object:d.id,action:({'pick up':'take',wear:'equip',remove:'unequip',inspect:'examine'})[m[1]]||m[1]};}
 return null;
}

function erinStorageContents(location){const H=EpiErinHousehold,h=H.state(save),items=H.data.catalog.filter(d=>h.items[d.id].location===location||d.location===location&&['inventory','equipped'].includes(h.items[d.id].location));return items.map(d=>'<button class="btn secondary apartment-item-link" data-apartment-item="'+htmlEscape(d.id)+'">'+htmlEscape(d.name)+' →</button>').join('')||'<p>This storage section is empty.</p>';}

EpiTechnologyCenter.setAuthority((s,kind,destination,rng)=>EpiErinLife.beforeAction(s,kind,destination,rng));
