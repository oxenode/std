var e={d:(a,n)=>{for(var t in n)e.o(n,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)},a={};e.d(a,{VG:()=>o,ZP:()=>s,Tt:()=>d});const n=window.OxenodeCore,t=window.OxenodeUi,r=window.jsxRuntimeExports;var o="JSON";function s(e){var a=e.nodeId;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"JSON"}),(0,r.jsx)(t.Textarea,{name:"data",nodeId:a,value:'{ \n  "name": "Jason", \n  "lastname": "Daniels" \n}',language:"json"})]})}var d=[n.port.output().type("data").onFetch((function(e){var a=e.state;try{return JSON.parse(a.data||"{}")}catch(e){return{error:"parsing"}}}))],i=a.VG,p=a.ZP,u=a.Tt;export{i as Name,p as default,u as ports};