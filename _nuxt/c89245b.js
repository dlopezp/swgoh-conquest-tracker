(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4],{361:function(t,e,r){"use strict";r(30),r(19),r(33),r(9),r(41),r(29),r(42);var n=r(13),o=r(66);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={computed:d({},Object(o.b)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),methods:d({},Object(o.c)({updateTracker:"UPDATE_TRACKER",mergeTracker:"MERGE_TRACKER"}))}},363:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("300e8d80",content,!0,{sourceMap:!1})},365:function(t,e,r){"use strict";r(363)},366:function(t,e,r){var n=r(71)(!1);n.push([t.i,".feat-card footer button{margin-left:5px}.feat-card .vs-card--footer{transform:none}.feat-card--starred{background-color:rgba(var(--vs-warning),.2)}.feat-card--done{background-color:rgba(var(--vs-success),.2)}",""]),t.exports=n},368:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o}));r(9);var n=function(t){return t.reduce((function(t,e){return t+e.keycards}),0)},o=function(t){return 66+n(t.nodesFeats)+n(t.minibossFeats)+n(t.bossFeats)},c=function(t){return o(t.sector1)+o(t.sector2)+o(t.sector3)+o(t.sector4)+o(t.sector5)+n(t.global.feats)}},371:function(t,e,r){"use strict";r.r(e);var n=r(75),o=r(13),c=(r(55),r(60),r(33),r(9),r(51),r(104),r(361)),d={props:{feat:Object},mixins:[c.a],computed:{featsDone:function(){return this.tracker.done||[]},featsStarred:function(){return this.tracker.starred||[]},isDone:function(){return this.featsDone.includes(this.feat.id)},isStarred:function(){return this.featsStarred.includes(this.feat.id)},comments:function(){var t;return(null===(t=this.tracker[this.feat.id])||void 0===t?void 0:t.comments)||""}},data:function(){return{editing:!1}},methods:{editComments:function(){this.tracker[this.feat.id]||this.mergeTracker(Object(o.a)({},this.feat.id,{comments:""})),this.editing=!0},saveComment:function(){this.editing=!1},onEditComments:function(t){console.log(t),this.mergeTracker(Object(o.a)({},this.feat.id,{comments:t}))},done:function(){var t=this,e=this.isDone?this.featsDone.filter((function(e){return e!==t.feat.id})):[].concat(Object(n.a)(this.featsDone),[this.feat.id]);this.updateTracker({done:e}),setTimeout((function(){return document.activeElement.blur()}),0)},toDo:function(){var t=this,e=this.isStarred?this.featsStarred.filter((function(e){return e!==t.feat.id})):[].concat(Object(n.a)(this.featsStarred),[this.feat.id]);this.updateTracker({starred:e}),setTimeout((function(){return document.activeElement.blur()}),0)}}},f=(r(365),r(59)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vs-card",{staticClass:"feat-card",class:{"feat-card--done":t.isDone,"feat-card--starred":t.isStarred}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h3",[t._v(t._s(t.$t(t.feat.title)))])]),t._v(" "),r("div",[r("span",[t._v(t._s(t.$t(t.feat.description)))])]),t._v(" "),r("div",[t.editing?r("fragment",[r("vs-textarea",{attrs:{label:t.$t("feat.comments"),value:t.tracker[t.feat.id]&&t.tracker[t.feat.id].comments},on:{input:t.onEditComments}}),t._v(" "),r("vs-button",{attrs:{color:"primary",type:"flat",icon:"done",size:"small"},on:{click:t.saveComment}})],1):r("fragment",[t.comments?r("p",[t._v(t._s(t.comments))]):t._e(),t._v(" "),r("vs-button",{attrs:{color:"primary",type:"flat",icon:"edit",size:"small"},on:{click:t.editComments}})],1)],1),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("vs-row",{attrs:{"vs-justify":"flex-end"}},[r("vs-button",{attrs:{color:"danger",type:t.isDone?"filled":"border",icon:t.isDone?"task_alt":"radio_button_unchecked",size:"small"},on:{click:t.done}}),t._v(" "),r("vs-button",{attrs:{color:"primary",type:t.isStarred?"filled":"border",icon:t.isStarred?"star":"star_border",size:"small"},on:{click:t.toDo}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,r){"use strict";r.r(e);var n={name:"Feats",props:{feats:Array}},o=r(59),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.feats,(function(e,n){return r("div",{key:e.id},[r("feat",{attrs:{feat:e}}),t._v(" "),n!==t.feats.length-1?r("vs-divider"):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Feat:r(371).default})},373:function(t,e,r){t.exports=r.p+"img/keycards.393ed91.png"},374:function(t,e,r){"use strict";var n=r(20),o=r(1),c=r(5),d=r(105),f=r(36),l=r(26),v=r(175),m=r(67),h=r(136),_=r(243),y=r(6),O=r(86).f,k=r(61).f,N=r(31).f,S=r(375),j=r(244).trim,D="Number",E=o.Number,T=E.prototype,K=o.TypeError,F=c("".slice),I=c("".charCodeAt),C=function(t){var e=_(t,"number");return"bigint"==typeof e?e:w(e)},w=function(t){var e,r,n,o,c,d,f,code,l=_(t,"number");if(h(l))throw K("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=j(l),43===(e=I(l,0))||45===e){if(88===(r=I(l,2))||120===r)return NaN}else if(48===e){switch(I(l,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+l}for(d=(c=F(l,2)).length,f=0;f<d;f++)if((code=I(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+l};if(d(D,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var x,$=function(t){var e=arguments.length<1?0:E(C(t)),r=this;return m(T,r)&&y((function(){S(r)}))?v(Object(e),r,$):e},A=n?O(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;A.length>P;P++)l(E,x=A[P])&&!l($,x)&&N($,x,k(E,x));$.prototype=T,T.constructor=$,f(o,D,$)}},375:function(t,e,r){var n=r(5);t.exports=n(1..valueOf)},376:function(t,e,r){"use strict";r.r(e);var n=r(13),o=(r(374),r(368)),c=r(361),d={name:"Sector",props:{sector:Object},mixins:[c.a],computed:{sectorKeycards:function(){return Object(o.b)(this.sector)},sectorNodesKeycardsDone:function(){var t;return(null===(t=this.tracker[this.sector.id])||void 0===t?void 0:t.nodesKeycardsDone)||0},sectorNodesKeycardsStarred:function(){var t;return(null===(t=this.tracker[this.sector.id])||void 0===t?void 0:t.nodesKeycardsStarred)||0},isDone:function(){return this.sectorNodesKeycardsDone>0&&this.sectorNodesKeycardsDone>=this.sectorNodesKeycardsStarred},isStarred:function(){return this.sectorNodesKeycardsStarred>0}},data:function(){return{sectorZones:["nodesFeats","minibossFeats","bossFeats"]}},methods:{onSectorNodesKeycardsDoneChange:function(t){var e=Number(t);this.mergeTracker(Object(n.a)({},this.sector.id,{nodesKeycardsDone:e}))},onSectorNodesKeycardsStarredChange:function(t){var e=Number(t);this.mergeTracker(Object(n.a)({},this.sector.id,{nodesKeycardsStarred:e}))}}},f=r(59),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"sector-header"},[n("h3",[t._v(t._s(t.$t(t.sector.title)))]),t._v(" "),n("span",[t._v(t._s(t.sectorKeycards)),n("img",{attrs:{src:r(373),alt:""}})])])]),t._v(" "),n("div",[n("vs-collapse",[n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n          "+t._s(t.$t("sector.nodesKeycards"))+"\n        ")]),t._v(" "),n("vs-card",{staticClass:"feat-card",class:{"feat-card--done":t.isDone,"feat-card--starred":t.isStarred}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h3",[t._v(t._s(t.$t("sector.nodesKeycardsTitle")))])]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("sector.nodesKeycardsDescription")))])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("vs-row",{attrs:{"vs-justify":"flex-end"}},[n("vs-input-number",{attrs:{color:"success",min:"0",max:"66",value:t.sectorNodesKeycardsDone},on:{input:t.onSectorNodesKeycardsDoneChange}}),t._v(" "),n("vs-input-number",{attrs:{min:"0",max:"66",value:t.sectorNodesKeycardsStarred},on:{input:t.onSectorNodesKeycardsStarredChange}})],1)],1)])],1),t._v(" "),n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n          "+t._s(t.$t("sector.nodesFeatsTitle"))+"\n        ")]),t._v(" "),n("feats",{attrs:{feats:t.sector.nodesFeats}})],1),t._v(" "),n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n          "+t._s(t.$t("sector.minibossFeatsTitle"))+"\n        ")]),t._v(" "),n("feats",{attrs:{feats:t.sector.minibossFeats}})],1),t._v(" "),n("vs-collapse-item",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n          "+t._s(t.$t("sector.bossFeatsTitle"))+"\n        ")]),t._v(" "),n("feats",{attrs:{feats:t.sector.bossFeats}})],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Feats:r(372).default})}}]);