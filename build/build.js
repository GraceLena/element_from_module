!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);n(1);const r=new class{constructor(){const t=document.createElement("button"),e=document.getElementById("btn-container");t.setAttribute("id","library-btn"),t.textContent="Кнопка",e.append(t)}setCounter(){let t=0;const e=document.getElementById("library-btn");e.addEventListener("click",function(){t++,e.textContent=((t,e)=>t>=10&&t<=19||t%10>=5&&t%10<=9||t%10==0?t.toString()+" "+e[1]:t%10==1?t.toString()+" "+e[0]:t.toString()+" "+e[2])(t,["клик","кликов","клика"])})}};new class{constructor(t,e,...n){const r=document.createElement("select"),o=document.getElementById("btn-container");r.setAttribute("class","libSlt"),console.log(n);for(var c=0;c<t;c++){const t=document.createElement("option");t.setAttribute("class","libSltOpt"),t.textContent=n[c],t.setAttribute("id","opt"+c),c+1===e&&t.setAttribute("selected",!0),r.append(t)}o.append(r)}}(2,2,"one","two");r.setCounter()}]);