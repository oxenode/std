var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},r={};t.d(r,{VG:()=>a,xz:()=>c,ZP:()=>u,Tt:()=>s});const e=window.OxenodeCore,n=window.OxenodeUi,o=window.jsxRuntimeExports;function i(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}var a="Function Call JS";function u(t){var r=t.nodeId;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Function Call"}),(0,o.jsx)("span",{children:"Arguments do not work"}),(0,o.jsx)(n.ErrorMessage,{nodeId:r})]})}function c(t){return p.apply(this,arguments)}function p(){var t;return t=function*(t){var r,e=t.node,n=t.inputs,o=t.controller,i=n.args||{};try{r=n.function(i)}catch(t){return e.State.err=t.toString(),o.update(e),o.trigger(0)}return r instanceof Promise?new Promise((function(t){r.then((function(r){e.State.err=void 0,o.update(e),o.setCache("return",r),o.trigger(0),t()})).catch((function(t){e.State.err=t.toString(),o.update(e),o.trigger(0)}))})):(e.State.err=void 0,o.update(e),o.setCache("return",r),o.trigger(0))},p=function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))},p.apply(this,arguments)}var s=[e.port.input().type("trigger"),e.port.input().type("data").label("args"),e.port.input().type("function").label("function"),e.port.output().type("trigger"),e.port.output().type("data").label("return").onFetch((function(t){return t.cache}))],d=r.VG,l=r.xz,g=r.ZP,f=r.Tt;export{d as Name,l as Trigger,g as default,f as ports};