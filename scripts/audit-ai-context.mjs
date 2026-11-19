/* Read-only integration audit. Synthetic browser saves; no inference or credentials captured. */
import {createRequire} from 'node:module';import fs from 'node:fs';import crypto from 'node:crypto';import {packet as normalize,sceneFacts,messagesFor} from '../services/ai/core.mjs';
const require=createRequire(import.meta.url),{chromium}=require('playwright'),origin=process.env.EPI_PREVIEW_ORIGIN||'http://127.0.0.1:8767';
const fixtures=[
 {id:'public-office-human',place:'office',who:'Priya Shah'},
 {id:'office-visible-players',place:'office',who:'Priya Shah',players:true},
 {id:'priya-bedroom-guest',place:'priya',room:'bedroom',who:'Priya Shah'},
 {id:'priya-kitchen-guest',place:'priya',room:'kitchen',who:'Priya Shah'},
 {id:'erin-bedroom-visitor',place:'erin',room:'bedroom',who:'World'},
 {id:'nadia-kitchen-guest',place:'nadia',room:'kitchen',who:'Nadia Voss'},
 {id:'richard-public-suite',place:'richard',room:'living',who:'Richard Carter'},
 {id:'burkes-register',place:'burkes',room:'C',who:'World'},
 {id:'cherished-sales-floor',place:'cherished',room:'H',who:'Charity'},
 {id:'canine-npc-initiative',place:'park',who:'Nadia Voss',body:'canine',initiative:true},
 {id:'private-bella',place:'park',who:'Private · Kibbles',body:'canine'},
 {id:'private-bella-alias',place:'park',who:'Private · Bella',body:'canine'},
 {id:'private-unmastered-kibbles',place:'park',who:'Private · Kibbles',body:'unmastered-canine'},
 {id:'private-unconscious-form',place:'park',who:'Private · Audit Vase',body:'inanimate'},
 {id:'private-erin',place:'erin',room:'living',who:'Erin · Private',body:'erin'},
 {id:'removed-flats-other-room',place:'priya',room:'closet',who:'World',body:'flats'},
 {id:'actual-canine-walk',place:'park',who:'World',body:'canine',text:'You travel north to Central Hub N. (8 minutes)'},
 {id:'route-plan',place:'park',who:'World',text:'Route to Technology Center · 4 steps · 26 game minutes.'},
 {id:'transformation-appearance',place:'park',who:'Physical transformation',transform:true},
 {id:'registered-npc-with-profile',place:'park',who:'Audit Visitor',newNPC:true,profile:true},
 {id:'newly-registered-npc',place:'park',who:'Audit Registered Visitor',newNPC:true},
 {id:'newly-registered-location',place:'future',who:'World'},
 {id:'inconsistent-home-flags',place:'overlap',who:'World'},
 {id:'long-direct-message',place:'office',who:'Priya Shah',longMessage:true}
];
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']}),rows=[];
try{for(const f of fixtures){const p=await browser.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));try{await p.goto(origin+'/rebuild/title-screen/');await p.evaluate(()=>localStorage.setItem('epicenter_v1_slot_2',JSON.stringify({schema:1,slot:2,status:'ready',name:'Layla Hamza',hub:{location:'Central Hub N',feed:[]},world:{},forms:{},attributes:{Willpower:5},gold:91,inventory:{keepsake:1},worldClock:{minutes:600},settings:{liveTime:false,aiEnabled:false}})));await p.goto(origin+'/rebuild/hub/?slot=2');await p.waitForSelector('#accessibleRooms');const capture=await p.evaluate(f=>{
 const n=EpiPriya.state(save),m=EpiMarketing.state(save).nadia,r=EpiRichard.state(save);Object.assign(n,{location:'applewood',homeRoom:'bedroom',activity:'At home',commute:null,spaceOverride:null});Object.assign(m,{location:'applewood',homeRoom:'living',activity:'At home',commute:null,spaceOverride:null});Object.assign(r,{location:'applewood',homeRoom:'living',activity:'Receiving a guest',commute:null,spaceOverride:null});
 if(f.place==='office'){save.hub.location='Technology Center';Object.assign(EpiTechnologyCenter.state(save),{inside:true,room:'H_W'});Object.assign(n,{location:'Technology Center',room:'H_W',activity:'Checking product claims'});Object.assign(m,{location:'Technology Center',room:'H_W',activity:'Reviewing a campaign'});}
 if(f.place==='priya'){save.hub.location='applewood';Object.assign(EpiPriyaHome.state(save),{inside:true,room:f.room});n.homeRoom=f.body==='flats'?'kitchen':f.room;}
 if(f.place==='erin'){save.hub.location='applewood';Object.assign(save.world.applewood||={},{inside:true,room:f.room});}
 if(f.place==='nadia'){save.hub.location='applewood';Object.assign(EpiNadiaHousehold.Home.state(save),{inside:true,room:f.room});m.homeRoom=f.room;}
 if(f.place==='richard'){save.hub.location='applewood';Object.assign(EpiRichardHome.Home.state(save),{inside:true,room:f.room,permissions:{}});r.homeRoom=f.room;r.attire='A navy house robe';EpiAIContext.remember(save,'npc:richard','Private office question','AUDIT_PRIVATE_CONVERSATION');r.task={status:'active',progress:3,report:{sources:{facts:'AUDIT_PRIVATE_LEDGER'}}};Object.assign(EpiRichardHome.state(save),{media:{music:'Piano music',volume:'low'},watch:EpiRichardHome.Data.watches[0]?.id,scent:{name:'Subtle cologne'}});}
 if(f.place==='burkes'){save.hub.location=EpiBurkesSweets.id;Object.assign(EpiBurkesSweets.state(save),{inside:true,room:f.room});}
 if(f.place==='cherished'){save.hub.location=EpiCherishedTouch.id;Object.assign(EpiCherishedTouch.state(save),{inside:true,room:f.room});save.world.npcsDiscovered||={};save.world.npcsDiscovered.Charity=true;}
 if(['canine','unmastered-canine'].includes(f.body)){EpiKibblesForm.grant(save,{mastered:f.body!=='unmastered-canine'});if(f.body==='canine')EpiKibblesForm.personalize(save,{name:'Bella',gender:'female'});save.activeForm='kibbles';save.forms.kibbles.completedTransformation=true;Object.assign(m,{location:save.hub.location,homeRoom:null,room:null,activity:'At the park'});}
 if(f.body==='erin'){Object.assign(EpiErin.state(save),{stage:23,mastered:true,trust:100,stress:12});save.activeForm='erin';EpiErinHousehold.state(save).grooming.hair='tidily brushed';}
 if(f.body==='flats'){save.activeForm='priya-flats';Object.assign(EpiPriyaFlats.state(save),{active:true,place:'closet',wornOnce:true,resources:{resolve:64,health:80,stamina:70,arousal:0}});EpiInternalMastery.begin(EpiPriyaFlats.state(save),600,95);}
 if(f.body==='inanimate'){const profile=EpiFormLiving.template();Object.assign(profile,{id:'audit-vase',name:'Audit Vase',conscious:false,bodyType:'other',body:{shape:'An inanimate ceramic vase'}});EpiFormLiving.register(profile);save.forms['audit-vase']={name:profile.name,conscious:false,bodyType:'other',appearance:profile.body,completedTransformation:true};save.activeForm='audit-vase';}
 if(f.place==='future'){save.hub.location='Audit Future Business';save.world.auditBusiness={inside:true,room:'public',description:'A recorded blue counter with a single display shelf.'};EpiScene.registerHome('audit-business',{inside:s=>s.world.auditBusiness.inside,room:s=>s.world.auditBusiness.room,rooms:{public:{name:'Public Room',description:save.world.auditBusiness.description}},space:s=>'Audit Future Business:public'});}
 if(f.place==='overlap'){save.hub.location='applewood';Object.assign(EpiPriyaHome.state(save),{inside:true,room:'bedroom'});Object.assign(EpiNadiaHousehold.Home.state(save),{inside:true,room:'kitchen'});}
 if(f.newNPC){save.world.auditVisitor={name:f.who,location:save.hub.location,activity:'Present'};EpiScene.registerActor('audit-visitor',{name:f.who,unit:null,...(f.profile?{ai:{dossier:'An adult visitor here to examine the public park. Knows only this recorded scene.',communication:'Brief courteous speech.'}}:{}),actor:s=>s.world.auditVisitor,space:s=>s.hub.location+':outside'});}
 if(f.players)save.world.localPlayers=[{id:'player:audit-near',name:'Nearby Player',present:true,space:EpiScene.player(save)},{id:'player:audit-far',name:'Remote Player',present:true,space:'elsewhere:outside'}];
 store();render();const c=currentLocationContext(),listeners=aiVisibleParticipants(),art=[...document.querySelectorAll('.household-room-art img')].map(img=>({src:img.getAttribute('src'),alt:img.alt}));const canonical={location:c,description:locationDescription(),publicBody:currentBodyName(),originalPlayer:save.name,activeForm:save.activeForm,visibleActors:listeners,travelMode:EpiTravelModes.current(save),capabilities:EpiKibblesForm.capabilities(save),art,roomArtMarkup:currentRoomArtMarkup(),requestedRoom:f.room||null};
 const entry={speaker:f.who,text:f.text||(f.transform?'A recorded change forms a canine muzzle.':f.who==='World'?'You inspect the actual immediate room.':'How are you?'),origin:f.transform?'transformation':f.who==='World'?'mechanics':'dialogue',...(f.initiative?{initiative:true,initiativeTopic:'greeting',initiativeGoal:'Greet the actual visible visitor.'}:{replyTo:{speaker:currentBodyName(),text:f.longMessage?('Background detail. '.repeat(160)+'Please answer the final question about the actual room.'):'How are you?'}}),...(f.transform?{appearance:EpiKibblesForm.body(save)}:{})};
 const actor=EpiAIContext.target(entry.speaker,save,entry);const options=actor?aiSceneOptions(actor,entry.text,entry):null;window.__auditPacket=null;aiFetch=(path,packet)=>{window.__auditPacket=structuredClone(packet);return new Promise(()=>{});};localStorage.setItem('epicenter_ai_endpoint','https://audit.invalid');sessionStorage.setItem('epicenter_ai_game_access','synthetic-audit-only');save.settings.aiEnabled=true;feedEntry(entry.speaker,entry.text,undefined,entry);
 return {canonical,entry,options,packet:window.__auditPacket,actor,dispatchFailure:save.hub.feed.at(-1)?.aiFailure||null,registrationIssues:EpiScene.registrationIssues()};
 },f);
 const row={id:f.id,fixture:f,source:'actual browser controller and aiEnrichEntry path, isolated synthetic save',...capture,errors};if(capture.packet){row.normalized=normalize(capture.packet);row.projectedFacts=sceneFacts(row.normalized);row.providerMessages=messagesFor(capture.packet);row.messageHash=crypto.createHash('sha256').update(JSON.stringify(row.providerMessages)).digest('hex');const st=JSON.parse(capture.packet.scene.split('\n')[0]);row.fieldAudit={sourceRoom:capture.canonical.location.room||null,packetRoom:st.room||null,providerRoom:row.projectedFacts.room,fullRoomDescriptionPreserved:!!capture.canonical.description&&row.projectedFacts.description.includes(capture.canonical.description),visibleAtSource:capture.canonical.visibleActors.map(x=>x.id),packetVisible:st.visibleNPCs||[],providerVisible:row.projectedFacts.visibleParticipants??null,publicName:capture.canonical.publicBody,providerPlayerIdentity:row.projectedFacts.playerIdentity??null,uiAssetCount:capture.canonical.art.length,providerImageContent:row.providerMessages.some(x=>Array.isArray(x.content)&&x.content.some(y=>y.type==='image_url')),packetHasRoomAssetReference:JSON.stringify(capture.packet).includes('room-art-review/'),knownPrivateLedgerExcluded:!JSON.stringify(capture.packet).includes('AUDIT_PRIVATE_LEDGER'),privateConversationExcluded:!JSON.stringify(capture.packet).includes('AUDIT_PRIVATE_CONVERSATION'),textLengths:{sourceDescription:capture.canonical.description.length,optionsDescription:capture.options?.description?.length||0,scene:capture.packet.scene.length,modelDescription:row.projectedFacts.description.length,dossier:row.normalized.actor.dossier.length},formSource:st.privateFormState||null,formProjected:row.projectedFacts.authority?row.projectedFacts:null};}
 rows.push(row);console.log(f.id+': '+(capture.packet?'captured':capture.actor?'not dispatched':'NO AI PROFILE')+(errors.length?' SCRIPT ERROR':''));
 }catch(e){rows.push({id:f.id,error:e.message,errors});console.log(f.id+': AUDIT ERROR '+e.message);}finally{await p.close();}}
}finally{await browser.close();}
if(process.env.EPI_VERIFY_CONTEXT_REPAIRS==='1'){
 const assert=require('node:assert/strict'),by=id=>rows.find(r=>r.id===id);let checks=0;const check=(fn)=>{fn();checks++;};
 for(const id of ['priya-bedroom-guest','priya-kitchen-guest','nadia-kitchen-guest','richard-public-suite','burkes-register','cherished-sales-floor','public-office-human','newly-registered-location'])check(()=>{assert(by(id).fieldAudit.fullRoomDescriptionPreserved,id);assert(by(id).fieldAudit.providerRoom,id);});
 check(()=>assert(by('office-visible-players').fieldAudit.providerVisible.some(x=>x.id==='player:audit-near')));
 check(()=>assert(!JSON.stringify(by('office-visible-players').projectedFacts).includes('Remote Player')));
 check(()=>assert.equal(by('canine-npc-initiative').fieldAudit.providerPlayerIdentity,'Bella'));
 check(()=>{assert(by('richard-public-suite').fieldAudit.knownPrivateLedgerExcluded);assert(by('richard-public-suite').fieldAudit.privateConversationExcluded);});
 check(()=>assert(by('richard-public-suite').projectedFacts.publicGuestContext.visibleAttire));
 check(()=>assert.equal(by('private-bella-alias').normalized.actor.dossier,by('private-bella').normalized.actor.dossier));
 check(()=>{assert(!by('private-unconscious-form').packet);assert.match(by('private-unconscious-form').dispatchFailure,/no separate consciousness/);});
 check(()=>{assert(!by('long-direct-message').packet);assert.match(by('long-direct-message').dispatchFailure,/1,600/);});
 check(()=>assert(by('registered-npc-with-profile').packet));
 check(()=>assert(by('newly-registered-npc').registrationIssues.includes('Missing AI profile: audit-visitor')));
 check(()=>assert.equal(by('actual-canine-walk').projectedFacts.physicalContext.travelMode.id,'walk'));
 check(()=>assert.equal(by('route-plan').projectedFacts.eventStatus,'planned'));
 check(()=>assert(by('transformation-appearance').projectedFacts.appearance));
 check(()=>{assert.deepEqual(by('removed-flats-other-room').projectedFacts.visibleParticipants,[]);assert(!JSON.stringify(by('removed-flats-other-room').projectedFacts).includes('Kitchen & Dining'));});
 console.log(checks+' context repair assertions passed');
}
const report={scope:'Offline assembly audit through actual browser paths, then current server source. No authenticated production capture, owner save or paid provider request.',origin,fixtureCount:fixtures.length,rows};fs.writeFileSync(process.env.EPI_CONTEXT_AUDIT_REPORT||'work/ai-context-path-audit.json',JSON.stringify(report,null,2)+'\n');
if(rows.some(r=>r.error||r.errors?.length))process.exitCode=1;
