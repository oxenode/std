var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{VG:()=>i,xz:()=>p,ZP:()=>a,Tt:()=>s});const n=window.OxenodeCore,o=window.OxenodeUi,r=window.jsxRuntimeExports;var i="Pin Mode";function a(e){var t=e.nodeId;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Pin Mode"}),(0,r.jsx)("span",{className:"xsmall",children:"Write digital state to pins"}),(0,r.jsx)(o.NumberInput,{nodeId:t,name:"gpioPin",value:"12"}),(0,r.jsxs)(o.Select,{nodeId:t,name:"mode",value:"1",children:[(0,r.jsx)("option",{value:0,children:"Disable"}),(0,r.jsx)("option",{value:1,children:"Input"}),(0,r.jsx)("option",{value:2,children:"Output"}),(0,r.jsx)("option",{value:6,children:"Output OD"}),(0,r.jsx)("option",{value:7,children:"Input Output OD"}),(0,r.jsx)("option",{value:3,children:"Input Output"})]})]})}function p(e){var t=e.controller,n=e.inputs.socket,o=e.state,r=o.mode,i=o.gpioPin,a=new Uint8Array([127,i,7&+r]);return n.send(a),t.trigger(0)}var s=[n.port.input().type("trigger"),n.port.input().type("data").label("socket"),n.port.output().type("trigger")],u=t.VG,d=t.xz,l=t.ZP,c=t.Tt;export{u as Name,d as Trigger,l as default,c as ports};