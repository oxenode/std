var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{VG:()=>u,xz:()=>l,ZP:()=>d,Tt:()=>c});const n=window.OxenodeCore,r=window.OxenodeUi,o=window.jsxRuntimeExports;function i(e,t,n,r,o,i,a){try{var u=e[i](a),d=u.value}catch(e){return void n(e)}u.done?t(d):Promise.resolve(d).then(r,o)}var a=["POST","PUT","PATCH"],u="Fetch";function d(e){var t=e.nodeId;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Fetch"}),(0,o.jsxs)(r.Select,{nodeId:t,name:"method",value:"GET",children:[(0,o.jsx)("option",{value:"GET",children:"GET"}),(0,o.jsx)("option",{value:"POST",children:"POST"}),(0,o.jsx)("option",{value:"PUT",children:"PUT"}),(0,o.jsx)("option",{value:"PATCH",children:"PATCH"}),(0,o.jsx)("option",{value:"DELETE",children:"DELETE"})]})]})}function l(e){return p.apply(this,arguments)}function p(){var e;return e=function*(e){var t=e.state.method,n=e.inputs,r=n.url,o=n.headers,i=n.body,u=e.controller,d={method:t,headers:o};a.includes(t)&&(d.body=JSON.stringify(i||{})),fetch(r,d).then((function(e){return e.json()})).then((function(e){u.setCache("return",e),u.trigger(0)}))},p=function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,d,"next",e)}function d(e){i(a,r,o,u,d,"throw",e)}u(void 0)}))},p.apply(this,arguments)}var c=[n.port.input().type("trigger"),n.port.input().type("string").label("url"),n.port.input().type("data").label("headers"),n.port.input().type("data").label("body"),n.port.output().type("trigger"),n.port.output().type("data").label("return").onFetch((function(e){return e.cache}))],s=t.VG,h=t.xz,v=t.ZP,f=t.Tt;export{s as Name,h as Trigger,v as default,f as ports};