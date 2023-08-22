'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';

interface Props {
  children: React.ReactNode;
  letterSpacing?: number;
}

function ScoreWrapper({ children, letterSpacing }: Props) {
  return (
    <StyledScoreWrapper $letterSpacing={letterSpacing}>
      <p className="notice">※ 코드를 클릭하면 코드표가 나옵니다.</p>
      {children}
    </StyledScoreWrapper>
  );
}

const StyledScoreWrapper = styled.article<{ $letterSpacing?: number }>`
  display: grid;
  row-gap: 30px;
  font-size: 14px;
  .notice {
    margin-bottom: 0 !important;
    font-size: 14px;
    color: #f00;
  }
  .letter {
    flex-basis: ${(props) => `${props.$letterSpacing}em` || `1em`};
    width: ${(props) => `${props.$letterSpacing}em` || `1em`};
  }
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export default ScoreWrapper;
