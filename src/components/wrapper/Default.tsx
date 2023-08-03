'use client';

import styled from 'styled-components';
import LayoutContainer from '@/components/layout/Container';
import LayoutHeader from '@/components/layout/Header';

type Props = {
  children: React.ReactNode;
};

function DefaultWrapper({ children }: Props) {
  return (
    <StyledDefaultWrapper>
      <LayoutHeader />
      <LayoutContainer>{children}</LayoutContainer>
    </StyledDefaultWrapper>
  );
}

const StyledDefaultWrapper = styled.div``;

export default DefaultWrapper;
