'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';
import { roboto } from '@/styles/fonts';

type Props = {
  children: React.ReactNode;
};

function PageTitle({ children }: Props) {
  return <StyledPageTitle>{children}</StyledPageTitle>;
}

const StyledPageTitle = styled.h2`
  font-family: ${roboto.style.fontFamily};
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  margin-bottom: 30px;
  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 18px;
  }
`;

export default PageTitle;
