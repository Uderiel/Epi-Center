/* Writes a separate current release report; preserves release evidence. */
const fs=require('node:fs'),vm=require('node:vm'),cp=require('node:child_process'),path=require('node:path');
const results=[];let failed=false,namedCases=0;
for(const dir of ['rebuild/combat','rebuild/hub'])for(const file of fs.readdirSync(dir).filter(n=>n.endsWith('.test.js'))){
 const r=cp.spawnSync(process.execPath,[path.join(dir,file)],{encoding:'utf8'});results.push({file:path.join(dir,file),exitCode:r.status,output:r.stdout,stderr:r.stderr});
 namedCases+=(r.stdout.match(/^PASS /gm)||[]).length;if(r.status!==0)failed=true;console.log(file+': '+(r.status===0?'PASS':'FAIL'));if(r.status!==0)console.log(r.stdout,r.stderr);
}
for(const dir of ['rebuild/combat','rebuild/hub'])for(const file of fs.readdirSync(dir).filter(n=>n.endsWith('.js')&&!n.endsWith('.test.js')))new vm.Script(fs.readFileSync(path.join(dir,file),'utf8'),{filename:path.join(dir,file)});
for(const file of ['rebuild/hub/index.html','rebuild/title-screen/index.html','rebuild/character-creation/index.html']){
 const source=fs.readFileSync(file,'utf8');for(const m of source.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)){if(/\btype=["']module/.test(m[1]||'')||/\bsrc=/.test(m[1]||''))continue;new vm.Script(m[2],{filename:file});}
 for(const m of source.matchAll(/<script[^>]*src="([^"]+)"/g))if(!fs.existsSync(path.resolve(path.dirname(file),m[1].split('?')[0])))throw Error('Missing module '+m[1]);
}
const report={checkpoint:'v1.0.53 implementation candidate',namedCases,suiteResults:results,syntax:'PASS',modulePaths:'PASS',passed:!failed};
fs.writeFileSync('docs/releases/v1.0.53-tests.json',JSON.stringify(report,null,2));console.log(namedCases+' named cases; entity assertions additionally run in their suite.');process.exitCode=failed?1:0;
