/* Exact owner collage grid mapping; all exported panels are 1100 x 733. */
(function(root,factory){const api=factory(typeof module==='object'&&module.exports?require('./hub-world'):root.EpiHubWorld);if(typeof module==='object'&&module.exports)module.exports=api;else root.EpiHubArt=api;})(globalThis,function(W){
'use strict';const WIDTH=1100,HEIGHT=733;
function path(location,phase){const n=W.node(location);if(!W.isHub(location))return null;const id=n.direction==='C'?'spire':n.direction.toLowerCase();return 'assets/hub/'+(phase==='night'?'night':'day')+'/hub-'+id+'-v1.jpg';}
return Object.freeze({WIDTH,HEIGHT,path});
});
