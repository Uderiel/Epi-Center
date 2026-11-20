const {chromium}=require('playwright'),A=require('node:assert/strict'),fs=require('node:fs');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
const p=await b.newPage(),errors=[],checks=[];p.on('pageerror',e=>errors.push(e.message));
await p.goto('http://127.0.0.1:8774/rebuild/title-screen/');
await p.evaluate(()=>localStorage.setItem('epicenter_v1_slot_3',JSON.stringify({schema:1,slot:3,status:'ready',playerId:'kiss-browser',name:'Kiss QA',hub:{location:"Burke's Sweets",feed:[]},world:{},forms:{},inventory:{},attributes:{Endurance:4,Fitness:4,Intuition:4,Reflexes:4,Willpower:4,Reasoning:4,Stability:4,Presence:4,Insight:4,Influence:4},combatResources:{health:100,stamina:100,resolve:100,arousal:0},gold:200,worldClock:{minutes:540,elapsed:0},settings:{liveTime:false,aiEnabled:false}})));
await p.goto('http://127.0.0.1:8774/rebuild/hub/?slot=3');await p.waitForSelector('#compose');
await p.evaluate(()=>{Object.assign(EpiBurkesSweets.state(save),{inside:true,room:'C'});Object.assign(EpiBurkesSweets.staff(save),{present:true,working:true,room:'C'});save.hub.channel='world';EpiTits.actor(save);store();render();});
const send=async text=>{await p.locator('#actionInput').fill(text);await p.locator('#compose button[type=submit]').click();};
await send('I French kiss Tits with tongue');A(await p.evaluate(()=>!EpiKissing.current(save)&&save.hub.feed.some(e=>e.text.includes('infectious'))));checks.push('First typed request gives warning before contact');
await send('I accept the kiss');A(await p.evaluate(()=>!!EpiKissing.current(save)));A(await p.locator('[data-kissing="stop"]').count());checks.push('Typed confirmation starts accepted contact at nonnegative relationship');
await p.evaluate(()=>advanceGameTime(10,'Wait'));await send('I pull away');A(await p.evaluate(()=>!EpiKissing.current(save)));await p.evaluate(()=>advanceGameTime(30,'Wait'));
A.equal(await p.evaluate(()=>EpiBimboVirusExposure.kissingMinutes(save.world.bimboVirus.exposures['kiss-browser'],'npc:tits',save.worldClock.minutes)),10);checks.push('Breaking contact pauses accumulation during intervening clock time');
await send('I open-mouth kiss Tits');await p.evaluate(()=>{const old=Math.random;try{Math.random=()=>.999;advanceGameTime(10,'Wait');}finally{Math.random=old;}});
A.equal(await p.evaluate(()=>save.world.bimboVirus.exposures['kiss-browser'].checks.length),1);checks.push('Resumed contact reaches the hidden resistance check at twenty contact minutes');
A(await p.evaluate(()=>save.hub.feed.some(e=>e.tone==='explicit_adult'&&e.kissing?.salivaExchange)));checks.push('Authoritative feed retains neutral kissing metadata and authored tone');
await send('I pull away');await p.reload();await p.waitForSelector('#compose');A.equal(await p.evaluate(()=>save.world.bimboVirus.exposures['kiss-browser'].checks.length),1);checks.push('Reload preserves the single resolved resistance result');
A(await p.evaluate(()=>{const e=save.hub.feed.find(e=>e.tone==='explicit_adult'&&e.kissing?.salivaExchange),a={id:'narrator:world-event',kind:'narrator'};const o=JSON.parse(JSON.stringify(aiSceneOptions(a,e.text,e)));return o.tone==='explicit_adult'&&o.physicalContext.recordedKissing.salivaExchange===true;}));checks.push('Serialized scene options preserve tone and actual contact metadata');
A.deepEqual(errors,[]);fs.writeFileSync('work/kissing-browser.json',JSON.stringify({passed:true,checks,errors,scope:'Isolated QA slot, real composer and game clock, no paid model calls'},null,2)+'\n');checks.forEach(c=>console.log('PASS '+c));
}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
