'use client';

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function CommonEmpty({ children }: Props) {
  return <StyledCommonEmpty>{children}</StyledCommonEmpty>;
}

const StyledCommonEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #f7f7f7;
`;

export default CommonEmpty;
