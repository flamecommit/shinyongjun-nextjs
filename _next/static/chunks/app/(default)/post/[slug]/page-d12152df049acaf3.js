(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{2345:function(n,e,t){Promise.resolve().then(t.bind(t,2791)),Promise.resolve().then(t.bind(t,2635)),Promise.resolve().then(t.bind(t,1601)),Promise.resolve().then(t.bind(t,6637))},1601:function(n,e,t){"use strict";t.r(e);var i=t(230),s=t(7437),r=t(1806),o=t(1396),a=t.n(o),l=t(814),c=t(5343);function d(){let n=(0,i._)(["\n  display: flex;\n  column-gap: 12px;\n  margin-top: 120px;\n  > div {\n    flex-grow: 1;\n    flex-basis: 100%;\n    a {\n      display: block;\n      border-radius: 6px;\n      background-color: ",";\n      padding: 18px 24px;\n      border: 1px solid ",";\n      &:hover {\n        background-color: ",";\n        border-color: ",";\n      }\n      .direction {\n        font-size: 14px;\n      }\n      .title {\n        font-weight: 500;\n        margin-top: 6px;\n        ","\n      }\n    }\n    &.next-post {\n      text-align: right;\n      .title {\n        direction: rtl;\n      }\n    }\n  }\n  @media "," {\n    display: grid;\n    > div {\n      &:not(:first-child) {\n        a {\n          margin-top: 12px;\n        }\n      }\n      a {\n        padding: 12px 18px;\n        .direction {\n          font-size: 12px;\n        }\n        .title {\n          margin-top: 2px;\n        }\n      }\n    }\n  }\n"]);return d=function(){return n},n}let p=r.ZP.nav.withConfig({displayName:"Navigation__StyledPostNavigation",componentId:"sc-27851179-0"})(d(),c.v.primaryBg,c.v.primaryLine,c.v.secondaryBg,c.v.secondaryLine,(0,l.LH)(1),l.Uh.mobile);e.default=function(n){let{nextPost:e,prevPost:t}=n;return(0,s.jsxs)(p,{children:[(0,s.jsx)("div",{className:"prev-post",children:t&&(0,s.jsxs)(a(),{href:"/post/".concat(t.slug),children:[(0,s.jsx)("div",{className:"direction",children:"이전 글"}),(0,s.jsx)("div",{className:"title",children:t.title})]})}),(0,s.jsx)("div",{className:"next-post",children:e&&(0,s.jsxs)(a(),{href:"/post/".concat(e.slug),children:[(0,s.jsx)("div",{className:"direction",children:"다음 글"}),(0,s.jsx)("div",{className:"title",children:e.title})]})})]})}},6637:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var i=t(230),s=t(7437),r=t(1806),o=t(6442),a=t(2265),l=t(1396),c=t.n(l),d=t(1415),p=t(814),x=t(2066),h=t(9979),f=t(5343),m=t(5896),u=function(n){let{children:e,href:t}=n;return(0,s.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:e})};function g(){let n=(0,i._)(["\n  .post-header {\n    text-align: center;\n    margin-bottom: 60px;\n    .post-series {\n      color: ",";\n      a {\n        &:hover {\n          text-decoration: underline;\n          color: ",";\n        }\n      }\n    }\n    .post-title {\n      font-weight: 700;\n      font-size: 30px;\n      margin-bottom: 12px;\n    }\n    .post-categories {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 12px;\n    }\n    .post-date {\n      margin-top: 12px;\n      color: ",";\n      font-size: 14px;\n    }\n  }\n  @media "," {\n    .post-header {\n      .post-title {\n        font-size: 24px;\n      }\n      .post-date {\n        font-size: 12px;\n      }\n      .post-categories {\n        gap: 8px;\n      }\n    }\n  }\n"]);return g=function(){return n},n}let v=r.ZP.article.withConfig({displayName:"Viewer__StyledPostViewer",componentId:"sc-df8aeef8-0"})(g(),f.v.secondaryText,f.v.hoverText,f.v.secondaryText,p.Uh.mobile);var j=function(n){let{postData:e}=n,[t,i]=(0,a.useState)([]),[r,l]=(0,a.useState)(!1),[p,f]=(0,a.useState)(0),g=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var n;let e=null===(n=g.current)||void 0===n?void 0:n.getElementsByTagName("img"),t=Array.from(e||[]),s=t.map((n,e)=>(n.addEventListener("click",()=>{f(e),l(!0)}),{key:e,src:n.src}));i(s)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(v,{children:[(0,s.jsxs)("header",{className:"post-header",children:[e.seriesId&&(0,s.jsx)("div",{className:"post-series",children:(0,s.jsxs)(c(),{href:"/series/".concat(e.seriesId),children:["# ",e.seriesTitle]})}),(0,s.jsx)("h1",{className:"post-title",children:e.title}),(0,s.jsx)("div",{className:"post-categories",children:e.categories.map(n=>(0,s.jsx)(h.Z,{category:n,board:"post"},n))}),(0,s.jsx)("div",{className:"post-date",children:(0,d.U)(e.date,"YYYY-MM-DD")})]}),(0,s.jsx)("div",{className:"post-content",ref:g,children:(0,s.jsx)(m.Z,{children:(0,s.jsx)(o.R,{...e.mdx,components:{PostOutlink:u}})})})]}),r&&(0,s.jsx)(x.Z,{images:t,initActiveIndex:p,closeGallery:()=>{l(!1)}})]})}}},function(n){n.O(0,[433,396,198,872,896,280,971,472,744],function(){return n(n.s=2345)}),_N_E=n.O()}]);