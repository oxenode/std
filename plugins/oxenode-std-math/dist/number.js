var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{VG:()=>u,qG:()=>a,ZP:()=>d,Tt:()=>s});const r=window.OxenodeCore,n=window.OxenodeUi,o=window.jsxRuntimeExports;var a=!0,u="number constant";function d(e){var t=e.nodeId;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Number"}),(0,o.jsx)(n.NumberInput,{name:"value",nodeId:t,value:"0"})]})}var s=[r.port.output().type("number").onFetch((function(e){var t=e.state;return Number(t.value)}))],i=t.VG,c=t.qG,p=t.ZP,m=t.Tt;export{i as Name,c as Static,p as default,m as ports};