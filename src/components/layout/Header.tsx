'use client';

import styled from 'styled-components';
import LayoutGnb from '@/components/layout/Gnb';

function TheHeader() {
  return (
    <StyledTheHeader>
      <LayoutGnb />
    </StyledTheHeader>
  );
}

const StyledTheHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  border-bottom: 1px solid #000;
`;

export default TheHeader;
