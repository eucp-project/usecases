(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{230:function(e,t,n){e.exports=n.p+"img/eucp_logo.abb841e.png"},231:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex p-4"},[r("img",{attrs:{src:n(230),alt:"EUCP Logo"}}),e._v(" "),r("h1",{staticClass:"text-2xl"},[e._v("\n    Overview of EUCP Example use case\n  ")])])}],c={},l=n(38),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,null,null);t.default=component.exports},232:function(e,t,n){"use strict";n.r(t);var r={props:{card:{type:Object,default:null,required:!1}}},c=n(38),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex p-4"},[n("div",{staticClass:"flex no-wrap text-left"},[n("h4",[e._v("\n      "+e._s(e.card.title)+"\n    ")]),e._v(" "),n("div",{staticClass:"m-2 bg-white rounded"},[n("img",{staticClass:"rounded object-cover w-36 h-24 mx-auto",attrs:{src:e.card.image}})])])])}),[],!1,null,null,null);t.default=component.exports},248:function(e,t,n){"use strict";n.r(t);var r=n(6),c=(n(37),n(231)),l=n(232),o={components:{Banner:c.default,UseCaseCard:l.default},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("usecaseItems").fetch();case 2:e.usecases=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{usecases:{},error:!1}}},f=n(38),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col w-screen h-screen bg-gray-200 p-2"},[n("div",{staticClass:"banner"},[n("Banner")],1),e._v(" "),n("h3",{staticClass:"text-2xl"},[e._v("\n    Category 1\n  ")]),e._v(" "),n("div",{staticClass:"flex no-wrap text-left"},e._l(e.usecases.items,(function(e){return n("UseCaseCard",{key:e.id,attrs:{card:e}})})),1),e._v(" "),n("h3",{staticClass:"text-2xl"},[e._v("\n    Category 2\n  ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/usecase_0/panel_1"}},[e._v("\n    Example use case\n  ")]),e._v(" "),e._m(0)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex overflow-auto"},[n("h3",[e._v("\n      Tags\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Banner:n(231).default,UseCaseCard:n(232).default})}}]);