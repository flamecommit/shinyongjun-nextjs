'use client';

import Link from 'next/link';
import styled from 'styled-components';

function BaseGnb() {
  return (
    <StyledBaseGnb>
      <Link href="/">Home</Link>
      <Link href="/category">Category</Link>
      <Link href="/about">About</Link>
      <Link href="/history">History</Link>
      <Link href="/diary">Diary</Link>
    </StyledBaseGnb>
  );
}

const StyledBaseGnb = styled.nav`
  display: flex;
  column-gap: 30px;
  a {
    font-family: 'Roboto';
    font-size: 16px;
  }
`;

export default BaseGnb;
