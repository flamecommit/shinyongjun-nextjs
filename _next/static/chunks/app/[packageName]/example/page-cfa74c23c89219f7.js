(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{1095:function(n,e,t){Promise.resolve().then(t.t.bind(t,2955,23)),Promise.resolve().then(t.bind(t,3047)),Promise.resolve().then(t.bind(t,5722)),Promise.resolve().then(t.bind(t,5521))},3047:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var i=t(230),r=t(7437),o=t(7550),c=t(8440);t(2955);var a=t(1806),l=t(6442),s=t(5896);function d(){let n=(0,i._)(["\n  margin: 50px 0;\n  h3 {\n    margin: 0 0 12px;\n  }\n  .react-datepicker__wrapper {\n    width: 200px;\n    margin-bottom: 15px;\n  }\n  .react-datepicker__datepicker {\n    font-size: 14px;\n  }\n  .react-datepicker__input {\n    height: 36px;\n  }\n"]);return d=function(){return n},n}let p=a.ZP.section.withConfig({displayName:"Section__StyledReactDatepickerSection",componentId:"sc-3958b940-0"})(d());var x=function(n){let{children:e}=n;return(0,r.jsx)(p,{children:e})},u=t(814);function h(){let n=(0,i._)(["\n  padding: 60px 50px 100px;\n  min-height: 100vh;\n  background-color: #f6f8fa;\n  .mdx-contents {\n    width: 1024px;\n    max-width: 100%;\n    padding: 36px;\n    margin: 60px auto;\n  }\n  @media "," {\n    padding: 48px 0 100px;\n    .mdx-contents {\n      padding: 20px;\n      margin: 0;\n    }\n  }\n"]);return h=function(){return n},n}let m=a.ZP.div.withConfig({displayName:"Mdx__StyledReactDatepickerMdx",componentId:"sc-e38d6e26-0"})(h(),u.Uh.mobile);var f=function(n){let{documentData:e}=n;return(0,r.jsx)(m,{children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.R,{...e.mdx,components:{Datepicker:o.Z,Rangepicker:c.Z,ReactDatepickerSection:x}})})})}},5722:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var i=t(230),r=t(7437);t(2955);var o=t(1806),c=t(6442),a=t(5896);function l(){let n=(0,i._)(["\n  margin: 50px 0;\n  h3 {\n    margin: 0 0 12px;\n  }\n  .react-datepicker__wrapper {\n    width: 200px;\n    margin-bottom: 15px;\n  }\n  .react-datepicker__datepicker {\n    font-size: 14px;\n  }\n  .react-datepicker__input {\n    height: 36px;\n  }\n"]);return l=function(){return n},n}let s=o.ZP.section.withConfig({displayName:"Section__StyledReactDialogSection",componentId:"sc-64d09483-0"})(l());var d=function(n){let{children:e}=n;return(0,r.jsx)(s,{children:e})},p=t(814),x=t(2265),u=t(3937);t(6183);let h={backgroundImage:"linear-gradient(to bottom, #e4e4e4, #f7f7f7)",border:"1px solid #afafaf",padding:"0 12px",borderRadius:"3px"};function m(){let{alert:n}=(0,u.Z)(),[e,t]=(0,x.useState)("close"),i=async()=>{t("open"),await n("Alert message."),t("close")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:i,style:h,children:"Alert"}),(0,r.jsxs)("span",{style:{marginLeft:"20px"},children:["state :",(0,r.jsx)("strong",{style:{fontWeight:700,color:"red",marginLeft:"6px"},children:e})]})]})}function f(){let{confirm:n}=(0,u.Z)(),[e,t]=(0,x.useState)(""),i=async()=>{t("");let e=await n("Confirm message.");t(e.toString())};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:i,style:h,children:"Confirm"}),(0,r.jsxs)("span",{style:{marginLeft:"20px"},children:["result :",(0,r.jsx)("strong",{style:{fontWeight:700,color:"red",marginLeft:"6px"},children:e})]})]})}function g(){let{prompt:n}=(0,u.Z)(),[e,t]=(0,x.useState)(null),i=async()=>{t(null);let e=await n("Prompt message.");t(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:i,style:h,children:"Prompt"}),(0,r.jsxs)("span",{style:{marginLeft:"20px"},children:["result :",(0,r.jsx)("strong",{style:{fontWeight:700,color:"red",marginLeft:"6px"},children:e})]})]})}function b(){let n=(0,i._)(["\n  padding: 60px 50px 100px;\n  min-height: 100vh;\n  background-color: #f6f8fa;\n  .mdx-contents {\n    width: 1024px;\n    max-width: 100%;\n    padding: 36px;\n    margin: 60px auto;\n  }\n  @media "," {\n    padding: 48px 0 100px;\n    .mdx-contents {\n      padding: 20px;\n      margin: 0;\n    }\n  }\n"]);return b=function(){return n},n}let j=o.ZP.div.withConfig({displayName:"Mdx__StyledReactDatepickerMdx",componentId:"sc-c8aff4ec-0"})(b(),p.Uh.mobile);var y=function(n){let{documentData:e}=n;return(0,r.jsx)(j,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(c.R,{...e.mdx,components:{AlertExample:m,ConfirmExample:f,PromptExample:g,ReactDialogSection:d}})})})}},5521:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),o=t(1806),c=t(6924),a=t(2315);t(7269);var l=t(2265),s=t(814);function d(){let n=(0,i._)(["\n  .section {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.first {\n      background-color: #ebd573;\n    }\n    &.second {\n      background-color: #a2ebbd;\n    }\n    &.third {\n      background-color: #ebda8a;\n    }\n    &.footer {\n      height: 200px;\n      background-color: #7374eb;\n    }\n  }\n  .fullpage-controller {\n    display: grid;\n    row-gap: 6px;\n    position: absolute;\n    top: 50%;\n    right: 50px;\n    transform: translateY(-50%);\n    button {\n      display: block;\n      font-size: 0;\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      background-color: #7d4e9f;\n      opacity: 0.3;\n      &.active {\n        opacity: 1;\n      }\n    }\n  }\n  @media "," {\n    .fullpage-controller {\n      right: 20px;\n    }\n  }\n"]);return d=function(){return n},n}let p=o.ZP.div.withConfig({displayName:"Example__StyledPackageReactFullpageExample",componentId:"sc-5000db3c-0"})(d(),s.Uh.mobile);e.default=function(){let[n,e]=(0,l.useState)(0);return(0,r.jsxs)(p,{children:[(0,r.jsxs)(c.Z,{activeIndex:n,setActiveIndex:e,onAfterLoad:()=>{console.log("After Load")},children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)("div",{className:"section first",children:"Welcome @shinyongjun/react-fullpage"})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("div",{className:"section second",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"HasScroll"}),Array(100).fill("↓").map((n,e)=>(0,r.jsx)("div",{children:n},e))]})})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("div",{className:"section third",children:"Third Section"})}),(0,r.jsx)(a.Z,{isAutoHeight:!0,children:(0,r.jsx)("div",{className:"section footer",children:"Footer Section"})})]}),(0,r.jsxs)("div",{className:"fullpage-controller",children:[(0,r.jsx)("button",{type:"button",className:"".concat(0===n?"active":""),onClick:()=>e(0),children:"1"}),(0,r.jsx)("button",{type:"button",className:"".concat(1===n?"active":""),onClick:()=>e(1),children:"2"}),(0,r.jsx)("button",{type:"button",className:"".concat(2===n?"active":""),onClick:()=>e(2),children:"3"})]})]})}}},function(n){n.O(0,[433,917,896,971,472,744],function(){return n(n.s=1095)}),_N_E=n.O()}]);