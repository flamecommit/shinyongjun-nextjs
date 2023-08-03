'use client';

import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function TheContainer({ children }: Props) {
  return <StyledTheContainer>{children}</StyledTheContainer>;
}

const StyledTheContainer = styled.main`
  max-width: 768px;
  margin-inline: auto;
  padding: 60px 30px;
`;

export default TheContainer;
