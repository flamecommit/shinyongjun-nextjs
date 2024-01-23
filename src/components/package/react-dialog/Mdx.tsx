'use client';

import '@shinyongjun/react-datepicker/css';
import styled from 'styled-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MdxContents from '@/components/mdx/Contents';
import ReactDialogSection from './Section';
import { device } from '@/styles/mixin';
import { AlertExample, ConfirmExample, PromptExample } from './ExampleCode';

interface IProps {
  documentData: {
    mdx: MDXRemoteSerializeResult;
  };
}

function ReactDatepickerMdx({ documentData }: IProps) {
  return (
    <StyledReactDatepickerMdx>
      <MdxContents>
        <MDXRemote
          {...documentData.mdx}
          components={{
            AlertExample,
            ConfirmExample,
            PromptExample,
            ReactDialogSection,
          }}
        />
      </MdxContents>
    </StyledReactDatepickerMdx>
  );
}

const StyledReactDatepickerMdx = styled.div`
  padding: 60px 50px 100px;
  min-height: 100vh;
  background-color: #f6f8fa;
  .mdx-contents {
    width: 1024px;
    max-width: 100%;
    padding: 36px;
    margin: 60px auto;
  }
  @media ${device.mobile} {
    padding: 48px 0 100px;
    .mdx-contents {
      padding: 20px;
      margin: 0;
    }
  }
`;

export default ReactDatepickerMdx;
