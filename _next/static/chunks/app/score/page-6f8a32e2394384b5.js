(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[994],{1204:function(t,n,e){var r=e(5491).w_;t.exports.s=function(t){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M406.3 48.2c-4.7.9-202 39.2-206.2 40-4.2.8-8.1 3.6-8.1 8v240.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 31.1 22.4 45.1 41.7 47.5 2.1.3 4.5.7 7.1.7 6.7 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V190.5c0-3.8 2.7-7.1 6.4-7.8l152-30.7c5-1 9.6 2.8 9.6 7.8v130.9c0 4.1-.2 8.9-2.5 13.4-3.1 5.9-8.5 10.2-16.2 12.7-3.3 1.1-8.8 2.1-14.1 3.3-24.1 5.4-64.4 14.5-64.4 51.7 0 33.7 25.4 47.2 41.8 48.3 6.5.4 11.2.3 19.4-.9s23.5-5.5 36.5-13c17.9-10.3 27.5-26.8 27.5-48.2V55.9c-.1-4.4-3.8-8.9-9.8-7.7z"}}]})(t)}},5491:function(t,n,e){"use strict";e.d(n,{w_:function(){return a}});var r=e(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),l=function(){return(l=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)},c=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>n.indexOf(r)&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>n.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]]);return e};function a(t){return function(n){return r.createElement(s,l({attr:l({},t.attr)},n),function t(n){return n&&n.map(function(n,e){return r.createElement(n.tag,l({key:e},n.attr),t(n.child))})}(t.child))}}function s(t){var n=function(n){var e,i=t.attr,o=t.size,a=t.title,s=c(t,["attr","size","title"]),u=o||n.size||"1em";return n.className&&(e=n.className),t.className&&(e=(e?e+" ":"")+t.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:e,style:l(l({color:t.color||n.color},n.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),t.children)};return void 0!==o?r.createElement(o.Consumer,null,function(t){return n(t)}):n(i)}},9329:function(t,n,e){Promise.resolve().then(e.bind(e,6680)),Promise.resolve().then(e.bind(e,3659))},6680:function(t,n,e){"use strict";e.r(n);var r=e(230),i=e(7437),o=e(802),l=e(4241);function c(){let t=(0,r._)(["\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 30px;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return c=function(){return t},t}let a=o.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-2aa0d838-0"})(c(),l.Uh.mobile);n.default=function(t){let{children:n}=t;return(0,i.jsx)(a,{children:n})}},3659:function(t,n,e){"use strict";e.r(n);var r=e(230),i=e(7437),o=e(1396),l=e.n(o),c=e(802),a=e(1204),s=e(4241);function u(){let t=(0,r._)(["\n  display: grid;\n  row-gap: 24px;\n  .score-item {\n    .title {\n      display: flex;\n      align-items: center;\n      column-gap: 6px;\n      font-weight: 500;\n      font-size: 20px;\n      &:hover {\n        color: #1f883d;\n      }\n    }\n  }\n  @media "," {\n    .score-item {\n      .title {\n        font-size: 16px;\n      }\n    }\n  }\n"]);return u=function(){return t},t}let f=c.ZP.div.withConfig({displayName:"List__StyledScoreList",componentId:"sc-b454822b-0"})(u(),s.Uh.mobile);n.default=function(t){let{scoreList:n}=t;return(0,i.jsx)(f,{children:n.map(t=>(0,i.jsx)("div",{className:"score-item",children:(0,i.jsxs)(l(),{href:"/score/".concat(t.slug),className:"title",children:[(0,i.jsx)(a.s,{}),t.artist," - ",t.title]})},t.slug))})}},4241:function(t,n,e){"use strict";e.d(n,{LH:function(){return a},Uh:function(){return s},mc:function(){return c}});var r=e(230),i=e(802);function o(){let t=(0,r._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return t},t}function l(){let t=(0,r._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return l=function(){return t},t}let c=(0,i.iv)(o()),a=t=>(0,i.iv)(l(),t),s={mobile:"(max-width: 768px)"}}},function(t){t.O(0,[576,396,971,596,744],function(){return t(t.s=9329)}),_N_E=t.O()}]);