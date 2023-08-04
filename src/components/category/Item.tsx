'use client';

import Link from 'next/link';
import styled from 'styled-components';

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
  padding: 6px;
  border: solid #000;
  border: 1px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default CategoryItem;
