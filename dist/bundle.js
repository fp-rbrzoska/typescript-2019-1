!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(2),i=document.getElementById("myInput"),u=document.getElementById("addButton"),a=document.getElementById("cartContainer"),c=new o.Cart(5);u&&u.addEventListener("click",function(){i&&(c.add({name:i.value}),a&&(a.innerHTML="",a.appendChild(r.generateHtmlNameList(c.items))),i.value="")}),document.body.appendChild(r.generateHtmlNameList([{name:"User 1",age:25},{name:"User 2",age:35},{name:"User 3",age:45}])),i&&i.addEventListener("keyup",function(e){return console.log(e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateHtmlNameList=function(e){var t=document.createElement("ul");return e.forEach(function(e){var n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.itemsLimit=e,this._items=[]}return e.prototype.add=function(e){this._items.length<this.itemsLimit?this._items.push(e):console.log("Nie ma miejsc w koszyku")},Object.defineProperty(e.prototype,"items",{get:function(){return this._items},enumerable:!0,configurable:!0}),e}();t.Cart=r}]);