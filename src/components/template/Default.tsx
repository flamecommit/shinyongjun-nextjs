'use client';

import styled from 'styled-components';
import BaseContainer from '@/components/base/Container';
import BaseHeader from '@/components/base/Header';

type Props = {
  children: React.ReactNode;
};

function DefaultTemplate({ children }: Props) {
  return (
    <StyledDefaultTemplate>
      <BaseHeader />
      <BaseContainer>{children}</BaseContainer>
    </StyledDefaultTemplate>
  );
}

const StyledDefaultTemplate = styled.div``;

export default DefaultTemplate;
