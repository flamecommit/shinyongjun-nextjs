"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{7137:function(n,e,t){t.r(e);var o=t(230),a=t(7437),i=t(802),l=t(5138),r=t(1396),s=t.n(r),c=t(3198),d=t(4241);function p(){let n=(0,o._)(["\n  margin-bottom: 36px;\n  display: flex;\n  align-items: center;\n  column-gap: 30px;\n  &[data-is-detail='true'] {\n    margin-top: 60px;\n    padding-bottom: 60px;\n    border-bottom: 1px solid #ddd;\n  }\n  .avatar {\n    img {\n      width: 128px;\n      height: 128px;\n      border-radius: 50%;\n    }\n  }\n  .names-container {\n    .name {\n      font-weight: 500;\n      font-size: 20px;\n      letter-spacing: -0.05em;\n      &:hover {\n        text-decoration: underline;\n      }\n      &[data-category='about'] {\n        pointer-events: none;\n      }\n    }\n    .bio {\n      color: #999;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n    }\n    .links {\n      display: flex;\n      margin-top: 6px;\n      a {\n        display: block;\n        font-size: 20px;\n        line-height: 1;\n      }\n    }\n  }\n  @media "," {\n    column-gap: 24px;\n    .avatar {\n      img {\n        width: 96px;\n        height: 96px;\n      }\n    }\n    .names-container {\n      .name {\n        font-size: 16px;\n      }\n      .bio {\n        font-size: 12px;\n      }\n    }\n  }\n"]);return p=function(){return n},n}let h=i.ZP.div.withConfig({displayName:"Profile__StyledAuthorProfile",componentId:"sc-5844ea53-0"})(p(),d.Uh.mobile);e.default=function(n){let{postDetail:e}=n,{categoryName:t}=(0,c.v9)(n=>n.core);return(0,a.jsxs)(h,{"data-is-detail":e,children:[(0,a.jsx)("div",{className:"avatar",children:(0,a.jsx)("img",{src:"/images/author-avatar.jpg",alt:"숲길에서 찍은 사진"})}),(0,a.jsxs)("div",{className:"names-container",children:[(0,a.jsx)(s(),{className:"name",href:"/about","data-category":t,children:"신용준"}),(0,a.jsx)("div",{className:"bio",children:"code도 치고 chord도 칩니다"}),(0,a.jsx)("div",{className:"links",children:(0,a.jsx)("a",{href:"https://github.com/shinyj1991",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(l.p,{style:{color:"#000000"},title:"Github"})})})]})]})}},5797:function(n,e,t){t.r(e);var o=t(230),a=t(7437),i=t(802),l=t(2265);function r(){let n=(0,o._)(["\n  margin-top: 60px;\n"]);return r=function(){return n},n}let s=i.ZP.div.withConfig({displayName:"Giscus__StyledGiscus",componentId:"sc-66be5d04-0"})(r());e.default=function(){let n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!n.current||n.current.hasChildNodes())return;let e=document.createElement("script");e.src="https://giscus.app/client.js",e.async=!0,e.crossOrigin="anonymous",e.setAttribute("data-repo","shinyj1991/shinyongjun-nextjs"),e.setAttribute("data-repo-id","R_kgDOKAn1Tg"),e.setAttribute("data-category","General"),e.setAttribute("data-category-id","DIC_kwDOKAn1Ts4CYhyN"),e.setAttribute("data-mapping","title"),e.setAttribute("data-strict","1"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","bottom"),e.setAttribute("data-theme","light"),e.setAttribute("data-lang","ko"),n.current.appendChild(e)},[]),(0,a.jsx)(s,{children:(0,a.jsx)("section",{ref:n})})}},1510:function(n,e,t){t.d(e,{Z:function(){return f}});var o=t(230),a=t(7437),i=t(2265),l=t(802),r=t(774),s=t(7046),c=t(1289);function d(){let n=(0,o._)(["\n  position: absolute;\n  cursor: grab;\n  padding: 20px;\n  margin: 20px;\n  background-color: #fff;\n  max-width: 100%;\n  img {\n    pointer-events: none;\n    user-select: none;\n    max-width: 100%;\n  }\n  &[data-pressed='true'] {\n    cursor: grabbing;\n  }\n"]);return d=function(){return n},n}let p=l.ZP.div.attrs(n=>({style:{transform:n.$transform}})).withConfig({displayName:"Item__StyledGalleryItem",componentId:"sc-471abc03-0"})(d());var h=function(n){let{image:e,scale:t}=n,[o,l]=(0,i.useState)(0),[r,s]=(0,i.useState)(0),[c,d]=(0,i.useState)(0),[h,g]=(0,i.useState)(0),[m,f]=(0,i.useState)(0),[u,b]=(0,i.useState)(0),x="translate(".concat(m,"px, ").concat(u,"px) scale(").concat(t,")"),y=function(){let[n,e]=(0,i.useState)(!1);function t(){e(!0)}function o(){e(!1)}return(0,i.useEffect)(()=>(window.addEventListener("mousedown",t),window.addEventListener("mouseup",o),function(){window.removeEventListener("mousedown",t),window.removeEventListener("mouseup",o)}),[]),n}();return(0,a.jsx)(p,{onMouseDown:n=>{l(n.clientX),s(n.clientY),d(m),g(u)},onMouseMove:n=>{y&&(f(n.clientX-o+c),b(n.clientY-r+h))},$transform:x,"data-pressed":y.toString(),children:(0,a.jsx)("img",{src:e,alt:""})})};function g(){let n=(0,o._)(["\n  backdrop-filter: blur(5px);\n  position: fixed;\n  inset: 0;\n  z-index: 101;\n  background-color: rgba(0, 0, 0, 0.7);\n  .image-list {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: default;\n    .image-item {\n      cursor: grab;\n      transform: ",";\n    }\n    .galleryItem-enter {\n      opacity: 0;\n      transform: scale(0.9);\n    }\n    .galleryItem-enter-active {\n      opacity: 1;\n      transform: translateX(0);\n      transition:\n        opacity 300ms,\n        transform 300ms;\n    }\n    .galleryItem-exit {\n      opacity: 1;\n    }\n    .galleryItem-exit-active {\n      opacity: 0;\n      transform: scale(0.9);\n      transition:\n        opacity 300ms,\n        transform 300ms;\n    }\n  }\n  .controller {\n    position: absolute;\n    right: 0;\n    bottom: 80px;\n    left: 0%;\n    display: flex;\n    justify-content: center;\n    button {\n      line-height: 1;\n      svg {\n        color: #fff;\n        font-size: 30px;\n      }\n    }\n  }\n  .thumbnails {\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-x: auto;\n    overflow-y: hidden;\n    text-align: center;\n    .center {\n      display: inline-block;\n      white-space: nowrap;\n    }\n    .thumbnail {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      vertical-align: top;\n      width: 50px;\n      height: 50px;\n      background: #fff;\n      opacity: 0.5;\n      img {\n        max-width: 100%;\n        max-height: 100%;\n      }\n      &.active {\n        opacity: 1;\n      }\n    }\n  }\n"]);return g=function(){return n},n}let m=l.ZP.div.withConfig({displayName:"Wrapper__StyledGalleryWrapper",componentId:"sc-fbd2e336-0"})(g(),n=>"scale(".concat(n.$scale,")"));var f=function(n){let{images:e,initActiveIndex:t,closeGallery:o}=n,[l,d]=(0,i.useState)(t),[p,g]=(0,i.useState)(1),f=e.length,u=(0,i.useRef)(null),b=n=>(g(1),n>f-1)?d(0):n<0?d(f-1):d(n);return(0,i.useEffect)(()=>{var n;null===(n=u.current)||void 0===n||n.getElementsByTagName("button")[l].scrollIntoView()},[l]),(0,i.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="initial"}),[]),(0,a.jsxs)(m,{onWheel:n=>{n.deltaY<0&&(1.05*p>10?g(10):g(1.05*p)),n.deltaY>0&&(.95*p<.3?g(.3):g(.95*p))},$scale:p,children:[(0,a.jsx)("button",{type:"button",className:"image-list",onClick:n=>{n.target===n.currentTarget&&o()},children:e.map((n,e)=>(0,a.jsx)(c.Z,{in:l===e,timeout:300,unmountOnExit:!0,classNames:"galleryItem",children:(0,a.jsx)(h,{image:n.src,scale:p})},n.key))}),(0,a.jsxs)("nav",{className:"controller",children:[(0,a.jsx)("button",{type:"button",className:"btn-prev",onClick:()=>b(l-1),children:(0,a.jsx)(r.Y,{})}),(0,a.jsx)("button",{type:"button",className:"btn-next",onClick:()=>b(l+1),children:(0,a.jsx)(s.T,{})})]}),(0,a.jsx)("div",{className:"thumbnails",ref:u,children:(0,a.jsx)("div",{className:"center",children:e.map((n,e)=>(0,a.jsx)("button",{type:"button",className:"thumbnail ".concat(l===e?"active":""),onClick:()=>b(e),children:(0,a.jsx)("img",{src:n.src,alt:""})},n.key))})})]})}},3865:function(n,e,t){t.d(e,{v:function(){return o}});let o={gray1:"#f6f8fa",gray2:"#d0d7de",gray3:"#CCD2E3",boxShadow1:"0px 0px 5px 0px rgba(0, 0, 0, 0.4)"}},6206:function(n,e,t){t.d(e,{J:function(){return r}});var o=t(230),a=t(802),i=t(3865);function l(){let n=(0,o._)(["\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  margin: 0;\n  color: #24292f;\n  background-color: #ffffff;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,\n    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n\n  .octicon {\n    display: inline-block;\n    fill: currentColor;\n    vertical-align: text-bottom;\n  }\n\n  h1:hover .anchor .octicon-link:before,\n  h2:hover .anchor .octicon-link:before,\n  h3:hover .anchor .octicon-link:before,\n  h4:hover .anchor .octicon-link:before,\n  h5:hover .anchor .octicon-link:before,\n  h6:hover .anchor .octicon-link:before {\n    width: 16px;\n    height: 16px;\n    content: ' ';\n    display: inline-block;\n    background-color: currentColor;\n    -webkit-mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");\n    mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");\n  }\n\n  details,\n  figcaption,\n  figure {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  a {\n    background-color: transparent;\n    color: #0969da;\n    text-decoration: none;\n  }\n\n  a:active,\n  a:hover {\n    outline-width: 0;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: 600;\n  }\n\n  dfn {\n    font-style: italic;\n  }\n\n  h1 {\n    margin: 0.67em 0;\n    font-weight: 600;\n    padding-bottom: 0.3em;\n    font-size: 2em;\n    border-bottom: 1px solid ",";\n  }\n\n  mark {\n    background-color: #ff0;\n    color: #24292f;\n  }\n\n  small {\n    font-size: 90%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n    max-width: 100%;\n    box-sizing: content-box;\n    background-color: #ffffff;\n  }\n\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  figure {\n    margin: 1em 40px;\n  }\n\n  hr {\n    box-sizing: content-box;\n    overflow: hidden;\n    background: transparent;\n    border-bottom: 1px solid ",";\n    height: 0.25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #d0d7de;\n    border: 0;\n  }\n\n  html [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  [type='button']::-moz-focus-inner,\n  [type='reset']::-moz-focus-inner,\n  [type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  [type='button']:-moz-focusring,\n  [type='reset']:-moz-focusring,\n  [type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  [type='checkbox'],\n  [type='radio'] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type='search'] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type='search']::-webkit-search-cancel-button,\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  hr::before {\n    display: table;\n    content: '';\n  }\n\n  hr::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n\n  table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    display: block;\n    width: max-content;\n    max-width: 100%;\n    overflow: auto;\n  }\n\n  td,\n  th {\n    padding: 0;\n  }\n\n  details summary {\n    cursor: pointer;\n  }\n\n  details:not([open]) > *:not(summary) {\n    display: none !important;\n  }\n\n  kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font:\n      11px ui-monospace,\n      SFMono-Regular,\n      SF Mono,\n      Menlo,\n      Consolas,\n      Liberation Mono,\n      monospace;\n    line-height: 10px;\n    color: #24292f;\n    vertical-align: middle;\n    background-color: #f6f8fa;\n    border: solid 1px rgba(175, 184, 193, 0.2);\n    border-bottom-color: rgba(175, 184, 193, 0.2);\n    border-radius: 6px;\n    box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    font-weight: 600;\n    line-height: 1.25;\n  }\n\n  h2 {\n    font-weight: 600;\n    padding-bottom: 0.3em;\n    font-size: 1.5em;\n    border-bottom: 1px solid ",";\n  }\n\n  h3 {\n    font-weight: 600;\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-weight: 600;\n    font-size: 1em;\n  }\n\n  h5 {\n    font-weight: 600;\n    font-size: 0.875em;\n  }\n\n  h6 {\n    font-weight: 600;\n    font-size: 0.85em;\n    color: #57606a;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  blockquote {\n    margin: 0;\n    padding: 0 1em;\n    color: #57606a;\n    border-left: 0.25em solid #d0d7de;\n  }\n\n  ul,\n  ol {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 2em;\n  }\n\n  ol ol,\n  ul ol {\n    list-style-type: lower-roman;\n  }\n\n  ul ul ol,\n  ul ol ol,\n  ol ul ol,\n  ol ol ol {\n    list-style-type: lower-alpha;\n  }\n\n  dd {\n    margin-left: 0;\n  }\n\n  tt,\n  code {\n    font-family:\n      ui-monospace,\n      SFMono-Regular,\n      SF Mono,\n      Menlo,\n      Consolas,\n      Liberation Mono,\n      monospace;\n    font-size: 12px;\n  }\n\n  pre {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-family:\n      ui-monospace,\n      SFMono-Regular,\n      SF Mono,\n      Menlo,\n      Consolas,\n      Liberation Mono,\n      monospace;\n    font-size: 12px;\n    word-wrap: normal;\n  }\n\n  :-ms-input-placeholder {\n    color: #6e7781;\n    opacity: 1;\n  }\n\n  ::-ms-input-placeholder {\n    color: #6e7781;\n    opacity: 1;\n  }\n\n  ::placeholder {\n    color: #6e7781;\n    opacity: 1;\n  }\n\n  .pl-c {\n    color: #6e7781;\n  }\n\n  .pl-c1,\n  .pl-s .pl-v {\n    color: #0550ae;\n  }\n\n  .pl-e,\n  .pl-en {\n    color: #8250df;\n  }\n\n  .pl-smi,\n  .pl-s .pl-s1 {\n    color: #24292f;\n  }\n\n  .pl-ent {\n    color: #116329;\n  }\n\n  .pl-k {\n    color: #cf222e;\n  }\n\n  .pl-s,\n  .pl-pds,\n  .pl-s .pl-pse .pl-s1,\n  .pl-sr,\n  .pl-sr .pl-cce,\n  .pl-sr .pl-sre,\n  .pl-sr .pl-sra {\n    color: #0a3069;\n  }\n\n  .pl-v,\n  .pl-smw {\n    color: #953800;\n  }\n\n  .pl-bu {\n    color: #82071e;\n  }\n\n  .pl-ii {\n    color: #f6f8fa;\n    background-color: #82071e;\n  }\n\n  .pl-c2 {\n    color: #f6f8fa;\n    background-color: #cf222e;\n  }\n\n  .pl-sr .pl-cce {\n    font-weight: bold;\n    color: #116329;\n  }\n\n  .pl-ml {\n    color: #3b2300;\n  }\n\n  .pl-mh,\n  .pl-mh .pl-en,\n  .pl-ms {\n    font-weight: bold;\n    color: #0550ae;\n  }\n\n  .pl-mi {\n    font-style: italic;\n    color: #24292f;\n  }\n\n  .pl-mb {\n    font-weight: bold;\n    color: #24292f;\n  }\n\n  .pl-md {\n    color: #82071e;\n    background-color: #ffebe9;\n  }\n\n  .pl-mi1 {\n    color: #116329;\n    background-color: #dafbe1;\n  }\n\n  .pl-mc {\n    color: #953800;\n    background-color: #ffd8b5;\n  }\n\n  .pl-mi2 {\n    color: #eaeef2;\n    background-color: #0550ae;\n  }\n\n  .pl-mdr {\n    font-weight: bold;\n    color: #8250df;\n  }\n\n  .pl-ba {\n    color: #57606a;\n  }\n\n  .pl-sg {\n    color: #8c959f;\n  }\n\n  .pl-corl {\n    text-decoration: underline;\n    color: #0a3069;\n  }\n\n  [data-catalyst] {\n    display: block;\n  }\n\n  g-emoji {\n    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n    font-size: 1em;\n    font-style: normal !important;\n    font-weight: 400;\n    line-height: 1;\n    vertical-align: -0.075em;\n  }\n\n  g-emoji img {\n    width: 1em;\n    height: 1em;\n  }\n\n  .markdown-body::before {\n    display: table;\n    content: '';\n  }\n\n  .markdown-body::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n\n  > *:first-child {\n    margin-top: 0 !important;\n  }\n\n  > *:last-child {\n    margin-bottom: 0 !important;\n  }\n\n  a:not([href]) {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .absent {\n    color: #cf222e;\n  }\n\n  .anchor {\n    float: left;\n    padding-right: 4px;\n    margin-left: -20px;\n    line-height: 1;\n  }\n\n  .anchor:focus {\n    outline: none;\n  }\n\n  p,\n  blockquote,\n  ul,\n  ol,\n  dl,\n  table,\n  pre,\n  details {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  blockquote > :first-child {\n    margin-top: 0;\n  }\n\n  blockquote > :last-child {\n    margin-bottom: 0;\n  }\n\n  sup > a::before {\n    content: '[';\n  }\n\n  sup > a::after {\n    content: ']';\n  }\n\n  h1 .octicon-link,\n  h2 .octicon-link,\n  h3 .octicon-link,\n  h4 .octicon-link,\n  h5 .octicon-link,\n  h6 .octicon-link {\n    color: #24292f;\n    vertical-align: middle;\n    visibility: hidden;\n  }\n\n  h1:hover .anchor,\n  h2:hover .anchor,\n  h3:hover .anchor,\n  h4:hover .anchor,\n  h5:hover .anchor,\n  h6:hover .anchor {\n    text-decoration: none;\n  }\n\n  h1:hover .anchor .octicon-link,\n  h2:hover .anchor .octicon-link,\n  h3:hover .anchor .octicon-link,\n  h4:hover .anchor .octicon-link,\n  h5:hover .anchor .octicon-link,\n  h6:hover .anchor .octicon-link {\n    visibility: visible;\n  }\n\n  h1 tt,\n  h1 code,\n  h2 tt,\n  h2 code,\n  h3 tt,\n  h3 code,\n  h4 tt,\n  h4 code,\n  h5 tt,\n  h5 code,\n  h6 tt,\n  h6 code {\n    padding: 0 0.2em;\n    font-size: inherit;\n  }\n\n  ul.no-list,\n  ol.no-list {\n    padding: 0;\n    list-style-type: none;\n  }\n\n  ol[type='1'] {\n    list-style-type: decimal;\n  }\n\n  ol[type='a'] {\n    list-style-type: lower-alpha;\n  }\n\n  ol[type='i'] {\n    list-style-type: lower-roman;\n  }\n\n  div > ol:not([type]) {\n    list-style-type: decimal;\n  }\n\n  ul ul,\n  ul ol,\n  ol ol,\n  ol ul {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  li > p {\n    margin-top: 16px;\n  }\n\n  li + li {\n    margin-top: 0.25em;\n  }\n\n  dl {\n    padding: 0;\n  }\n\n  dl dt {\n    padding: 0;\n    margin-top: 16px;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: 600;\n  }\n\n  dl dd {\n    padding: 0 16px;\n    margin-bottom: 16px;\n  }\n\n  table th {\n    font-weight: 600;\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #d0d7de;\n  }\n\n  table tr {\n    background-color: #ffffff;\n    border-top: 1px solid ",";\n  }\n\n  table tr:nth-child(2n) {\n    background-color: #f6f8fa;\n  }\n\n  table img {\n    background-color: transparent;\n  }\n\n  img[align='right'] {\n    padding-left: 20px;\n  }\n\n  img[align='left'] {\n    padding-right: 20px;\n  }\n\n  .emoji {\n    max-width: none;\n    vertical-align: text-top;\n    background-color: transparent;\n  }\n\n  span.frame {\n    display: block;\n    overflow: hidden;\n  }\n\n  span.frame > span {\n    display: block;\n    float: left;\n    width: auto;\n    padding: 7px;\n    margin: 13px 0 0;\n    overflow: hidden;\n    border: 1px solid #d0d7de;\n  }\n\n  span.frame span img {\n    display: block;\n    float: left;\n  }\n\n  span.frame span span {\n    display: block;\n    padding: 5px 0 0;\n    clear: both;\n    color: #24292f;\n  }\n\n  span.align-center {\n    display: block;\n    overflow: hidden;\n    clear: both;\n  }\n\n  span.align-center > span {\n    display: block;\n    margin: 13px auto 0;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  span.align-center span img {\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  span.align-right {\n    display: block;\n    overflow: hidden;\n    clear: both;\n  }\n\n  span.align-right > span {\n    display: block;\n    margin: 13px 0 0;\n    overflow: hidden;\n    text-align: right;\n  }\n\n  span.align-right span img {\n    margin: 0;\n    text-align: right;\n  }\n\n  span.float-left {\n    display: block;\n    float: left;\n    margin-right: 13px;\n    overflow: hidden;\n  }\n\n  span.float-left span {\n    margin: 13px 0 0;\n  }\n\n  span.float-right {\n    display: block;\n    float: right;\n    margin-left: 13px;\n    overflow: hidden;\n  }\n\n  span.float-right > span {\n    display: block;\n    margin: 13px auto 0;\n    overflow: hidden;\n    text-align: right;\n  }\n\n  code,\n  tt {\n    padding: 0.2em 0.4em;\n    margin: 0;\n    font-size: 85%;\n    background-color: rgba(175, 184, 193, 0.2);\n    border-radius: 6px;\n  }\n\n  code br,\n  tt br {\n    display: none;\n  }\n\n  del code {\n    text-decoration: inherit;\n  }\n\n  pre code {\n    font-size: 100%;\n  }\n\n  pre > code {\n    padding: 0;\n    margin: 0;\n    word-break: normal;\n    white-space: pre;\n    background: transparent;\n    border: 0;\n  }\n\n  .highlight {\n    margin-bottom: 16px;\n  }\n\n  .highlight pre {\n    margin-bottom: 0;\n    word-break: normal;\n  }\n\n  .highlight pre,\n  pre {\n    padding: 16px;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f6f8fa;\n    border-radius: 6px;\n  }\n\n  pre code,\n  pre tt {\n    display: inline;\n    max-width: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    line-height: inherit;\n    word-wrap: normal;\n    background-color: transparent;\n    border: 0;\n  }\n\n  .csv-data td,\n  .csv-data th {\n    padding: 5px;\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 1;\n    text-align: left;\n    white-space: nowrap;\n  }\n\n  .csv-data .blob-num {\n    padding: 10px 8px 9px;\n    text-align: right;\n    background: #ffffff;\n    border: 0;\n  }\n\n  .csv-data tr {\n    border-top: 0;\n  }\n\n  .csv-data th {\n    font-weight: 600;\n    background: #f6f8fa;\n    border-top: 0;\n  }\n\n  .footnotes {\n    font-size: 12px;\n    color: #57606a;\n    border-top: 1px solid #d0d7de;\n  }\n\n  .footnotes ol {\n    padding-left: 16px;\n  }\n\n  .footnotes li {\n    position: relative;\n  }\n\n  .footnotes li:target::before {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    bottom: -8px;\n    left: -24px;\n    pointer-events: none;\n    content: '';\n    border: 2px solid #0969da;\n    border-radius: 6px;\n  }\n\n  .footnotes li:target {\n    color: #24292f;\n  }\n\n  .footnotes .data-footnote-backref g-emoji {\n    font-family: monospace;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    filter: invert(50%);\n  }\n"]);return l=function(){return n},n}let r=(0,a.iv)(l(),i.v.gray2,i.v.gray2,i.v.gray2,i.v.gray2)},7735:function(n,e,t){t.d(e,{M:function(){return l}});var o=t(230),a=t(802);function i(){let n=(0,o._)(["\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: black;\n    background: none;\n    text-shadow: 0 1px white;\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    font-size: 1em;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-']::-moz-selection,\n  pre[class*='language-'] ::-moz-selection,\n  code[class*='language-']::-moz-selection,\n  code[class*='language-'] ::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc;\n  }\n\n  pre[class*='language-']::selection,\n  pre[class*='language-'] ::selection,\n  code[class*='language-']::selection,\n  code[class*='language-'] ::selection {\n    text-shadow: none;\n    background: #b3d4fc;\n  }\n\n  @media print {\n    code[class*='language-'],\n    pre[class*='language-'] {\n      text-shadow: none;\n    }\n  }\n\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n  }\n\n  :not(pre) > code[class*='language-'],\n  pre[class*='language-'] {\n    background: #f5f2f0;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*='language-'] {\n    padding: 0.1em;\n    border-radius: 0.3em;\n    white-space: normal;\n  }\n\n  .hljs-comment,\n  .hljs-prolog,\n  .hljs-doctype,\n  .hljs-cdata {\n    color: slategray;\n  }\n\n  .hljs-punctuation {\n    color: #999;\n  }\n\n  .hljs-namespace {\n    opacity: 0.7;\n  }\n\n  .hljs-property,\n  .hljs-tag,\n  .hljs-boolean,\n  .hljs-number,\n  .hljs-constant,\n  .hljs-symbol,\n  .hljs-deleted {\n    color: #905;\n  }\n\n  .hljs-selector,\n  .hljs-attr-name,\n  .hljs-string,\n  .hljs-char,\n  .hljs-builtin,\n  .hljs-inserted {\n    color: #690;\n  }\n\n  .hljs-operator,\n  .hljs-entity,\n  .hljs-url,\n  .language-css .hljs-string,\n  .style .hljs-string {\n    color: #9a6e3a;\n    /* This background color was intended by the author of this theme. */\n    background: hsla(0, 0%, 100%, 0.5);\n  }\n\n  .hljs-atrule,\n  .hljs-attr-value,\n  .hljs-keyword {\n    color: #07a;\n  }\n\n  .hljs-function,\n  .hljs-class-name {\n    color: #dd4a68;\n  }\n\n  .hljs-regex,\n  .hljs-important,\n  .hljs-variable {\n    color: #e90;\n  }\n\n  .hljs-important,\n  .hljs-bold {\n    font-weight: bold;\n  }\n  .hljs-italic {\n    font-style: italic;\n  }\n\n  .hljs-entity {\n    cursor: help;\n  }\n"]);return i=function(){return n},n}let l=(0,a.iv)(i())}}]);