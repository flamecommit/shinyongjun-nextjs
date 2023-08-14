'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';
import CategoryItem from './Item';

type Props = {
  categories: string[];
};

function CategoryList({ categories }: Props) {
  return (
    <StyledCategoryList>
      {categories.map((category) => {
        return <CategoryItem key={category} category={category} />;
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
