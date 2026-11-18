/* Exact owner-approved originals only. Populate paths after original file bytes are available. */
globalThis.EpiFlatsPortraits=Object.freeze({worn:null,unworn:null});
function flatsPortraitMarkup(q){const state=q.place==='worn'?'worn':'unworn',path=EpiFlatsPortraits[state];if(!path)return '';return '<figure class="flats-portrait"><img src="'+htmlEscape(path)+'" alt="Priya’s flats · '+state+'" style="max-width:100%;max-height:400px;object-fit:contain"><figcaption>'+htmlEscape(state==='worn'?'Being worn by Priya':'Your unworn object body')+'</figcaption></figure>';}
