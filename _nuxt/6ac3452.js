(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{244:function(t,e,l){"use strict";l.r(e);var n={props:{title:{type:String,default:null,required:!1},description:{type:String,default:null,required:!1},usecase:{type:Array,default:function(){return[]},required:!1}}},r=l(40),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-row overflow-auto p-4 shadow-xl"},[l("div",{staticClass:"no-wrap text-left w-1/2"},[t.usecase.length>0?l("NuxtLink",{attrs:{to:t.usecase[0].path}},[l("h4",{staticClass:"text-2xl m-2"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),l("p",{staticClass:"text-left m-2"},[t._v("\n        "+t._s(t.description)+"\n      ")])]):t._e()],1),t._v(" "),l("div",{staticClass:"container mx-auto w-1/2 m-3"},[l("vueper-slides",{attrs:{fractions:"",progress:"",fade:"","slide-ratio":1,"slide-image-inside":"",arrows:!1}},t._l(t.usecase,(function(e){return l("vueper-slide",{key:e.id,scopedSlots:t._u([{key:"content",fn:function(){return[l("NuxtLink",{attrs:{to:e.path}},[l("img",{staticClass:"object-contain w-auto h-full max-w-full max-h-full mx-auto",attrs:{src:e.image}})])]},proxy:!0}],null,!0)})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);