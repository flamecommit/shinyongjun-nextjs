'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';

type Props = {
  category: string;
};

function CategoryItem({ category }: Props) {
  return (
    <StyledCategoryItem href={`/category/${category}`}>
      {category}
    </StyledCategoryItem>
  );
}

const StyledCategoryItem = styled(Link)`
  padding: 3px 12px;
  background-color: ${config.gray1};
  border: 1px solid ${config.gray2};
  color: #000;
  font-size: 14px;
  &:hover {
    background-color: ${config.gray3};
    border-color: ${config.gray3};
  }
  @media ${device.mobile} {
    padding: 2px 8px;
    font-size: 12px;
  }
`;

export default CategoryItem;
