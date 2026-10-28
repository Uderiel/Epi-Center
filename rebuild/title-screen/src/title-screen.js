import {createSlotStore,SLOT_COUNT} from './slot-store.js';
const store=createSlotStore(window.localStorage);
const host=document.querySelector('#slots'),notice=document.querySelector('#notice'),dialog=document.querySelector('#confirm'),confirmText=document.querySelector('#confirm-text');
function notify(message){notice.textContent=message;}
function render(){
 host.replaceChildren();
 for(let id=1;id<=SLOT_COUNT;id++){
  const value=store.read(id),section=document.createElement('section');section.className='slot';
  const heading=document.createElement('h2');heading.textContent='Save Slot '+id;section.append(heading);
  const detail=document.createElement('p');detail.textContent=value===null?'Empty':value.status==='corrupt'?'Unreadable save — recovery required':value.status==='draft'?'Character creation not started':'Ready to play';section.append(detail);
  const actions=document.createElement('div');actions.className='actions';
  function action(label,callback,css){const b=document.createElement('button');b.textContent=label;if(css)b.className=css;b.addEventListener('click',callback);actions.append(b);}
  if(value===null)action('New Character',()=>{try{store.write(id);window.location.assign('../character-creation/?slot='+id);}catch(e){notify('Unable to create slot: '+e.message);}});
  else if(value.status==='corrupt')action('Preserve for recovery',()=>notify('This slot will not be overwritten or deleted automatically.'));
  else {action('Continue',()=>window.location.assign('../character-creation/?slot='+id));action('Delete',()=>{confirmText.textContent='Delete Slot '+id+'? This cannot be undone.';dialog.showModal();dialog.addEventListener('close',()=>{if(dialog.returnValue==='delete'){try{store.remove(id);notify('Slot '+id+' deleted.');render();}catch(e){notify('Delete failed: '+e.message);}}},{once:true});},'danger');}
  section.append(actions);host.append(section);
 }
}
try{render();}catch(e){notify('Save storage unavailable: '+e.message);}

// Mobile browsers may restore this page from the back-forward cache without re-running the module.
window.addEventListener('pageshow',()=>{try{render();}catch(e){notify('Unable to refresh save slots: '+e.message);}});
window.addEventListener('focus',()=>{try{render();}catch(e){notify('Unable to refresh save slots: '+e.message);}});
