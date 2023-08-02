'use client';

import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function PageTitle({ children }: Props) {
  return <StyledPageTitle>{children}</StyledPageTitle>;
}

const StyledPageTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 24px;
`;

export default PageTitle;
