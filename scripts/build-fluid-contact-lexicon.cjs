const fs=require('node:fs'),L=require('../rebuild/hub/fluid-contact-lexicon');
fs.writeFileSync('rebuild/hub/explicit-action-types/fluid-contact.json',JSON.stringify({...L.definitions,bodyType:'humanoid',regionAliases:L.regions,source:'rebuild/hub/fluid-contact-lexicon.js',controller:'rebuild/hub/fluid-contact.js'},null,2)+'\n');
console.log('Generated approved fluid-contact reference from runtime lexicon');
