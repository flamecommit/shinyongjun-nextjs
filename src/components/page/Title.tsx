'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';

type Props = {
  children: React.ReactNode;
};

function PageTitle({ children }: Props) {
  return <StyledPageTitle>{children}</StyledPageTitle>;
}

const StyledPageTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 30px;
  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 18px;
  }
`;

export default PageTitle;
