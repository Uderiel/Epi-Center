/* Approved return scheduling; unfinished Daily Needs visit never fabricates a purchase. */
(function(r,f){const n=typeof module==='object'&&module.exports,a=f(...(n?['./burkes-sweets','./npc-travel','./travel-modes','./burkes-baking'].map(require):[r.EpiBurkesSweets,r.EpiNPCTravel,r.EpiTravelModes,r.EpiBurkesBaking]));if(n)module.exports=a;else r.EpiTitsReturn=a;})(globalThis,function(B,Travel,V,Baking){
const STOP_MINUTES=10,HOME_GROOMING=10;
function target(day){const workDay=day+1;return workDay*1440+B.hoursAt(workDay*1440).open-60;}
function budget(from){const walk=V.get('walk').minutes;return 1+Travel.route(from,'Daily Needs').length*walk+1+STOP_MINUTES+1+Travel.route('Daily Needs',B.id).length*walk+1+2;}
function startPrep(s,q,a,r,time){try{if(!Baking.state(s).job&&!Baking.state(s).completedDays[Math.floor(time/1440)])Baking.begin(s,time);r.stage='preparing';r.prepStartedAt=time;a.workApron='equipped';}catch(e){r.blocked=e.message;}}
function update(s,q,a,time){const plan=a.eveningPlan;if(!plan?.generated)return;const b=B.state(s);if(plan.mode==='home'&&q.phase==='off-shift'&&a.enteredVenue&&a.location===plan.home){if(!q.eveningRest||q.eveningRest.day!==plan.day){q.eveningRest={day:plan.day,stage:'sleeping',sleepStartedAt:time,wakeAt:time+360};a.room='unit-1';a.sleeping=true;a.activity='Sleeping at home in Wet Lily Unit 1';}else if(q.eveningRest.stage==='sleeping'&&time>=q.eveningRest.wakeAt){a.sleeping=false;q.eveningRest.stage='rested';q.eveningRest.wokeAt=time;}}
if(!['off-shift','returning-to-work','preparing-for-work'].includes(q.phase))return;
let r=q.workReturn;if(!r||r.day!==plan.day){r=q.workReturn={day:plan.day,targetPrep:target(plan.day),stage:'waiting',dailyNeeds:{minutesReserved:STOP_MINUTES,purchaseStatus:'Catalog, prices and effects not implemented'}};}
if(r.stage==='waiting'){
 const ready=plan.mode==='nightlife'?a.enteredVenue&&a.location===plan.destination:q.eveningRest?.stage==='rested'&&a.location===plan.home;
 if(!ready)return;
 if(plan.mode==='home'&&!r.groomed){r.stage='grooming';r.due=time+HOME_GROOMING;a.activity='Styling her hair and getting more put together after a home-only night';return;}
 r.departAt=r.targetPrep-budget(a.location);
 if(time>=r.departAt){r.stage='exit-origin';r.due=time+1;q.phase='returning-to-work';a.activity='Leaving for Daily Needs, then Burke’s preparation';}
}else if(r.stage==='grooming'&&time>=r.due){a.presentation={source:'Home-only night and morning preparation',hair:'More neatly styled',scent:'Fresher, pleasantly sweet fragrance',overall:'More polished and put together'};r.groomed=true;r.stage='waiting';}
else if(r.stage==='exit-origin'&&time>=r.due){a.room='outside';Travel.start(a,'Daily Needs',time);r.stage='to-daily-needs';}
else if(r.stage==='to-daily-needs'&&a.enteredVenue&&a.location==='Daily Needs'){r.stage='daily-needs';r.due=time+STOP_MINUTES;r.dailyNeeds.arrivedAt=time;a.activity='At Daily Needs; purchases await actual products and service';}
else if(r.stage==='daily-needs'&&time>=r.due){r.dailyNeeds.departedAt=time;r.dailyNeeds.purchasedItems=[];r.dailyNeeds.goldSpent=0;r.dailyNeeds.recoveryApplied=0;r.stage='exit-daily-needs';r.due=time+1;}
else if(r.stage==='exit-daily-needs'&&time>=r.due){a.room='outside';Travel.start(a,B.id,time);r.stage='to-work';}
else if(r.stage==='to-work'&&a.enteredVenue&&a.location===B.id){a.room='A';a.present=true;a.working=false;r.stage='inside-work';r.steps=['C','D'];r.due=time+1;}
else if(r.stage==='inside-work'&&time>=r.due){a.room=r.steps.shift();r.due=time+1;if(!r.steps.length){r.stage='wait-prep';r.arrivedAt=time;r.lateMinutes=Math.max(0,time-r.targetPrep);q.phase='preparing-for-work';if(time>=r.targetPrep)startPrep(s,q,a,r,time);}}
else if(r.stage==='wait-prep'&&time>=r.targetPrep){startPrep(s,q,a,r,time);}
else if(r.stage==='preparing'&&!Baking.state(s).job&&Baking.state(s).completedDays[Math.floor(r.arrivedAt/1440)]){r.stage='finished';r.readyAt=time;q.phase='serving';b.servicePaused=false;a.working=B.scheduledOpen({...s,worldClock:{...s.worldClock,minutes:time}});a.activity=a.working?'Serving customers':'Preparation complete outside public hours';}
}
return Object.freeze({STOP_MINUTES,HOME_GROOMING,target,budget,update});});
