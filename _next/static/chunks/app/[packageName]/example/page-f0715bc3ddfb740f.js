(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{7234:function(n,e,t){Promise.resolve().then(t.bind(t,3047)),Promise.resolve().then(t.bind(t,5722)),Promise.resolve().then(t.bind(t,5521))},3047:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var i=t(230),r=t(7437),o=t(7550),c=t(8440);t(2955);var a=t(1806),s=t(6442),l=t(5896);function d(){let n=(0,i._)(["\n  margin: 50px 0;\n  h3 {\n    margin: 0 0 12px;\n  }\n  .react-datepicker__wrapper {\n    width: 200px;\n    margin-bottom: 15px;\n  }\n  .react-datepicker__datepicker {\n    font-size: 14px;\n  }\n  .react-datepicker__input {\n    height: 36px;\n  }\n"]);return d=function(){return n},n}let p=a.ZP.section.withConfig({displayName:"Section__StyledReactDatepickerSection",componentId:"sc-3958b940-0"})(d());var x=function(n){let{children:e}=n;return(0,r.jsx)(p,{children:e})},u=t(814);function h(){let n=(0,i._)(["\n  padding: 60px 50px 100px;\n  min-height: 100vh;\n  background-color: #f6f8fa;\n  .mdx-contents {\n    width: 1024px;\n    max-width: 100%;\n    padding: 36px;\n    margin: 60px auto;\n  }\n  @media "," {\n    padding: 48px 0 100px;\n    .mdx-contents {\n      padding: 20px;\n      margin: 0;\n    }\n  }\n"]);return h=function(){return n},n}let f=a.ZP.div.withConfig({displayName:"Mdx__StyledReactDatepickerMdx",componentId:"sc-e38d6e26-0"})(h(),u.Uh.mobile);var m=function(n){let{documentData:e}=n;return(0,r.jsx)(f,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.R,{...e.mdx,components:{Datepicker:o.Z,Rangepicker:c.Z,ReactDatepickerSection:x}})})})}},5722:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var i=t(230),r=t(7437);t(2955);var o=t(1806),c=t(6442),a=t(5896);function s(){let n=(0,i._)(["\n  margin: 50px 0;\n  h3 {\n    margin: 0 0 12px;\n  }\n  .react-datepicker__wrapper {\n    width: 200px;\n    margin-bottom: 15px;\n  }\n  .react-datepicker__datepicker {\n    font-size: 14px;\n  }\n  .react-datepicker__input {\n    height: 36px;\n  }\n"]);return s=function(){return n},n}let l=o.ZP.section.withConfig({displayName:"Section__StyledReactDialogSection",componentId:"sc-64d09483-0"})(s());var d=function(n){let{children:e}=n;return(0,r.jsx)(l,{children:e})},p=t(814),x=t(2265),u=t(8792),h=t(7194),f=t(8077);t(6183);let m={backgroundImage:"linear-gradient(to bottom, #e4e4e4, #f7f7f7)",border:"1px solid #afafaf",padding:"0 12px",borderRadius:"3px"};function g(){let{alert:n}=(0,x.useContext)(u.Z),[e,t]=(0,x.useState)("close"),i=async()=>{t("open"),await n("Alert message."),t("close")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:i,style:m,children:"Alert"}),(0,r.jsxs)("span",{style:{marginLeft:"20px"},children:["state :",(0,r.jsx)("strong",{style:{fontWeight:700,color:"red",marginLeft:"6px"},children:e})]})]})}function b(){let{confirm:n}=(0,x.useContext)(h.Z),[e,t]=(0,x.useState)(""),i=async()=>{t("");let e=await n("Confirm message.");t(e.toString())};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:i,style:m,children:"Confirm"}),(0,r.jsxs)("span",{style:{marginLeft:"20px"},children:["result :",(0,r.jsx)("strong",{style:{fontWeight:700,color:"red",marginLeft:"6px"},children:e})]})]})}function j(){let{prompt:n}=(0,x.useContext)(f.Z),[e,t]=(0,x.useState)(null),i=async()=>{t(null);let e=await n("Prompt message.");t(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:i,style:m,children:"Prompt"}),(0,r.jsxs)("span",{style:{marginLeft:"20px"},children:["result :",(0,r.jsx)("strong",{style:{fontWeight:700,color:"red",marginLeft:"6px"},children:e})]})]})}function y(){let n=(0,i._)(["\n  padding: 60px 50px 100px;\n  min-height: 100vh;\n  background-color: #f6f8fa;\n  .mdx-contents {\n    width: 1024px;\n    max-width: 100%;\n    padding: 36px;\n    margin: 60px auto;\n  }\n  @media "," {\n    padding: 48px 0 100px;\n    .mdx-contents {\n      padding: 20px;\n      margin: 0;\n    }\n  }\n"]);return y=function(){return n},n}let k=o.ZP.div.withConfig({displayName:"Mdx__StyledReactDatepickerMdx",componentId:"sc-c8aff4ec-0"})(y(),p.Uh.mobile);var _=function(n){let{documentData:e}=n;return(0,r.jsx)(k,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(c.R,{...e.mdx,components:{AlertExample:g,ConfirmExample:b,PromptExample:j,ReactDialogSection:d}})})})}},5521:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),o=t(1806),c=t(6924),a=t(2315);t(7269);var s=t(2265),l=t(814);function d(){let n=(0,i._)(["\n  .section {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.first {\n      background-color: #ebd573;\n    }\n    &.second {\n      background-color: #a2ebbd;\n    }\n    &.third {\n      background-color: #ebda8a;\n    }\n    &.footer {\n      height: 200px;\n      background-color: #7374eb;\n    }\n  }\n  .fullpage-controller {\n    display: grid;\n    row-gap: 6px;\n    position: absolute;\n    top: 50%;\n    right: 50px;\n    transform: translateY(-50%);\n    button {\n      display: block;\n      font-size: 0;\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      background-color: #7d4e9f;\n      opacity: 0.3;\n      &.active {\n        opacity: 1;\n      }\n    }\n  }\n  @media "," {\n    .fullpage-controller {\n      right: 20px;\n    }\n  }\n"]);return d=function(){return n},n}let p=o.ZP.div.withConfig({displayName:"Example__StyledPackageReactFullpageExample",componentId:"sc-5000db3c-0"})(d(),l.Uh.mobile);e.default=function(){let[n,e]=(0,s.useState)(0);return(0,r.jsxs)(p,{children:[(0,r.jsxs)(c.Z,{activeIndex:n,setActiveIndex:e,onAfterLoad:()=>{console.log("After Load")},children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)("div",{className:"section first",children:"Welcome @shinyongjun/react-fullpage"})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("div",{className:"section second",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"HasScroll"}),Array(100).fill("↓").map((n,e)=>(0,r.jsx)("div",{children:n},e))]})})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("div",{className:"section third",children:"Third Section"})}),(0,r.jsx)(a.Z,{isAutoHeight:!0,children:(0,r.jsx)("div",{className:"section footer",children:"Footer Section"})})]}),(0,r.jsxs)("div",{className:"fullpage-controller",children:[(0,r.jsx)("button",{type:"button",className:"".concat(0===n?"active":""),onClick:()=>e(0),children:"1"}),(0,r.jsx)("button",{type:"button",className:"".concat(1===n?"active":""),onClick:()=>e(1),children:"2"}),(0,r.jsx)("button",{type:"button",className:"".concat(2===n?"active":""),onClick:()=>e(2),children:"3"})]})]})}}},function(n){n.O(0,[433,977,896,971,472,744],function(){return n(n.s=7234)}),_N_E=n.O()}]);