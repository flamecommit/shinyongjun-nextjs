'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';
import CategoryItem from './Item';

type Props = {
  categories: string[];
  board: string;
};

function CategoryList({ categories, board }: Props) {
  return (
    <StyledCategoryList>
      {categories.map((category) => {
        return (
          <CategoryItem board={board} key={category} category={category} />
        );
      })}
    </StyledCategoryList>
  );
}

const StyledCategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
  @media ${device.mobile} {
    gap: 8px;
  }
`;

export default CategoryList;
