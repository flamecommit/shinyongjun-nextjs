'use client';

import styled from 'styled-components';
import BaseGnb from '@/components/base/Gnb';

function BaseHeader() {
  return (
    <StyledBaseHeader>
      <BaseGnb />
    </StyledBaseHeader>
  );
}

const StyledBaseHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  border-bottom: 1px solid #000;
`;

export default BaseHeader;
