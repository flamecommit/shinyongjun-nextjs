'use client';

import styled from 'styled-components';
import BaseGnb from '@/components/base/Gnb';
import { device } from '@/styles/mixin';

function BaseHeader() {
  return (
    <StyledBaseHeader>
      <BaseGnb />
    </StyledBaseHeader>
  );
}

const StyledBaseHeader = styled.header`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  border-bottom: 1px solid #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.7);
  overflow-x: auto;
  @media ${device.mobile} {
    height: 48px;
  }
`;

export default BaseHeader;
