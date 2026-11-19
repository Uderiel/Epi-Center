/* Approved architectural art; room access and interactions remain with household adapters. */
function householdRoomArtMarkup(person,room,label='Room illustration',keyPrefix='room-art'){
 const rooms={erin:['living','kitchen','bedroom','bath','closet','hall'],priya:['living','kitchen','bedroom','bath','closet','hall'],nadia:['living','kitchen','bedroom','bath','closet','hall'],richard:['hall','living','kitchen','guest','guestbath','master','closet','masterbath','balcony']};
 if(!rooms[person]?.includes(room))return '';
 const art=(id,label)=>'<details class="household-room-art" data-ui-key="'+keyPrefix+':'+person+':'+id+'"><summary>'+label+'</summary><img src="assets/room-art-review/'+person+'-'+id+'.png?art=ac60ed5" alt="'+person[0].toUpperCase()+person.slice(1)+' · '+label+'" width="1100" height="733" style="display:block;max-width:100%;height:auto" loading="lazy"></details>';
 return art(room,label)+(room==='hall'?art('utility','Hallway utility closet · laundry and cleaning storage'+(person==='richard'?' and maid-bot charging stand':'')):'');
}
