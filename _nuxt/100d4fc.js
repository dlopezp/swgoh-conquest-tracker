(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{158:function(e,t,r){"use strict";var n=r(0),o=r(223),c=r.n(o);n.default.prototype.$rollbar=new c.a({accessToken:"93890c05fb024441b401331d24e79183",captureUncaught:!0,captureUnhandledRejections:!0}),n.default.config.errorHandler=function(e,t,r){throw t.$rollbar.error(e),e}},159:function(e,t,r){"use strict";var n=r(0),o=r(224),c=r.n(o);r(197),r(330);n.default.use(c.a)},160:function(e,t,r){"use strict";var n=r(0),o=r(225);n.default.use(o.a)},161:function(e,t,r){"use strict";var n=r(3);r(17);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.store,"CONQUEST_13",e.next=4,n("CONQUEST_13").fetch();case 4:c=e.sent,o.commit("SET_CONQUEST",{conquest:c});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e,t){return o.apply(this,arguments)}},219:function(e){e.exports=JSON.parse('{"index":{"claim":"Plan and track your Galactic Conquest progress"},"modeSelect":{"label":"Choose the dificulty:","placeholder":"Dificulty","easy":"Easy","normal":"Normal","hard":"Hard"},"crateSelect":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","placeholder":"Crate","label":"Choose the crate"},"sector":{"nodesFeatsTitle":"Nodes feats","minibossFeatsTitle":"Miniboss Feats","bossFeatsTitle":"Boss feats"},"SECTOR_1_TITLE":"Sector 1","SECTOR_2_TITLE":"Sector 2","SECTOR_3_TITLE":"Sector 3","SECTOR_4_TITLE":"Sector 4","SECTOR_5_TITLE":"Sector 5","SECTOR_GLOBAL_TITLE":"Global feats","HARD_SECTOR_1_NODE_FEAT_1_TITLE":"--","HARD_SECTOR_1_NODE_FEAT_1_DESCRIPTION":"Gain Critical Over 20 times. (Complete the \\"A New Hope\\" feat to get the Critical Over Data Disk)","HARD_SECTOR_1_NODE_FEAT_2_TITLE":"--","HARD_SECTOR_1_NODE_FEAT_2_DESCRIPTION":"Gain Massively Overpoweres 20 times. (Complete the \\"I Kno There is Good in you\\" feat to get the Massive Overpowered disk)","HARD_SECTOR_1_NODE_FEAT_3_TITLE":"--","HARD_SECTOR_1_NODE_FEAT_3_DESCRIPTION":"Defeat 50 enemies with Bounty Hunter units","HARD_SECTOR_1_NODE_FEAT_4_TITLE":"--","HARD_SECTOR_1_NODE_FEAT_4_DESCRIPTION":"Win 5 battles with no Tanks in your squadron","HARD_SECTOR_1_NODE_FEAT_5_TITLE":"--","HARD_SECTOR_1_NODE_FEAT_5_DESCRIPTION":"Gain Foresight 60 times","HARD_SECTOR_1_NODE_FEAT_6_TITLE":"--","HARD_SECTOR_1_NODE_FEAT_6_DESCRIPTION":"Attempt to inflict Blind 40 times","HARD_SECTOR_1_MINIBOSS_FEAT_1_TITLE":"--","HARD_SECTOR_1_MINIBOSS_FEAT_1_DESCRIPTION":"Win with URoRRuR\'R\'R surviving","HARD_SECTOR_1_MINIBOSS_FEAT_2_TITLE":"--","HARD_SECTOR_1_MINIBOSS_FEAT_2_DESCRIPTION":"Win witn at least 3 Jawa units in your squad","HARD_SECTOR_1_BOSS_FEAT_1_TITLE":"--","HARD_SECTOR_1_BOSS_FEAT_1_DESCRIPTION":"Win with The Mandalorian surviving","HARD_SECTOR_1_BOSS_FEAT_2_TITLE":"--","HARD_SECTOR_1_BOSS_FEAT_2_DESCRIPTION":"Win without any Bounty Hunter in your squads"}')},220:function(e){e.exports=JSON.parse('{"index":{"claim":"Planifica y controla tu progreso en la Conquista Galáctica"},"modeSelect":{"label":"Selecciona la dificultad:","placeholder":"Dificultad","easy":"Fácil","normal":"Normal","hard":"Difícil"},"crateSelect":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","placeholder":"Recompensa","label":"Seleciona la recompensa"},"sector":{"nodesFeatsTitle":"Logros en nodos","minibossFeatsTitle":"Logros en miniboss","bossFeatsTitle":"Logros en boss"},"SECTOR_1_TITLE":"Sector 1","SECTOR_1_NODE_FEAT_1_TITLE":"Título S1 F1"}')},227:function(e,t,r){"use strict";r(28),r(20),r(31),r(8),r(42),r(27),r(43);var n=r(13),o=r(60);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({isLoggedIn:"isLoggedIn",user:"user"})),methods:{logout:function(){this.$store.dispatch("logout")}}},_=l,T=r(53),component=Object(T.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[e.isLoggedIn?r("fragment",[r("vs-dropdown",[e.user.photoURL?r("vs-avatar",{attrs:{src:e.user.photoURL,size:"large"}}):r("vs-avatar",{attrs:{text:e.user.displayName.charAt(0).toLocaleUpperCase(),size:"large"}}),e._v(" "),r("vs-dropdown-menu",[r("vs-dropdown-item",{on:{click:e.logout}},[e._v("\n            "+e._s(e.$t("logout"))+"\n          ")])],1)],1)],1):r("fragment",[e._v("\n      LoginButton\n    ")])],1),e._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},228:function(e,t,r){"use strict";var n=r(53),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},233:function(e,t,r){r(234),e.exports=r(235)},273:function(e,t,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("f52d43e0",content,!0,{sourceMap:!1})},274:function(e,t,r){var n=r(64)(!1);n.push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.sector-header{display:flex;justify-content:space-between}.sector-header img{max-width:13px}',""]),e.exports=n},277:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return f})),r.d(t,"getters",(function(){return O})),r.d(t,"actions",(function(){return E})),r.d(t,"mutations",(function(){return d}));r(28),r(20),r(31),r(8),r(42),r(27),r(43);var n=r(13),o=r(3),c=(r(17),r(122)),l=r.n(c);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=function(){return{user:null,tracker:null,conquest:null}},O={isLoggedIn:function(e){return!!e.user},user:function(e){return e.user},conquest:function(e){return e.conquest},getTracker:function(e){return e.tracker||{}}},E={onAuthStateChangedAction:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,l,_,T,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.commit,c=t.authUser,t.claims,c){n.next=6;break}return(l=localStorage.getItem("tracker"))&&(_=JSON.parse(l),o("SET_TRACKER",{tracker:_})),n.abrupt("return");case 6:return n.next=8,r.$fire.firestore.collection("tracker").doc(c.uid).get();case 8:(T=n.sent).exists&&(f=T.data(),o("SET_TRACKER",{tracker:f}));case 10:case"end":return n.stop()}}),n)})))()},logout:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.auth.signOut();case 2:case"end":return t.stop()}}),t)})))()}},d={SET_CONQUEST:function(e,t){var r=t.conquest;e.conquest=r},SET_TRACKER:function(e,t){var r=t.tracker;e.tracker=r},UPDATE_TRACKER:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=T(T({},e.tracker||{}),t),e.tracker=o,e.user){n.next=5;break}return localStorage.setItem("tracker",JSON.stringify(o)),n.abrupt("return");case 5:return n.next=7,r.$fire.firestore.collection("tracker").doc(e.user.uid).set(o);case 7:case"end":return n.stop()}}),n)})))()},MERGE_TRACKER:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=l()(e.tracker,t),e.tracker=o,e.user){n.next=5;break}return localStorage.setItem("tracker",JSON.stringify(o)),n.abrupt("return");case 5:return n.next=7,r.$fire.firestore.collection("tracker").doc(e.user.uid).set(o);case 7:case"end":return n.stop()}}),n)})))()},ON_AUTH_STATE_CHANGED_MUTATION:function(e,t){var r=t.authUser;t.claims;if(r){var n=r.uid,o=r.email,c=r.emailVerified,l=r.displayName,_=r.photoURL;e.user={uid:n,email:o,emailVerified:c,displayName:l,photoURL:_}}else e.user=null,e.tracker=null}}}},[[233,13,2,15]]]);