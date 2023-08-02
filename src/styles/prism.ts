import { css } from "styled-components";

export const prism = css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #f5f2f0;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .hljs-comment,
  .hljs-prolog,
  .hljs-doctype,
  .hljs-cdata {
    color: slategray;
  }

  .hljs-punctuation {
    color: #999;
  }

  .hljs-namespace {
    opacity: 0.7;
  }

  .hljs-property,
  .hljs-tag,
  .hljs-boolean,
  .hljs-number,
  .hljs-constant,
  .hljs-symbol,
  .hljs-deleted {
    color: #905;
  }

  .hljs-selector,
  .hljs-attr-name,
  .hljs-string,
  .hljs-char,
  .hljs-builtin,
  .hljs-inserted {
    color: #690;
  }

  .hljs-operator,
  .hljs-entity,
  .hljs-url,
  .language-css .hljs-string,
  .style .hljs-string {
    color: #9a6e3a;
    /* This background color was intended by the author of this theme. */
    background: hsla(0, 0%, 100%, 0.5);
  }

  .hljs-atrule,
  .hljs-attr-value,
  .hljs-keyword {
    color: #07a;
  }

  .hljs-function,
  .hljs-class-name {
    color: #dd4a68;
  }

  .hljs-regex,
  .hljs-important,
  .hljs-variable {
    color: #e90;
  }

  .hljs-important,
  .hljs-bold {
    font-weight: bold;
  }
  .hljs-italic {
    font-style: italic;
  }

  .hljs-entity {
    cursor: help;
  }
`;
