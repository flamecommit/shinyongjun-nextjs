'use client';

import Link from 'next/link';
import styled from 'styled-components';

function TheGnb() {
  return (
    <StyledTheGnb>
      <Link href="/">Home</Link>
      <Link href="/category">Category</Link>
    </StyledTheGnb>
  );
}

const StyledTheGnb = styled.nav`
  display: flex;
  column-gap: 24px;
  a {
    font-size: 20px;
  }
`;

export default TheGnb;
