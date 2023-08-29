'use client';

import styled from 'styled-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { device } from '@/styles/mixin';
import MdxContents from '../mdx/Contents';

interface Props {
  documentData: {
    mdx: MDXRemoteSerializeResult;
  };
}

function PackageDocumentViewer({ documentData }: Props) {
  return (
    <>
      <StyledPackageDocumentViewer>
        <MdxContents>
          <MDXRemote {...documentData.mdx} />
        </MdxContents>
      </StyledPackageDocumentViewer>
    </>
  );
}

const StyledPackageDocumentViewer = styled.div`
  padding: 100px 50px 50px;
  min-height: 100vh;
  background-color: #f6f8fa;
  .mdx-contents {
    padding: 30px 50px;
    table {
      table-layout: fixed;
      width: 100%;
    }
  }
  @media ${device.mobile} {
    padding: 48px 0 0;
    .mdx-contents {
      padding: 20px;
    }
  }
`;

export default PackageDocumentViewer;
