(window.webpackJsonp=window.webpackJsonp||[]).push([[25,27],{899:function(t,e,r){"use strict";r.r(e);var o={props:{tour:{type:Object,required:!0},title:{type:String,required:!0}},computed:{requireAction:function(){return this.tour.steps[this.tour.currentStep].requireAction}}},n=r(79),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{staticStyle:{width:"250px"},attrs:{hoverable:""}},[r("template",{slot:"actions"},[t.tour.isLast?t._e():r("a-icon",{attrs:{type:"close"},on:{click:t.tour.stop}}),t._v(" "),t.tour.isFirst?t._e():r("a-icon",{attrs:{type:"arrow-left"},on:{click:t.tour.previousStep}}),t._v(" "),t.tour.isLast||t.requireAction?t._e():r("a-icon",{attrs:{type:"arrow-right"},on:{click:t.tour.nextStep}}),t._v(" "),t.requireAction?r("a-spin"):t._e(),t._v(" "),t.tour.isLast?r("a-icon",{attrs:{type:"check"},on:{click:t.tour.finish}}):t._e()],1),t._v(" "),r("a-card-meta",{attrs:{title:t.title}},[r("template",{slot:"description"},[t._t("default")],2)],2)],2)}),[],!1,null,null,null);e.default=component.exports},931:function(t,e,r){"use strict";r.r(e);var o={components:{TourNewUserStep:r(899).default},props:{tour:{type:Object,required:!0}},mounted:function(){var t=this;this.$nuxt.$on("zone-expanded",(function(){return t.tour.nextStep()}))},beforeDestroy:function(){this.$nuxt.$off("zone-expanded")}},n=r(79),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tour-new-user-step",{attrs:{tour:t.tour,title:t.$t("tour.newUser.zone.title")}},[r("div",[t._v(t._s(t.$t("tour.newUser.zone.description")))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TourNewUserStep:r(899).default})}}]);
//# sourceMappingURL=f2c73ef.js.map