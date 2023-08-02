'use client';

import styled from 'styled-components';
import TagItem from './Item';

type Props = {
  tags: string[];
};

function TagList({ tags }: Props) {
  return (
    <StyledTagList>
      {tags.map((tag) => {
        return <TagItem key={tag} tag={tag} />;
      })}
    </StyledTagList>
  );
}

const StyledTagList = styled.div`
  display: flex;
  column-gap: 12px;
  row-gap: 12px;
`;

export default TagList;
