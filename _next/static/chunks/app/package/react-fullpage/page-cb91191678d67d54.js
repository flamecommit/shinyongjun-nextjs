(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{8257:function(e,n,t){Promise.resolve().then(t.bind(t,2748))},2748:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var i=t(230),r=t(7437),c=t(802),o=t(2265);t(7360);var a=function(e){var n=e.children;return o.createElement("div",{className:"react-fullpage__wrapper"},n)},l=function(e){var n=(0,o.useRef)();return(0,o.useEffect)(function(){n.current=e},[e]),n.current},u=function(e){var n=e.children,t=e.activeIndex,i=e.setActiveIndex,r=e.onBeforeChange,c=e.onAfterChange,u=(0,o.useState)(0),s=u[0],d=u[1],f=(0,o.useRef)(null),h=(0,o.useState)(!1),v=h[0],m=h[1],p=l(t),g=(0,o.useState)(0),x=g[0],b=g[1],E=(0,o.useState)(!1),w=E[0],_=E[1],y=(0,o.useCallback)(function(){r&&r(p,t)},[r,t]),k=(0,o.useCallback)(function(){c&&c(p,t)},[c,t]);return(0,o.useEffect)(function(){if(v){y();var e=setTimeout(function(){m(!1),k()},700);return function(){return clearTimeout(e)}}},[v,y,k]),(0,o.useEffect)(function(){var e=0;t<0&&i(0),x&&t>x-1&&i(x-1);for(var n=0;n<=t;n+=1)if(null!==f&&f.current){var r=f.current.children[n];r&&n>0&&(e+=r.clientHeight||0)}d(e)},[t,i,f,w,x]),(0,o.useEffect)(function(){null!==f&&f.current&&b(f.current.childElementCount)},[f,w]),(0,o.useEffect)(function(){return document.documentElement.classList.add("react-fullpage__html"),_(!0),function(){document.documentElement.classList.remove("react-fullpage__html"),_(!1)}},[]),o.createElement(a,null,o.createElement("div",{className:"react-fullpage__container",style:{transform:"translate3d(0px, -".concat(s,"px, 0px)")},ref:f,"data-is-animating":v},w&&o.Children.map(n,function(e,n){return o.cloneElement(e,{index:n,activeIndex:t,sectionCount:x,isAnimating:v,setIsAnimating:m,setActiveIndex:i})})))},s=function(e,n){var t=Math.atan2(n,e)*(180/Math.PI);return t>=-45&&t<=45?"RIGHT":t>=45&&t<=135?"DOWN":t>=-135&&t<=-45?"UP":"LEFT"},d=function(e,n){var t=n.onSwipeStart,i=n.onSwipeEnd;(0,o.useEffect)(function(){var n,r,c,o,a=!1,l=function(i){e.current&&i.touches[0]&&(n=i.touches[0].clientX,r=i.touches[0].clientY,a=!0,t&&t())},u=function(t){if(a&&e.current&&t.touches[0]){c=t.touches[0].clientX,o=t.touches[0].clientY;var l=c-n,u=o-r;if(Math.abs(l)>30||Math.abs(u)>30){var d=s(l,u);i&&i(d),a=!1}}},d=function(){a=!1},f=e.current;return null==f||f.addEventListener("touchstart",l),null==f||f.addEventListener("touchmove",u),null==f||f.addEventListener("touchend",d),function(){null==f||f.removeEventListener("touchstart",l),null==f||f.removeEventListener("touchmove",u),null==f||f.removeEventListener("touchend",d)}},[e,t,i])},f=function(e){var n=e.children;return o.createElement("div",{className:"react-fullpage__contents"},n)},h=function(e){var n=(0,o.useState)(!1),t=n[0],i=n[1],r=function(){i(!0)},c=function(){i(!1)};return(0,o.useEffect)(function(){var n="current"in e?e.current:e;if(n)return n.addEventListener("mousedown",r),document.addEventListener("mouseup",c),function(){n.removeEventListener("mousedown",r),document.removeEventListener("mouseup",c)}},[e]),t},v=function(){var e=(0,o.useState)({x:0,y:0}),n=e[0],t=e[1],i=function(e){t({x:e.clientX,y:e.clientY})};return(0,o.useEffect)(function(){return document.addEventListener("mousemove",i),function(){document.removeEventListener("mousemove",i)}},[]),n},m=function(e){var n,t,i,r,c=e.scrollHeight,a=e.scrollY,l=e.section,u=(0,o.useRef)(null),s=v().y,d=h(u),f=(0,o.useState)(0),m=f[0],p=f[1],g=(0,o.useState)(0),x=g[0],b=g[1],E=(n="object"==typeof window,i=(t=(0,o.useState)({width:n?window.innerWidth:0,height:n?window.innerHeight:0}))[0],r=t[1],(0,o.useEffect)(function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[n]),i).height,w=(0,o.useState)(0),_=w[0],y=w[1],k=(0,o.useState)(0),S=k[0],N=k[1];return(0,o.useEffect)(function(){b((100-E/c*100)*(a/(c-E))),p(E/c*100)},[E,c,a]),(0,o.useEffect)(function(){var e;d?(y(s),N(a)):null===(e=window.getSelection())||void 0===e||e.removeAllRanges()},[d]),(0,o.useEffect)(function(){if(d){var e=(s-_)/E*c+S;l.current&&l.current.scrollTo(0,e)}},[s,_,E,c,S,d,l]),o.createElement("div",{className:"react-fullpage__scrollbar",style:{height:"".concat(c,"px")}},o.createElement("div",{className:"react-fullpage__scrollbar__sticker",style:{height:"".concat(E,"px")}},o.createElement("div",{className:"react-fullpage__scrollbar__container",style:{height:"".concat(E,"px")}},o.createElement("button",{type:"button",ref:u,className:"react-fullpage__scrollbar__handler ".concat(d&&"is-pressed"),style:{top:"".concat(x,"%"),height:"".concat(m,"%")},"data-is-pressed":d}))))},p=function(){var e=(0,o.useState)(""),n=e[0],t=e[1];return(0,o.useEffect)(function(){var e=function(){t(window.location.hash.substring(1))};return e(),window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}},[]),{hashValue:n,updateHash:function(e){e?(window.location.hash=e,t(e)):(window.history.replaceState(null,document.title,window.location.pathname),t(""))}}},g=function(e){var n,t,i,r=e.children,c=e.isAutoHeight,a=e.activeIndex,l=e.sectionCount,u=e.isAnimating,s=void 0!==u&&u,h=e.setActiveIndex,v=e.setIsAnimating,g=e.name,x=void 0===g?"":g,b=e.index,E=void 0===b?0:b,w=(0,o.useRef)(null),_=(t=(n=(0,o.useState)({scrollX:0,scrollY:0,isAtTop:!0,isAtBottom:!1,hasScrollbar:!1,scrollHeight:0}))[0],i=n[1],(0,o.useEffect)(function(){var e=w.current;function n(){var n=e?e.scrollHeight:0,t=e?e.scrollTop:0,r=e?e.clientHeight:0;i({scrollX:(null==e?void 0:e.scrollLeft)||0,scrollY:(null==e?void 0:e.scrollTop)||0,isAtTop:t<=0,isAtBottom:n-t<=r+1,hasScrollbar:n>r,scrollHeight:n})}return e&&(n(),e.addEventListener("scroll",n)),function(){e&&e.removeEventListener("scroll",n)}},[w]),t),y=_.isAtTop,k=_.isAtBottom,S=_.hasScrollbar,N=_.scrollHeight,j=_.scrollY,L=(0,o.useState)(!1),A=L[0],H=L[1],T=p(),C=T.hashValue,I=T.updateHash;(0,o.useEffect)(function(){C&&C===x&&(void 0!==h&&h(E),I())},[C,h,E,x,I]),(0,o.useEffect)(function(){H(y||k)},[y,k]),(0,o.useEffect)(function(){if(A){var e=setTimeout(function(){H(!1)},300);return function(){return clearTimeout(e)}}},[A]);var Y=function(e){void 0!==v&&void 0!==h&&(s||A||(v(!0),h(e)))},P=function(){void 0===a||void 0===l||a>=l-1||S&&!k||Y(a+1)},R=function(){void 0===a||a<=0||S&&!y||Y(a-1)};return d(w,{onSwipeEnd:function(e){"UP"===e&&P(),"DOWN"===e&&R()}}),o.createElement("div",{ref:w,onWheel:function(e){e.deltaY>0&&P(),e.deltaY<0&&R()},className:"react-fullpage__section",style:{overflowY:"".concat(s?"hidden":"auto"),height:"".concat(void 0!==c&&c?"auto":"100%")}},o.createElement(f,null,r),S&&!s&&o.createElement(m,{scrollHeight:N,scrollY:j,section:w}))},x=t(8462);function b(){let e=(0,i._)(["\n  .section {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.first {\n      background-color: #ebd573;\n    }\n    &.second {\n      background-color: #a2ebbd;\n    }\n    &.third {\n      background-color: #ebda8a;\n    }\n    &.footer {\n      height: 200px;\n      background-color: #7374eb;\n    }\n  }\n  .fullpage-controller {\n    display: grid;\n    row-gap: 6px;\n    position: absolute;\n    top: 50%;\n    right: 50px;\n    transform: translateY(-50%);\n    button {\n      display: block;\n      font-size: 0;\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      background-color: #7d4e9f;\n      opacity: 0.3;\n      &.active {\n        opacity: 1;\n      }\n    }\n  }\n"]);return b=function(){return e},e}let E=c.ZP.div.withConfig({displayName:"Example__StyledPackageReactFullpageExample",componentId:"sc-4406776-0"})(b());var w=function(){let[e,n]=(0,o.useState)(0);return(0,r.jsxs)(E,{children:[(0,r.jsx)(x.default,{}),(0,r.jsxs)(u,{activeIndex:e,setActiveIndex:n,children:[(0,r.jsx)(g,{children:(0,r.jsx)("div",{className:"section first",children:"Welcome @shinyongjun/react-fullpage"})}),(0,r.jsx)(g,{children:(0,r.jsx)("div",{className:"section second",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"HasScroll"}),Array(100).fill(1).map((e,n)=>(0,r.jsx)("div",{children:"↓"},n))]})})}),(0,r.jsx)(g,{children:(0,r.jsx)("div",{className:"section third",children:"Third Section"})}),(0,r.jsx)(g,{isAutoHeight:!0,children:(0,r.jsx)("div",{className:"section footer",children:"Footer Section"})})]}),(0,r.jsxs)("div",{className:"fullpage-controller",children:[(0,r.jsx)("button",{type:"button",className:"".concat(0===e?"active":""),onClick:()=>n(0),children:"1"}),(0,r.jsx)("button",{type:"button",className:"".concat(1===e?"active":""),onClick:()=>n(1),children:"2"}),(0,r.jsx)("button",{type:"button",className:"".concat(2===e?"active":""),onClick:()=>n(2),children:"3"})]})]})}},8462:function(e,n,t){"use strict";t.r(n);var i=t(230),r=t(7437),c=t(4033),o=t(802),a=t(1396),l=t.n(a),u=t(4241),s=t(3865);function d(){let e=(0,i._)(["\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  column-gap: 12px;\n  height: 60px;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: ",";\n  overflow-x: auto;\n  .gnb {\n    display: flex;\n    column-gap: 30px;\n    align-items: center;\n    .symbol {\n      width: 27px;\n      height: 27px;\n    }\n    a {\n      &:hover {\n        color: ",";\n      }\n      &.active {\n        font-weight: 700;\n        color: ",";\n      }\n    }\n  }\n  @media "," {\n    height: 48px;\n  }\n"]);return d=function(){return e},e}let f=o.ZP.header.withConfig({displayName:"Header__StyledPackageReactFullpageHeader",componentId:"sc-9917b85f-0"})(d(),s.v.boxShadow1,s.v.hoverText,s.v.hoverText,u.Uh.mobile);n.default=function(){let e=(0,c.usePathname)();return(0,r.jsx)(f,{children:(0,r.jsxs)("div",{className:"gnb",children:[(0,r.jsx)(l(),{className:"".concat("/package/react-fullpage/document"===e&&"active"),href:"/package/react-fullpage/document",children:"API"}),(0,r.jsx)(l(),{className:"".concat("/package/react-fullpage"===e&&"active"),href:"/package/react-fullpage",children:"DEMO"})]})})}},3865:function(e,n,t){"use strict";t.d(n,{v:function(){return i}});let i={primaryBg:"#f6f8fa",primaryLine:"#d0d7de",secondaryBg:"#E6E1F2",secondaryLine:"#c6c1e1",primaryText:"#000000",secondaryText:"#777777",hoverText:"#7d4e9f",boxShadow1:"0px 2px 4px rgba(0, 0, 0, 0.1)"}},4241:function(e,n,t){"use strict";t.d(n,{LH:function(){return l},Uh:function(){return u},mc:function(){return a}});var i=t(230),r=t(802);function c(){let e=(0,i._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return c=function(){return e},e}function o(){let e=(0,i._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return o=function(){return e},e}let a=(0,r.iv)(c()),l=e=>(0,r.iv)(o(),e),u={mobile:"(max-width: 768px)"}},7360:function(){},4033:function(e,n,t){e.exports=t(8165)}},function(e){e.O(0,[576,396,971,596,744],function(){return e(e.s=8257)}),_N_E=e.O()}]);