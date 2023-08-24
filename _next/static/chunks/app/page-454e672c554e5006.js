(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{372:function(n,e,t){Promise.resolve().then(t.bind(t,7493)),Promise.resolve().then(t.bind(t,6680))},1666:function(n,e,t){"use strict";var i=t(230),r=t(7437),o=t(1396),s=t.n(o),a=t(802),c=t(4241),l=t(3865);function d(){let n=(0,i._)(["\n  padding: 3px 12px;\n  background-color: ",";\n  border: 1px solid ",";\n  color: #000;\n  font-size: 14px;\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n  @media "," {\n    padding: 2px 8px;\n    font-size: 12px;\n  }\n"]);return d=function(){return n},n}let p=(0,a.ZP)(s()).withConfig({displayName:"Item__StyledCategoryItem",componentId:"sc-fe8106b-0"})(d(),l.v.primaryBg,l.v.primaryLine,l.v.secondaryBg,l.v.secondaryLine,c.Uh.mobile);e.Z=function(n){let{board:e,category:t}=n;return(0,r.jsx)(p,{href:"/category/".concat(e,"/").concat(t),children:t})}},6680:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),o=t(802),s=t(4241),a=t(5760),c=t.n(a);function l(){let n=(0,i._)(["\n  font-family: ",";\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 120%;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return l=function(){return n},n}let d=o.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-a1a2aca8-0"})(l(),c().style.fontFamily,s.Uh.mobile);e.default=function(n){let{children:e}=n;return(0,r.jsx)(d,{children:e})}},7493:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),o=t(1396),s=t.n(o),a=t(802),c=t(5098),l=t(4241),d=t(1666),p=t(3865);function u(){let n=(0,i._)(["\n  display: grid;\n  .post-item {\n    padding: 30px 0;\n    border-bottom: 1px solid #dddddd;\n    &:first-child {\n      border-top: 1px solid #dddddd;\n    }\n    .title {\n      font-weight: 500;\n      font-size: 20px;\n      &:hover {\n        text-decoration: underline;\n        color: ",";\n      }\n    }\n    .date {\n      font-size: 14px;\n      margin-top: 6px;\n      color: ",";\n    }\n    .categories {\n      display: flex;\n      column-gap: 12px;\n      margin-top: 6px;\n    }\n  }\n  @media "," {\n    .post-item {\n      padding: 24px 0;\n      .series {\n        font-size: 14px;\n      }\n      .title {\n        font-size: 16px;\n      }\n      .date {\n        margin-top: 4px;\n        font-size: 12px;\n      }\n      .categories {\n        margin-top: 4px;\n        column-gap: 8px;\n      }\n    }\n  }\n"]);return u=function(){return n},n}let f=a.ZP.div.withConfig({displayName:"List__StyledPostList",componentId:"sc-dd7313f8-0"})(u(),p.v.hoverText,p.v.secondaryText,l.Uh.mobile);e.default=function(n){let{postList:e}=n;return(0,r.jsx)(f,{children:e.map(n=>(0,r.jsxs)("div",{className:"post-item",children:[n.series&&(0,r.jsxs)("div",{className:"series",children:["# ",n.series]}),(0,r.jsx)(s(),{href:"/post/".concat(n.slug),className:"title",children:n.title}),(0,r.jsx)("div",{className:"date",children:(0,c.U)(n.date,"YYYY-MM-DD")}),(0,r.jsx)("div",{className:"categories",children:n.categories.map(n=>(0,r.jsx)(d.Z,{category:n,board:"post"},n))})]},n.slug))})}},3865:function(n,e,t){"use strict";t.d(e,{v:function(){return i}});let i={primaryBg:"#f6f8fa",primaryLine:"#d0d7de",secondaryBg:"#E6E1F2",secondaryLine:"#c6c1e1",primaryText:"#000000",secondaryText:"#777777",hoverText:"#7d4e9f",boxShadow1:"0px 2px 4px rgba(0, 0, 0, 0.1)"}},4241:function(n,e,t){"use strict";t.d(e,{LH:function(){return c},Uh:function(){return l},mc:function(){return a}});var i=t(230),r=t(802);function o(){let n=(0,i._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return n},n}function s(){let n=(0,i._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return s=function(){return n},n}let a=(0,r.iv)(o()),c=n=>(0,r.iv)(s(),n),l={mobile:"(max-width: 768px)"}},5098:function(n,e,t){"use strict";t.d(e,{U:function(){return i}});let i=(n,e)=>{let t=n.toISOString(),i=e.includes("YYYY")?t.substring(0,4):t.substring(2,4),r=t.substring(5,7),o=t.substring(8,10),s=t.substring(11,13),a=t.substring(14,16),c=e.replace(/YYYY/g,i).replace(/YY/g,i).replace(/MM/g,r).replace(/DD/g,o).replace(/HH/g,s).replace(/mm/g,a);return c}},5760:function(n){n.exports={style:{fontFamily:"'__Roboto_979022', '__Roboto_Fallback_979022'",fontStyle:"normal"},className:"__className_979022"}}},function(n){n.O(0,[576,396,971,596,744],function(){return n(n.s=372)}),_N_E=n.O()}]);