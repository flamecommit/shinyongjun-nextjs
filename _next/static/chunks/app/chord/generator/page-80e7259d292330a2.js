(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{774:function(n,t,e){var r=e(5491).w_;n.exports.Y=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(n)}},7046:function(n,t,e){var r=e(5491).w_;n.exports.T=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(n)}},5491:function(n,t,e){"use strict";e.d(t,{w_:function(){return a}});var r=e(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},l=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>t.indexOf(r)&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]]);return e};function a(n){return function(t){return r.createElement(s,c({attr:c({},n.attr)},t),function n(t){return t&&t.map(function(t,e){return r.createElement(t.tag,c({key:e},t.attr),n(t.child))})}(n.child))}}function s(n){var t=function(t){var e,o=n.attr,i=n.size,a=n.title,s=l(n,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:e,style:c(c({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),n.children)};return void 0!==i?r.createElement(i.Consumer,null,function(n){return t(n)}):t(o)}},8060:function(n,t,e){Promise.resolve().then(e.bind(e,6680)),Promise.resolve().then(e.bind(e,300))},300:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(230),o=e(7437),i=e(802),c=e(2265),l=e(4296),a=e(2399);let s=n=>{let t=[];for(let e=0;e<n.length;e++)-1===t.indexOf(n[e])&&t.push(n[e]);return t},d=(n,t)=>{if(n[0]!==t[0])return!1;let e=s(n).sort(),r=s(t).sort();return e.length===r.length&&JSON.stringify(e)===JSON.stringify(r)},h=(n,t)=>{if(n[0]!==t[0])return!1;let e=s(n).sort(),r=s(t).sort();return e.every(n=>r.includes(n))};var u=e(3254),f=e(5431);function p(){let n=(0,r._)(["\n  .result-area {\n    font-family: 'Roboto';\n    margin-bottom: 50px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    column-gap: 12px;\n    .symbol {\n      font-weight: 700;\n      font-size: 30px;\n      color: #1f883d;\n    }\n    .text {\n      position: relative;\n      bottom: 5px;\n    }\n  }\n  .guitar-area {\n    .guitar-neck {\n      display: flex;\n      flex-direction: row-reverse;\n      background-position-x: center;\n      background-size: 360px auto;\n      width: 220px;\n      margin-inline: auto;\n      background-position-y: 50px;\n      border: 1px solid #000;\n      .guitar-string {\n        position: relative;\n        display: grid;\n        width: 100%;\n        .guitar-fret {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 80px;\n          border: 1px solid #000;\n          text-align: center;\n          position: relative;\n          cursor: pointer;\n          &:hover {\n            background-color: #ddd;\n          }\n          input[type='checkbox'] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 0;\n            opacity: 0;\n            &:checked + div {\n              background-color: #333;\n              color: #fff;\n            }\n          }\n          &:nth-child(1) {\n            height: 40px;\n            &::after {\n              display: block;\n              position: absolute;\n              top: -30px;\n              left: 0;\n              font-size: 14px;\n              line-height: 20px;\n              width: 100%;\n              text-align: center;\n            }\n          }\n          div {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            font-family: 'Roboto';\n            font-size: 14px;\n          }\n        }\n        &:nth-child(1) {\n          .guitar-fret:nth-child(1)::after {\n            content: '1';\n          }\n        }\n        &:nth-child(2) {\n          .guitar-fret:nth-child(1)::after {\n            content: '2';\n          }\n        }\n        &:nth-child(3) {\n          .guitar-fret:nth-child(1)::after {\n            content: '3';\n          }\n        }\n        &:nth-child(4) {\n          .guitar-fret:nth-child(1)::after {\n            content: '4';\n          }\n        }\n        &:nth-child(5) {\n          .guitar-fret:nth-child(1)::after {\n            content: '5';\n          }\n        }\n        &:nth-child(6) {\n          .guitar-fret:nth-child(1)::after {\n            content: '6';\n          }\n        }\n        &:last-child {\n          .guitar-fret {\n            &::before {\n              display: block;\n              content: 'test';\n              position: absolute;\n              top: calc(50% - 10px);\n              left: -60px;\n              font-size: 14px;\n              line-height: 20px;\n              width: 60px;\n              text-align: center;\n            }\n            &:nth-child(1)::before {\n              content: '개방현';\n            }\n            &:nth-child(2)::before {\n              content: '1';\n            }\n            &:nth-child(3)::before {\n              content: '2';\n            }\n            &:nth-child(4)::before {\n              content: '3';\n            }\n            &:nth-child(5)::before {\n              content: '4';\n            }\n            &:nth-child(6)::before {\n              content: '5';\n            }\n            &:nth-child(7)::before {\n              content: '6';\n            }\n            &:nth-child(8)::before {\n              content: '7';\n            }\n            &:nth-child(9)::before {\n              content: '8';\n            }\n            &:nth-child(10)::before {\n              content: '9';\n            }\n            &:nth-child(11)::before {\n              content: '10';\n            }\n            &:nth-child(12)::before {\n              content: '11';\n            }\n            &:nth-child(13)::before {\n              content: '12';\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return p=function(){return n},n}let g=i.ZP.div.withConfig({displayName:"Generator__StyledChordGenerator",componentId:"sc-ed1fc3cb-0"})(p());var x=function(){let n=[28,23,19,14,9,4],[t,e]=(0,c.useState)(0),[r,i]=(0,c.useState)([]),[p,x]=(0,c.useState)([]),[m,b]=(0,c.useState)(""),[y,v]=(0,c.useState)(""),j=(n,t,e)=>{let o=[...r];o[e]=n.target.checked?t:0,i(o)};return(0,c.useEffect)(()=>{let n=[...r].filter(n=>n>0).sort((n,t)=>n-t),t=[],e=s(n);e.forEach(n=>{n&&t.push((0,a.Es)("C",n))}),x(t)},[r]),(0,c.useEffect)(()=>{let n=Object.entries(l.$t).find(n=>{let t=d(p,n[1].composition);return t});if(n)e(1),b(n[0]);else{let n=Object.entries(l.$t).find(n=>{let t=h(p,n[1].composition);return t});n?(e(2),b(n[0])):(e(0),b(""))}},[p]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(g,{children:[(0,o.jsxs)("div",{className:"result-area",children:[0===t&&(0,o.jsx)("div",{className:"symbol",children:"Not Found"}),1===t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"symbol",onClick:()=>v(m),children:(0,o.jsx)(u.Z,{chordName:m})}),(0,o.jsx)("div",{className:"text",children:"코드와 일치합니다."})]}),2===t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"symbol",onClick:()=>v(m),children:(0,o.jsx)(u.Z,{chordName:m})}),(0,o.jsx)("div",{className:"text",children:"코드와 유사합니다."})]})]}),(0,o.jsx)("div",{className:"guitar-area",children:(0,o.jsx)("div",{className:"guitar-neck",children:l._B.map((t,e)=>(0,o.jsx)("div",{className:"guitar-string",children:t.map((t,i)=>{let c=n[e]+i;return(0,o.jsxs)("label",{htmlFor:"".concat(e,"-").concat(i),className:"guitar-fret",children:[(0,o.jsx)("input",{id:"".concat(e,"-").concat(i),type:"checkbox","data-pitch":c,checked:r[e]===c,onChange:n=>j(n,c,e)}),(0,o.jsx)(u.Z,{chordName:t})]},i)})},e))})}),y&&(0,o.jsx)(f.Z,{chordName:y,closeChord:()=>{v("")}})]})})}},6680:function(n,t,e){"use strict";e.r(t);var r=e(230),o=e(7437),i=e(802),c=e(4241);function l(){let n=(0,r._)(["\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 30px;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return l=function(){return n},n}let a=i.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-2aa0d838-0"})(l(),c.Uh.mobile);t.default=function(n){let{children:t}=n;return(0,o.jsx)(a,{children:t})}}},function(n){n.O(0,[576,431,971,596,744],function(){return n(n.s=8060)}),_N_E=n.O()}]);