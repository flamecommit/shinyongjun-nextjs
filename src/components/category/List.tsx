'use client';

import styled from 'styled-components';
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
  column-gap: 12px;
  row-gap: 12px;
  margin-bottom: 36px;
`;

export default CategoryList;
