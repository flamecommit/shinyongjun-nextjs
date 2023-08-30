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
  padding: 60px 50px 50px;
  min-height: 100vh;
  background-color: #f6f8fa;
  .mdx-contents {
    width: 768px;
    max-width: 100%;
    padding: 36px;
    margin: 60px auto;
    table {
      table-layout: fixed;
      width: 100%;
    }
  }
  @media ${device.mobile} {
    padding: 48px 0 0;
    .mdx-contents {
      padding: 20px;
      margin: 0;
    }
  }
`;

export default PackageDocumentViewer;
