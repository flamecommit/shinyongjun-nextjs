'use client';

import Link from 'next/link';
import styled from 'styled-components';

function BaseGnb() {
  return (
    <StyledBaseGnb>
      <Link href="/">Home</Link>
      <Link href="/category">Category</Link>
    </StyledBaseGnb>
  );
}

const StyledBaseGnb = styled.nav`
  display: flex;
  column-gap: 24px;
  a {
    font-family: 'Roboto';
    font-size: 20px;
  }
`;

export default BaseGnb;
