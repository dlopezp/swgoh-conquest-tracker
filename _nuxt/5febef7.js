(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{361:function(e,r,t){"use strict";t(30),t(19),t(33),t(9),t(41),t(29),t(42);var n=t(13),c=t(66);function o(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}r.a={computed:d({},Object(c.c)({isLoggedIn:"isLoggedIn",tracker:"getTracker",conquest:"conquest"})),methods:d({},Object(c.b)({updateTracker:"updateTracker",mergeTracker:"mergeTracker"}))}},368:function(e,r,t){"use strict";t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return c}));t(9);var n=function(e){return e.reduce((function(e,r){return e+r.keycards}),0)},c=function(e){return 66+n(e.nodesFeats)+n(e.minibossFeats)+n(e.bossFeats)},o=function(e){return c(e.sector1)+c(e.sector2)+c(e.sector3)+c(e.sector4)+c(e.sector5)+n(e.global.feats)}},379:function(e,r,t){"use strict";t.r(r);t(51),t(9),t(55),t(60);var n=t(361),c=t(368),o={mixins:[n.a],computed:{keycardsMax:function(){if(!this.tracker.mode)return 0;var e=this.conquest[this.tracker.mode];return Object(c.a)(e)},keycardsNeeded:function(){var e;if(!this.tracker)return 0;var r=this.tracker.mode;if(!r)return 0;var t=this.conquest[r],n=null===(e=this.tracker[r])||void 0===e?void 0:e.crate;return n?t.crates["".concat(r,"-0").concat(n)].keycards:0},keycardsStarred:function(){var e=this.tracker.mode;if(!e)return 0;var r=this.conquest[e];return this.starredKeycardsInConquest(r)},keycardsDone:function(){var e=this.tracker.mode;if(!e)return 0;var r=this.conquest[e];return this.doneKeycardsInConquest(r)},starredIds:function(){return this.tracker.starred||[]},doneIds:function(){return this.tracker.done||[]}},methods:{starredKeycardsInConquest:function(e){return this.starredKeycardsInSector(e.sector1)+this.starredKeycardsInSector(e.sector2)+this.starredKeycardsInSector(e.sector3)+this.starredKeycardsInSector(e.sector4)+this.starredKeycardsInSector(e.sector5)+this.starredKeycardsInZone(e.global.feats)},starredKeycardsInSector:function(e){return this.starredKeycardsInSectorNodes(e)+this.starredKeycardsInZone(e.nodesFeats)+this.starredKeycardsInZone(e.minibossFeats)+this.starredKeycardsInZone(e.bossFeats)},starredKeycardsInSectorNodes:function(e){var r;return(null===(r=this.tracker[e.id])||void 0===r?void 0:r.nodesKeycardsStarred)||0},starredKeycardsInZone:function(e){var r=this;return e.reduce((function(e,t){return e+(r.starredIds.includes(t.id)?t.keycards:0)}),0)},doneKeycardsInConquest:function(e){return this.doneKeycardsInSector(e.sector1)+this.doneKeycardsInSector(e.sector2)+this.doneKeycardsInSector(e.sector3)+this.doneKeycardsInSector(e.sector4)+this.doneKeycardsInSector(e.sector5)+this.doneKeycardsInZone(e.global.feats)},doneKeycardsInSector:function(e){return this.doneKeycardsInSectorNodes(e)+this.doneKeycardsInZone(e.nodesFeats)+this.doneKeycardsInZone(e.minibossFeats)+this.doneKeycardsInZone(e.bossFeats)},doneKeycardsInSectorNodes:function(e){var r;return(null===(r=this.tracker[e.id])||void 0===r?void 0:r.nodesKeycardsDone)||0},doneKeycardsInZone:function(e){var r=this;return e.reduce((function(e,t){return e+r.doneIds.includes(t.id)?t.keycards:0}),0)}}},d=o,y=t(59),component=Object(y.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("p",[e._v(e._s(e.$t("keycards.max"))+": "+e._s(e.keycardsMax))]),e._v(" "),t("p",[e._v(e._s(e.$t("keycards.needed"))+": "+e._s(e.keycardsNeeded))]),e._v(" "),t("p",[e._v(e._s(e.$t("keycards.starred"))+": "+e._s(e.keycardsStarred))]),e._v(" "),t("p",[e._v(e._s(e.$t("keycards.done"))+": "+e._s(e.keycardsDone))]),e._v(" "),e.keycardsNeeded>e.keycardsStarred?t("vs-alert",{attrs:{title:"Danger",active:"true",color:"danger"}},[e._v("\n    "+e._s(e.$t("keycards.need_more_starred"))+"\n  ")]):e._e()],1)}),[],!1,null,null,null);r.default=component.exports}}]);