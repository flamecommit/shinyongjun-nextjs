'use client';

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function ScoreWrapper({ children }: Props) {
  return (
    <>
      <StyledScoreWrapper>
        <p className="notice">※ 코드를 클릭하면 코드표가 나옵니다.</p>
        {children}
      </StyledScoreWrapper>
    </>
  );
}

const StyledScoreWrapper = styled.article`
  display: grid;
  row-gap: 30px;
  .notice {
    margin-bottom: 0 !important;
    font-size: 14px;
    color: #f00;
  }
`;

export default ScoreWrapper;
