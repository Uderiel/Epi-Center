/* Freeze release canon once; subsequent drift must fail rather than rewrite history. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
function freeze(root=process.cwd(),{verifyOnly=false}={}){
 const read=f=>fs.readFileSync(path.join(root,f)),version=read('rebuild/hub/index.html').toString().match(/EPI-CENTER v(1\.0\.\d+)/)[1],canonical='docs/EPI-CENTER-WORLD-BIBLE.md',frozen='docs/bible/v'+version+'-world-bible.md',manifest='docs/releases/v'+version+'-bible-integrity.json',bytes=read(canonical),sha256=crypto.createHash('sha256').update(bytes).digest('hex'),record={version,canonical,frozen,bytes:bytes.length,sha256};
 if(fs.existsSync(path.join(root,frozen))){if(!read(frozen).equals(bytes))throw Error('Frozen World Bible differs from current canon. Preserve this release and reconcile under a new version.');}else{if(verifyOnly)throw Error('Missing frozen World Bible');fs.mkdirSync(path.dirname(path.join(root,frozen)),{recursive:true});fs.writeFileSync(path.join(root,frozen),bytes,{flag:'wx'});}
 if(fs.existsSync(path.join(root,manifest))){if(JSON.stringify(JSON.parse(read(manifest)))!==JSON.stringify(record))throw Error('World Bible integrity manifest differs');}else{if(verifyOnly)throw Error('Missing World Bible integrity manifest');fs.mkdirSync(path.dirname(path.join(root,manifest)),{recursive:true});fs.writeFileSync(path.join(root,manifest),JSON.stringify(record,null,2)+'\n',{flag:'wx'});}
 return record;
}
module.exports=freeze;if(require.main===module)console.log(JSON.stringify(freeze(process.cwd(),{verifyOnly:process.argv.includes('--verify')})));
