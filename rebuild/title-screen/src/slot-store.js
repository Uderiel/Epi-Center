// Independent 1.0 save slots. Never reads or modifies legacy Epi-Center save keys.
export const SLOT_PREFIX='epicenter_v1_slot_';
export const SLOT_COUNT=3;
export function createSlotStore(storage){
  const check=id=>{if(!Number.isInteger(id)||id<1||id>SLOT_COUNT)throw Error('Invalid slot');};
  const key=id=>SLOT_PREFIX+id;
  const read=id=>{check(id);const raw=storage.getItem(key(id));if(raw===null)return null;try{const value=JSON.parse(raw);if(!value||value.schema!==1||value.slot!==id||!['draft','ready'].includes(value.status)||typeof value.name!=='string')throw Error('Invalid slot data');return value;}catch{return {slot:id,status:'corrupt',name:'Unreadable save — preserve for recovery'};}};
  const write=(id,slot)=>{check(id);if(read(id)!==null)throw Error('Slot already occupied');const value={schema:1,slot:id,status:'draft',name:'',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};storage.setItem(key(id),JSON.stringify(value));return value;};
  const remove=id=>{check(id);storage.removeItem(key(id));};
  return {read,write,remove};
}