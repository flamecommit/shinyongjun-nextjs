(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5491:function(n,t,e){"use strict";e.d(t,{w_:function(){return l}});var r=e(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),s=function(){return(s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},a=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>t.indexOf(r)&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e};function l(n){return function(t){return r.createElement(c,s({attr:s({},n.attr)},t),function n(t){return t&&t.map(function(t,e){return r.createElement(t.tag,s({key:e},t.attr),n(t.child))})}(n.child))}}function c(n){var t=function(t){var e,i=n.attr,o=n.size,l=n.title,c=a(n,["attr","size","title"]),d=o||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:e,style:s(s({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),n.children)};return void 0!==o?r.createElement(o.Consumer,null,function(n){return t(n)}):t(i)}},5138:function(n,t,e){var r=e(5491).w_;n.exports.p=function(n){return r({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(n)}},9941:function(n,t,e){Promise.resolve().then(e.bind(e,7493)),Promise.resolve().then(e.bind(e,7137))},7137:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(802),s=e(5138);function a(){let n=(0,r._)(["\n  margin-bottom: 36px;\n  display: flex;\n  align-items: center;\n  column-gap: 30px;\n  .avatar {\n    img {\n      width: 128px;\n      height: 128px;\n      border-radius: 50%;\n    }\n  }\n  .names-container {\n    .name {\n      font-size: 20px;\n      letter-spacing: -0.05em;\n    }\n    .bio {\n      color: #666;\n      font-size: 14px;\n      letter-spacing: -0.02em;\n    }\n    .links {\n      margin-top: 6px;\n      a {\n        font-size: 20px;\n        line-height: 1;\n      }\n    }\n  }\n"]);return a=function(){return n},n}let l=o.ZP.div.withConfig({displayName:"Profile__StyledAuthorProfile",componentId:"sc-ab25e760-0"})(a());t.default=function(){return(0,i.jsxs)(l,{children:[(0,i.jsx)("div",{className:"avatar",children:(0,i.jsx)("img",{src:"/images/author-avatar.jpg",alt:""})}),(0,i.jsxs)("div",{className:"names-container",children:[(0,i.jsx)("div",{className:"name",children:"신용준"}),(0,i.jsx)("div",{className:"bio",children:"Simplicity rules the world"}),(0,i.jsx)("div",{className:"links",children:(0,i.jsx)("a",{href:"https://github.com/shinyj1991",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(s.p,{style:{color:"#000000"}})})})]})]})}},1666:function(n,t,e){"use strict";var r=e(230),i=e(7437),o=e(1396),s=e.n(o),a=e(802);function l(){let n=(0,r._)(["\n  padding: 3px 12px;\n  background-color: #ddd;\n  color: #333;\n  font-size: 14px;\n  &:hover {\n    background-color: #333;\n    color: #ddd;\n  }\n"]);return l=function(){return n},n}let c=(0,a.ZP)(s()).withConfig({displayName:"Item__StyledCategoryItem",componentId:"sc-5e8e853a-0"})(l());t.Z=function(n){let{category:t}=n;return(0,i.jsx)(c,{href:"/category/".concat(t),children:t})}},7493:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(1396),s=e.n(o),a=e(802),l=e(8263),c=e(1666);function d(){let n=(0,r._)(["\n  display: grid;\n  .post-item {\n    padding: 30px 0;\n    border-bottom: 1px solid #dddddd;\n    &:first-child {\n      border-top: 1px solid #dddddd;\n    }\n    .title {\n      font-weight: 500;\n      font-size: 20px;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n    .date {\n      font-size: 13px;\n      margin-top: 6px;\n      color: #666;\n    }\n    .categories {\n      display: flex;\n      column-gap: 12px;\n      margin-top: 6px;\n    }\n  }\n"]);return d=function(){return n},n}let u=a.ZP.div.withConfig({displayName:"List__StyledPostList",componentId:"sc-18e0afa-0"})(d());t.default=function(n){let{postList:t}=n;return(0,i.jsx)(u,{children:t.map(n=>(0,i.jsxs)("div",{className:"post-item",children:[(0,i.jsx)(s(),{href:"/post/".concat(n.slug),className:"title",children:n.title}),(0,i.jsx)("div",{className:"date",children:(0,l.U)(n.date,"YYYY-MM-DD")}),(0,i.jsx)("div",{className:"categories",children:n.categories.map(n=>(0,i.jsx)(c.Z,{category:n},n))})]},n.slug))})}},8263:function(n,t,e){"use strict";e.d(t,{U:function(){return r}});let r=(n,t)=>{let e=n.toISOString(),r=t.includes("YYYY")?e.substring(0,4):e.substring(2,4),i=e.substring(5,7),o=e.substring(8,10),s=e.substring(11,13),a=e.substring(14,16),l=t.replace(/YYYY/g,r).replace(/YY/g,r).replace(/MM/g,i).replace(/DD/g,o).replace(/HH/g,s).replace(/mm/g,a);return l}}},function(n){n.O(0,[576,396,971,596,744],function(){return n(n.s=9941)}),_N_E=n.O()}]);