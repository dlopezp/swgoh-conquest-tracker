(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,7,8,9],{361:function(e,t,r){"use strict";r(30),r(19),r(33),r(9),r(41),r(29),r(42);var n=r(13),o=r(66);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={computed:d({},Object(o.b)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),methods:d({},Object(o.c)({updateTracker:"UPDATE_TRACKER",mergeTracker:"MERGE_TRACKER"}))}},363:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("300e8d80",content,!0,{sourceMap:!1})},365:function(e,t,r){"use strict";r(363)},366:function(e,t,r){var n=r(71)(!1);n.push([e.i,".feat-card footer button{margin-left:5px}.feat-card .vs-card--footer{transform:none}.feat-card--starred{background-color:rgba(var(--vs-warning),.2)}.feat-card--done{background-color:rgba(var(--vs-success),.2)}",""]),e.exports=n},368:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}));r(9);var n=function(e){return e.reduce((function(e,t){return e+t.keycards}),0)},o=function(e){return 66+n(e.nodesFeats)+n(e.minibossFeats)+n(e.bossFeats)},c=function(e){return o(e.sector1)+o(e.sector2)+o(e.sector3)+o(e.sector4)+o(e.sector5)+n(e.global.feats)}},371:function(e,t,r){"use strict";r.r(t);var n=r(75),o=r(13),c=(r(55),r(60),r(33),r(9),r(51),r(104),r(361)),d={props:{feat:Object},mixins:[c.a],computed:{featsDone:function(){return this.tracker.done||[]},featsStarred:function(){return this.tracker.starred||[]},isDone:function(){return this.featsDone.includes(this.feat.id)},isStarred:function(){return this.featsStarred.includes(this.feat.id)},comments:function(){var e;return(null===(e=this.tracker[this.feat.id])||void 0===e?void 0:e.comments)||""}},data:function(){return{editing:!1}},methods:{editComments:function(){this.tracker[this.feat.id]||this.mergeTracker(Object(o.a)({},this.feat.id,{comments:""})),this.editing=!0},saveComment:function(){this.editing=!1},onEditComments:function(e){console.log(e),this.mergeTracker(Object(o.a)({},this.feat.id,{comments:e}))},done:function(){var e=this,t=this.isDone?this.featsDone.filter((function(t){return t!==e.feat.id})):[].concat(Object(n.a)(this.featsDone),[this.feat.id]);this.updateTracker({done:t}),setTimeout((function(){return document.activeElement.blur()}),0)},toDo:function(){var e=this,t=this.isStarred?this.featsStarred.filter((function(t){return t!==e.feat.id})):[].concat(Object(n.a)(this.featsStarred),[this.feat.id]);this.updateTracker({starred:t}),setTimeout((function(){return document.activeElement.blur()}),0)}}},l=(r(365),r(59)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vs-card",{staticClass:"feat-card",class:{"feat-card--done":e.isDone,"feat-card--starred":e.isStarred}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h3",[e._v(e._s(e.$t(e.feat.title)))])]),e._v(" "),r("div",[r("span",[e._v(e._s(e.$t(e.feat.description)))])]),e._v(" "),r("div",[e.editing?r("fragment",[r("vs-textarea",{attrs:{label:e.$t("feat.comments"),value:e.tracker[e.feat.id]&&e.tracker[e.feat.id].comments},on:{input:e.onEditComments}}),e._v(" "),r("vs-button",{attrs:{color:"primary",type:"flat",icon:"done",size:"small"},on:{click:e.saveComment}})],1):r("fragment",[e.comments?r("p",[e._v(e._s(e.comments))]):e._e(),e._v(" "),r("vs-button",{attrs:{color:"primary",type:"flat",icon:"edit",size:"small"},on:{click:e.editComments}})],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("vs-row",{attrs:{"vs-justify":"flex-end"}},[r("vs-button",{attrs:{color:"danger",type:e.isDone?"filled":"border",icon:e.isDone?"task_alt":"radio_button_unchecked",size:"small"},on:{click:e.done}}),e._v(" "),r("vs-button",{attrs:{color:"primary",type:e.isStarred?"filled":"border",icon:e.isStarred?"star":"star_border",size:"small"},on:{click:e.toDo}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports},372:function(e,t,r){"use strict";r.r(t);var n={name:"Feats",props:{feats:Array}},o=r(59),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.feats,(function(t,n){return r("div",{key:t.id},[r("feat",{attrs:{feat:t}}),e._v(" "),n!==e.feats.length-1?r("vs-divider"):e._e()],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Feat:r(371).default})},373:function(e,t,r){e.exports=r.p+"img/keycards.393ed91.png"},374:function(e,t,r){"use strict";var n=r(20),o=r(1),c=r(5),d=r(105),l=r(36),f=r(26),v=r(175),h=r(67),m=r(136),y=r(243),_=r(6),O=r(86).f,k=r(61).f,S=r(31).f,j=r(375),I=r(244).trim,K="Number",D=o.Number,E=D.prototype,N=o.TypeError,$=c("".slice),P=c("".charCodeAt),T=function(e){var t=y(e,"number");return"bigint"==typeof t?t:w(t)},w=function(e){var t,r,n,o,c,d,l,code,f=y(e,"number");if(m(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(t=P(f,0))||45===t){if(88===(r=P(f,2))||120===r)return NaN}else if(48===t){switch(P(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(d=(c=$(f,2)).length,l=0;l<d;l++)if((code=P(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(d(K,!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var C,x=function(e){var t=arguments.length<1?0:D(T(e)),r=this;return h(E,r)&&_((function(){j(r)}))?v(Object(t),r,x):t},F=n?O(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;F.length>A;A++)f(D,C=F[A])&&!f(x,C)&&S(x,C,k(D,C));x.prototype=E,E.constructor=x,l(o,K,x)}},375:function(e,t,r){var n=r(5);e.exports=n(1..valueOf)},376:function(e,t,r){"use strict";r.r(t);var n=r(13),o=(r(374),r(368)),c=r(361),d={name:"Sector",props:{sector:Object},mixins:[c.a],computed:{sectorKeycards:function(){return Object(o.b)(this.sector)},sectorNodesKeycardsDone:function(){var e;return(null===(e=this.tracker[this.sector.id])||void 0===e?void 0:e.nodesKeycardsDone)||0},sectorNodesKeycardsStarred:function(){var e;return(null===(e=this.tracker[this.sector.id])||void 0===e?void 0:e.nodesKeycardsStarred)||0},isDone:function(){return this.sectorNodesKeycardsDone>0&&this.sectorNodesKeycardsDone>=this.sectorNodesKeycardsStarred},isStarred:function(){return this.sectorNodesKeycardsStarred>0}},data:function(){return{sectorZones:["nodesFeats","minibossFeats","bossFeats"]}},methods:{onSectorNodesKeycardsDoneChange:function(e){var t=Number(e);this.mergeTracker(Object(n.a)({},this.sector.id,{nodesKeycardsDone:t}))},onSectorNodesKeycardsStarredChange:function(e){var t=Number(e);this.mergeTracker(Object(n.a)({},this.sector.id,{nodesKeycardsStarred:t}))}}},l=r(59),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vs-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"sector-header"},[n("h3",[e._v(e._s(e.$t(e.sector.title)))]),e._v(" "),n("span",[e._v(e._s(e.sectorKeycards)),n("img",{attrs:{src:r(373),alt:""}})])])]),e._v(" "),n("div",[n("vs-collapse",[n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n          "+e._s(e.$t("sector.nodesKeycards"))+"\n        ")]),e._v(" "),n("vs-card",{staticClass:"feat-card",class:{"feat-card--done":e.isDone,"feat-card--starred":e.isStarred}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h3",[e._v(e._s(e.$t("sector.nodesKeycardsTitle")))])]),e._v(" "),n("div",[n("span",[e._v(e._s(e.$t("sector.nodesKeycardsDescription")))])]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("vs-row",{attrs:{"vs-justify":"flex-end"}},[n("vs-input-number",{attrs:{color:"success",min:"0",max:"66",value:e.sectorNodesKeycardsDone},on:{input:e.onSectorNodesKeycardsDoneChange}}),e._v(" "),n("vs-input-number",{attrs:{min:"0",max:"66",value:e.sectorNodesKeycardsStarred},on:{input:e.onSectorNodesKeycardsStarredChange}})],1)],1)])],1),e._v(" "),n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n          "+e._s(e.$t("sector.nodesFeatsTitle"))+"\n        ")]),e._v(" "),n("feats",{attrs:{feats:e.sector.nodesFeats}})],1),e._v(" "),n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n          "+e._s(e.$t("sector.minibossFeatsTitle"))+"\n        ")]),e._v(" "),n("feats",{attrs:{feats:e.sector.minibossFeats}})],1),e._v(" "),n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n          "+e._s(e.$t("sector.bossFeatsTitle"))+"\n        ")]),e._v(" "),n("feats",{attrs:{feats:e.sector.bossFeats}})],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Feats:r(372).default})},377:function(e,t,r){"use strict";r.r(t);r(30),r(19),r(33),r(9),r(41),r(29),r(42);var n=r(13),o=r(66);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={computed:d({},Object(o.b)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),methods:d(d({},Object(o.c)({updateTracker:"UPDATE_TRACKER"})),{},{onModeChange:function(e){this.updateTracker({mode:e})}})},f=r(59),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vs-select",{attrs:{placeholder:e.$t("modeSelect.placeholder"),label:e.$t("modeSelect.label"),"label-placeholder":e.$t("modeSelect.label"),value:e.tracker.mode},on:{input:e.onModeChange}},[r("vs-select-item",{attrs:{value:"normal",text:e.$t("modeSelect.normal")}}),e._v(" "),r("vs-select-item",{attrs:{value:"hard",text:e.$t("modeSelect.hard")}})],1)}),[],!1,null,null,null);t.default=component.exports},378:function(e,t,r){"use strict";r.r(t);r(30),r(19),r(33),r(9),r(41),r(29),r(42);var n=r(13),o=r(66);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={computed:d(d({},Object(o.b)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),{},{crate:function(){var e=this.tracker[this.tracker.mode];return e&&e.crate}}),methods:d(d({},Object(o.c)({updateTracker:"UPDATE_TRACKER"})),{},{onCrateChange:function(e){this.updateTracker(Object(n.a)({},this.tracker.mode,{crate:e}))}})},f=r(59),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vs-select",{attrs:{placeholder:e.$t("crateSelect.placeholder"),label:e.$t("crateSelect.label"),"label-placeholder":e.$t("crateSelect.label"),value:e.crate},on:{input:e.onCrateChange}},[r("vs-select-item",{attrs:{value:"1",text:e.$t("crateSelect.1")}}),e._v(" "),r("vs-select-item",{attrs:{value:"2",text:e.$t("crateSelect.2")}}),e._v(" "),r("vs-select-item",{attrs:{value:"3",text:e.$t("crateSelect.3")}}),e._v(" "),r("vs-select-item",{attrs:{value:"4",text:e.$t("crateSelect.4")}}),e._v(" "),r("vs-select-item",{attrs:{value:"5",text:e.$t("crateSelect.5")}}),e._v(" "),r("vs-select-item",{attrs:{value:"6",text:e.$t("crateSelect.6")}}),e._v(" "),r("vs-select-item",{attrs:{value:"7",text:e.$t("crateSelect.7")}})],1)}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,r){"use strict";r.r(t);r(51),r(9),r(55),r(60);var n=r(361),o=r(368),c={mixins:[n.a],computed:{keycardsMax:function(){if(!this.tracker.mode)return 0;var e=this.conquest[this.tracker.mode];return Object(o.a)(e)},keycardsNeeded:function(){var e;if(!this.tracker)return 0;var t=this.tracker.mode;if(!t)return 0;var r=this.conquest[t],n=null===(e=this.tracker[t])||void 0===e?void 0:e.crate;return n?r.crates["".concat(t,"-0").concat(n)].keycards:0},keycardsStarred:function(){var e=this.tracker.mode;if(!e)return 0;var t=this.conquest[e];return this.starredKeycardsInConquest(t)},keycardsDone:function(){var e=this.tracker.mode;if(!e)return 0;var t=this.conquest[e];return this.doneKeycardsInConquest(t)},starredIds:function(){return this.tracker.starred||[]},doneIds:function(){return this.tracker.done||[]}},methods:{starredKeycardsInConquest:function(e){return this.starredKeycardsInSector(e.sector1)+this.starredKeycardsInSector(e.sector2)+this.starredKeycardsInSector(e.sector3)+this.starredKeycardsInSector(e.sector4)+this.starredKeycardsInSector(e.sector5)+this.starredKeycardsInZone(e.global.feats)},starredKeycardsInSector:function(e){return this.starredKeycardsInSectorNodes(e)+this.starredKeycardsInZone(e.nodesFeats)+this.starredKeycardsInZone(e.minibossFeats)+this.starredKeycardsInZone(e.bossFeats)},starredKeycardsInSectorNodes:function(e){var t;return(null===(t=this.tracker[e.id])||void 0===t?void 0:t.nodesKeycardsStarred)||0},starredKeycardsInZone:function(e){var t=this;return e.reduce((function(e,r){return e+(t.starredIds.includes(r.id)?r.keycards:0)}),0)},doneKeycardsInConquest:function(e){return this.doneKeycardsInSector(e.sector1)+this.doneKeycardsInSector(e.sector2)+this.doneKeycardsInSector(e.sector3)+this.doneKeycardsInSector(e.sector4)+this.doneKeycardsInSector(e.sector5)+this.doneKeycardsInZone(e.global.feats)},doneKeycardsInSector:function(e){return this.doneKeycardsInSectorNodes(e)+this.doneKeycardsInZone(e.nodesFeats)+this.doneKeycardsInZone(e.minibossFeats)+this.doneKeycardsInZone(e.bossFeats)},doneKeycardsInSectorNodes:function(e){var t;return(null===(t=this.tracker[e.id])||void 0===t?void 0:t.nodesKeycardsDone)||0},doneKeycardsInZone:function(e){var t=this;return e.reduce((function(e,r){return e+t.doneIds.includes(r.id)?r.keycards:0}),0)}}},d=c,l=r(59),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.$t("keycards.max"))+": "+e._s(e.keycardsMax))]),e._v(" "),r("p",[e._v(e._s(e.$t("keycards.needed"))+": "+e._s(e.keycardsNeeded))]),e._v(" "),r("p",[e._v(e._s(e.$t("keycards.starred"))+": "+e._s(e.keycardsStarred))]),e._v(" "),r("p",[e._v(e._s(e.$t("keycards.done"))+": "+e._s(e.keycardsDone))]),e._v(" "),e.keycardsNeeded>e.keycardsStarred?r("vs-alert",{attrs:{title:"Danger",active:"true",color:"danger"}},[e._v("\n    "+e._s(e.$t("keycards.need_more_starred"))+"\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},409:function(e,t,r){"use strict";r.r(t);r(30),r(19),r(33),r(9),r(41),r(29),r(42);var n=r(13),o=r(376),c=r(377),d=r(378),l=r(379),f=r(66);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={components:{Sector:o.default,SelectMode:c.default,SelectCrate:d.default,KeycardStatus:l.default},layout:"navbar",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(f.b)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),data:function(){return{sectors:["sector1","sector2","sector3","sector4","sector5"]}}},m=h,y=r(59),component=Object(y.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("select-mode"),e._v(" "),r("select-crate"),e._v(" "),r("keycard-status"),e._v(" "),e.tracker.mode?r("fragment",[e._l(e.sectors,(function(t){return r("sector",{key:t,attrs:{sector:e.conquest[e.tracker.mode][t]}})})),e._v(" "),r("vs-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("h3",[e._v(e._s(e.$t(e.conquest[e.tracker.mode].global.title)))])]),e._v(" "),r("div",[r("feats",{attrs:{feats:e.conquest[e.tracker.mode].global.feats}})],1)])],2):r("fragment",[r("p",[e._v(e._s(e.$t("tracker.no_mode")))])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SelectMode:r(377).default,SelectCrate:r(378).default,KeycardStatus:r(379).default,Sector:r(376).default,Feats:r(372).default})}}]);