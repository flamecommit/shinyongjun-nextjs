'use client';

import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  tag: string;
};

function TagItem({ tag }: Props) {
  return <StyledTagItem href={`/tag/${tag}`}>{tag}</StyledTagItem>;
}

const StyledTagItem = styled(Link)`
  padding: 6px;
  border: solid #000;
  border: 1px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default TagItem;
