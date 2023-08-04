'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Post } from '@/libs/services/post';
import { getFormatDatetime } from '@/libs/utils/time';
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
  .post-item {
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