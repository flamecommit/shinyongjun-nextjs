"use client";

import Link from "next/link";
import styled from "styled-components";

type Props = {
  tags: string[];
};

const TagList = ({ tags }: Props) => {
  return (
    <StyledTagList>
      {tags.map((tag) => {
        return (
          <div key={tag} className="tag-item">
            <Link href={`/tag/${tag}`}>{tag}</Link>
          </div>
        );
      })}
    </StyledTagList>
  );
};

const StyledTagList = styled.div`
  display: flex;
  column-gap: 12px;
  row-gap: 12px;
  .tag-item {
    a {
      display: block;
      padding: 12px;
      border: 1px solid #000;
    }
  }
`;

export default TagList;
