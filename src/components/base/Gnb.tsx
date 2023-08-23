'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { coreActions } from '@/stores/features/core';
import { roboto } from '@/styles/fonts';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

function BaseGnb() {
  const { categoryName } = useAppSelector((state) => state.core);
  const dispatch = useAppDispatch();
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
        Post
      </Link>
      <Link
        className={`${categoryName === 'snippet' && 'active'}`}
        href="/snippet"
      >
        Snippet
      </Link>
      {/* <Link
        className={`${categoryName === 'series' && 'active'}`}
        href="/series"
      >
        Series
      </Link> */}
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
    font-family: ${roboto.style.fontFamily};
    font-size: 16px;
    &.active {
      font-weight: 700;
    }
  }
`;

export default BaseGnb;
