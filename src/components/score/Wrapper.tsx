'use client';

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function ScoreWrapper({ children }: Props) {
  return (
    <>
      <StyledScoreWrapper>{children}</StyledScoreWrapper>
    </>
  );
}

const StyledScoreWrapper = styled.article`
  display: grid;
  row-gap: 30px;
`;

export default ScoreWrapper;
