'use client';

import styled from 'styled-components';
import TheContainer from '@/components/the/Container';
import TheHeader from '@/components/the/Header';

type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <StyledDefaultLayout>
      <TheHeader />
      <TheContainer>{children}</TheContainer>
    </StyledDefaultLayout>
  );
}

const StyledDefaultLayout = styled.div``;

export default DefaultLayout;
