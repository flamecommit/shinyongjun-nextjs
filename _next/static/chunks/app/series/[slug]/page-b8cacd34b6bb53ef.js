(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{5155:function(n,t,e){var r=e(5491).w_;n.exports.R=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(n)}},5491:function(n,t,e){"use strict";e.d(t,{w_:function(){return s}});var r=e(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},l=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>t.indexOf(r)&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e};function s(n){return function(t){return r.createElement(c,a({attr:a({},n.attr)},t),function n(t){return t&&t.map(function(t,e){return r.createElement(t.tag,a({key:e},t.attr),n(t.child))})}(n.child))}}function c(n){var t=function(t){var e,i=n.attr,o=n.size,s=n.title,c=l(n,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:e,style:a(a({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),n.children)};return void 0!==o?r.createElement(o.Consumer,null,function(n){return t(n)}):t(i)}},9055:function(n,t,e){Promise.resolve().then(e.bind(e,6680)),Promise.resolve().then(e.bind(e,7493)),Promise.resolve().then(e.bind(e,5416))},1666:function(n,t,e){"use strict";var r=e(230),i=e(7437),o=e(1396),a=e.n(o),l=e(802),s=e(4241),c=e(3865);function u(){let n=(0,r._)(["\n  padding: 3px 12px;\n  background-color: ",";\n  border: 1px solid ",";\n  color: #000;\n  font-size: 14px;\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n  @media "," {\n    padding: 2px 8px;\n    font-size: 12px;\n  }\n"]);return u=function(){return n},n}let d=(0,l.ZP)(a()).withConfig({displayName:"Item__StyledCategoryItem",componentId:"sc-30df4718-0"})(u(),c.v.gray1,c.v.gray2,c.v.gray3,c.v.gray3,s.Uh.mobile);t.Z=function(n){let{category:t}=n;return(0,i.jsx)(d,{href:"/category/".concat(t),children:t})}},5416:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(802),a=e(1396),l=e.n(a),s=e(5155),c=e(4241);function u(){let n=(0,r._)(["\n  margin-bottom: 30px;\n  a {\n    display: inline-flex;\n    align-items: center;\n    column-gap: 4px;\n    &:hover {\n      text-decoration: underline;\n      svg {\n        transform: translateX(3px);\n      }\n    }\n  }\n  @media "," {\n    margin-bottom: 24px;\n  }\n"]);return u=function(){return n},n}let d=o.ZP.h2.withConfig({displayName:"Link__StyledPageLink",componentId:"sc-6faeccf7-0"})(u(),c.Uh.mobile);t.default=function(n){let{children:t,href:e}=n;return(0,i.jsx)(d,{className:"page-link",children:(0,i.jsxs)(l(),{href:e,children:[t," ",(0,i.jsx)(s.R,{})]})})}},6680:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(802),a=e(4241),l=e(2044),s=e.n(l);function c(){let n=(0,r._)(["\n  font-family: ",";\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 120%;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return c=function(){return n},n}let u=o.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-a1a2aca8-0"})(c(),s().style.fontFamily,a.Uh.mobile);t.default=function(n){let{children:t}=n;return(0,i.jsx)(u,{children:t})}},7493:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(1396),a=e.n(o),l=e(802),s=e(5098),c=e(4241),u=e(1666);function d(){let n=(0,r._)(["\n  display: grid;\n  .post-item {\n    padding: 30px 0;\n    border-bottom: 1px solid #dddddd;\n    &:first-child {\n      border-top: 1px solid #dddddd;\n    }\n    .title {\n      font-weight: 500;\n      font-size: 20px;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n    .date {\n      font-size: 14px;\n      margin-top: 6px;\n      color: #666;\n    }\n    .categories {\n      display: flex;\n      column-gap: 12px;\n      margin-top: 6px;\n    }\n  }\n  @media "," {\n    .post-item {\n      .series {\n        font-size: 14px;\n      }\n      .title {\n        font-size: 16px;\n      }\n      .date {\n        margin-top: 4px;\n        font-size: 12px;\n      }\n      .categories {\n        margin-top: 4px;\n        column-gap: 8px;\n      }\n    }\n  }\n"]);return d=function(){return n},n}let p=l.ZP.div.withConfig({displayName:"List__StyledPostList",componentId:"sc-30ac11be-0"})(d(),c.Uh.mobile);t.default=function(n){let{postList:t}=n;return(0,i.jsx)(p,{children:t.map(n=>(0,i.jsxs)("div",{className:"post-item",children:[n.series&&(0,i.jsxs)("div",{className:"series",children:["# ",n.series]}),(0,i.jsx)(a(),{href:"/post/".concat(n.slug),className:"title",children:n.title}),(0,i.jsx)("div",{className:"date",children:(0,s.U)(n.date,"YYYY-MM-DD")}),(0,i.jsx)("div",{className:"categories",children:n.categories.map(n=>(0,i.jsx)(u.Z,{category:n},n))})]},n.slug))})}},3865:function(n,t,e){"use strict";e.d(t,{v:function(){return r}});let r={gray1:"#f6f8fa",gray2:"#d0d7de",gray3:"#CCD2E3",boxShadow1:"0px 0px 5px 0px rgba(0, 0, 0, 0.4)"}},4241:function(n,t,e){"use strict";e.d(t,{LH:function(){return s},Uh:function(){return c},mc:function(){return l}});var r=e(230),i=e(802);function o(){let n=(0,r._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return n},n}function a(){let n=(0,r._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return a=function(){return n},n}let l=(0,i.iv)(o()),s=n=>(0,i.iv)(a(),n),c={mobile:"(max-width: 768px)"}},5098:function(n,t,e){"use strict";e.d(t,{G:function(){return i},U:function(){return r}});let r=(n,t)=>{let e=n.toISOString(),r=t.includes("YYYY")?e.substring(0,4):e.substring(2,4),i=e.substring(5,7),o=e.substring(8,10),a=e.substring(11,13),l=e.substring(14,16),s=t.replace(/YYYY/g,r).replace(/YY/g,r).replace(/MM/g,i).replace(/DD/g,o).replace(/HH/g,a).replace(/mm/g,l);return s},i=(n,t)=>{let e=new Date(n,t,0,9,0,0).getDate(),i=[];for(let o=1;o<=e;o++){let e=new Date(n,t-1,o,12,0,0),a=r(e,"YYYY-MM-DD"),l=e.getDate(),s=e.getDay();i.push({ISO:a,date:l,day:s})}return i}},2044:function(n){n.exports={style:{fontFamily:"'__Roboto_a41c52', '__Roboto_Fallback_a41c52', system-ui",fontStyle:"normal"},className:"__className_a41c52"}}},function(n){n.O(0,[576,396,971,596,744],function(){return n(n.s=9055)}),_N_E=n.O()}]);