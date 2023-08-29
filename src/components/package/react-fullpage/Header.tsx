'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';

function PackageReactFullpageHeader() {
  return (
    <StyledPackageReactFullpageHeader>
      <div className="gnb">
        <Link href="/package/react-fullpage/document">API</Link>
        <Link href="/package/react-fullpage">DEMO</Link>
      </div>
    </StyledPackageReactFullpageHeader>
  );
}

const StyledPackageReactFullpageHeader = styled.header`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  column-gap: 12px;
  height: 60px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: ${config.boxShadow1};
  overflow-x: auto;
  .gnb {
    display: flex;
    column-gap: 30px;
    align-items: center;
    .symbol {
      width: 27px;
      height: 27px;
    }
    a {
      &:hover {
        color: ${config.hoverText};
        text-decoration: underline;
      }
    }
  }
  @media ${device.mobile} {
    height: 48px;
  }
`;

export default PackageReactFullpageHeader;
