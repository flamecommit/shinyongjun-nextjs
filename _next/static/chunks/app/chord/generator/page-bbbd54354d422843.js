(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{774:function(n,t,e){var r=e(5491).w_;n.exports.Y=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(n)}},7046:function(n,t,e){var r=e(5491).w_;n.exports.T=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(n)}},5491:function(n,t,e){"use strict";e.d(t,{w_:function(){return a}});var r=e(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),c=function(){return(c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},l=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>t.indexOf(r)&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e};function a(n){return function(t){return r.createElement(s,c({attr:c({},n.attr)},t),function n(t){return t&&t.map(function(t,e){return r.createElement(t.tag,c({key:e},t.attr),n(t.child))})}(n.child))}}function s(n){var t=function(t){var e,i=n.attr,o=n.size,a=n.title,s=l(n,["attr","size","title"]),h=o||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:e,style:c(c({color:n.color||t.color},t.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),n.children)};return void 0!==o?r.createElement(o.Consumer,null,function(n){return t(n)}):t(i)}},8060:function(n,t,e){Promise.resolve().then(e.bind(e,6680)),Promise.resolve().then(e.bind(e,300))},300:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return g}});var r=e(230),i=e(7437),o=e(802),c=e(2265),l=e(4296),a=e(2399);let s=n=>{let t=[];for(let e=0;e<n.length;e++)-1===t.indexOf(n[e])&&t.push(n[e]);return t},h=(n,t)=>{if(n[0]!==t[0])return!1;let e=s(n).sort(),r=s(t).sort();return e.length===r.length&&JSON.stringify(e)===JSON.stringify(r)};var d=e(3254),u=e(5431);function f(){let n=(0,r._)(["\n  .result-area {\n    font-family: 'Roboto';\n    margin-bottom: 50px;\n    text-align: center;\n    font-weight: 700;\n    font-size: 20px;\n  }\n  .guitar-area {\n    .guitar-neck {\n      display: flex;\n      flex-direction: row-reverse;\n      background-position-x: center;\n      background-size: 360px auto;\n      width: 220px;\n      margin-inline: auto;\n      background-position-y: 50px;\n      border: 1px solid #000;\n      .guitar-string {\n        position: relative;\n        display: grid;\n        width: 100%;\n        .guitar-fret {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 80px;\n          border: 1px solid #000;\n          text-align: center;\n          position: relative;\n          cursor: pointer;\n          &:hover {\n            background-color: #ddd;\n          }\n          input[type='radio'] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 0;\n            opacity: 0;\n            &:checked + div {\n              background-color: #333;\n              color: #fff;\n            }\n          }\n          &:nth-child(1) {\n            height: 40px;\n            &::after {\n              display: block;\n              position: absolute;\n              top: -30px;\n              left: 0;\n              font-size: 14px;\n              line-height: 20px;\n              width: 100%;\n              text-align: center;\n            }\n          }\n          &:nth-child(2) {\n            height: 50px;\n          }\n          div {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            font-family: 'Roboto';\n            font-size: 14px;\n          }\n        }\n        &:nth-child(1) {\n          .guitar-fret:nth-child(1)::after {\n            content: '1';\n          }\n        }\n        &:nth-child(2) {\n          .guitar-fret:nth-child(1)::after {\n            content: '2';\n          }\n        }\n        &:nth-child(3) {\n          .guitar-fret:nth-child(1)::after {\n            content: '3';\n          }\n        }\n        &:nth-child(4) {\n          .guitar-fret:nth-child(1)::after {\n            content: '4';\n          }\n        }\n        &:nth-child(5) {\n          .guitar-fret:nth-child(1)::after {\n            content: '5';\n          }\n        }\n        &:nth-child(6) {\n          .guitar-fret:nth-child(1)::after {\n            content: '6';\n          }\n        }\n        &:last-child {\n          .guitar-fret {\n            &::before {\n              display: block;\n              content: 'test';\n              position: absolute;\n              top: calc(50% - 10px);\n              left: -120px;\n              font-size: 14px;\n              line-height: 20px;\n              width: 120px;\n              text-align: center;\n            }\n            &:nth-child(1)::before {\n              content: 'Mute';\n            }\n            &:nth-child(2)::before {\n              content: '개방현';\n            }\n            &:nth-child(3)::before {\n              content: '1';\n            }\n            &:nth-child(4)::before {\n              content: '2';\n            }\n            &:nth-child(5)::before {\n              content: '3';\n            }\n            &:nth-child(6)::before {\n              content: '4';\n            }\n            &:nth-child(7)::before {\n              content: '5';\n            }\n            &:nth-child(8)::before {\n              content: '6';\n            }\n            &:nth-child(9)::before {\n              content: '7';\n            }\n            &:nth-child(10)::before {\n              content: '8';\n            }\n            &:nth-child(11)::before {\n              content: '9';\n            }\n            &:nth-child(12)::before {\n              content: '10';\n            }\n            &:nth-child(13)::before {\n              content: '11';\n            }\n            &:nth-child(14)::before {\n              content: '12';\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return f=function(){return n},n}let p=o.ZP.div.withConfig({displayName:"Generator__StyledChordGenerator",componentId:"sc-9f989730-0"})(f());var g=function(){let n=[28,23,19,14,9,4],[t,e]=(0,c.useState)([]),[r,o]=(0,c.useState)([]),[f,g]=(0,c.useState)(""),[x,m]=(0,c.useState)(""),b=(n,r,i)=>{let o=[...t];o[i]=r,e(o)};return(0,c.useEffect)(()=>{let n=[...t].filter(n=>n>0).sort((n,t)=>n-t),e=[],r=s(n);r.forEach(n=>{n&&e.push((0,a.Es)("C",n))}),o(e)},[t]),(0,c.useEffect)(()=>{let n=Object.entries(l.$t).find(n=>{let t=h(r,n[1].composition);return t});g(n?n[0]:"")},[r]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(p,{children:[(0,i.jsx)("div",{className:"result-area",children:f?(0,i.jsx)("button",{type:"button",onClick:()=>m(f),children:(0,i.jsx)(d.Z,{chordName:f})}):(0,i.jsx)("div",{children:"Not Found"})}),(0,i.jsx)("div",{className:"guitar-area",children:(0,i.jsx)("div",{className:"guitar-neck",children:l._B.map((t,e)=>(0,i.jsxs)("div",{className:"guitar-string",children:[(0,i.jsxs)("label",{htmlFor:"".concat(e,"-m"),className:"guitar-fret",children:[(0,i.jsx)("input",{name:"string-".concat(e),id:"".concat(e,"-m"),type:"radio",onChange:n=>b(n,0,e)}),(0,i.jsx)("div",{className:"mute",children:"M"})]}),t.map((t,r)=>{let o=n[e]+r;return(0,i.jsxs)("label",{htmlFor:"".concat(e,"-").concat(r),className:"guitar-fret",children:[(0,i.jsx)("input",{name:"string-".concat(e),id:"".concat(e,"-").concat(r),type:"radio","data-pitch":o,onChange:n=>b(n,o,e)}),(0,i.jsx)(d.Z,{chordName:t})]},r)})]},e))})}),x&&(0,i.jsx)(u.Z,{chordName:x,closeChord:()=>{m("")}})]})})}},6680:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(802),c=e(4241);function l(){let n=(0,r._)(["\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 30px;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return l=function(){return n},n}let a=o.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-2aa0d838-0"})(l(),c.Uh.mobile);t.default=function(n){let{children:t}=n;return(0,i.jsx)(a,{children:t})}}},function(n){n.O(0,[576,431,971,596,744],function(){return n(n.s=8060)}),_N_E=n.O()}]);