'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';

type Props = {
  children: React.ReactNode;
};

function BaseContainer({ children }: Props) {
  return <StyledBaseContainer>{children}</StyledBaseContainer>;
}

const StyledBaseContainer = styled.main`
  max-width: 768px;
  margin-inline: auto;
  padding: 36px;
  margin-block: 60px;
  background-color: #fff;
  @media ${device.mobile} {
    margin-block: 0;
    padding: 24px 12px 60px;
  }
`;

export default BaseContainer;
