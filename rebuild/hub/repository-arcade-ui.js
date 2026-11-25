/* Optional shortcuts and typed cabinet actions use the same saved activity controller. */
function repositoryArcadeMarkup(){
 const A=EpiRepositoryArcade;if(!A.available(save))return '';const q=A.current(save),vouchers=A.vouchers(save);
 const b=(action,label,id='')=>'<button type="button" class="btn secondary" data-arcade="'+action+'" data-arcade-id="'+htmlEscape(id)+'">'+htmlEscape(label)+'</button>';
 let out='<details data-repository-arcade><summary>Lobby arcade · free play</summary><p>Five one-minute stages. Reflexes and Intuition determine the skill bonus; clear three stages to win. Beat Lee’s900points to earn a single-use five-percent item voucher, once per cabinet.</p>';
 if(q)out+='<p>'+htmlEscape(A.games[q.gameId].name)+' · '+q.elapsed+'/5stages · '+q.stages.reduce((n,r)=>n+r.points,0)+'points</p>'+b('stage','Play the next arcade stage')+b('finish','Play to the end of this arcade game')+b('stop','Stop playing the arcade game');
 else out+=Object.values(A.games).map(g=>b('begin','Play '+g.name+' · '+g.genre,g.id)).join('');
 for(const g of Object.values(A.games))out+='<details><summary>'+htmlEscape(g.name)+' high scores</summary><ol>'+A.board(save,g.id).map(row=>'<li>'+htmlEscape(row.name)+' · '+row.score+'</li>').join('')+'</ol></details>';
 for(const run of A.pendingNames(save))out+='<div data-arcade-name="'+htmlEscape(run.id)+'"><label>Three-letter arcade initials for '+htmlEscape(A.games[run.gameId].name)+'<input name="arcadeName" maxlength="3" autocomplete="off" aria-label="Three-letter arcade initials"></label><button type="button" class="btn secondary" data-arcade="name-submit">Enter arcade initials</button></div>';
 out+='<p>Available arcade vouchers: '+vouchers.length+'. One voucher adds five percentage points to the valid discount on one purchased item. Item checkout is currently unavailable.</p></details>';return out;
}
function repositoryArcadeAction(action,id='',name=''){
 try{let r;if(action==='begin')r=EpiRepositoryArcade.begin(save,id);else if(action==='stage'||action==='finish')r=EpiRepositoryArcade.wait(save,action==='finish');else if(action==='stop')r=EpiRepositoryArcade.stop(save);else if(action==='name')r=EpiRepositoryArcade.submitName(save,id,name);else throw Error('Unknown arcade action.');
 if(r.text)feedEntry('Arcade',r.text,undefined,{origin:'mechanics'});if(r.minutes)advanceGameTime(r.minutes,'Arcade play');
 }catch(e){feedEntry('Arcade',e.message,undefined,{origin:'mechanics'});}store();render();return true;
}
function repositoryArcadeText(raw){
 const p=EpiRoleplayInput.parse(String(raw||''));if(!p.expressed||p.privateNarration)return false;
 let text=p.expressed.trim();if(/\b(?:want to|wish|imagine|suppose|hypothetically|do not|don't|never|not)\b|["“”]/i.test(text))return false;
 const namedGame=text.match(/^(?:I\s+)?(?:set|enter)\s+(?:my\s+)?(Rift Duel|Neon Front|Vector Circuit)\s+(?:arcade|leaderboard)\s+(?:name|initials)\s+(?:to|as)\s+(.+?)[.!]?$/i);if(namedGame){const game=Object.values(EpiRepositoryArcade.games).find(g=>g.name.toLowerCase()===namedGame[1].toLowerCase()),pending=EpiRepositoryArcade.pendingNames(save).filter(r=>r.gameId===game.id);if(pending.length===1)return repositoryArcadeAction('name',pending[0].id,namedGame[2]);feedEntry('Arcade','You have no unnamed record for that cabinet.',undefined,{origin:'mechanics'});return true;}
 const match=text.match(/^(?:I\s+)?(?:enter|put|set)\s+(.+?)\s+(?:as|on)\s+(?:my\s+)?(?:arcade|high.score|leaderboard)\s+(?:name|initials)[.!]?$/i)||text.match(/^(?:I\s+)?(?:enter|set)\s+(?:my\s+)?(?:arcade|leaderboard)\s+(?:name|initials)\s+(?:as|to)\s+(.+?)[.!]?$/i);
 if(!match)return false;const pending=EpiRepositoryArcade.pendingNames(save);if(pending.length!==1){feedEntry('Arcade',pending.length?'Choose which cabinet record to label using its leaderboard entry.':'You have no arcade record awaiting initials.',undefined,{origin:'mechanics'});return true;}
 return repositoryArcadeAction('name',pending[0].id,match[1]);
}
document.addEventListener('click',e=>{const b=e.target.closest?.('[data-arcade]');if(!b||b.disabled)return;if(b.dataset.arcade==='name-submit'){const box=b.closest('[data-arcade-name]');repositoryArcadeAction('name',box.dataset.arcadeName,box.querySelector('input').value);}else repositoryArcadeAction(b.dataset.arcade,b.dataset.arcadeId);});

