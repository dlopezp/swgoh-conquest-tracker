(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20,21,22,23,24,25,26,27],{899:function(t,e,o){"use strict";o.r(e);var n={props:{tour:{type:Object,required:!0},title:{type:String,required:!0}},computed:{requireAction:function(){return this.tour.steps[this.tour.currentStep].requireAction}}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-card",{staticStyle:{width:"250px"},attrs:{hoverable:""}},[o("template",{slot:"actions"},[t.tour.isLast?t._e():o("a-icon",{attrs:{type:"close"},on:{click:t.tour.stop}}),t._v(" "),t.tour.isFirst?t._e():o("a-icon",{attrs:{type:"arrow-left"},on:{click:t.tour.previousStep}}),t._v(" "),t.tour.isLast||t.requireAction?t._e():o("a-icon",{attrs:{type:"arrow-right"},on:{click:t.tour.nextStep}}),t._v(" "),t.requireAction?o("a-spin"):t._e(),t._v(" "),t.tour.isLast?o("a-icon",{attrs:{type:"check"},on:{click:t.tour.finish}}):t._e()],1),t._v(" "),o("a-card-meta",{attrs:{title:t.title}},[o("template",{slot:"description"},[t._t("default")],2)],2)],2)}),[],!1,null,null,null);e.default=component.exports},924:function(t,e,o){var content=o(935);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(138).default)("09efa980",content,!0,{sourceMap:!1})},926:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}},mounted:function(){var t=this;this.$nuxt.$on("goal-opened",(function(t){t.open&&(document.querySelector(".v-tour").style.display="none")})),this.$nuxt.$on("goal-selected",(function(){document.querySelector(".v-tour").style.display="",t.tour.nextStep()}))},beforeDestroy:function(){this.$nuxt.$off("goal-selected"),this.$nuxt.$off("goal-opened")}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.chooseReward.title")}},[o("div",[t._v(t._s(t.$t("tour.newUser.chooseReward.description")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},927:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.keycards.title")}},[o("div",[t._v(t._s(t.$t("tour.newUser.keycards.description")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},928:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}},mounted:function(){var t=this;this.$nuxt.$on("sector-expanded",(function(){return t.tour.nextStep()}))},beforeDestroy:function(){this.$nuxt.$off("sector-expanded")}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.sector.title")}},[o("div",[t._v(t._s(t.$t("tour.newUser.sector.description")))]),t._v(" "),o("div",[t._v(t._s(t.$t("tour.newUser.sector.description_2")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},929:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}},mounted:function(){var t=this;this.$nuxt.$on("zone-expanded",(function(){return t.tour.nextStep()}))},beforeDestroy:function(){this.$nuxt.$off("zone-expanded")}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.open-nodes.title")}},[o("div",[t._v(t._s(t.$t("tour.newUser.open-nodes.description")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},930:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.nodes.title")}},[o("div",[t._v(t._s(t.$t("tour.newUser.nodes.description")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},931:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}},mounted:function(){var t=this;this.$nuxt.$on("zone-expanded",(function(){return t.tour.nextStep()}))},beforeDestroy:function(){this.$nuxt.$off("zone-expanded")}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.zone.title")}},[o("div",[t._v(t._s(t.$t("tour.newUser.zone.description")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},932:function(t,e,o){"use strict";o.r(e);var n={components:{TourNewUserStep:o(899).default},props:{tour:{type:Object,required:!0}}},r=o(78),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.feat.title")}},[o("p",[t._v(t._s(t.$t("tour.newUser.feat.description")))]),t._v(" "),o("p",[t._v(t._s(t.$t("tour.newUser.feat.description_2")))]),t._v(" "),o("div",[t._v(t._s(t.$t("tour.newUser.feat.description_3")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:o(899).default})},934:function(t,e,o){"use strict";o(924)},935:function(t,e,o){var n=o(136)(!1);n.push([t.i,".backdrop{position:fixed;background-color:#000;opacity:.7;top:0;bottom:0;left:0;right:0;transition:all .3s;z-index:10}",""]),t.exports=n},940:function(t,e,o){"use strict";o.r(e);o(24);var n=o(926),r=o(927),l=o(928),c=o(929),f=o(930),d=o(931),m=o(932),h={components:{TourNewUserReward:n.default,TourNewUserKeycards:r.default},data:function(){var t=this;return{showBackdrop:!1,element:null,currentStep:null,callbacks:{onStart:this.onStart,onPreviousStep:this.onPreviousStep,onNextStep:this.onNextStep,onSkip:this.onSkip,onFinish:this.onFinish,onStop:this.onStop},options:{useKeyboardNavigation:!1,labels:{buttonSkip:this.$t("tour.skip"),buttonPrevious:this.$t("tour.previous"),buttonNext:this.$t("tour.next"),buttonStop:this.$t("tour.stop")}},steps:[{target:'[data-v-step="1"]',params:{placement:"bottom"},requireAction:!0,before:function(e){return new Promise((function(e,o){t.showElement('[data-v-step="1"]'),e("foo")}))}},{target:'[data-v-step="2"]',params:{placement:"bottom"},requireAction:!1,before:function(e){return new Promise((function(e,o){t.showElement('[data-v-step="2"]'),e("foo")}))}},{target:".ant-collapse-item",params:{placement:"bottom"},requireAction:!0,before:function(e){return new Promise((function(e,o){t.showElement(".ant-collapse-item"),e("foo")}))}},{target:".sector-collapse .ant-collapse-item",params:{placement:"bottom"},requireAction:!0,before:function(e){return new Promise((function(e,o){t.showElement(".sector-collapse .ant-collapse-item"),e("foo")}))}},{target:".sector-collapse .ant-collapse-content-box",params:{placement:"bottom"},requireAction:!1,before:function(e){return new Promise((function(e,o){t.showElement(".sector-collapse .ant-collapse-content-box"),e("foo")}))}},{target:".sector-collapse .ant-collapse-item:nth-child(2)",params:{placement:"bottom"},requireAction:!0,before:function(e){return new Promise((function(e,o){t.showElement(".sector-collapse .ant-collapse-item:nth-child(2)"),e("foo")}))}},{target:".ant-list-item",params:{placement:"bottom"},requireAction:!1,before:function(e){return new Promise((function(e,o){t.showElement(".ant-list-item"),e("foo")}))}}]}},computed:{currentStepComponent:function(){return[n.default,r.default,l.default,c.default,f.default,d.default,m.default][this.currentStep]}},methods:{hideElement:function(){this.element&&(this.element.style.position="",this.element.style.background="",this.element.style.zIndex="",this.element.style.transition="")},showElement:function(t){this.hideElement(),this.element=document.querySelector(t),this.element.style.position="relative",this.element.style.background="white",this.element.style.zIndex=1001,this.element.style.transition="all .3s"},onStart:function(){this.currentStep=0},onPreviousStep:function(){this.currentStep-=1},onNextStep:function(){this.currentStep+=1},onSkip:function(){},onFinish:function(){this.hideElement(),this.$emit("finish")},onStop:function(){this.hideElement(),this.$emit("end")}}},v=(o(934),o(78)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-tour",{attrs:{name:"newUser",steps:t.steps,options:t.options,callbacks:t.callbacks},scopedSlots:t._u([{key:"default",fn:function(e){return[o("transition",{attrs:{name:"fade"}},[e.steps[e.currentStep]?o("v-step",{key:e.currentStep,attrs:{step:e.steps[e.currentStep],"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,skip:e.skip,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels}},[o("template",{slot:"header"}),t._v(" "),o("template",{slot:"content"},[o(t.currentStepComponent,{tag:"component",attrs:{tour:e}})],1),t._v(" "),o("div",{attrs:{slot:"actions"},slot:"actions"})],2):t._e()],1)]}}])}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop"})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=d38106d.js.map