/* Lobby shortcuts share controllers with typed actions and the public object registry. */
function repositoryLobbyMarkup(){
 const L=EpiRepositoryLobby;if(!L.here(save))return '';const p=L.posture(save),q=L.current(save),b=(a,label,id='')=>'<button type="button" class="btn secondary" data-lobby="'+a+'" data-lobby-id="'+htmlEscape(id)+'">'+htmlEscape(label)+'</button>';
 let out='<details data-repository-lobby><summary>Lobby seating, waiting and magazines</summary><p>'+(p?.posture==='seated'?'You are seated on the '+htmlEscape(p.seat)+'.':'You are standing in the lobby.')+'</p>'+b('sit','Sit on the lobby sofa','sofa')+b('sit','Sit in the lobby armchair','armchair')+b('stand','Stand up from the lobby seat')+b('table','Inspect the illuminated table');
 if(q)out+='<p>'+htmlEscape(q.title)+' · '+q.elapsed+'/'+q.duration+' game minutes</p>'+b('continue','Continue lobby activity · 1 min')+b('finish','Finish this reading or waiting segment')+b('stop','Stop lobby reading or waiting');
 else out+='<label>Waiting minutes<input type="text" inputmode="numeric" maxlength="6" id="repositoryLobbyWaitMinutes" aria-label="Lobby waiting minutes" value="'+htmlEscape(String(save.hub.repositoryWaitDraft||5))+'"></label>'+b('wait','Begin waiting in the lobby')+'<p>Read a technology article · five game minutes. Magazines stay in the lobby.</p>'+Object.values(L.articles).map(a=>b('read','Read '+a.title,a.id)).join('');
 return out+'</details>';
}
function repositoryLobbyAction(action,id='',minutes){
 try{const L=EpiRepositoryLobby;let r;if(action==='sit')r=L.sit(save,id);else if(action==='stand')r=L.stand(save);else if(action==='table')r=L.inspect(save,'table');else if(action==='read')r=L.read(save,id);else if(action==='wait')r=L.wait(save,minutes===undefined?Number(document.getElementById('repositoryLobbyWaitMinutes')?.value):minutes);else if(action==='continue'||action==='finish')r=L.continueActivity(save,action==='finish');else if(action==='stop')r=L.stop(save);else throw Error('Unknown lobby action.');if(r.text)feedEntry('Lobby',r.text,undefined,{origin:'mechanics'});if(r.minutes)advanceGameTime(r.minutes,'Repository lobby / '+action);
 }catch(e){feedEntry('Lobby',e.message,undefined,{origin:'mechanics'});}store();render();return true;
}
function repositoryLobbyText(raw){
 const p=EpiRoleplayInput.parse(String(raw||''));if(!p.expressed||p.privateNarration)return false;const text=p.expressed.trim();if(/\b(?:want to|wish|imagine|suppose|hypothetically|do not|don't|never|not)\b|["“”]/i.test(text))return false;
 const m=text.match(/^(?:I\s+)?wait\s+(?:here\s+|in (?:the )?lobby\s+)?(?:for\s+)?(\d+|one|two|three|four|five|six|seven|eight|nine|ten|fifteen|twenty|thirty|sixty|a|an|half an?)\s+(?:game\s+)?(minutes?|hours?)(?:\s+in (?:the )?lobby)?[.!]?$/i);if(m&&EpiRepositoryLobby.here(save)){const values={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,fifteen:15,twenty:20,thirty:30,sixty:60,a:1,an:1,'half a':.5,'half an':.5},n=values[m[1].toLowerCase()]??Number(m[1]);return repositoryLobbyAction('wait','',n*(/^hour/i.test(m[2])?60:1));}return false;
}
document.addEventListener('click',e=>{const b=e.target.closest?.('[data-lobby]');if(b&&!b.disabled)repositoryLobbyAction(b.dataset.lobby,b.dataset.lobbyId);});
document.addEventListener('input',e=>{if(e.target.id==='repositoryLobbyWaitMinutes')save.hub.repositoryWaitDraft=e.target.value;});
