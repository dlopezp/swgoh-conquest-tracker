(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{345:function(t,e,r){"use strict";r(28),r(20),r(31),r(8),r(42),r(27),r(43);var n=r(13),o=r(60);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={computed:d({},Object(o.b)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),methods:d({},Object(o.c)({updateTracker:"UPDATE_TRACKER",mergeTracker:"MERGE_TRACKER"}))}},347:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("300e8d80",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";r(347)},350:function(t,e,r){var n=r(64)(!1);n.push([t.i,".feat-card footer button{margin-left:5px}.feat-card .vs-card--footer{transform:none}.feat-card--starred{background-color:rgba(var(--vs-warning),.2)}.feat-card--done{background-color:rgba(var(--vs-success),.2)}",""]),t.exports=n},355:function(t,e,r){"use strict";r.r(e);var n=r(68),o=r(13),c=(r(49),r(54),r(31),r(8),r(45),r(94),r(345)),d={props:{feat:Object},mixins:[c.a],computed:{featsDone:function(){return this.tracker.done||[]},featsStarred:function(){return this.tracker.starred||[]},isDone:function(){return this.featsDone.includes(this.feat.id)},isStarred:function(){return this.featsStarred.includes(this.feat.id)},comments:function(){var t;return(null===(t=this.tracker[this.feat.id])||void 0===t?void 0:t.comments)||""}},data:function(){return{editing:!1}},methods:{editComments:function(){this.tracker[this.feat.id]||this.mergeTracker(Object(o.a)({},this.feat.id,{comments:""})),this.editing=!0},saveComment:function(){this.editing=!1},onEditComments:function(t){console.log(t),this.mergeTracker(Object(o.a)({},this.feat.id,{comments:t}))},done:function(){var t=this,e=this.isDone?this.featsDone.filter((function(e){return e!==t.feat.id})):[].concat(Object(n.a)(this.featsDone),[this.feat.id]);this.updateTracker({done:e}),setTimeout((function(){return document.activeElement.blur()}),0)},toDo:function(){var t=this,e=this.isStarred?this.featsStarred.filter((function(e){return e!==t.feat.id})):[].concat(Object(n.a)(this.featsStarred),[this.feat.id]);this.updateTracker({starred:e}),setTimeout((function(){return document.activeElement.blur()}),0)}}},f=(r(349),r(53)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vs-card",{staticClass:"feat-card",class:{"feat-card--done":t.isDone,"feat-card--starred":t.isStarred}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h3",[t._v(t._s(t.$t(t.feat.title)))])]),t._v(" "),r("div",[r("span",[t._v(t._s(t.$t(t.feat.description)))])]),t._v(" "),r("div",[t.editing?r("fragment",[r("vs-textarea",{attrs:{label:t.$t("feat.comments"),value:t.tracker[t.feat.id]&&t.tracker[t.feat.id].comments},on:{input:t.onEditComments}}),t._v(" "),r("vs-button",{attrs:{color:"primary",type:"flat",icon:"done",size:"small"},on:{click:t.saveComment}})],1):r("fragment",[t.comments?r("p",[t._v(t._s(t.comments))]):t._e(),t._v(" "),r("vs-button",{attrs:{color:"primary",type:"flat",icon:"edit",size:"small"},on:{click:t.editComments}})],1)],1),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("vs-row",{attrs:{"vs-justify":"flex-end"}},[r("vs-button",{attrs:{color:"danger",type:t.isDone?"filled":"border",icon:t.isDone?"task_alt":"radio_button_unchecked",size:"small"},on:{click:t.done}}),t._v(" "),r("vs-button",{attrs:{color:"primary",type:t.isStarred?"filled":"border",icon:t.isStarred?"star":"star_border",size:"small"},on:{click:t.toDo}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,r){"use strict";r.r(e);var n={name:"Feats",props:{feats:Array}},o=r(53),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.feats,(function(e,n){return r("div",{key:e.id},[r("feat",{attrs:{feat:e}}),t._v(" "),n!==t.feats.length-1?r("vs-divider"):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Feat:r(355).default})}}]);