var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{VG:()=>s,xz:()=>d,ZP:()=>c,Tt:()=>p});const r=window.OxenodeCore,n=window.OxenodeUi,o=window.jsxRuntimeExports;function a(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}var s="Websocket Send";function c(t){var e=t.nodeId;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Websocket Send"}),(0,o.jsx)(n.ErrorMessage,{nodeId:e})]})}function d(t){return l.apply(this,arguments)}function l(){var t;return t=function*(t){var e=t.node,r=t.inputs,n=r.socket,o=r.data,i=t.controller;if(o.length<2)return e.State.err="Please provide a hex byte string\n Example:   81 A2 BE\n",void i.update(e);var u=a(o.split(" ")),s=u[0],c=u.slice(1);s=parseInt(s.slice(0,2),16)||0,c||(c=[]);var d=new Promise((function(t,e){n.onmessage=function(e){t(e)}})),l=new Uint8Array([255&s,255&c[0]||0,255&c[1]||0]);return n.send?(n.send(l),i.setCache("data",d),i.trigger(0)):(e.State.err="Socket not defined",void i.update(e))},l=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,s,"next",t)}function s(t){u(a,n,o,i,s,"throw",t)}i(void 0)}))},l.apply(this,arguments)}var p=[r.port.input().type("trigger"),r.port.input().type("data").label("socket"),r.port.input().type("string").label("data"),r.port.output().type("trigger")],f=e.VG,y=e.xz,v=e.ZP,g=e.Tt;export{f as Name,y as Trigger,v as default,g as ports};