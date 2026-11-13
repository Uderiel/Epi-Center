/* Follow new messages only while the reader is already at the bottom. */
(function(r,f){const a=f();if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiFeedPosition=a;})(globalThis,function(){
function top(feed,node){return node.getBoundingClientRect?node.getBoundingClientRect().top-feed.getBoundingClientRect().top+feed.scrollTop:node.offsetTop;}
function capture(feed){const follow=feed.scrollHeight-feed.clientHeight-feed.scrollTop<=24,nodes=[...feed.querySelectorAll('[data-feed-id]')],anchor=nodes.find(x=>top(feed,x)+x.offsetHeight>feed.scrollTop);return {follow,top:feed.scrollTop,id:anchor?.dataset.feedId,delta:anchor?feed.scrollTop-top(feed,anchor):0};}
function restore(feed,state){if(!state||state.follow){feed.scrollTop=feed.scrollHeight;return;}const anchor=[...feed.querySelectorAll('[data-feed-id]')].find(x=>x.dataset.feedId===state.id);feed.scrollTop=anchor?top(feed,anchor)+state.delta:state.top;}
return Object.freeze({capture,restore});
});
