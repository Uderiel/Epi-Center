const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const Richard=require('./richard');
const Clock=require('./world-clock');

function fixture(aiEnabled,review,answer){
 const save={
  name:'Test Erin',settings:{aiEnabled},hub:{location:'Technology Center'},
  world:{technologyCenter:{inside:true,room:'G'}},
  worldClock:{minutes:540},erinRestoration:{stage:23,mastered:true,heels:{location:'inventory'}},
  lastPlayedAt:'current-save'
 };
 Richard.act(save,'extra');
 Richard.act(save,'accept');
 save.world.technologyCenter.room='F';
 Richard.beginWork(save);
 Clock.advance(save,5);
 Richard.tick(save,540,545);
 Richard.saveReportDraft(save,answer);
 const entries=[],requests=[];
 const context={
  save,EpiRichard:Richard,EpiErinLife:{beforeAction(){}},aiBusy:0,
  aiConnection:()=>({endpoint:'https://mock.invalid',code:'test-only'}),
  aiFetch:async (path,packet)=>{requests.push({path,packet});return review();},
  localStorage:{getItem:()=>JSON.stringify({lastPlayedAt:save.lastPlayedAt})},
  key:'test-slot',crypto:{randomUUID:()=> 'test-review'},render(){},store(){},
  feedEntry:(speaker,text)=>entries.push({speaker,text}),
  document:{addEventListener(){}}
 };
 vm.createContext(context);
 vm.runInContext(fs.readFileSync(__dirname+'/richard-ui.js','utf8'),context);
 return {save,entries,requests,submit:()=>context.submitRichardReport()};
}
async function run(){
 const paraphrase='The campaign lifted turnover without altering refunds.';
 const literal='Sales grew while returns remained stable.';
 const ai=fixture(true,()=>({text:'ACCEPT'}),paraphrase);
 await ai.submit();
 assert.equal(Richard.state(ai.save).task.report.answers[0],paraphrase);
 assert.equal(ai.requests.length,1);
 assert.equal(ai.requests[0].packet.message,paraphrase);
 assert.deepEqual(Object.keys(ai.requests[0].packet).sort(),['actor','event','history','kind','message','requestId','scene']);
 console.log('PASS connected AI can interpret a brief paraphrase using only its question and notes');

 for(const response of [()=>{throw Error('unavailable');},()=>({text:'Unstructured result'}),()=>({text:'REVISE'})]){
  const fallback=fixture(true,response,literal);
  await fallback.submit();
  assert.equal(Richard.state(fallback.save).task.report.answers[0],literal);
 }
 console.log('PASS provider errors and unusable reviews retain the deterministic rubric');

 const off=fixture(false,()=>({text:'ACCEPT'}),literal);
 await off.submit();
 assert.equal(off.requests.length,0);
 assert.equal(Richard.state(off.save).task.report.answers[0],literal);
 console.log('PASS disabled AI submits without a provider request');

 let finish;
 const waiting=fixture(true,()=>new Promise(resolve=>{finish=resolve;}),paraphrase);
 const first=waiting.submit();
 await waiting.submit();
 assert.equal(waiting.requests.length,1);
 waiting.save.world.technologyCenter.room='G';
 finish({text:'ACCEPT'});
 await first;
 assert.equal(Richard.state(waiting.save).task.report.answers.length,0);
 assert.equal(Richard.state(waiting.save).task.report.draft,paraphrase);
 console.log('PASS pending review prevents duplicate requests and cannot submit after room departure');
}
run().catch(error=>{console.error(error);process.exitCode=1;});
