var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},r={};t.d(r,{VG:()=>i,ZP:()=>l,Tt:()=>c});const e=window.OxenodeCore,n=window.OxenodeUi,o=window.jsxRuntimeExports;function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a,u,i=[],l=!0,c=!1;try{if(a=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=a.call(e)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var i="power";function l(t){var r=t.nodeId,u=a((0,e.useNodeState)(r,"power",2),2),i=u[0],l=u[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"pow"}),(0,o.jsx)(n.NumberInput,{value:i,onChange:function(t){return l(t.target.value)},style:{fontSize:16}})]})}var c=[e.port.input().type("number"),e.port.output().type("number").onFetch((function(t){var r=t.inputs,e=t.state.power;return Math.pow(r[0],e)}))],f=r.VG,p=r.ZP,s=r.Tt;export{f as Name,p as default,s as ports};