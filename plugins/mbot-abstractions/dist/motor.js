var e={d:(n,o)=>{for(var r in o)e.o(o,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:o[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};e.d(n,{VG:()=>a,xz:()=>l,ZP:()=>s,Tt:()=>c});const o=window.OxenodeCore,r=window.OxenodeUi,t=window.jsxRuntimeExports;function i(e,n,o,r,t,i,a){try{var s=e[i](a),l=s.value}catch(e){return void o(e)}s.done?n(l):Promise.resolve(l).then(r,t)}var a="Motor";function s(e){var n=e.nodeId;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Motor"}),(0,t.jsx)("span",{className:"xsmall",children:"Control motors"}),(0,t.jsxs)(r.Select,{nodeId:n,name:"mode",value:"1",children:[(0,t.jsx)("option",{value:"1",children:"Go Forward"}),(0,t.jsx)("option",{value:"2",children:"Turn Left"}),(0,t.jsx)("option",{value:"3",children:"Turn Right"}),(0,t.jsx)("option",{value:"4",children:"Brake"})]})]})}function l(e){return u.apply(this,arguments)}function u(){var e;return e=function*(e){var n=e.controller,o=e.inputs.socket,r=e.state.mode,t=new Uint8Array([192,7&+r]);console.log(t),o.send(t);var i=yield new Promise((function(e){o.onmessage=function(n){e(n)}}));return console.log(i),n.trigger(0)},u=function(){var n=this,o=arguments;return new Promise((function(r,t){var a=e.apply(n,o);function s(e){i(a,r,t,s,l,"next",e)}function l(e){i(a,r,t,s,l,"throw",e)}s(void 0)}))},u.apply(this,arguments)}var c=[o.port.input().type("trigger"),o.port.input().type("data").label("socket"),o.port.output().type("trigger")],d=n.VG,p=n.xz,v=n.ZP,h=n.Tt;export{d as Name,p as Trigger,v as default,h as ports};