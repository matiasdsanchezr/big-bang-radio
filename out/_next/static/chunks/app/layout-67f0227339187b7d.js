(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2615:function(e,t,r){Promise.resolve().then(r.t.bind(r,4097,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,1303)),Promise.resolve().then(r.bind(r,5583))},7830:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,n={};function a(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||o}function c(){}function l(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||o}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},c.prototype=a.prototype;var i=l.prototype=new c;i.constructor=l,s(i,a.prototype),i.isPureReactComponent=!0;var f=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var s,n={},a=null,c=null;if(null!=t)for(s in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)f.call(t,s)&&!h.hasOwnProperty(s)&&(n[s]=t[s]);var l=arguments.length-2;if(1===l)n.children=o;else if(1<l){for(var i=Array(l),u=0;u<l;u++)i[u]=arguments[u+2];n.children=i}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===n[s]&&(n[s]=l[s]);return{$$typeof:r,type:e,key:a,ref:c,props:n,_owner:null}}},4410:function(e,t,r){"use strict";e.exports=r(7830)},1303:function(e,t,r){"use strict";var o=r(7437),s=r(2265),n=r(9678),a=r(5583);let c=e=>{let{children:t}=e;return(0,o.jsx)("a",{className:"h-[24] w-[24] flex justify-center items-center fill-white hover:fill-primary cursor-pointer",children:t})},l=e=>{let{name:t,text:r,isActive:s=!1,onClick:n}=e;return(0,o.jsx)("li",{className:"hover:text-primary ".concat(s?"line-through text-primary":""),children:(0,o.jsx)("a",{href:"#".concat(t),onClick:()=>{n(t)},children:r})})};t.default=()=>{let{activeSection:e,setActiveSection:t}=(0,a.a)(),[r,i]=(0,s.useState)(!1),f=e=>{i(!1),null==t||t(e)};return(0,o.jsxs)("header",{className:"fixed z-[10000] w-full flex justify-between items-center p-3 ".concat(r?"bg-slate-800":"bg-gradient-to-b from-black to-black/0"," md:p-4 md:flex-row md:bg-transparent"),children:[(0,o.jsx)("div",{className:"w-full flex justify-between md:w-auto",children:(0,o.jsx)("a",{href:"#",children:(0,o.jsx)(n.default,{className:"h-[50px] fill-white hover:fill-primary"})})}),(0,o.jsx)("button",{className:"".concat(null!=r?r:""," md:hidden"),onClick:()=>i(e=>!e),children:"MENU"}),(0,o.jsx)("nav",{className:"".concat(r?"block":"hidden"," absolute top-[100%] left-0 bg-slate-800 w-full h-screen md:h-auto p-5 md:block md:static md:bg-transparent"),children:(0,o.jsxs)("ul",{className:"flex flex-col md:flex-row gap-5 justify-center font-bold",children:[(0,o.jsx)(l,{name:"home",isActive:"home"===e,text:"INICIO",onClick:f}),(0,o.jsx)(l,{name:"contact",isActive:"contact"===e,text:"CONTACTO",onClick:f}),(0,o.jsx)(l,{name:"sponsors",isActive:"sponsors"===e,text:"AUSPICIANTES",onClick:f})]})}),(0,o.jsxs)("div",{className:"hidden md:flex justify-end gap-1",children:[(0,o.jsx)(c,{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 256 256",children:(0,o.jsx)("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"})})}),(0,o.jsx)(c,{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 256 256",children:(0,o.jsx)("path",{d:"M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"})})}),(0,o.jsx)(c,{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"24",height:"24",children:(0,o.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),(0,o.jsx)(c,{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"28",height:"28",children:(0,o.jsx)("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})})})]})]})}},3054:function(){},4097:function(e){e.exports={style:{fontFamily:"'__Montserrat_15a84e', '__Montserrat_Fallback_15a84e'",fontWeight:400,fontStyle:"normal"},className:"__className_15a84e"}}},function(e){e.O(0,[966,673,971,275,744],function(){return e(e.s=2615)}),_N_E=e.O()}]);