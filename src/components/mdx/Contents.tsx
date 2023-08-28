'use client';

import styled from 'styled-components';
import { prism } from '@/styles/prism';
import { markdown } from '@/styles/markdown';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';

interface Props {
  children: React.ReactNode;
}

function MdxContents({ children }: Props) {
  return (
    <StyledMdxContents className="mdx-contents">{children}</StyledMdxContents>
  );
}

const StyledMdxContents = styled.div`
  ${markdown}
  ${prism}
line-height: 1.8;
  img {
    display: block;
    cursor: pointer;
    margin-inline: auto;
  }
  .image-cite {
    display: block;
    text-align: center;
    margin-top: 6px;
    color: #666;
    font-size: 12px;
  }
  code {
    display: inline-block;
    font-size: 14px;
    line-height: 1.5em;
    padding-block: 0;
    margin-block: 0.25em;
  }
  .rehype-code-title {
    text-align: right;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 14px;
    text-shadow: 0 1px white;
    position: relative;
    background-color: ${config.primaryBg};
    border-radius: 6px;
    padding: 6px 16px;
    border: solid ${config.primaryLine};
    border-width: 1px 1px 0;
  }
  ol {
    list-style: decimal;
  }
  ul {
    list-style: disc;
  }
  pre {
    border: 1px solid ${config.primaryLine};
  }
  @media ${device.mobile} {
    font-size: 14px;
    code {
      font-size: 12px;
      margin-block: 0.3em;
    }
    .rehype-code-title {
      font-size: 12px;
    }
  }
`;

export default MdxContents;
