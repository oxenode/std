var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{VG:()=>f,xz:()=>d,ZP:()=>p,Tt:()=>v});const r=window.React;var n=t.n(r);const o=window.OxenodeCore,a=window.OxenodeUi,u=window.jsxRuntimeExports;function i(t,e,r,n,o,a,u){try{var i=t[a](u),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(n,o)}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,u,i=[],l=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f="Variable Set";function p(t){var e=t.store,r=t.state,i=t.node,s=t.controller,f=n().useContext(o.EdgeContext),p=f.edgeState,d=f.dispatchEdge,y=n().useContext(o.NodeContext).nodeState,v=c((0,o.useNodeState)(i.id,"variableName",Object.keys(e)[0]),2),m=v[0],b=v[1];return n().useEffect((function(){return t={target:{value:r.variableName||Object.keys(e)[0]}},i.ports=i.ports.map((function(r){if("value"===r.label){var n=o.JStoOxenodeType[l(e[t.target.value])];if(!r.edgeIds)return r;r.type!==n&&r.edgeIds.forEach((function(t){var e=p[t];e&&((0,o.disconnectEdge)(y,e,"from"),(0,o.disconnectEdge)(y,e,"to"),d({type:"REMOVE_EDGE",payload:t}))})),r.type=n}return r})),void s.update(i);var t}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{children:"set"}),(0,u.jsx)(a.Select,{value:m,onChange:function(t){return b(t.target.value)},children:Object.entries(e).map((function(t,e){var r=c(t,1)[0];return(0,u.jsx)("option",{value:r,children:r},e)}))})]})}function d(t){return y.apply(this,arguments)}function y(){var t;return t=function*(t){var e=t.controller,r=t.store,n=t.state.variableName,o=t.inputs.value;return void 0!==o&&0!==n&&(r[n]=o,e.setStoreItem({name:n,value:o})),e.trigger(0)},y=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,l,"next",t)}function l(t){i(a,n,o,u,l,"throw",t)}u(void 0)}))},y.apply(this,arguments)}var v=[o.port.input().type("trigger"),o.port.input().type([]).label("value"),o.port.output().type("trigger")],m=e.VG,b=e.xz,g=e.ZP,h=e.Tt;export{m as Name,b as Trigger,g as default,h as ports};