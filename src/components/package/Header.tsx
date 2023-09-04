'use client';

import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';
import { roboto } from '@/styles/fonts';
import { HiOutlineExternalLink } from '@react-icons/all-files/hi/HiOutlineExternalLink';

interface IProps {
  packageName: string;
}

function PackageHeader({ packageName }: IProps) {
  const pathname = usePathname();

  return (
    <StyledPackageHeader>
      <div className="gnb">
        <Link className={`${!pathname.split('/')[1] && 'active'}`} href="/">
          <img src="/images/symbol.webp" alt="" className="symbol" />
        </Link>
        <Link
          className={`${pathname === `/${packageName}/document` && 'active'}`}
          href={`/${packageName}/document`}
        >
          Document
        </Link>
        <Link
          className={`${pathname === `/${packageName}/example` && 'active'}`}
          href={`/${packageName}/example`}
        >
          Example
        </Link>
        <a
          href={`https://github.com/shinyj1991/${packageName}`}
          target="_blank"
          rel="noreferrer"
        >
          Repository
          <HiOutlineExternalLink />
        </a>
      </div>
    </StyledPackageHeader>
  );
}

const StyledPackageHeader = styled.header`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  column-gap: 12px;
  height: 60px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: ${config.boxShadow1};
  overflow-x: auto;
  .gnb {
    display: flex;
    column-gap: 30px;
    align-items: center;
    .symbol {
      width: 27px;
      height: 27px;
    }
    a {
      display: flex;
      column-gap: 4px;
      align-items: center;
      font-family: ${roboto.style.fontFamily};
      &:hover {
        color: ${config.hoverText};
      }
      &.active {
        font-weight: 700;
        color: ${config.hoverText};
      }
    }
  }
  @media ${device.mobile} {
    height: 48px;
  }
`;

export default PackageHeader;
