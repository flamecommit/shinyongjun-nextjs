'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function BaseGnb() {
  const pathname = usePathname();
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    setCategoryName(pathname.split('/')[1]);
  }, [pathname]);

  return (
    <StyledBaseGnb>
      <Link
        className={`${(categoryName === 'post' || !categoryName) && 'active'}`}
        href="/"
      >
        Blog
      </Link>
      <Link
        className={`${categoryName === 'category' && 'active'}`}
        href="/category"
      >
        Category
      </Link>
      <Link className={`${categoryName === 'about' && 'active'}`} href="/about">
        About
      </Link>
      <Link
        className={`${categoryName === 'history' && 'active'}`}
        href="/history"
      >
        History
      </Link>
      <Link className={`${categoryName === 'diary' && 'active'}`} href="/diary">
        Diary
      </Link>
    </StyledBaseGnb>
  );
}

const StyledBaseGnb = styled.nav`
  display: flex;
  column-gap: 30px;
  a {
    font-family: 'Roboto';
    font-size: 16px;
    &.active {
      font-weight: 700;
    }
  }
`;

export default BaseGnb;
