(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{936:function(e,r,t){"use strict";t.r(r);t(94),t(24),t(93),t(103);var n=t(332),d=t(187),c={mixins:[n.a],computed:{keycardsMax:function(){if(!this.tracker.mode)return 0;var e=this.conquest[this.tracker.mode];return Object(d.a)(e)},keycardsNeeded:function(){var e;if(!this.tracker)return 0;var r=this.tracker.mode;if(!r)return 0;var t=this.conquest[r],n=null===(e=this.tracker[r])||void 0===e?void 0:e.crate;return n?t.crates["".concat(r,"-0").concat(n)].keycards:0},keycardsStarred:function(){var e=this.tracker.mode;if(!e)return 0;var r=this.conquest[e];return this.starredKeycardsInConquest(r)},keycardsDone:function(){var e=this.tracker.mode;if(!e)return 0;var r=this.conquest[e];return this.doneKeycardsInConquest(r)},starredIds:function(){return this.tracker.starred||[]},doneIds:function(){return this.tracker.done||[]}},methods:{starredKeycardsInConquest:function(e){return this.starredKeycardsInSector(e.sector1)+this.starredKeycardsInSector(e.sector2)+this.starredKeycardsInSector(e.sector3)+this.starredKeycardsInSector(e.sector4)+this.starredKeycardsInSector(e.sector5)+this.starredKeycardsInZone(e.global.feats)},starredKeycardsInSector:function(e){return this.starredKeycardsInSectorNodes(e)+this.starredKeycardsInZone(e.nodesFeats)+this.starredKeycardsInZone(e.minibossFeats)+this.starredKeycardsInZone(e.bossFeats)},starredKeycardsInSectorNodes:function(e){var r;return(null===(r=this.tracker[e.id])||void 0===r?void 0:r.nodesKeycardsStarred)||0},starredKeycardsInZone:function(e){var r=this;return e.reduce((function(e,t){return e+(r.starredIds.includes(t.id)?t.keycards:0)}),0)},doneKeycardsInConquest:function(e){return this.doneKeycardsInSector(e.sector1)+this.doneKeycardsInSector(e.sector2)+this.doneKeycardsInSector(e.sector3)+this.doneKeycardsInSector(e.sector4)+this.doneKeycardsInSector(e.sector5)+this.doneKeycardsInZone(e.global.feats)},doneKeycardsInSector:function(e){return this.doneKeycardsInSectorNodes(e)+this.doneKeycardsInZone(e.nodesFeats)+this.doneKeycardsInZone(e.minibossFeats)+this.doneKeycardsInZone(e.bossFeats)},doneKeycardsInSectorNodes:function(e){var r;return(null===(r=this.tracker[e.id])||void 0===r?void 0:r.nodesKeycardsDone)||0},doneKeycardsInZone:function(e){var r=this;return e.reduce((function(e,t){return e+r.doneIds.includes(t.id)?t.keycards:0}),0)}}},o=c,y=t(79),component=Object(y.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-descriptions",{staticStyle:{padding:"0 10px"},attrs:{column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:2},size:"small"}},[t("a-descriptions-item",{attrs:{label:e.$t("keycards.max")}},[e._v("\n    "+e._s(e.keycardsMax)+"\n  ")]),e._v(" "),t("a-descriptions-item",{attrs:{label:e.$t("keycards.needed")}},[e._v("\n    "+e._s(e.keycardsNeeded)+"\n  ")]),e._v(" "),t("a-descriptions-item",{attrs:{label:e.$t("keycards.starred")}},[e.keycardsNeeded>e.keycardsStarred?t("a-badge",{attrs:{dot:"",status:"error"}},[t("span",[e._v(e._s(e.keycardsStarred))])]):t("span",[e._v(e._s(e.keycardsStarred))])],1),e._v(" "),t("a-descriptions-item",{attrs:{label:e.$t("keycards.done")}},[e._v("\n    "+e._s(e.keycardsDone)+"\n  ")])],1)}),[],!1,null,null,null);r.default=component.exports}}]);
//# sourceMappingURL=cdb83f2.js.map