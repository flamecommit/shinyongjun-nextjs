'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { roboto } from '@/styles/fonts';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';
import { usePathname } from 'next/navigation';

function BaseGnb() {
  const pathname = usePathname();

  return (
    <StyledBaseGnb>
      <Link className={`${!pathname.split('/')[1] && 'active'}`} href="/">
        <img src="/images/symbol.webp" alt="" className="symbol" />
      </Link>
      <Link
        className={`${pathname.split('/')[1] === 'post' && 'active'}`}
        href="/post"
      >
        Post
      </Link>
      <Link
        className={`${pathname.split('/')[1] === 'snippet' && 'active'}`}
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
      <Link
        className={`${pathname.split('/')[1] === 'chord' && 'active'}`}
        href="/chord"
      >
        Chord
      </Link>
      {/* <Link className={`${categoryName === 'score' && 'active'}`} href="/score">
        Score
      </Link> */}
      {/* <Link className={`${categoryName === 'diary' && 'active'}`} href="/diary">
        Diary
      </Link> */}
      {/* <Link className={`${categoryName === 'about' && 'active'}`} href="/about">
        About
      </Link> */}
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
  align-items: center;
  a {
    font-family: ${roboto.style.fontFamily};
    font-size: 18px;
    .symbol {
      width: 27px;
      height: 27px;
    }
    &:hover {
      color: ${config.hoverText};
    }
    &.active {
      font-weight: 700;
      color: ${config.hoverText};
      // color: #775da5;
      // color: #7d4e9f;
      // color: #8a3b8f;
    }
  }
  @media ${device.mobile} {
    column-gap: 24px;
    a {
      font-size: 16px;
    }
  }
`;

export default BaseGnb;
