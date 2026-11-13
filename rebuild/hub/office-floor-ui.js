/* Projections only; floor rules own state and timing. */
function officeFloorButton(action,label,arg=''){return '<button type="button" class="btn secondary" data-floor-action="'+action+'" data-floor-arg="'+htmlEscape(arg)+'">'+htmlEscape(label)+'</button>';}
function officeFloorWorkMarkup(){
 if(typeof EpiOfficeFloor==='undefined'||!EpiTechnologyCenter.inside(save))return '';
 const X=EpiOfficeFloor,x=X.state(save),room=EpiTechnologyCenter.state(save).room,b=officeFloorButton,esc=htmlEscape;
 if(!EpiErin.full(save))return '';
 const list=X.jobs(save),ready=X.readyDelivery(save),atRichard=EpiRichard.present(save),today=Math.floor(EpiWorldClock.ensure(save).minutes/1440);
 let h='<section class="card" aria-label="Department equipment work"><h4>Documents & errands</h4>';
 if(ready.length)h+='<p>'+ready.length+' document set'+(ready.length===1?'':'s')+' ready for Richard.</p>'+(atRichard?b('deliver','Hand over all ready documents · 1 min'):floorRichardRoute());
 const steps={accepted:'Collect original · incoming tray in Office Equipment',original:'Make copies · copier in Office Equipment',printed:'Collect copies · output tray in Office Equipment','fax-collected':'Ready for Richard','copies-collected':'Ready for Richard',placed:'Return original · Erin’s Reception'};
 for(const j of list){h+='<div class="office-order"><p><strong>'+esc(X.JOBS[j.kind].title)+'</strong> · '+esc(j.kind==='conference'&&j.stage==='copies-collected'?'Place packs · conference table in the Conference Room':steps[j.stage]||j.stage)+'</p>';if(room==='F'&&j.stage==='accepted'&&j.kind!=='fax')h+=b('original','Collect briefing original here · 1 min',j.id);if(room==='F'&&j.stage==='placed')h+=b('return-original','Return original & finish · 1 min',j.id);h+='<details><summary>Order details</summary><p>'+esc(X.JOBS[j.kind].instructions)+'</p>'+b('cancel','Cancel this order',j.id)+'</details></div>';}
 if(['F','L'].includes(room)){
 const available=Object.entries(X.JOBS).filter(([k])=>!x.jobs['office-'+today+'-'+k]);
 if(available.length)h+='<details'+(!list.length?' open':'')+'><summary>Available document orders · '+available.length+'</summary>'+b('start-all','Accept all available · 1 min')+available.map(([id,v])=>b('start',v.title+' · accept 1 min',id)).join('')+'</details>';
 }
 const c=x.carry,carried=[c.drink?.kind,c.lunch?'packed lunch':'',c.setting?(c.setting.used?'used place setting':'place setting'):'',c.kit?'refill kit':'',Object.values(x.documents).some(d=>d.location==='carried')?'work documents':''].filter(Boolean);
 h+='<p>Carried: '+esc(carried.join(' · ')||'nothing')+'</p>';
 const req=EpiRichardOffice.state(save).intercom;
 if(req&&['pending','acknowledged'].includes(req.status)&&['coffee','tea','water'].includes(req.kind))h+='<p>Richard’s '+esc(req.kind)+' · '+(c.drink?.kind===req.kind?'ready to deliver':'prepare in the Sales or Marketing Break Room'+(req.kind==='water'?' or Office Equipment':''))+'</p>'+(atRichard&&c.drink?.kind===req.kind?b('deliver-drink','Hand requested drink to Richard · 1 min'):c.drink?.kind===req.kind?floorRichardRoute():'');
 if(c.drink)h+='<details><summary>Carried drink</summary>'+b('cup-drink','Drink '+c.drink.kind)+b('cup-discard','Discard drink')+'</details>';
 if(atRichard)h+='<details><summary>Refreshment request</summary>'+['coffee','tea','water'].map(k=>b('request-drink','Confirm '+k+' · 1 min',k)).join('')+'</details>';
 const done=Object.values(x.jobs).filter(j=>j.status==='completed');if(done.length)h+='<details><summary>Completed orders · '+done.length+'</summary>'+done.slice(-8).map(j=>'<p>'+esc(X.JOBS[j.kind].title)+'</p>').join('')+'</details>';
 return h+'</section>';
}
function floorRichardRoute(){const r=EpiRichard.state(save);return r.location===EpiTechnologyCenter.id&&EpiTechnologyCenter.rooms[r.room]?'<button type="button" class="btn secondary" data-nav-scope="office" data-nav-target="'+htmlEscape(r.room)+'">Find Richard · '+htmlEscape(EpiTechnologyCenter.rooms[r.room].name)+'</button>':'<p>Richard is away from the office. Your documents remain carried until you meet him.</p>';}

function officeFloorFixtureControls(id){const T=EpiTechnologyCenter,room=T.state(save).room,f=EpiOfficeFloor.fixtures[room]?.[id];if(!f)return '';let html=(f.children||[]).map(k=>'<button type="button" class="btn secondary" data-office-action="fixture" data-office-room="'+k+'">'+htmlEscape(EpiOfficeFloor.fixtures[room][k].name)+' →</button>').join('');html+=(f.actions||[]).filter(a=>a.id!=='orders').map(a=>'<button type="button" class="btn" data-office-action="fixture-use" data-office-room="'+id+'" data-office-fixture-action="'+a.id+'">'+htmlEscape(a.label)+' · '+(a.id==='eat-lunch'&&!EpiOfficeFloor.state(save).carry.setting?a.minutes+1:a.minutes)+' min</button>').join('');if(id==='orders')html+=officeFloorWorkMarkup();if(room==='E'&&id.endsWith('Blind'))html+='<p>Saved blind: '+(EpiOfficeFloor.state(save).blinds['E:'+id]?'closed':'open')+'</p>';if(['B','B_E'].includes(room)&&id.startsWith('stall')&&id!=='stalls')html+='<p>Privacy door: '+(EpiOfficeFloor.state(save).locks[room+':'+id]?'locked':'open')+'</p>';return html;}
function officeFloorAction(action,arg){try{const X=EpiOfficeFloor,result=action.startsWith('cup-')?X.cup(save,action.slice(4)):X.act(save,action,arg);if(result.minutes)advanceGameTime(result.minutes,'Department equipment / '+action);if(result.text)feedEntry('Office / Equipment',result.text,undefined,{origin:'mechanics',playerAction:true});store();render();}catch(e){feedEntry('Office / Equipment',e.message,undefined,{origin:'mechanics',playerAction:true});store();render();}}
document.addEventListener('click',e=>{const b=e.target.closest?.('[data-floor-action]');if(b&&!b.disabled)officeFloorAction(b.dataset.floorAction,b.dataset.floorArg);});
