'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Post } from '@/libs/post';
import { getFormatDatetime } from '@/libs/utils/time';
import { config } from '@/styles/config';
import CategoryItem from '../category/Item';

type Props = {
  postList: Post[];
};

function PostList({ postList }: Props) {
  return (
    <StyledPostList>
      {postList.map((post) => {
        return (
          <div key={post.slug} className="post-item">
            <Link href={`/post/${post.slug}`} className="title">
              {post.title}
            </Link>
            <div className="date">
              {getFormatDatetime(post.date, 'YYYY-MM-DD')}
            </div>
            <div className="categories">
              {post.categories.map((category) => {
                return <CategoryItem key={category} category={category} />;
              })}
            </div>
          </div>
        );
      })}
    </StyledPostList>
  );
}

const StyledPostList = styled.div`
  display: grid;
  row-gap: 36px;
  .post-item {
    padding: 20px;
    border: 1px solid #000;
    .title {
      font-weight: 500;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        color: ${config.forestGreen};
      }
    }
    .date {
      font-size: 13px;
      margin-top: 6px;
      color: #666;
    }
    .categories {
      display: flex;
      column-gap: 12px;
      margin-top: 6px;
    }
  }
`;

export default PostList;
