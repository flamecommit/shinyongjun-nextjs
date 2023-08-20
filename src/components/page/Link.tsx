'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';
import { device } from '@/styles/mixin';

type Props = {
  children: React.ReactNode;
  href: string;
};

function PageLink({ children, href }: Props) {
  return (
    <StyledPageLink className="page-link">
      <Link href={href}>
        {children} <FiArrowRight />
      </Link>
    </StyledPageLink>
  );
}

const StyledPageLink = styled.h2`
  margin-bottom: 30px;
  a {
    display: inline-flex;
    align-items: center;
    column-gap: 4px;
    &:hover {
      color: #1f883d;
      svg {
        transform: translateX(3px);
      }
    }
  }
  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

export default PageLink;
