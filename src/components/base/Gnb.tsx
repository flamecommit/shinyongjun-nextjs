'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { coreActions } from '@/stores/features/core';

function BaseGnb() {
  const { categoryName } = useSelector((state: RootState) => state.core);
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(coreActions.setCategoryName(pathname.split('/')[1]));
  }, [pathname, dispatch]);

  return (
    <StyledBaseGnb>
      <Link
        className={`${(categoryName === 'post' || !categoryName) && 'active'}`}
        href="/"
      >
        Blog
      </Link>
      <Link
        className={`${categoryName === 'series' && 'active'}`}
        href="/series"
      >
        Series
      </Link>
      <Link className={`${categoryName === 'chord' && 'active'}`} href="/chord">
        Chord
      </Link>
      <Link className={`${categoryName === 'score' && 'active'}`} href="/score">
        Score
      </Link>
      {/* <Link className={`${categoryName === 'diary' && 'active'}`} href="/diary">
        Diary
      </Link> */}
      <Link className={`${categoryName === 'about' && 'active'}`} href="/about">
        About
      </Link>
      {/* <Link
        className={`${categoryName === 'history' && 'active'}`}
        href="/history"
      >
        History
      </Link> */}
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
