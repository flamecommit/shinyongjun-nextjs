'use client';

import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { Post } from '@/libs/post';
import { getFormatDatetime } from '@/libs/utils/time';
import { prism } from '@/styles/prism';
import { markdown } from '@/styles/markdown';

interface Props {
  postData: Post;
}

function PostViewer({ postData }: Props) {
  return (
    <StyledPostViewer>
      <header className="post-header">
        <h1 className="post-title">{postData.title}</h1>
        <div className="post-date">
          {getFormatDatetime(postData.date, 'YYYY-MM-DD')}
        </div>
      </header>
      <div className="post-content">
        <MDXRemote {...postData.mdx} />
      </div>
    </StyledPostViewer>
  );
}

const StyledPostViewer = styled.article`
  .post-header {
    text-align: center;
    padding-block: 60px;
    .post-title {
      font-weight: 700;
      font-size: 48px;
      margin-bottom: 12px;
    }
    .post-date {
      margin-top: 6px;
      color: #666;
    }
  }
  .post-content {
    ${markdown}
    ${prism}
  }
`;

export default PostViewer;
