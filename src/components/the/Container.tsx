'use client';

import styled from 'styled-components';

function TheContainer({ children }: { children: React.ReactNode }) {
  return <StyledTheContainer>{children}</StyledTheContainer>;
}

const StyledTheContainer = styled.main`
  max-width: 768px;
  margin-inline: auto;
  padding: 60px 30px;
`;

export default TheContainer;
