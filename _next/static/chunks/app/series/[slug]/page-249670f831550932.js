(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{5155:function(n,e,t){var r=t(5491).w_;n.exports.R=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(n)}},5491:function(n,e,t){"use strict";t.d(e,{w_:function(){return s}});var r=t(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},l=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>e.indexOf(r)&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)0>e.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t};function s(n){return function(e){return r.createElement(c,a({attr:a({},n.attr)},e),function n(e){return e&&e.map(function(e,t){return r.createElement(e.tag,a({key:t},e.attr),n(e.child))})}(n.child))}}function c(n){var e=function(e){var t,i=n.attr,o=n.size,s=n.title,c=l(n,["attr","size","title"]),u=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),n.children)};return void 0!==o?r.createElement(o.Consumer,null,function(n){return e(n)}):e(i)}},8456:function(n,e,t){Promise.resolve().then(t.bind(t,6680)),Promise.resolve().then(t.bind(t,5416)),Promise.resolve().then(t.bind(t,7493))},1666:function(n,e,t){"use strict";var r=t(230),i=t(7437),o=t(1396),a=t.n(o),l=t(802),s=t(4241),c=t(3865);function u(){let n=(0,r._)(["\n  padding: 3px 12px;\n  background-color: ",";\n  border: 1px solid ",";\n  color: #000;\n  font-size: 14px;\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n  @media "," {\n    padding: 2px 8px;\n    font-size: 12px;\n  }\n"]);return u=function(){return n},n}let d=(0,l.ZP)(a()).withConfig({displayName:"Item__StyledCategoryItem",componentId:"sc-fe8106b-0"})(u(),c.v.primaryBg,c.v.primaryLine,c.v.secondaryBg,c.v.secondaryLine,s.Uh.mobile);e.Z=function(n){let{board:e,category:t}=n;return(0,i.jsx)(d,{href:"/category/".concat(e,"/").concat(t),children:t})}},5416:function(n,e,t){"use strict";t.r(e);var r=t(230),i=t(7437),o=t(802),a=t(1396),l=t.n(a),s=t(5155),c=t(4241),u=t(3865);function d(){let n=(0,r._)(["\n  margin-bottom: 30px;\n  a {\n    display: inline-flex;\n    align-items: center;\n    column-gap: 4px;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n      svg {\n        transform: translateX(3px);\n      }\n    }\n  }\n  @media "," {\n    margin-bottom: 24px;\n  }\n"]);return d=function(){return n},n}let p=o.ZP.div.withConfig({displayName:"Link__StyledPageLink",componentId:"sc-e156345a-0"})(d(),u.v.hoverText,c.Uh.mobile);e.default=function(n){let{children:e,href:t}=n;return(0,i.jsx)(p,{className:"page-link",children:(0,i.jsxs)(l(),{href:t,children:[e," ",(0,i.jsx)(s.R,{})]})})}},6680:function(n,e,t){"use strict";t.r(e);var r=t(230),i=t(7437),o=t(802),a=t(4241),l=t(5760),s=t.n(l);function c(){let n=(0,r._)(["\n  font-family: ",";\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 120%;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return c=function(){return n},n}let u=o.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-a1a2aca8-0"})(c(),s().style.fontFamily,a.Uh.mobile);e.default=function(n){let{children:e}=n;return(0,i.jsx)(u,{children:e})}},7493:function(n,e,t){"use strict";t.r(e);var r=t(230),i=t(7437),o=t(1396),a=t.n(o),l=t(802),s=t(5098),c=t(4241),u=t(1666),d=t(3865);function p(){let n=(0,r._)(["\n  display: grid;\n  .post-item {\n    padding: 30px 0;\n    border-bottom: 1px solid #dddddd;\n    &:first-child {\n      border-top: 1px solid #dddddd;\n    }\n    .title {\n      font-weight: 500;\n      font-size: 20px;\n      &:hover {\n        text-decoration: underline;\n        color: ",";\n      }\n    }\n    .date {\n      font-size: 14px;\n      margin-top: 6px;\n      color: ",";\n    }\n    .categories {\n      display: flex;\n      column-gap: 12px;\n      margin-top: 6px;\n    }\n  }\n  @media "," {\n    .post-item {\n      padding: 24px 0;\n      .series {\n        font-size: 14px;\n      }\n      .title {\n        font-size: 16px;\n      }\n      .date {\n        margin-top: 4px;\n        font-size: 12px;\n      }\n      .categories {\n        margin-top: 4px;\n        column-gap: 8px;\n      }\n    }\n  }\n"]);return p=function(){return n},n}let f=l.ZP.div.withConfig({displayName:"List__StyledPostList",componentId:"sc-dd7313f8-0"})(p(),d.v.hoverText,d.v.secondaryText,c.Uh.mobile);e.default=function(n){let{postList:e}=n;return(0,i.jsx)(f,{children:e.map(n=>(0,i.jsxs)("div",{className:"post-item",children:[n.series&&(0,i.jsxs)("div",{className:"series",children:["# ",n.series]}),(0,i.jsx)(a(),{href:"/post/".concat(n.slug),className:"title",children:n.title}),(0,i.jsx)("div",{className:"date",children:(0,s.U)(n.date,"YYYY-MM-DD")}),(0,i.jsx)("div",{className:"categories",children:n.categories.map(n=>(0,i.jsx)(u.Z,{category:n,board:"post"},n))})]},n.slug))})}},3865:function(n,e,t){"use strict";t.d(e,{v:function(){return r}});let r={primaryBg:"#f6f8fa",primaryLine:"#d0d7de",secondaryBg:"#E6E1F2",secondaryLine:"#c6c1e1",primaryText:"#000000",secondaryText:"#777777",hoverText:"#7A6FB4",boxShadow1:"0px 2px 4px rgba(0, 0, 0, 0.1)"}},4241:function(n,e,t){"use strict";t.d(e,{LH:function(){return s},Uh:function(){return c},mc:function(){return l}});var r=t(230),i=t(802);function o(){let n=(0,r._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return n},n}function a(){let n=(0,r._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return a=function(){return n},n}let l=(0,i.iv)(o()),s=n=>(0,i.iv)(a(),n),c={mobile:"(max-width: 768px)"}},5098:function(n,e,t){"use strict";t.d(e,{G:function(){return i},U:function(){return r}});let r=(n,e)=>{let t=n.toISOString(),r=e.includes("YYYY")?t.substring(0,4):t.substring(2,4),i=t.substring(5,7),o=t.substring(8,10),a=t.substring(11,13),l=t.substring(14,16),s=e.replace(/YYYY/g,r).replace(/YY/g,r).replace(/MM/g,i).replace(/DD/g,o).replace(/HH/g,a).replace(/mm/g,l);return s},i=(n,e)=>{let t=new Date(n,e,0,9,0,0).getDate(),i=[];for(let o=1;o<=t;o++){let t=new Date(n,e-1,o,12,0,0),a=r(t,"YYYY-MM-DD"),l=t.getDate(),s=t.getDay();i.push({ISO:a,date:l,day:s})}return i}},5760:function(n){n.exports={style:{fontFamily:"'__Roboto_979022', '__Roboto_Fallback_979022'",fontStyle:"normal"},className:"__className_979022"}}},function(n){n.O(0,[576,396,971,596,744],function(){return n(n.s=8456)}),_N_E=n.O()}]);