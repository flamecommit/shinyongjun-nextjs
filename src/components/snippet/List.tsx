'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Snippet } from '@/services/snippet';
import { getFormatDatetime } from '@/utils/datetime';
import { device } from '@/styles/mixin';
import CategoryItem from '../category/Item';
import { config } from '@/styles/config';

type Props = {
  snippetList: Snippet[];
};

function SnippetList({ snippetList }: Props) {
  return (
    <StyledSnippetList>
      {snippetList.map((snippet) => {
        return (
          <div key={snippet.slug} className="snippet-item">
            <Link href={`/snippet/${snippet.slug}`} className="title">
              {snippet.title}
            </Link>
            <div className="date">
              {getFormatDatetime(snippet.date, 'YYYY-MM-DD')}
            </div>
            <div className="categories">
              {snippet.categories.map((category) => {
                return (
                  <CategoryItem
                    key={category}
                    category={category}
                    board="snippet"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </StyledSnippetList>
  );
}

const StyledSnippetList = styled.div`
  display: grid;
  .snippet-item {
    padding: 30px 0;
    border-bottom: 1px solid #dddddd;
    &:first-child {
      border-top: 1px solid #dddddd;
    }
    .title {
      font-weight: 500;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        color: ${config.hoverText};
      }
    }
    .date {
      font-size: 14px;
      margin-top: 6px;
      color: ${config.secondaryText};
    }
    .categories {
      display: flex;
      column-gap: 12px;
      margin-top: 6px;
    }
  }
  @media ${device.mobile} {
    .snippet-item {
      padding: 24px 0;
      .title {
        font-size: 16px;
      }
      .date {
        margin-top: 4px;
        font-size: 12px;
      }
      .categories {
        margin-top: 4px;
        column-gap: 8px;
      }
    }
  }
`;

export default SnippetList;
