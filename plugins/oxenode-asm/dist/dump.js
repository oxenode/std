var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},r={};t.d(r,{QV:()=>p,Gq:()=>o,cp:()=>u,gX:()=>i,If:()=>a});const e=window.OxenodeCore,n=window.jsxRuntimeExports;var o=!0,p="dump";function u(t){return function(t){if(null==t)throw new TypeError("Cannot destructure "+t)}(t),(0,n.jsx)("h1",{children:"dump"})}var a=[e.port.input().type("trigger"),e.port.input().type("number").label("value"),e.port.output().type("trigger")],i={x86_64:function(t){var r=t.$;return[r("mov","rdi",[t.inputs.value]),r("call","dump")]}},c=r.QV,d=r.Gq,l=r.cp,s=r.gX,f=r.If;export{c as Name,d as Static,l as default,s as extern,f as ports};