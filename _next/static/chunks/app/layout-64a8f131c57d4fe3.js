(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5527:function(e,n,t){Promise.resolve().then(t.bind(t,1744)),Promise.resolve().then(t.bind(t,5681)),Promise.resolve().then(t.t.bind(t,3015,23)),Promise.resolve().then(t.bind(t,7773))},3453:function(e,n){"use strict";let t;Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:n,props:t}=e,i=document.createElement(n);for(let e in t){if(!t.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===t[e])continue;let o=r[e]||e.toLowerCase();"script"===n&&("async"===o||"defer"===o||"noModule"===o)?i[o]=!!t[e]:i.setAttribute(o,t[e])}let{children:o,dangerouslySetInnerHTML:a}=t;return a?i.innerHTML=a.__html||"":o&&(i.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),i}function o(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){let t=n.getAttribute("nonce");if(t&&!e.getAttribute("nonce")){let r=n.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=t,t===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(n)}function a(){return{mountedInstances:new Set,updateHead:e=>{let n={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let t=n[e.type]||[];t.push(e),n[e.type]=t});let r=n.title?n.title[0]:null,i="";if(r){let{children:e}=r.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{t(e,n[e]||[])})}}}t=(e,n)=>{let t=document.getElementsByTagName("head")[0],r=t.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let n=0,t=r.previousElementSibling;n<a;n++,t=(null==t?void 0:t.previousElementSibling)||null){var c;(null==t?void 0:null==(c=t.tagName)?void 0:c.toLowerCase())===e&&l.push(t)}let u=n.map(i).filter(e=>{for(let n=0,t=l.length;n<t;n++){let t=l[n];if(o(t,e))return l.splice(n,1),!1}return!0});l.forEach(e=>{var n;return null==(n=e.parentNode)?void 0:n.removeChild(e)}),u.forEach(e=>t.insertBefore(e,r)),r.content=(a-l.length+u.length).toString()},("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},3015:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m},default:function(){return g}});let r=t(1024),i=t(8533),o=r._(t(4887)),a=i._(t(2265)),l=t(1330),c=t(3453),u=t(8043),s=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let n=document.head;e.forEach(e=>{let t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,n.appendChild(t)})}},h=e=>{let{src:n,id:t,onLoad:r=()=>{},onReady:i=null,dangerouslySetInnerHTML:o,children:a="",strategy:l="afterInteractive",onError:u,stylesheets:h}=e,y=t||n;if(y&&d.has(y))return;if(s.has(n)){d.add(y),s.get(n).then(r,u);return}let m=()=>{i&&i(),d.add(y)},b=document.createElement("script"),g=new Promise((e,n)=>{b.addEventListener("load",function(n){e(),r&&r.call(this,n),m()}),b.addEventListener("error",function(e){n(e)})}).catch(function(e){u&&u(e)});for(let[t,r]of(o?(b.innerHTML=o.__html||"",m()):a?(b.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",m()):n&&(b.src=n,s.set(n,g)),Object.entries(e))){if(void 0===r||f.includes(t))continue;let e=c.DOMAttributeNames[t]||t.toLowerCase();b.setAttribute(e,r)}"worker"===l&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",l),h&&p(h),document.body.appendChild(b)};function y(e){let{strategy:n="afterInteractive"}=e;"lazyOnload"===n?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let n=e.id||e.getAttribute("src");d.add(n)})}()}function b(e){let{id:n,src:t="",onLoad:r=()=>{},onReady:i=null,strategy:c="afterInteractive",onError:s,stylesheets:f,...p}=e,{updateScripts:y,scripts:m,getIsSsr:b,appDir:g,nonce:x}=(0,a.useContext)(l.HeadManagerContext),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=n||t;v.current||(i&&e&&d.has(e)&&i(),v.current=!0)},[i,n,t]);let _=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!_.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),_.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(m[c]=(m[c]||[]).concat([{id:n,src:t,onLoad:r,onReady:i,onError:s,...p}]),y(m)):b&&b()?d.add(n||t):b&&!b()&&h(e)),g){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return t?(o.default.preload(t,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([t])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===c&&t&&o.default.preload(t,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let g=b;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},7773:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(230),i=t(7437),o=t(802),a=t(4241),l=t(3865);function c(){let e=(0,r._)(["\n  max-width: 768px;\n  margin-inline: auto;\n  padding: 36px;\n  margin-block: 60px;\n  background-color: #fff;\n  box-shadow: ",";\n  @media "," {\n    margin-block: 0;\n    padding: 24px 12px 60px;\n  }\n"]);return c=function(){return e},e}let u=o.ZP.main.withConfig({displayName:"Container__StyledBaseContainer",componentId:"sc-7395b7d2-0"})(c(),l.v.boxShadow1,a.Uh.mobile);var s=function(e){let{children:n}=e;return(0,i.jsx)(u,{children:n})},d=t(1396),f=t.n(d),p=t(4033),h=t(2265),y=t(9930),m=t(5760),b=t.n(m),g=t(218);function x(){let e=(0,r._)(["\n  display: flex;\n  column-gap: 30px;\n  align-items: center;\n  a {\n    font-family: ",";\n    font-size: 18px;\n    .symbol {\n      width: 27px;\n      height: 27px;\n      filter: grayscale(1);\n    }\n    &:hover {\n      color: ",";\n    }\n    &.active {\n      font-weight: 700;\n      color: ",";\n      // color: #775da5;\n      // color: #7d4e9f;\n      // color: #8a3b8f;\n      .symbol {\n        filter: grayscale(0);\n      }\n    }\n  }\n  @media "," {\n    column-gap: 24px;\n    a {\n      font-size: 16px;\n    }\n  }\n"]);return x=function(){return e},e}let v=o.ZP.nav.withConfig({displayName:"Gnb__StyledBaseGnb",componentId:"sc-be089fb6-0"})(x(),b().style.fontFamily,l.v.hoverText,l.v.hoverText,a.Uh.mobile);var _=function(){let{categoryName:e}=(0,g.C)(e=>e.core),n=(0,g.T)(),t=(0,p.usePathname)();return(0,h.useEffect)(()=>{n(y.ky.setCategoryName(t.split("/")[1]))},[t,n]),(0,i.jsxs)(v,{children:[(0,i.jsx)(f(),{className:"".concat(!e&&"active"),href:"/",children:(0,i.jsx)("img",{src:"/images/symbol.webp",alt:"",className:"symbol"})}),(0,i.jsx)(f(),{className:"".concat("post"===e&&"active"),href:"/post",children:"Post"}),(0,i.jsx)(f(),{className:"".concat("snippet"===e&&"active"),href:"/snippet",children:"Snippet"}),(0,i.jsx)(f(),{className:"".concat("chord"===e&&"active"),href:"/chord",children:"Chord"}),(0,i.jsx)(f(),{className:"".concat("about"===e&&"active"),href:"/about",children:"About"})]})};function w(){let e=(0,r._)(["\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: ",";\n  overflow-x: auto;\n  @media "," {\n    height: 48px;\n  }\n"]);return w=function(){return e},e}let k=o.ZP.header.withConfig({displayName:"Header__StyledBaseHeader",componentId:"sc-e46ea7b6-0"})(w(),l.v.boxShadow1,a.Uh.mobile);var S=function(){return(0,i.jsx)(k,{children:(0,i.jsx)(_,{})})};function j(){let e=(0,r._)(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n  // background-color: #e0f2c2;\n  background-color: #e6e1f2;\n  border-top: 1px solid #c6c1e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .copyright {\n    font-family: ",";\n    font-size: 13px;\n    color: #666;\n  }\n"]);return j=function(){return e},e}let E=o.ZP.footer.withConfig({displayName:"Footer__StyledBaseFooter",componentId:"sc-72735022-0"})(j(),b().style.fontFamily);var C=function(){return(0,i.jsx)(E,{children:(0,i.jsx)("p",{className:"copyright",children:"Copyright 2023. Shinyongjun, Some rights reserved."})})};function N(){let e=(0,r._)(["\n  position: relative;\n  min-height: 100vh;\n  padding-block: 60px;\n  background-color: ",";\n  @media "," {\n    padding-top: 48px;\n  }\n"]);return N=function(){return e},e}let M=o.ZP.div.withConfig({displayName:"Default__StyledDefaultTemplate",componentId:"sc-a12e2ad-0"})(N(),l.v.primaryBg,a.Uh.mobile);var I=function(e){let{children:n}=e;return(0,i.jsxs)(M,{children:[(0,i.jsx)(S,{}),(0,i.jsx)(s,{children:n}),(0,i.jsx)(C,{})]})}},218:function(e,n,t){"use strict";t.d(n,{C:function(){return o},T:function(){return i}});var r=t(3198);let i=r.I0,o=r.v9},9930:function(e,n,t){"use strict";t.d(n,{ky:function(){return o}});var r=t(663);let i=(0,r.oM)({name:"core",initialState:{categoryName:""},reducers:{setCategoryName:(e,n)=>({...e,categoryName:n.payload})}}),o=i.actions;n.ZP=i.reducer},765:function(e,n,t){"use strict";t.d(n,{IW:function(){return o}});var r=t(663);let i=(0,r.oM)({name:"score",initialState:{capo:0,computedKey:0},reducers:{setCapo:(e,n)=>({...e,capo:n.payload}),setComputedKey:(e,n)=>({...e,computedKey:n.payload})}}),o=i.actions;n.ZP=i.reducer},5681:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(7437),i=t(3198),o=t(7373),a=t(663),l=t(9930);let c=(0,a.oM)({name:"diary",initialState:{currentDate:""},reducers:{setCurrentDate:(e,n)=>({...e,currentDate:n.payload})}});c.actions;var u=c.reducer,s=t(765);let d=(0,o.UY)({core:l.ZP,diary:u,score:s.ZP}),f=(0,a.xC)({reducer:d,devTools:!1});var p=function(e){let{children:n}=e;return(0,r.jsx)(i.zt,{store:f,children:n})}},3865:function(e,n,t){"use strict";t.d(n,{v:function(){return r}});let r={primaryBg:"#f6f8fa",primaryLine:"#d0d7de",secondaryBg:"#E6E1F2",secondaryLine:"#c6c1e1",primaryText:"#000000",secondaryText:"#777777",hoverText:"#7d4e9f",boxShadow1:"0px 2px 4px rgba(0, 0, 0, 0.1)"}},4241:function(e,n,t){"use strict";t.d(n,{LH:function(){return c},Uh:function(){return u},mc:function(){return l}});var r=t(230),i=t(802);function o(){let e=(0,r._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return e},e}function a(){let e=(0,r._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return a=function(){return e},e}let l=(0,i.iv)(o()),c=e=>(0,i.iv)(a(),e),u={mobile:"(max-width: 768px)"}},1744:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(7437),i=t(2265),o=t(4033),a=t(802),l=t(230),c=t(4241),u=t(8016),s=t.n(u),d=t(5760),f=t.n(d);function p(){let e=(0,l._)(["\n  *,\n  :before,\n  :after {\n    ",";\n  }\n  html {\n    // scroll-behavior: smooth;\n    scroll-behavior: auto;\n  }\n  body {\n    font-family: ",", ",";\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #000;\n    background: #fff;\n    -webkit-text-size-adjust: 100%;\n    min-width: 320px;\n    &.is-mobile {\n      font-size: 12px;\n    }\n    &.is-scroll-lock {\n      overflow: hidden;\n    }\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  table {\n    width: 100%;\n    border-spacing: 0;\n    table-layout: fixed;\n  }\n  th,\n  td {\n    text-align: center;\n    vertical-align: middle;\n  }\n  a {\n    text-decoration: none;\n  }\n  button,\n  input[type='file'],\n  input[type='image'],\n  input[type='reset'],\n  input[type='button'],\n  input[type='submit'] {\n    border: none;\n    border-radius: 0;\n    background: none;\n    appearance: none;\n    cursor: pointer;\n  }\n  input:not([type]),\n  input[type='date'],\n  input[type='datetime-local'],\n  input[type='email'],\n  input[type='month'],\n  input[type='number'],\n  input[type='password'],\n  input[type='search'],\n  input[type='tel'],\n  input[type='text'],\n  input[type='time'],\n  input[type='url'],\n  input[type='week'],\n  textarea,\n  select {\n    display: inline-block;\n    width: 100%;\n    height: 40px;\n    font-size: 16px;\n    line-height: 38px;\n    color: #000;\n    padding: 0 10px;\n    border: 1px solid #ccc;\n    background: #fff;\n    box-shadow: none;\n\n    &:disabled {\n      background: #f7f7f7;\n    }\n    &::placeholder {\n      color: #999;\n    }\n  }\n  textarea {\n    height: 300px;\n    padding: 10px;\n    line-height: 1.5;\n  }\n  input[type='number'] {\n    &::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      appearance: none;\n    }\n  }\n"]);return p=function(){return e},e}function h(e){let{children:n}=e,[t]=(0,i.useState)(()=>new a.qH);return(0,o.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),(0,r.jsx)(r.Fragment,{children:e})}),(0,r.jsx)(r.Fragment,{children:n})}(0,a.vJ)(p(),c.mc,s().style.fontFamily,f().style.fontFamily)},4033:function(e,n,t){e.exports=t(8165)}},function(e){e.O(0,[27,576,396,198,783,971,596,744],function(){return e(e.s=5527)}),_N_E=e.O()}]);