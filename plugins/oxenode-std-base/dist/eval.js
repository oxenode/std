var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},r={};t.d(r,{VG:()=>l,xz:()=>f,ZP:()=>s,Tt:()=>y});const e=window.OxenodeCore,n=window.OxenodeUi,o=window.jsxRuntimeExports;function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}var l="eval js";function s(t){var r=t.nodeId;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"JS"}),(0,o.jsx)(n.Textarea,{name:"code",nodeId:r,language:"javascript",value:"alert(`Hello world`)"})]})}var p=Object.getPrototypeOf(c((function*(){}))).constructor;function f(t){return d.apply(this,arguments)}function d(){return(d=c((function*(t){var r=t.state.code,e=t.inputs.args,n=t.controller;e=e||{};var o=p.apply(void 0,a(Object.keys(e)).concat([r])).apply(void 0,a(Object.values(e)));return o instanceof Promise?new Promise((function(t){o.then((function(r){return e=r,n.setCache("return",e),t(),void n.trigger(0);var e}))})):(n.setCache("return",o),n.trigger(0))}))).apply(this,arguments)}var y=[e.port.input().type("trigger"),e.port.input().type("data").label("args"),e.port.output().type("trigger"),e.port.output().type("data").label("return").onFetch((function(t){return t.cache.return}))],v=r.VG,g=r.xz,h=r.ZP,m=r.Tt;export{v as Name,g as Trigger,h as default,m as ports};