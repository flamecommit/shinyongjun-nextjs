(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{354:function(n,e,t){var i=t(5491).w_;n.exports.A=function(n){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(n)}},7358:function(n,e,t){var i=t(5491).w_;n.exports.b=function(n){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}},2975:function(n,e,t){var i=t(5491).w_;n.exports.r=function(n){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}},3277:function(n,e,t){Promise.resolve().then(t.bind(t,8365))},2066:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var i=t(230),r=t(7437),o=t(2265),a=t(1806),s=t(774),c=t(7046),l=t(1289);function d(){let n=(0,i._)(["\n  position: absolute;\n  cursor: grab;\n  padding: 20px;\n  margin: 20px;\n  background-color: #fff;\n  max-width: 100%;\n  img {\n    pointer-events: none;\n    user-select: none;\n    max-width: ",";\n    max-height: ",";\n  }\n  &[data-pressed='true'] {\n    cursor: grabbing;\n  }\n"]);return d=function(){return n},n}let p=a.ZP.div.attrs(n=>({style:{transform:n.$transform,windowWidth:n.$windowWidth,windowHeight:n.$windowHeight}})).withConfig({displayName:"Item__StyledGalleryItem",componentId:"sc-4318ac51-0"})(d(),n=>"".concat(n.$windowWidth-100,"px"),n=>"".concat(n.$windowHeight-280,"px"));var u=function(n){let{image:e,scale:t}=n,[i,a]=(0,o.useState)(0),[s,c]=(0,o.useState)(0),[l,d]=(0,o.useState)(0),[u,m]=(0,o.useState)(0),[x,h]=(0,o.useState)(0),[f,g]=(0,o.useState)(0),y="translate(".concat(x,"px, ").concat(f,"px) scale(").concat(t,")"),v=function(){let[n,e]=(0,o.useState)(!1);function t(){e(!0)}function i(){e(!1)}return(0,o.useEffect)(()=>(window.addEventListener("mousedown",t),window.addEventListener("mouseup",i),function(){window.removeEventListener("mousedown",t),window.removeEventListener("mouseup",i)}),[]),n}(),{width:w,height:b}=function(){let[n,e]=(0,o.useState)({width:window.innerWidth,height:window.innerHeight});return(0,o.useEffect)(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[!0]),n}();return(0,r.jsx)(p,{onMouseDown:n=>{a(n.clientX),c(n.clientY),d(x),m(f)},onMouseMove:n=>{v&&(h(n.clientX-i+l),g(n.clientY-s+u))},$transform:y,$windowWidth:w,$windowHeight:b,"data-pressed":v.toString(),children:(0,r.jsx)("img",{src:e,alt:""})})};function m(){let n=(0,i._)(["\n  backdrop-filter: blur(5px);\n  position: fixed;\n  inset: 0;\n  z-index: 101;\n  background-color: rgba(0, 0, 0, 0.7);\n  .image-list {\n    position: absolute;\n    inset: 0 0 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: default;\n    .image-item {\n      cursor: grab;\n      transform: ",";\n    }\n    .galleryItem-enter {\n      opacity: 0;\n      transform: scale(0.9);\n    }\n    .galleryItem-enter-active {\n      opacity: 1;\n      transform: translateX(0);\n      transition:\n        opacity 300ms,\n        transform 300ms;\n    }\n    .galleryItem-exit {\n      opacity: 1;\n    }\n    .galleryItem-exit-active {\n      opacity: 0;\n      transform: scale(0.9);\n      transition:\n        opacity 300ms,\n        transform 300ms;\n    }\n  }\n  .controller {\n    position: absolute;\n    right: 0;\n    bottom: 80px;\n    left: 0%;\n    display: flex;\n    justify-content: center;\n    button {\n      line-height: 1;\n      svg {\n        color: #fff;\n        font-size: 30px;\n      }\n    }\n  }\n  .thumbnails {\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-x: auto;\n    overflow-y: hidden;\n    text-align: center;\n    .center {\n      display: inline-block;\n      white-space: nowrap;\n    }\n    .thumbnail {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      vertical-align: top;\n      width: 50px;\n      height: 50px;\n      background: #fff;\n      opacity: 0.5;\n      img {\n        max-width: 100%;\n        max-height: 100%;\n      }\n      &.active {\n        opacity: 1;\n      }\n    }\n  }\n"]);return m=function(){return n},n}let x=a.ZP.div.withConfig({displayName:"Wrapper__StyledGalleryWrapper",componentId:"sc-542d8322-0"})(m(),n=>"scale(".concat(n.$scale,")"));var h=function(n){let{images:e,initActiveIndex:t,closeGallery:i}=n,[a,d]=(0,o.useState)(t),[p,m]=(0,o.useState)(1),h=e.length,f=(0,o.useRef)(null),g=n=>(m(1),n>h-1)?d(0):n<0?d(h-1):d(n);return(0,o.useEffect)(()=>{var n;null===(n=f.current)||void 0===n||n.getElementsByTagName("button")[a].scrollIntoView()},[a]),(0,o.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="initial"}),[]),(0,r.jsxs)(x,{onWheel:n=>{n.deltaY<0&&(1.05*p>10?m(10):m(1.05*p)),n.deltaY>0&&(.95*p<.3?m(.3):m(.95*p))},$scale:p,children:[(0,r.jsx)("button",{type:"button",className:"image-list",onClick:n=>{n.target===n.currentTarget&&i()},children:e.map((n,e)=>(0,r.jsx)(l.Z,{in:a===e,timeout:300,unmountOnExit:!0,classNames:"galleryItem",children:(0,r.jsx)(u,{image:n.src,scale:p})},n.key))}),(0,r.jsxs)("nav",{className:"controller",children:[(0,r.jsx)("button",{type:"button",className:"btn-prev",onClick:()=>g(a-1),children:(0,r.jsx)(s.Y,{})}),(0,r.jsx)("button",{type:"button",className:"btn-next",onClick:()=>g(a+1),children:(0,r.jsx)(c.T,{})})]}),(0,r.jsx)("div",{className:"thumbnails",ref:f,children:(0,r.jsx)("div",{className:"center",children:e.map((n,e)=>(0,r.jsx)("button",{type:"button",className:"thumbnail ".concat(a===e?"active":""),onClick:()=>g(e),children:(0,r.jsx)("img",{src:n.src,alt:""})},n.key))})})]})}},8365:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var i=t(230),r=t(7437),o=t(1806),a=t(6442),s=t(2265),c=t(814),l=t(2066),Symbol=t(6180),d=t(8877),p=t(5343),u=t(4237),m=t(1838);function x(){let n=(0,i._)(["\n  display: flex;\n  flex-wrap: wrap;\n  // column-gap: 0.1em;\n  padding: 4px;\n  // background-color: #fff;\n  // border-bottom: 1px solid ",";\n  border-bottom: 1px solid #e4e8ec;\n  row-gap: 6px;\n  .letter {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    flex-basis: 1em;\n    width: 1em;\n    text-align: center;\n    flex-basis: ",";\n    width: ",";\n    .chord {\n      height: 1.5em;\n      white-space: nowrap;\n      button {\n        position: relative;\n        min-width: 100%;\n        font-weight: 500;\n        letter-spacing: -0.04em;\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n    .lyrics {\n      height: 1.5em;\n    }\n    .index {\n      height: 1.5em;\n      white-space: nowrap;\n      font-size: 10px;\n      text-align: center;\n    }\n  }\n  @media "," {\n    padding: 3px;\n  }\n"]);return x=function(){return n},n}let h=o.ZP.div.withConfig({displayName:"Phrase__StyledScorePhrase",componentId:"sc-34b41383-0"})(x(),p.v.primaryLine,n=>"".concat(n.$letterSpacing,"em")||0,n=>"".concat(n.$letterSpacing,"em")||0,p.v.hoverText,c.Uh.mobile);var f=function(n){let{phrase:e,letterSpacing:t}=n,i=(0,m.C)(n=>n.score),o=e.chordList||[],[a,c]=(0,s.useState)(""),[l,p]=(0,s.useState)(0),[x,f]=(0,s.useState)([]),g=(n,e)=>{c(n),p(e||0)},y=n=>{if(!n)return"";if(n.includes("/")){let e=n.split("/"),t=(0,u.yj)(e[0]),r=(0,u.yj)(e[1]),o=(0,u.Es)(t,-1*i.capo+i.computedKey),a=(0,u.Es)(r,-1*i.capo+i.computedKey);return n.replace(t,o).replace(r,a)}{let e=(0,u.yj)(n),t=(0,u.Es)(e,-1*i.capo+i.computedKey);return n.replace(e,t)}};return(0,s.useEffect)(()=>{var n;let t=[],i=(null===(n=e.lyrics)||void 0===n?void 0:n.split(""))||[],r=i.length,a=Math.max(...o.map(n=>n.position));for(let n=0;n<Math.max(r,a+1);n++){let e=o.find(e=>e.position===n);t.push({lyricsLetter:i[n],chordName:y(null==e?void 0:e.name),initIndex:(null==e?void 0:e.initIndex)||0})}f(t)},[i.capo]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{className:"score-phrase",$letterSpacing:t,children:x.map((n,e)=>(0,r.jsxs)("div",{className:"letter","data-letter-index":e,children:[(0,r.jsx)("div",{className:"chord",children:n.chordName&&(0,r.jsx)("button",{type:"button",onClick:()=>g(n.chordName,n.initIndex),children:(0,r.jsx)(Symbol.Z,{chordName:n.chordName,isAbbr:!0})},e)}),(0,r.jsx)("div",{className:"lyrics",children:n.lyricsLetter}),!1]},e))}),a&&(0,r.jsx)(d.Z,{chordName:a,closeChord:()=>{c(""),p(0)},initIndex:l})]})};function g(){let n=(0,i._)(["\n  display: grid;\n  row-gap: 30px;\n  font-size: 14px;\n  .notice {\n    margin-bottom: 0 !important;\n    font-size: 14px;\n    color: #f00;\n  }\n  .letter {\n    flex-basis: ",";\n    width: ",";\n  }\n  @media "," {\n    font-size: 12px;\n  }\n"]);return g=function(){return n},n}let y=o.ZP.article.withConfig({displayName:"Wrapper__StyledScoreWrapper",componentId:"sc-7aea6d9e-0"})(g(),n=>"".concat(n.$letterSpacing,"em")||0,n=>"".concat(n.$letterSpacing,"em")||0,c.Uh.mobile);var v=function(n){let{children:e,letterSpacing:t}=n;return(0,r.jsxs)(y,{$letterSpacing:t,children:[(0,r.jsx)("p",{className:"notice",children:"※ 코드를 클릭하면 코드표가 나옵니다."}),e]})},w=t(460),b=t(2975),j=t(7358),k=t(1396),N=t.n(k),S=t(354),C=t(5896);function I(){let n=(0,i._)(["\n  .score-header {\n    text-align: center;\n    margin-bottom: 60px;\n    .score-title {\n      font-weight: 700;\n      font-size: 30px;\n      margin-bottom: 12px;\n    }\n    .score-categories {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 12px;\n    }\n    .score-date {\n      margin-top: 12px;\n      color: #666;\n      font-size: 14px;\n    }\n    .score-meta {\n      margin-top: 30px;\n      display: flex;\n      justify-content: space-between;\n      font-size: 14px;\n      .score-capo {\n        display: flex;\n        align-items: center;\n        column-gap: 12px;\n        .controller {\n          display: flex;\n          align-items: center;\n          column-gap: 6px;\n          button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 24px;\n            height: 24px;\n            background-color: ",";\n            border: 1px solid ",";\n            &:hover {\n              background-color: ",";\n              background-color: ",";\n            }\n          }\n        }\n      }\n    }\n  }\n  .score-navigation {\n    margin-top: 30px;\n  }\n  .back-link {\n    &:first-child {\n      margin-bottom: 30px;\n    }\n    &:last-child {\n      margin-top: 60px;\n    }\n    a {\n      display: inline-flex;\n      align-items: center;\n      column-gap: 4px;\n      &:hover {\n        color: ",";\n        text-decoration: underline;\n        svg {\n          transform: translateX(-3px);\n        }\n      }\n    }\n  }\n  @media "," {\n    .score-header {\n      .score-title {\n        font-size: 24px;\n      }\n      .score-date {\n        font-size: 12px;\n      }\n      .score-categories {\n        gap: 8px;\n      }\n      .score-meta {\n        font-size: 12px;\n      }\n    }\n    .back-link {\n      &:first-child {\n        margin-bottom: 12px;\n      }\n      &:last-child {\n        margin-top: 48px;\n      }\n    }\n  }\n"]);return I=function(){return n},n}let _=o.ZP.div.withConfig({displayName:"Viewer__StyledScoreViewer",componentId:"sc-351ec6e-0"})(I(),p.v.primaryBg,p.v.primaryLine,p.v.secondaryBg,p.v.secondaryLine,p.v.hoverText,c.Uh.mobile);var E=function(n){let{scoreData:e}=n,[t,i]=(0,s.useState)([]),[o,c]=(0,s.useState)(!1),[d,p]=(0,s.useState)(0),u=(0,s.useRef)(null),x=(0,m.C)(n=>n.score),h=(0,m.T)(),g=e.computedKey||0,y=n=>{let e=x.capo+n;e>=-8&&e<=8&&h(w.IW.setCapo(e))};return(0,s.useEffect)(()=>{var n;let e=null===(n=u.current)||void 0===n?void 0:n.getElementsByTagName("img"),t=Array.from(e||[]),r=t.map((n,e)=>(n.addEventListener("click",()=>{p(e),c(!0)}),{key:e,src:n.src}));i(r)},[]),(0,s.useEffect)(()=>(h(w.IW.setCapo(e.capo)),h(w.IW.setComputedKey(g)),()=>{h(w.IW.setCapo(0)),h(w.IW.setComputedKey(0))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(_,{children:[(0,r.jsx)("div",{className:"back-link",children:(0,r.jsxs)(N(),{href:"/score",children:[(0,r.jsx)(S.A,{}),"목록으로"]})}),(0,r.jsxs)("header",{className:"score-header",children:[(0,r.jsx)("h1",{className:"score-title",children:e.title}),(0,r.jsx)("div",{className:"score-date",children:e.releaseYear}),(0,r.jsxs)("div",{className:"score-meta",children:[(0,r.jsxs)("div",{className:"score-capo",children:["Capo : ",x.capo,(0,r.jsxs)("div",{className:"controller",children:[(0,r.jsx)("button",{type:"button",onClick:()=>y(-1),children:(0,r.jsx)(j.b,{})}),(0,r.jsx)("button",{type:"button",onClick:()=>y(1),children:(0,r.jsx)(b.r,{})})]})]}),(0,r.jsx)("div",{className:"score-artist",children:e.artist})]})]}),(0,r.jsx)("div",{className:"score-content",ref:u,children:(0,r.jsx)(C.Z,{children:(0,r.jsx)(a.R,{...e.mdx,components:{ScoreWrapper:v,ScorePhrase:f}})})}),(0,r.jsx)("div",{className:"back-link",children:(0,r.jsxs)(N(),{href:"/score",children:[(0,r.jsx)(S.A,{}),"목록으로"]})})]}),o&&(0,r.jsx)(l.Z,{images:t,initActiveIndex:d,closeGallery:()=>{c(!1)}})]})}},1838:function(n,e,t){"use strict";t.d(e,{C:function(){return o},T:function(){return r}});var i=t(3198);let r=i.I0,o=i.v9},460:function(n,e,t){"use strict";t.d(e,{IW:function(){return o}});var i=t(663);let r=(0,i.oM)({name:"score",initialState:{capo:0,computedKey:0},reducers:{setCapo:(n,e)=>({...n,capo:e.payload}),setComputedKey:(n,e)=>({...n,computedKey:e.payload})}}),o=r.actions;e.ZP=r.reducer}},function(n){n.O(0,[433,396,198,872,663,896,877,971,472,744],function(){return n(n.s=3277)}),_N_E=n.O()}]);