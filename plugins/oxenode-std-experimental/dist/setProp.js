var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{VG:()=>c,ZP:()=>l,Tt:()=>p});const r=window.OxenodeCore,n=window.OxenodeUi,o=window.jsxRuntimeExports;function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c="set";function l(t){var e=t.nodeId;return(0,o.jsx)("div",{style:{display:"inline-flex",flexDirection:"row",alignItems:"center",alignContent:"center",margin:0},children:(0,o.jsx)(n.TextInput,{style:{fontSize:"28px",maxWidth:"14rem",margin:0},nodeId:e,name:"key"})})}var p=[r.port.input().type(["string","number","data"]).label("value"),r.port.input().type("data").label("object"),r.port.output().type("data").onFetch((function(t){var e=t.inputs,r=t.state,n=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e.object||{});return n[r.key]=e.value,n}))],f=e.VG,y=e.ZP,b=e.Tt;export{f as Name,y as default,b as ports};