(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{3028:function(t,i,o){var s=o(5491).w_;t.exports.n=function(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(t)}},365:function(t,i,o){var s=o(5491).w_;t.exports.r=function(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"11",fill:"none",stroke:"#000",strokeWidth:"2"}}]})(t)}},5431:function(t,i,o){"use strict";var s=o(230),c=o(7437),n=o(802),a=o(2265),r=o(774),m=o(7046),p=o(3028),h=o(365),L=o(4296),e=o(4241),d=o(2399),C=o(3254),B=o(1886),F=o.n(B);function E(){let t=(0,s._)(["\n  backdrop-filter: blur(5px);\n  position: fixed;\n  inset: 0;\n  z-index: 101;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .chord-layer {\n    background-color: #fff;\n    max-width: 100%;\n    width: 440px;\n    padding: 20px 20px 60px 20px;\n    margin: 20px;\n    .chord-header {\n      margin-bottom: 20px;\n      line-height: 1.2;\n      .name {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 24px;\n        text-align: center;\n      }\n      .constituent {\n        margin-top: 10px;\n        display: flex;\n        justify-content: center;\n        font-family: ",";\n        position: relative;\n        bottom: 3px;\n        column-gap: 6px;\n        font-size: 14px;\n        color: #666;\n      }\n    }\n    .chord-null {\n      text-align: center;\n    }\n    .chart-area {\n      .chart {\n        display: flex;\n        column-gap: 10px;\n        .position {\n          display: grid;\n          width: 20px;\n          row-gap: 20px;\n          > div {\n            height: 1px;\n            font-size: 16px;\n            line-height: 100%;\n            svg {\n              margin-top: -8px;\n            }\n            &[data-position='-1'] {\n              svg {\n                path {\n                  stroke: #aaa;\n                }\n              }\n            }\n          }\n        }\n        .fret-area {\n          width: 100%;\n          position: relative;\n          display: flex;\n          border-left: 1px solid #000;\n          &[data-start-fret='1'] {\n            border-left-width: 3px;\n          }\n          .fret {\n            position: relative;\n            flex-grow: 1;\n            display: grid;\n            row-gap: 20px;\n            border-right: 1px solid #000;\n            .number {\n              position: absolute;\n              bottom: -2.4em;\n              width: 100%;\n              text-align: center;\n              font-size: 14px;\n            }\n            .string {\n              position: relative;\n              width: 100%;\n              height: 1px;\n              background-color: #000;\n              .finger {\n                width: 16px;\n                height: 16px;\n                border-radius: 50%;\n                background-color: #000;\n                position: absolute;\n                top: calc(50% - 8px);\n                left: calc(50% - 8px);\n              }\n            }\n          }\n        }\n        .pitch {\n          display: grid;\n          width: 20px;\n          row-gap: 20px;\n          > div {\n            height: 1px;\n            font-size: 16px;\n            line-height: 100%;\n            margin-top: -8px;\n            white-space: nowrap;\n            &[data-invalid='true'] {\n              color: #f00;\n            }\n          }\n        }\n      }\n    }\n    .chart-navigation {\n      margin-top: 50px;\n      margin-bottom: -20px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      column-gap: 18px;\n      button {\n        font-size: 24px;\n        line-height: 100%;\n      }\n    }\n  }\n  @media "," {\n    .chord-layer {\n      padding-bottom: 50px;\n      .chord-name {\n        // font-size: 20px;\n      }\n    }\n  }\n"]);return E=function(){return t},t}let G=n.ZP.div.withConfig({displayName:"Chart__StyledChordChart",componentId:"sc-fd70d748-0"})(E(),F().style.fontFamily,e.Uh.mobile);i.Z=function(t){let{chordName:i,initIndex:o,closeChord:s}=t,[n,e]=(0,a.useState)(0),[B,F]=(0,a.useState)(0),E=L.oo[i],l=(0,d.UQ)(i),u=(null==E?void 0:E.chartList.length)||0,[A,D]=(0,a.useState)(o||0),f=t=>t>u-1?D(0):t<0?D(u-1):D(t);return(0,c.jsx)(G,{onClick:t=>{t.target===t.currentTarget&&s()},children:(0,c.jsxs)("div",{className:"chord-layer",children:[(0,c.jsxs)("div",{className:"chord-header",children:[(0,c.jsx)("div",{className:"name",children:(0,c.jsx)(C.Z,{chordName:i})}),l.length>0&&(0,c.jsx)("div",{className:"constituent",children:l.map(t=>(0,c.jsx)(C.Z,{chordName:t},t))})]}),(0,c.jsx)("div",{className:"chart-area",onTouchStart:t=>{e(t.touches[0].clientX)},onTouchMove:t=>{let i=t.touches[0].clientX-n;F(i)},onTouchEnd:()=>{Math.abs(B)>50&&(B<0&&f(A+1),B>0&&f(A-1)),F(0)},children:E&&E.chartList.map((t,i)=>{let o=[],s=Math.max(...t.filter(t=>t>0)),n=Math.min(...t.filter(t=>t>0)),r=s<=4?1:n,m=s<=3?4:s+1;for(let i=r;i<m;i++){let s=[];for(let o=0;o<=5;o++)s.push(t[o]===i);o.push({number:i,strings:s})}return(0,c.jsx)(a.Fragment,{children:A===i&&(0,c.jsxs)("div",{className:"chart",children:[(0,c.jsx)("div",{className:"position",children:t.map((t,i)=>(0,c.jsxs)("div",{"data-position":t,children:[0===t&&(0,c.jsx)(h.r,{}),-1===t&&(0,c.jsx)(p.n,{})]},i))}),(0,c.jsx)("div",{className:"fret-area","data-start-fret":r,children:o.map((i,o)=>(0,c.jsxs)("div",{className:"fret",children:[(0,c.jsx)("div",{className:"number",children:i.number}),i.strings.map((i,o)=>(0,c.jsx)("div",{className:"string","data-position":t[o],children:i&&(0,c.jsx)("div",{className:"finger"})},o))]},o))}),(0,c.jsx)("div",{className:"pitch",children:t.map((t,i)=>{let o=L._B[i][t]||"";return(0,c.jsx)(C.Z,{"data-position":t,"data-invalid":!!l.length&&!!o&&!l.includes(o),chordName:o},i)})})]})},i)})}),u>1&&(0,c.jsxs)("div",{className:"chart-navigation",children:[(0,c.jsx)("button",{type:"button",className:"btn-prev",onClick:()=>f(A-1),children:(0,c.jsx)(r.Y,{})}),(0,c.jsxs)("div",{className:"paging",children:[A+1," / ",u]}),(0,c.jsx)("button",{type:"button",className:"btn-next",onClick:()=>f(A+1),children:(0,c.jsx)(m.T,{})})]})]})})}},3254:function(t,i,o){"use strict";var s=o(230),c=o(7437),n=o(802),a=o(2399),r=o(1886),m=o.n(r),p=o(3484),h=o.n(p);function L(){let t=(0,s._)(["\n  white-space: nowrap;\n  font-family: ",";\n  span {\n    position: relative;\n    top: -0.1em;\n    font-family: ",";\n    font-size: 0.9em;\n    margin-inline: -0.05em;\n  }\n"]);return L=function(){return t},t}let e=n.ZP.div.withConfig({displayName:"Symbol__StyledChordSymbol",componentId:"sc-7fb7b918-0"})(L(),m().style.fontFamily,h().style.fontFamily);i.Z=function(t){let{chordName:i,isAbbr:o=!1}=t,s=(0,a.U7)(i);return!o&&(s.includes("add2")&&(s="".concat(s," (").concat(s.replace("add2","add9"),")")),s.includes("add4")&&(s="".concat(s," (").concat(s.replace("add4","add11"),")")),s.includes("add6")&&(s="".concat(s," (").concat(s.replace("add6","add13"),")"))),(0,c.jsx)(e,{dangerouslySetInnerHTML:{__html:s}})}},4296:function(t,i,o){"use strict";o.d(i,{WN:function(){return r},_B:function(){return a},fg:function(){return c},oo:function(){return m},x0:function(){return s},zc:function(){return n}});let s=["","6","7","9","11","M7","sus2","sus4","7sus2","7sus4","7[9","dim","dim7","m","m6","m7","m7[5","m7]5","mM7","m9","m11","add2","add4"],c=["C","C]","D","E[","E","F","F]","G","G]","A","B[","B"],n=["C",["C]","D["],"D",["D]","E["],"E","F",["F]","G["],"G",["G]","A["],"A",["A]","B["],"B"],a=[["E","F","F]","G","G]","A","B[","B","C","C]","D","E[","E"],["B","C","C]","D","E[","E","F","F]","G","G]","A","B[","B"],["G","G]","A","B[","B","C","C]","D","E[","E","F","F]","G"],["D","E[","E","F","F]","G","G]","A","B[","B","C","C]","D"],["A","B[","B","C","C]","D","E[","E","F","F]","G","G]","A"],["E","F","F]","G","G]","A","B[","B","C","C]","D","E[","E"]],r={"Dm7/C":{composition:[],chartList:[[1,1,2,0,3,-1]]},"Em/D":{composition:[],chartList:[[0,0,0,0,-1,-1]]},"B[/D":{composition:[],chartList:[[1,3,3,0,-1,-1]]},"C/E":{composition:[],chartList:[[0,1,0,2,3,0]]},"D/F]":{composition:[],chartList:[[2,3,2,0,-1,2]]},"D7/F]":{composition:[],chartList:[[2,1,2,0,0,2]]},"C/G":{composition:[],chartList:[[0,1,0,2,3,3]]},"G/B":{composition:[],chartList:[[3,3,0,0,2,-1]]}},m={C:{composition:["C","E","G"],chartList:[[0,1,0,2,3,-1],[0,1,0,2,3,3],[3,5,5,5,3,-1],[8,8,9,10,10,8]]},C6:{composition:["C","E","G","A"],chartList:[[0,1,2,2,3,-1]]},C7:{composition:["C","E","G","B["],chartList:[[0,1,3,2,3,-1],[3,5,3,5,3,-1],[8,8,9,8,10,8]]},C9:{composition:["C","E","G","B[","D"],chartList:[[0,3,3,2,3,-1]]},C11:{composition:["C","E","G","B[","D","F"],chartList:[[6,6,0,0,7,8],[10,8,9,8,8,8]]},CM7:{composition:["C","E","G","B"],chartList:[[0,0,0,2,3,-1]]},Csus2:{composition:["C","D","G"],chartList:[[3,1,0,0,3,-1],[3,3,0,0,3,-1],[3,3,5,5,3,-1]]},Csus4:{composition:["C","F","G"],chartList:[[1,1,0,3,3,-1],[3,1,0,3,3,-1],[3,6,5,3,3,-1]]},C7sus2:{composition:["C","D","G","B["],chartList:[[3,3,3,5,3,-1],[3,1,3,0,3,-1],[3,3,3,0,3,-1]]},C7sus4:{composition:["C","F","G","B["],chartList:[[3,6,3,3,3,-1],[3,6,3,5,3,-1]]},Cdim:{composition:["C","E[","F]"],chartList:[[2,1,-1,1,3,-1]]},Cdim7:{composition:["C","E[","F]","A"],chartList:[[8,7,8,7,0,8]]},Cm:{composition:["C","E[","G"],chartList:[[3,4,5,5,3,-1],[8,8,8,10,10,8]]},Cm6:{composition:["C","E[","G","A"],chartList:[[8,10,8,10,10,8]]},Cm7:{composition:["C","E[","G","B["],chartList:[[3,4,3,5,3,-1]]},"Cm7[5":{composition:["C","E[","F]","B["],chartList:[]},"Cm7]5":{composition:["C","E[","G]","B["],chartList:[]},CmM7:{composition:["C","E[","G","B"],chartList:[[3,0,0,1,3,-1]]},Cm9:{composition:["C","E[","G","B[","D"],chartList:[[3,4,3,0,3,-1]]},Cm11:{composition:["C","E[","G","B[","D","F"],chartList:[[6,6,0,0,6,8]]},Cadd2:{composition:["C","E","G","D"],chartList:[[0,3,0,2,3,-1]]},Cadd4:{composition:["C","E","G","F"],chartList:[[0,1,0,3,3,-1]]},Cadd6:{composition:["C","E","G","A"],chartList:[]},"C]":{composition:["C]","F","G]"],chartList:[[4,6,6,6,4,-1],[9,9,10,11,11,9]]},"C]6":{composition:["C]","F","G]","B["],chartList:[[6,6,6,6,4,-1]]},"C]7":{composition:["C]","F","G]","B"],chartList:[[4,6,4,6,4,-1]]},"C]9":{composition:["C]","F","G]","B","E["],chartList:[[-1,4,4,3,4,-1]]},"C]11":{composition:["C]","F","G]","B","E[","F]"],chartList:[]},"C]M7":{composition:["C]","F","G]","C"],chartList:[[4,6,5,6,4,-1]]},"C]sus2":{composition:["C]","E[","G]"],chartList:[[4,4,6,6,4,-1]]},"C]sus4":{composition:["C]","F]","G]"],chartList:[[4,7,6,4,4,-1]]},"C]7sus2":{composition:["C]","E[","G]","B"],chartList:[[4,4,4,6,4,-1]]},"C]7sus4":{composition:["C]","F]","G]","B"],chartList:[[4,7,4,4,4,-1],[4,7,4,6,4,-1]]},"C]dim":{composition:["C]","E","G"],chartList:[]},"C]dim7":{composition:["C]","E","G","B["],chartList:[]},"C]m":{composition:["C]","E","G]"],chartList:[[4,5,6,6,4,-1],[9,9,9,11,11,9]]},"C]m6":{composition:["C]","E","G]","B["],chartList:[]},"C]m7":{composition:["C]","E","G]","B"],chartList:[[4,5,4,6,4,-1],[9,9,10,9,11,9]]},"C]m7[5":{composition:["C]","E","G","B"],chartList:[]},"C]m7]5":{composition:["C]","E","A","B"],chartList:[]},"C]mM7":{composition:["C]","E","G]","C"],chartList:[]},"C]m9":{composition:["C]","E","G]","B","E["],chartList:[]},"C]m11":{composition:["C]","E","G]","B","E[","F]"],chartList:[]},"C]add2":{composition:["C]","F","G]","E["],chartList:[]},"C]add4":{composition:["C]","F","G]","F]"],chartList:[]},"C]add6":{composition:["C]","F","G]","B["],chartList:[]},D:{composition:["D","F]","A"],chartList:[[2,3,2,0,-1,-1],[5,7,7,7,5,-1]]},D6:{composition:["D","F]","A","B"],chartList:[[2,0,2,0,-1,-1]]},D7:{composition:["D","F]","A","C"],chartList:[[2,1,2,0,-1,-1],[5,7,5,7,5,-1]]},D9:{composition:["D","F]","A","C","E"],chartList:[]},D11:{composition:["D","F]","A","C","E","G"],chartList:[]},DM7:{composition:["D","F]","A","C]"],chartList:[[2,2,2,0,-1,-1]]},Dsus2:{composition:["D","E","A"],chartList:[[0,3,2,0,-1,-1],[5,5,7,7,5,-1]]},Dsus4:{composition:["D","G","A"],chartList:[[3,3,2,0,-1,-1],[5,8,7,5,5,-1]]},D7sus2:{composition:["D","E","A","C"],chartList:[[0,1,2,0,-1,-1],[5,5,5,7,5,-1]]},D7sus4:{composition:["D","G","A","C"],chartList:[[3,1,2,0,-1,-1],[5,8,5,5,5,-1],[5,8,5,7,5,-1]]},Ddim:{composition:["D","F","G]"],chartList:[[1,3,1,0,-1,-1]]},Ddim7:{composition:["D","F","G]","B"],chartList:[[1,0,1,0,-1,-1]]},Dm:{composition:["D","F","A"],chartList:[[1,3,2,0,-1,-1],[5,6,7,7,5,-1]]},Dm6:{composition:["D","F","A","B"],chartList:[[1,0,2,0,-1,-1]]},Dm7:{composition:["D","F","A","C"],chartList:[[1,1,2,0,-1,-1],[5,6,5,7,5,-1]]},Dm9:{composition:["D","F","A","C","E"],chartList:[]},Dm11:{composition:["D","F","A","C","E","G"],chartList:[]},"Dm7[5":{composition:["D","F","G]","C"],chartList:[]},"Dm7]5":{composition:["D","F","B[","C"],chartList:[]},DmM7:{composition:["D","F","A","C]"],chartList:[[1,2,2,0,-1,-1]]},Dadd2:{composition:["D","F]","A","E"],chartList:[]},Dadd4:{composition:["D","F]","A","G"],chartList:[]},Dadd6:{composition:["D","F]","A","B"],chartList:[]},"E[":{composition:["E[","G","B["],chartList:[[6,8,8,8,6,-1]]},"E[6":{composition:["E[","G","B[","C"],chartList:[]},"E[7":{composition:["E[","G","B[","C]"],chartList:[]},"E[9":{composition:["E[","G","B[","C]","F"],chartList:[]},"E[11":{composition:["E[","G","B[","C]","F","G]"],chartList:[]},"E[M7":{composition:["E[","G","B[","D"],chartList:[]},"E[sus2":{composition:["E[","F","B["],chartList:[[6,6,8,8,6,-1]]},"E[sus4":{composition:["E[","G]","B["],chartList:[[6,9,8,6,6,-1]]},"E[7sus2":{composition:["E[","F","B[","C]"],chartList:[[6,6,6,8,6,-1]]},"E[7sus4":{composition:["E[","G]","B[","C]"],chartList:[[6,9,6,6,6,-1],[6,9,6,8,6,-1]]},"E[dim":{composition:["E[","F]","A"],chartList:[]},"E[dim7":{composition:["E[","F]","A","C"],chartList:[]},"E[m":{composition:["E[","F]","B["],chartList:[]},"E[m6":{composition:["E[","F]","B[","C"],chartList:[]},"E[m7":{composition:["E[","F]","B[","C]"],chartList:[]},"E[m7[5":{composition:["E[","F]","A","C]"],chartList:[]},"E[m7]5":{composition:["E[","F]","B","C]"],chartList:[]},"E[mM7":{composition:["E[","F]","B[","D"],chartList:[]},"E[m9":{composition:["E[","F]","B[","C]","F"],chartList:[]},"E[m11":{composition:["E[","F]","B[","C]","F","G]"],chartList:[]},"E[add2":{composition:["E[","G","B[","F"],chartList:[]},"E[add4":{composition:["E[","G","B[","G]"],chartList:[]},"E[add6":{composition:["E[","G","B[","C"],chartList:[]},E:{composition:["E","G]","B"],chartList:[[0,0,1,2,2,0],[7,9,9,9,7,-1]]},E6:{composition:["E","G]","B","C]"],chartList:[]},E7:{composition:["E","G]","B","D"],chartList:[[0,0,1,0,2,0]]},E9:{composition:["E","G]","B","D","F]"],chartList:[[2,0,1,0,2,0]]},E11:{composition:["E","G]","B","D","F]","A"],chartList:[]},EM7:{composition:["E","G]","B","E["],chartList:[[0,0,1,1,2,0]]},Esus2:{composition:["E","F]","B"],chartList:[]},Esus4:{composition:["E","A","B"],chartList:[[0,0,2,2,0,0],[0,0,2,2,2,0]]},E7sus2:{composition:["E","F]","B","D"],chartList:[]},E7sus4:{composition:["E","A","B","D"],chartList:[[0,0,2,0,2,0]]},Edim:{composition:["E","G","B["],chartList:[]},Edim7:{composition:["E","G","B[","C]"],chartList:[]},Em:{composition:["E","G","B"],chartList:[[0,0,0,2,2,0],[7,8,9,9,7,-1]]},Em6:{composition:["E","G","B","C]"],chartList:[]},Em7:{composition:["E","G","B","D"],chartList:[[0,0,0,0,2,0]]},"Em7[5":{composition:["E","G","B[","D"],chartList:[]},"Em7]5":{composition:["E","G","C","D"],chartList:[]},EmM7:{composition:["E","G","B","E["],chartList:[]},Em9:{composition:["E","G","B","D","F]"],chartList:[]},Em11:{composition:["E","G","B","D","F]","A"],chartList:[]},Eadd2:{composition:["E","G]","B","F]"],chartList:[[0,0,1,4,2,0]]},Eadd4:{composition:["E","G]","B","A"],chartList:[]},Eadd6:{composition:["E","G]","B","C]"],chartList:[]},F:{composition:["F","A","C"],chartList:[[1,1,2,3,3,1]]},F6:{composition:["F","A","C","D"],chartList:[]},F7:{composition:["F","A","C","E["],chartList:[]},F9:{composition:["F","A","C","E[","G"],chartList:[]},F11:{composition:["F","A","C","E[","G","B["],chartList:[]},FM7:{composition:["F","A","C","E"],chartList:[[0,1,2,3,-1,-1]]},Fsus2:{composition:["F","G","C"],chartList:[]},Fsus4:{composition:["F","B[","C"],chartList:[]},F7sus2:{composition:["F","G","C","E["],chartList:[]},F7sus4:{composition:["F","B[","C","E["],chartList:[]},Fdim:{composition:["F","G]","B"],chartList:[]},Fdim7:{composition:["F","G]","B","D"],chartList:[]},Fm:{composition:["F","G]","C"],chartList:[[1,1,1,3,3,1]]},Fm6:{composition:["F","G]","C","D"],chartList:[]},Fm7:{composition:["F","G]","C","E["],chartList:[]},"Fm7[5":{composition:["F","G]","B","E["],chartList:[]},"Fm7]5":{composition:["F","G]","C]","E["],chartList:[]},FmM7:{composition:["F","G]","C","E"],chartList:[]},Fm9:{composition:["F","G]","C","E[","G"],chartList:[]},Fm11:{composition:["F","G]","C","E[","G","B["],chartList:[]},Fadd2:{composition:["F","A","C","G"],chartList:[]},Fadd4:{composition:["F","A","C","B["],chartList:[]},Fadd6:{composition:["F","A","C","D"],chartList:[]},"F]":{composition:["F]","B[","C]"],chartList:[[2,2,3,4,4,2]]},"F]6":{composition:["F]","B[","C]","E["],chartList:[]},"F]7":{composition:["F]","B[","C]","E"],chartList:[]},"F]9":{composition:["F]","B[","C]","E","G]"],chartList:[]},"F]11":{composition:["F]","B[","C]","E","G]","B"],chartList:[]},"F]M7":{composition:["F]","B[","C]","F"],chartList:[[2,2,3,3,4,2]]},"F]sus2":{composition:["F]","G]","C]"],chartList:[]},"F]sus4":{composition:["F]","B","C]"],chartList:[]},"F]7sus2":{composition:["F]","G]","C]","E"],chartList:[]},"F]7sus4":{composition:["F]","B","C]","E"],chartList:[]},"F]dim":{composition:["F]","A","C"],chartList:[]},"F]dim7":{composition:["F]","A","C","E["],chartList:[]},"F]m":{composition:["F]","A","C]"],chartList:[[2,2,2,4,4,2]]},"F]m6":{composition:["F]","A","C]","E["],chartList:[]},"F]m7":{composition:["F]","A","C]","E"],chartList:[[2,2,2,2,4,2]]},"F]m7[5":{composition:["F]","A","C","E"],chartList:[[0,1,2,2,0,2]]},"F]m7]5":{composition:["F]","A","D","E"],chartList:[]},"F]mM7":{composition:["F]","A","C]","F"],chartList:[]},"F]m9":{composition:["F]","A","C]","E","G]"],chartList:[]},"F]m11":{composition:["F]","A","C]","E","G]","B"],chartList:[[0,0,2,2,-1,2]]},"F]add2":{composition:["F]","B[","C]","G]"],chartList:[]},"F]add4":{composition:["F]","B[","C]","B"],chartList:[]},"F]add6":{composition:["F]","B[","C]","E["],chartList:[]},G:{composition:["G","B","D"],chartList:[[3,0,0,0,2,3],[3,3,4,5,5,3]]},G6:{composition:["G","B","D","E"],chartList:[]},G7:{composition:["G","B","D","F"],chartList:[[1,0,0,0,2,3]]},G9:{composition:["G","B","D","F","A"],chartList:[]},G11:{composition:["G","B","D","F","A","C"],chartList:[]},GM7:{composition:["G","B","D","F]"],chartList:[[2,0,0,0,2,3],[3,3,4,4,5,3]]},Gsus2:{composition:["G","A","D"],chartList:[]},Gsus4:{composition:["G","C","D"],chartList:[[3,1,0,0,3,3]]},G7sus2:{composition:["G","A","D","F"],chartList:[]},G7sus4:{composition:["G","C","D","F"],chartList:[]},Gdim:{composition:["G","B[","C]"],chartList:[]},Gdim7:{composition:["G","B[","C]","E"],chartList:[]},Gm:{composition:["G","B[","D"],chartList:[[3,3,3,5,5,3]]},Gm6:{composition:["G","B[","D","E"],chartList:[]},Gm7:{composition:["G","B[","D","F"],chartList:[[3,3,3,3,5,3]]},"Gm7[5":{composition:["G","B[","C]","F"],chartList:[]},"Gm7]5":{composition:["G","B[","E[","F"],chartList:[]},GmM7:{composition:["G","B[","D","F]"],chartList:[]},Gm9:{composition:["G","B[","D","F","A"],chartList:[]},Gm11:{composition:["G","B[","D","F","A","C"],chartList:[]},Gadd2:{composition:["G","B","D","A"],chartList:[[-1,-1,2,0,2,3],[3,0,2,0,-1,3]]},Gadd4:{composition:["G","B","D","C"],chartList:[]},Gadd6:{composition:["G","B","D","E"],chartList:[]},"G]":{composition:["G]","C","E["],chartList:[[4,4,5,6,6,4]]},"G]6":{composition:["G]","C","E[","F"],chartList:[]},"G]7":{composition:["G]","C","E[","F]"],chartList:[]},"G]9":{composition:["G]","C","E[","F]","B["],chartList:[]},"G]11":{composition:["G]","C","E[","F]","B[","C]"],chartList:[]},"G]M7":{composition:["G]","C","E[","G"],chartList:[[4,4,5,5,6,4]]},"G]sus2":{composition:["G]","B[","E["],chartList:[]},"G]sus4":{composition:["G]","C]","E["],chartList:[]},"G]7sus2":{composition:["G]","B[","E[","F]"],chartList:[]},"G]7sus4":{composition:["G]","C]","E[","F]"],chartList:[]},"G]dim":{composition:["G]","B","D"],chartList:[]},"G]dim7":{composition:["G]","B","D","F"],chartList:[]},"G]m":{composition:["G]","B","E["],chartList:[]},"G]m6":{composition:["G]","B","E[","F"],chartList:[]},"G]m7":{composition:["G]","B","E[","F]"],chartList:[[4,4,4,4,6,4]]},"G]m7[5":{composition:["G]","B","D","F]"],chartList:[]},"G]m7]5":{composition:["G]","B","E","F]"],chartList:[[0,0,4,4,-1,4]]},"G]mM7":{composition:["G]","B","E[","G"],chartList:[]},"G]m9":{composition:["G]","B","E[","F]","B["],chartList:[]},"G]m11":{composition:["G]","B","E[","F]","B[","C]"],chartList:[]},"G]add2":{composition:["G]","C","E[","B["],chartList:[]},"G]add4":{composition:["G]","C","E[","C]"],chartList:[]},"G]add6":{composition:["G]","C","E[","F"],chartList:[]},A:{composition:["A","C]","E"],chartList:[[0,2,2,2,0,-1],[5,5,6,7,7,5]]},A6:{composition:["A","C]","E","F]"],chartList:[]},A7:{composition:["A","C]","E","G"],chartList:[[0,2,0,2,0,-1],[5,5,6,5,7,5]]},A9:{composition:["A","C]","E","G","B"],chartList:[]},A11:{composition:["A","C]","E","G","B","D"],chartList:[]},AM7:{composition:["A","C]","E","G]"],chartList:[[0,2,1,2,0,-1]]},Asus2:{composition:["A","B","E"],chartList:[[0,0,2,2,0,-1]]},Asus4:{composition:["A","D","E"],chartList:[]},A7sus2:{composition:["A","B","E","G"],chartList:[]},A7sus4:{composition:["A","D","E","G"],chartList:[[0,3,0,2,0,-1]]},Adim:{composition:["A","C","E["],chartList:[]},Adim7:{composition:["A","C","E[","F]"],chartList:[]},Am:{composition:["A","C","E"],chartList:[[0,1,2,2,0,-1],[5,5,5,7,7,5]]},Am6:{composition:["A","C","E","F]"],chartList:[[2,1,2,2,0,-1]]},Am7:{composition:["A","C","E","G"],chartList:[[0,1,0,2,0,-1],[5,5,6,5,7,5]]},"Am7[5":{composition:["A","C","E[","G"],chartList:[]},"Am7]5":{composition:["A","C","F","G"],chartList:[]},AmM7:{composition:["A","C","E","G]"],chartList:[[0,1,1,2,0,-1]]},Am9:{composition:["A","C","E","G","B"],chartList:[]},Am11:{composition:["A","C","E","G","B","D"],chartList:[]},Aadd2:{composition:["A","C]","E","B"],chartList:[[0,2,4,2,0,-1]]},Aadd4:{composition:["A","C]","E","D"],chartList:[]},Aadd6:{composition:["A","C]","E","F]"],chartList:[]},"B[":{composition:["B[","D","F"],chartList:[[1,3,3,3,1,-1]]},"B[6":{composition:["B[","D","F","G"],chartList:[]},"B[7":{composition:["B[","D","F","G]"],chartList:[]},"B[9":{composition:["B[","D","F","G]","C"],chartList:[]},"B[11":{composition:["B[","D","F","G]","C","E["],chartList:[]},"B[M7":{composition:["B[","D","F","A"],chartList:[]},"B[sus2":{composition:["B[","C","F"],chartList:[]},"B[sus4":{composition:["B[","E[","F"],chartList:[]},"B[7sus2":{composition:["B[","C","F","G]"],chartList:[]},"B[7sus4":{composition:["B[","E[","F","G]"],chartList:[]},"B[7[9":{composition:["B[","D","F","G]","B"],chartList:[[1,0,1,0,1,-1]]},"B[dim":{composition:["B[","C]","E"],chartList:[]},"B[dim7":{composition:["B[","C]","E","G"],chartList:[]},"B[m":{composition:["B[","C]","F"],chartList:[[1,2,3,3,1,-1]]},"B[m6":{composition:["B[","C]","F","G"],chartList:[]},"B[m7":{composition:["B[","C]","F","G]"],chartList:[]},"B[m7[5":{composition:["B[","C]","E","G]"],chartList:[]},"B[m7]5":{composition:["B[","C]","F]","G]"],chartList:[]},"B[mM7":{composition:["B[","C]","F","A"],chartList:[]},"B[m9":{composition:["B[","C]","F","G]","C"],chartList:[]},"B[m11":{composition:["B[","C]","F","G]","C","E["],chartList:[]},"B[add2":{composition:["B[","D","F","C"],chartList:[]},"B[add4":{composition:["B[","D","F","E["],chartList:[]},"B[add6":{composition:["B[","D","F","G"],chartList:[]},B:{composition:["B","E[","F]"],chartList:[[2,4,4,4,2,-1],[7,7,8,9,9,7]]},B6:{composition:["B","E[","F]","G]"],chartList:[]},B7:{composition:["B","E[","F]","A"],chartList:[[2,0,2,1,2,-1],[2,4,2,4,2,-1]]},B9:{composition:["B","E[","F]","A","C]"],chartList:[]},B11:{composition:["B","E[","F]","A","C]","E"],chartList:[]},BM7:{composition:["B","E[","F]","B["],chartList:[[2,4,3,4,2,-1]]},Bsus2:{composition:["B","C]","F]"],chartList:[]},Bsus4:{composition:["B","E","F]"],chartList:[[0,0,4,4,2,-1]]},B7sus2:{composition:["B","C]","F]","A"],chartList:[]},B7sus4:{composition:["B","E","F]","A"],chartList:[]},Bdim:{composition:["B","D","F"],chartList:[]},Bdim7:{composition:["B","D","F","G]"],chartList:[]},Bm:{composition:["B","D","F]"],chartList:[[2,3,4,4,2,-1]]},Bm6:{composition:["B","D","F]","G]"],chartList:[[2,3,4,4,2,-1]]},Bm7:{composition:["B","D","F]","A"],chartList:[[2,3,2,4,2,-1]]},"Bm7[5":{composition:["B","D","F","A"],chartList:[]},"Bm7]5":{composition:["B","D","G","A"],chartList:[]},BmM7:{composition:["B","D","F]","B["],chartList:[]},Bm9:{composition:["B","D","F]","A","C]"],chartList:[]},Bm11:{composition:["B","D","F]","A","C]","E"],chartList:[[0,3,2,0,2,-1]]},Badd2:{composition:["B","E[","F]","C]"],chartList:[]},Badd4:{composition:["B","E[","F]","E"],chartList:[]},Badd6:{composition:["B","E[","F]","G]"],chartList:[]},...r}},2399:function(t,i,o){"use strict";o.d(i,{Es:function(){return a},U7:function(){return _},UQ:function(){return N},yj:function(){return n}});var s=o(4296);let c=t=>s.zc.findIndex(i=>"string"==typeof i?i===t:i.includes(t)),n=t=>void 0===t?"":"["===t.charAt(1)||"]"===t.charAt(1)?t.substring(0,2):t.charAt(0),a=(t,i)=>{let o;let n=c(t),a=n+i;o=s.zc.length>a&&a>-1?a:a>0?a%s.zc.length:s.zc.length+a;let r=s.zc[o],m=["C","F","G"];return"string"==typeof r?r:function(t){let i=t[0].charAt(0);return m.includes(i)?t[0]:t[1]}(r)},r=(t,i)=>i.map(i=>a(t,i)),m=t=>r(t,[0,4,7]),p=t=>r(t,[0,4,7,9]),h=t=>r(t,[0,4,7,10]),L=t=>r(t,[0,4,7,10,14]),e=t=>r(t,[0,4,7,10,14,17]),d=t=>r(t,[0,4,7,11]),C=t=>r(t,[0,2,7]),B=t=>r(t,[0,5,7]),F=t=>r(t,[0,2,7,10]),E=t=>r(t,[0,5,7,10]),G=t=>r(t,[0,4,7,10,13]),l=t=>r(t,[0,3,6]),u=t=>r(t,[0,3,6,9]),A=t=>r(t,[0,3,7]),D=t=>r(t,[0,3,7,9]),f=t=>r(t,[0,3,7,10]),x=t=>r(t,[0,3,6,10]),g=t=>r(t,[0,3,8,10]),v=t=>r(t,[0,3,7,11]),b=t=>r(t,[0,3,7,10,14]),y=t=>r(t,[0,3,7,10,14,17]),M=t=>r(t,[0,4,7,14]),j=t=>r(t,[0,4,7,17]),N=t=>{let i=n(t);return t===i?m(i):t==="".concat(i,"6")?p(i):t==="".concat(i,"7")?h(i):t==="".concat(i,"9")?L(i):t==="".concat(i,"11")?e(i):t==="".concat(i,"M7")?d(i):t==="".concat(i,"sus2")?C(i):t==="".concat(i,"sus4")?B(i):t==="".concat(i,"7sus2")?F(i):t==="".concat(i,"7sus4")?E(i):t==="".concat(i,"7[9")?G(i):t==="".concat(i,"dim")?l(i):t==="".concat(i,"dim7")?u(i):t==="".concat(i,"m")?A(i):t==="".concat(i,"m6")?D(i):t==="".concat(i,"m7")?f(i):t==="".concat(i,"m7[5")?x(i):t==="".concat(i,"m7]5")?g(i):t==="".concat(i,"mM7")?v(i):t==="".concat(i,"m9")?b(i):t==="".concat(i,"m11")?y(i):t==="".concat(i,"add9")||t==="".concat(i,"add2")?M(i):t==="".concat(i,"add11")||t==="".concat(i,"add4")?j(i):[]},_=t=>t.replaceAll("[","<span>♭</span>").replaceAll("]","<span>♯</span>")},3484:function(t){t.exports={style:{fontFamily:"'__pretendard_3fb58d', '__pretendard_Fallback_3fb58d'"},className:"__className_3fb58d"}}}]);