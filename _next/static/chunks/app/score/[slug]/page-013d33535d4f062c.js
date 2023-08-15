(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{4745:function(n,e,o){Promise.resolve().then(o.bind(o,1179))},1179:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return y}});var t=o(230),l=o(7437),i=o(802),r=o(6442),a=o(7735),c=o(8212),s=o(4241),d=o(2265),p=o(5431);function h(){let n=(0,t._)(["\n  display: flex;\n  flex-wrap: wrap;\n  .letter {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    flex-basis: 1em;\n    // width: 1em;\n    text-align: center;\n    .chord {\n      height: 1.5em;\n      white-space: nowrap;\n      font-size: 14px;\n      button {\n        position: relative;\n        min-width: 100%;\n        &:hover {\n          background-color: #f7f7f7;\n        }\n      }\n    }\n    .lyrics {\n      height: 1.5em;\n    }\n    .index {\n      height: 1.5em;\n      white-space: nowrap;\n      font-size: 10px;\n      text-align: center;\n    }\n  }\n"]);return h=function(){return n},n}let f=i.ZP.div.withConfig({displayName:"Phrase__StyledScorePhrase",componentId:"sc-50d4aa78-0"})(h());var m=function(n){var e,o;let{phrase:t}=n,[i,r]=(0,d.useState)(""),a=[],c=(null===(e=t.lyrics)||void 0===e?void 0:e.split(""))||[],s=c.length,h=Math.max(...t.chordList.map(n=>n.position));for(let n=0;n<Math.max(s,h+1);n++)a.push({lyricsLetter:c[n],chordName:(null===(o=t.chordList.find(e=>e.position===n))||void 0===o?void 0:o.name)||""});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{children:a.map((n,e)=>(0,l.jsxs)("div",{className:"letter","data-letter-index":e,children:[(0,l.jsx)("div",{className:"chord",children:n.chordName&&(0,l.jsx)("button",{type:"button",onClick:()=>r(n.chordName),children:n.chordName},e)}),(0,l.jsx)("div",{className:"lyrics",children:n.lyricsLetter}),!1]},e))}),i&&(0,l.jsx)(p.Z,{chordName:i,closeChord:()=>{r("")}})]})};function g(){let n=(0,t._)(["\n  display: grid;\n  row-gap: 30px;\n"]);return g=function(){return n},n}let u=i.ZP.article.withConfig({displayName:"Wrapper__StyledScoreWrapper",componentId:"sc-17647d13-0"})(g());var b=function(n){let{children:e}=n;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{children:e})})};function x(){let n=(0,t._)(["\n  .score-header {\n    text-align: center;\n    margin-bottom: 60px;\n    .score-title {\n      font-weight: 700;\n      font-size: 30px;\n      margin-bottom: 12px;\n    }\n    .score-categories {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 12px;\n    }\n    .score-date {\n      margin-top: 12px;\n      color: #666;\n      font-size: 14px;\n    }\n    .score-meta {\n      margin-top: 30px;\n      display: flex;\n      justify-content: space-between;\n      font-size: 14px;\n    }\n  }\n  .score-content {\n    ","\n    ","\n    img {\n      display: block;\n      cursor: pointer;\n      margin-inline: auto;\n    }\n    .image-cite {\n      display: block;\n      text-align: center;\n      margin-top: 6px;\n      color: #666;\n    }\n    code {\n      display: inline-block;\n      font-size: 14px;\n      line-height: 24px;\n      padding-block: 0;\n    }\n    .rehype-code-title {\n      text-align: right;\n      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n      font-size: 14px;\n      text-shadow: 0 1px white;\n      position: relative;\n      background-color: #f6f8fa;\n      border-radius: 6px;\n      padding: 6px 16px;\n      border-bottom: 1px solid #ddd;\n    }\n    ol {\n      list-style: decimal;\n    }\n    li {\n      list-style: disc;\n    }\n  }\n  @media "," {\n    .score-header {\n      .score-title {\n        font-size: 24px;\n      }\n      .score-date {\n        font-size: 12px;\n      }\n      .score-categories {\n        gap: 8px;\n      }\n      .score-meta {\n        font-size: 12px;\n      }\n    }\n    .score-content {\n      font-size: 14px;\n      code {\n        font-size: 12px;\n        line-height: 21px;\n      }\n      .rehype-code-title {\n        font-size: 12px;\n      }\n    }\n  }\n"]);return x=function(){return n},n}let w=i.ZP.div.withConfig({displayName:"Viewer__StyledScoreViewer",componentId:"sc-49f993e-0"})(x(),c.J,a.M,s.Uh.mobile);var y=function(n){let{scoreData:e}=n;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(w,{children:[(0,l.jsxs)("header",{className:"score-header",children:[(0,l.jsx)("h1",{className:"score-title",children:e.title}),(0,l.jsx)("div",{className:"score-date",children:e.releaseYear}),(0,l.jsxs)("div",{className:"score-meta",children:[(0,l.jsxs)("div",{className:"score-capo",children:["Capo : ",e.capo]}),(0,l.jsx)("div",{className:"score-artist",children:e.artist})]})]}),(0,l.jsx)("div",{className:"score-content",children:(0,l.jsx)(r.R,{...e.mdx,components:{ScoreWrapper:b,ScorePhrase:m}})})]})})}},8212:function(n,e,o){"use strict";o.d(e,{J:function(){return a}});var t=o(230),l=o(802);let i={markdownLineColor:"#dddddd"};function r(){let n=(0,t._)(["\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  margin: 0;\n  color: #24292f;\n  background-color: #ffffff;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,\n    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n\n  .octicon {\n    display: inline-block;\n    fill: currentColor;\n    vertical-align: text-bottom;\n  }\n\n  h1:hover .anchor .octicon-link:before,\n  h2:hover .anchor .octicon-link:before,\n  h3:hover .anchor .octicon-link:before,\n  h4:hover .anchor .octicon-link:before,\n  h5:hover .anchor .octicon-link:before,\n  h6:hover .anchor .octicon-link:before {\n    width: 16px;\n    height: 16px;\n    content: ' ';\n    display: inline-block;\n    background-color: currentColor;\n    -webkit-mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");\n    mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");\n  }\n\n  details,\n  figcaption,\n  figure {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  a {\n    background-color: transparent;\n    color: #0969da;\n    text-decoration: none;\n  }\n\n  a:active,\n  a:hover {\n    outline-width: 0;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: 600;\n  }\n\n  dfn {\n    font-style: italic;\n  }\n\n  h1 {\n    margin: 0.67em 0;\n    font-weight: 600;\n    padding-bottom: 0.3em;\n    font-size: 2em;\n    border-bottom: 1px solid ",";\n  }\n\n  mark {\n    background-color: #ff0;\n    color: #24292f;\n  }\n\n  small {\n    font-size: 90%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n    max-width: 100%;\n    box-sizing: content-box;\n    background-color: #ffffff;\n  }\n\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  figure {\n    margin: 1em 40px;\n  }\n\n  hr {\n    box-sizing: content-box;\n    overflow: hidden;\n    background: transparent;\n    border-bottom: 1px solid ",";\n    height: 0.25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #d0d7de;\n    border: 0;\n  }\n\n  html [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  [type='button']::-moz-focus-inner,\n  [type='reset']::-moz-focus-inner,\n  [type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  [type='button']:-moz-focusring,\n  [type='reset']:-moz-focusring,\n  [type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  [type='checkbox'],\n  [type='radio'] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type='search'] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type='search']::-webkit-search-cancel-button,\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  hr::before {\n    display: table;\n    content: '';\n  }\n\n  hr::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n\n  table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    display: block;\n    width: max-content;\n    max-width: 100%;\n    overflow: auto;\n  }\n\n  td,\n  th {\n    padding: 0;\n  }\n\n  details summary {\n    cursor: pointer;\n  }\n\n  details:not([open]) > *:not(summary) {\n    display: none !important;\n  }\n\n  kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font:\n      11px ui-monospace,\n      SFMono-Regular,\n      SF Mono,\n      Menlo,\n      Consolas,\n      Liberation Mono,\n      monospace;\n    line-height: 10px;\n    color: #24292f;\n    vertical-align: middle;\n    background-color: #f6f8fa;\n    border: solid 1px rgba(175, 184, 193, 0.2);\n    border-bottom-color: rgba(175, 184, 193, 0.2);\n    border-radius: 6px;\n    box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    font-weight: 600;\n    line-height: 1.25;\n  }\n\n  h2 {\n    font-weight: 600;\n    padding-bottom: 0.3em;\n    font-size: 1.5em;\n    border-bottom: 1px solid ",";\n  }\n\n  h3 {\n    font-weight: 600;\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-weight: 600;\n    font-size: 1em;\n  }\n\n  h5 {\n    font-weight: 600;\n    font-size: 0.875em;\n  }\n\n  h6 {\n    font-weight: 600;\n    font-size: 0.85em;\n    color: #57606a;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  blockquote {\n    margin: 0;\n    padding: 0 1em;\n    color: #57606a;\n    border-left: 0.25em solid #d0d7de;\n  }\n\n  ul,\n  ol {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 2em;\n  }\n\n  ol ol,\n  ul ol {\n    list-style-type: lower-roman;\n  }\n\n  ul ul ol,\n  ul ol ol,\n  ol ul ol,\n  ol ol ol {\n    list-style-type: lower-alpha;\n  }\n\n  dd {\n    margin-left: 0;\n  }\n\n  tt,\n  code {\n    font-family:\n      ui-monospace,\n      SFMono-Regular,\n      SF Mono,\n      Menlo,\n      Consolas,\n      Liberation Mono,\n      monospace;\n    font-size: 12px;\n  }\n\n  pre {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-family:\n      ui-monospace,\n      SFMono-Regular,\n      SF Mono,\n      Menlo,\n      Consolas,\n      Liberation Mono,\n      monospace;\n    font-size: 12px;\n    word-wrap: normal;\n  }\n\n  :-ms-input-placeholder {\n    color: #6e7781;\n    opacity: 1;\n  }\n\n  ::-ms-input-placeholder {\n    color: #6e7781;\n    opacity: 1;\n  }\n\n  ::placeholder {\n    color: #6e7781;\n    opacity: 1;\n  }\n\n  .pl-c {\n    color: #6e7781;\n  }\n\n  .pl-c1,\n  .pl-s .pl-v {\n    color: #0550ae;\n  }\n\n  .pl-e,\n  .pl-en {\n    color: #8250df;\n  }\n\n  .pl-smi,\n  .pl-s .pl-s1 {\n    color: #24292f;\n  }\n\n  .pl-ent {\n    color: #116329;\n  }\n\n  .pl-k {\n    color: #cf222e;\n  }\n\n  .pl-s,\n  .pl-pds,\n  .pl-s .pl-pse .pl-s1,\n  .pl-sr,\n  .pl-sr .pl-cce,\n  .pl-sr .pl-sre,\n  .pl-sr .pl-sra {\n    color: #0a3069;\n  }\n\n  .pl-v,\n  .pl-smw {\n    color: #953800;\n  }\n\n  .pl-bu {\n    color: #82071e;\n  }\n\n  .pl-ii {\n    color: #f6f8fa;\n    background-color: #82071e;\n  }\n\n  .pl-c2 {\n    color: #f6f8fa;\n    background-color: #cf222e;\n  }\n\n  .pl-sr .pl-cce {\n    font-weight: bold;\n    color: #116329;\n  }\n\n  .pl-ml {\n    color: #3b2300;\n  }\n\n  .pl-mh,\n  .pl-mh .pl-en,\n  .pl-ms {\n    font-weight: bold;\n    color: #0550ae;\n  }\n\n  .pl-mi {\n    font-style: italic;\n    color: #24292f;\n  }\n\n  .pl-mb {\n    font-weight: bold;\n    color: #24292f;\n  }\n\n  .pl-md {\n    color: #82071e;\n    background-color: #ffebe9;\n  }\n\n  .pl-mi1 {\n    color: #116329;\n    background-color: #dafbe1;\n  }\n\n  .pl-mc {\n    color: #953800;\n    background-color: #ffd8b5;\n  }\n\n  .pl-mi2 {\n    color: #eaeef2;\n    background-color: #0550ae;\n  }\n\n  .pl-mdr {\n    font-weight: bold;\n    color: #8250df;\n  }\n\n  .pl-ba {\n    color: #57606a;\n  }\n\n  .pl-sg {\n    color: #8c959f;\n  }\n\n  .pl-corl {\n    text-decoration: underline;\n    color: #0a3069;\n  }\n\n  [data-catalyst] {\n    display: block;\n  }\n\n  g-emoji {\n    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n    font-size: 1em;\n    font-style: normal !important;\n    font-weight: 400;\n    line-height: 1;\n    vertical-align: -0.075em;\n  }\n\n  g-emoji img {\n    width: 1em;\n    height: 1em;\n  }\n\n  .markdown-body::before {\n    display: table;\n    content: '';\n  }\n\n  .markdown-body::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n\n  > *:first-child {\n    margin-top: 0 !important;\n  }\n\n  > *:last-child {\n    margin-bottom: 0 !important;\n  }\n\n  a:not([href]) {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .absent {\n    color: #cf222e;\n  }\n\n  .anchor {\n    float: left;\n    padding-right: 4px;\n    margin-left: -20px;\n    line-height: 1;\n  }\n\n  .anchor:focus {\n    outline: none;\n  }\n\n  p,\n  blockquote,\n  ul,\n  ol,\n  dl,\n  table,\n  pre,\n  details {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  blockquote > :first-child {\n    margin-top: 0;\n  }\n\n  blockquote > :last-child {\n    margin-bottom: 0;\n  }\n\n  sup > a::before {\n    content: '[';\n  }\n\n  sup > a::after {\n    content: ']';\n  }\n\n  h1 .octicon-link,\n  h2 .octicon-link,\n  h3 .octicon-link,\n  h4 .octicon-link,\n  h5 .octicon-link,\n  h6 .octicon-link {\n    color: #24292f;\n    vertical-align: middle;\n    visibility: hidden;\n  }\n\n  h1:hover .anchor,\n  h2:hover .anchor,\n  h3:hover .anchor,\n  h4:hover .anchor,\n  h5:hover .anchor,\n  h6:hover .anchor {\n    text-decoration: none;\n  }\n\n  h1:hover .anchor .octicon-link,\n  h2:hover .anchor .octicon-link,\n  h3:hover .anchor .octicon-link,\n  h4:hover .anchor .octicon-link,\n  h5:hover .anchor .octicon-link,\n  h6:hover .anchor .octicon-link {\n    visibility: visible;\n  }\n\n  h1 tt,\n  h1 code,\n  h2 tt,\n  h2 code,\n  h3 tt,\n  h3 code,\n  h4 tt,\n  h4 code,\n  h5 tt,\n  h5 code,\n  h6 tt,\n  h6 code {\n    padding: 0 0.2em;\n    font-size: inherit;\n  }\n\n  ul.no-list,\n  ol.no-list {\n    padding: 0;\n    list-style-type: none;\n  }\n\n  ol[type='1'] {\n    list-style-type: decimal;\n  }\n\n  ol[type='a'] {\n    list-style-type: lower-alpha;\n  }\n\n  ol[type='i'] {\n    list-style-type: lower-roman;\n  }\n\n  div > ol:not([type]) {\n    list-style-type: decimal;\n  }\n\n  ul ul,\n  ul ol,\n  ol ol,\n  ol ul {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  li > p {\n    margin-top: 16px;\n  }\n\n  li + li {\n    margin-top: 0.25em;\n  }\n\n  dl {\n    padding: 0;\n  }\n\n  dl dt {\n    padding: 0;\n    margin-top: 16px;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: 600;\n  }\n\n  dl dd {\n    padding: 0 16px;\n    margin-bottom: 16px;\n  }\n\n  table th {\n    font-weight: 600;\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #d0d7de;\n  }\n\n  table tr {\n    background-color: #ffffff;\n    border-top: 1px solid ",";\n  }\n\n  table tr:nth-child(2n) {\n    background-color: #f6f8fa;\n  }\n\n  table img {\n    background-color: transparent;\n  }\n\n  img[align='right'] {\n    padding-left: 20px;\n  }\n\n  img[align='left'] {\n    padding-right: 20px;\n  }\n\n  .emoji {\n    max-width: none;\n    vertical-align: text-top;\n    background-color: transparent;\n  }\n\n  span.frame {\n    display: block;\n    overflow: hidden;\n  }\n\n  span.frame > span {\n    display: block;\n    float: left;\n    width: auto;\n    padding: 7px;\n    margin: 13px 0 0;\n    overflow: hidden;\n    border: 1px solid #d0d7de;\n  }\n\n  span.frame span img {\n    display: block;\n    float: left;\n  }\n\n  span.frame span span {\n    display: block;\n    padding: 5px 0 0;\n    clear: both;\n    color: #24292f;\n  }\n\n  span.align-center {\n    display: block;\n    overflow: hidden;\n    clear: both;\n  }\n\n  span.align-center > span {\n    display: block;\n    margin: 13px auto 0;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  span.align-center span img {\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  span.align-right {\n    display: block;\n    overflow: hidden;\n    clear: both;\n  }\n\n  span.align-right > span {\n    display: block;\n    margin: 13px 0 0;\n    overflow: hidden;\n    text-align: right;\n  }\n\n  span.align-right span img {\n    margin: 0;\n    text-align: right;\n  }\n\n  span.float-left {\n    display: block;\n    float: left;\n    margin-right: 13px;\n    overflow: hidden;\n  }\n\n  span.float-left span {\n    margin: 13px 0 0;\n  }\n\n  span.float-right {\n    display: block;\n    float: right;\n    margin-left: 13px;\n    overflow: hidden;\n  }\n\n  span.float-right > span {\n    display: block;\n    margin: 13px auto 0;\n    overflow: hidden;\n    text-align: right;\n  }\n\n  code,\n  tt {\n    padding: 0.2em 0.4em;\n    margin: 0;\n    font-size: 85%;\n    background-color: rgba(175, 184, 193, 0.2);\n    border-radius: 6px;\n  }\n\n  code br,\n  tt br {\n    display: none;\n  }\n\n  del code {\n    text-decoration: inherit;\n  }\n\n  pre code {\n    font-size: 100%;\n  }\n\n  pre > code {\n    padding: 0;\n    margin: 0;\n    word-break: normal;\n    white-space: pre;\n    background: transparent;\n    border: 0;\n  }\n\n  .highlight {\n    margin-bottom: 16px;\n  }\n\n  .highlight pre {\n    margin-bottom: 0;\n    word-break: normal;\n  }\n\n  .highlight pre,\n  pre {\n    padding: 16px;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f6f8fa;\n    border-radius: 6px;\n  }\n\n  pre code,\n  pre tt {\n    display: inline;\n    max-width: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    line-height: inherit;\n    word-wrap: normal;\n    background-color: transparent;\n    border: 0;\n  }\n\n  .csv-data td,\n  .csv-data th {\n    padding: 5px;\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 1;\n    text-align: left;\n    white-space: nowrap;\n  }\n\n  .csv-data .blob-num {\n    padding: 10px 8px 9px;\n    text-align: right;\n    background: #ffffff;\n    border: 0;\n  }\n\n  .csv-data tr {\n    border-top: 0;\n  }\n\n  .csv-data th {\n    font-weight: 600;\n    background: #f6f8fa;\n    border-top: 0;\n  }\n\n  .footnotes {\n    font-size: 12px;\n    color: #57606a;\n    border-top: 1px solid #d0d7de;\n  }\n\n  .footnotes ol {\n    padding-left: 16px;\n  }\n\n  .footnotes li {\n    position: relative;\n  }\n\n  .footnotes li:target::before {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    bottom: -8px;\n    left: -24px;\n    pointer-events: none;\n    content: '';\n    border: 2px solid #0969da;\n    border-radius: 6px;\n  }\n\n  .footnotes li:target {\n    color: #24292f;\n  }\n\n  .footnotes .data-footnote-backref g-emoji {\n    font-family: monospace;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    filter: invert(50%);\n  }\n"]);return r=function(){return n},n}let a=(0,l.iv)(r(),i.markdownLineColor,i.markdownLineColor,i.markdownLineColor,i.markdownLineColor)},7735:function(n,e,o){"use strict";o.d(e,{M:function(){return r}});var t=o(230),l=o(802);function i(){let n=(0,t._)(["\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: black;\n    background: none;\n    text-shadow: 0 1px white;\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    font-size: 1em;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-']::-moz-selection,\n  pre[class*='language-'] ::-moz-selection,\n  code[class*='language-']::-moz-selection,\n  code[class*='language-'] ::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc;\n  }\n\n  pre[class*='language-']::selection,\n  pre[class*='language-'] ::selection,\n  code[class*='language-']::selection,\n  code[class*='language-'] ::selection {\n    text-shadow: none;\n    background: #b3d4fc;\n  }\n\n  @media print {\n    code[class*='language-'],\n    pre[class*='language-'] {\n      text-shadow: none;\n    }\n  }\n\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n  }\n\n  :not(pre) > code[class*='language-'],\n  pre[class*='language-'] {\n    background: #f5f2f0;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*='language-'] {\n    padding: 0.1em;\n    border-radius: 0.3em;\n    white-space: normal;\n  }\n\n  .hljs-comment,\n  .hljs-prolog,\n  .hljs-doctype,\n  .hljs-cdata {\n    color: slategray;\n  }\n\n  .hljs-punctuation {\n    color: #999;\n  }\n\n  .hljs-namespace {\n    opacity: 0.7;\n  }\n\n  .hljs-property,\n  .hljs-tag,\n  .hljs-boolean,\n  .hljs-number,\n  .hljs-constant,\n  .hljs-symbol,\n  .hljs-deleted {\n    color: #905;\n  }\n\n  .hljs-selector,\n  .hljs-attr-name,\n  .hljs-string,\n  .hljs-char,\n  .hljs-builtin,\n  .hljs-inserted {\n    color: #690;\n  }\n\n  .hljs-operator,\n  .hljs-entity,\n  .hljs-url,\n  .language-css .hljs-string,\n  .style .hljs-string {\n    color: #9a6e3a;\n    /* This background color was intended by the author of this theme. */\n    background: hsla(0, 0%, 100%, 0.5);\n  }\n\n  .hljs-atrule,\n  .hljs-attr-value,\n  .hljs-keyword {\n    color: #07a;\n  }\n\n  .hljs-function,\n  .hljs-class-name {\n    color: #dd4a68;\n  }\n\n  .hljs-regex,\n  .hljs-important,\n  .hljs-variable {\n    color: #e90;\n  }\n\n  .hljs-important,\n  .hljs-bold {\n    font-weight: bold;\n  }\n  .hljs-italic {\n    font-style: italic;\n  }\n\n  .hljs-entity {\n    cursor: help;\n  }\n"]);return i=function(){return n},n}let r=(0,l.iv)(i())},4091:function(n,e,o){n.exports.jsxRuntime=o(7437)},6442:function(n,e,o){"use strict";o.d(e,{R:function(){return p}});var t={};o.r(t),o.d(t,{MDXContext:function(){return r},MDXProvider:function(){return d},useMDXComponents:function(){return c},withMDXComponents:function(){return a}});var l=o(2265),i=o(4091);let r=l.createContext({});function a(n){return function(e){let o=c(e.components);return l.createElement(n,{...e,allComponents:o})}}function c(n){let e=l.useContext(r);return l.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let s={};function d({components:n,children:e,disableParentContext:o}){let t;return t=o?"function"==typeof n?n({}):n||s:c(n),l.createElement(r.Provider,{value:t},e)}function p({compiledSource:n,frontmatter:e,scope:o,components:r={},lazy:a}){let[c,s]=(0,l.useState)(!a||"undefined"==typeof window);(0,l.useEffect)(()=>{if(a){let n=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(n)}},[]);let p=(0,l.useMemo)(()=>{let l=Object.assign({opts:{...t,...i.jsxRuntime}},{frontmatter:e},o),r=Object.keys(l),a=Object.values(l),c=Reflect.construct(Function,r.concat(`${n}`));return c.apply(c,a).default},[o,n]);if(!c)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let h=l.createElement(d,{components:r},l.createElement(p,null));return a?l.createElement("div",null,h):h}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(n){var e=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)})}},function(n){n.O(0,[576,431,971,596,744],function(){return n(n.s=4745)}),_N_E=n.O()}]);