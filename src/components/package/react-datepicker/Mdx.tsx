'use client';

import { Datepicker } from '@shinyongjun/react-datepicker';
import styled from 'styled-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MdxContents from '@/components/mdx/Contents';
import ReactDatepickerSection from './Section';
import { device } from '@/styles/mixin';

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
          components={{ Datepicker, ReactDatepickerSection }}
        />
      </MdxContents>
    </StyledReactDatepickerMdx>
  );
}

const StyledReactDatepickerMdx = styled.div`
  padding: 60px 30px 60px;
  @media ${device.mobile} {
    padding: 48px 12px 60px;
  }
`;

export default ReactDatepickerMdx;
