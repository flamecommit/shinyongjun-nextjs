'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Post } from '@/services/post';
import { device, ellipsis } from '@/styles/mixin';

interface Props {
  prevPost: Post | undefined;
  nextPost: Post | undefined;
}

function PostNavigation({ nextPost, prevPost }: Props) {
  return (
    <StyledPostNavigation>
      <div className="prev-post">
        {prevPost && (
          <Link href={`/post/${prevPost.slug}`}>
            <div className="direction">이전 글</div>
            <div className="title">{prevPost.title}</div>
          </Link>
        )}
      </div>
      <div className="next-post">
        {nextPost && (
          <Link href={`/post/${nextPost.slug}`}>
            <div className="direction">다음 글</div>
            <div className="title">{nextPost.title}</div>
          </Link>
        )}
      </div>
    </StyledPostNavigation>
  );
}

const StyledPostNavigation = styled.nav`
  display: flex;
  column-gap: 12px;
  margin-top: 120px;
  > div {
    flex-grow: 1;
    flex-basis: 100%;
    a {
      display: block;
      border-radius: 6px;
      background-color: #f6f8fa;
      padding: 18px 24px;
      &:hover {
        background-color: #eee;
      }
      .direction {
        font-size: 14px;
      }
      .title {
        margin-top: 6px;
        ${ellipsis(1)}
      }
    }
    &.next-post {
      text-align: right;
      .title {
        direction: rtl;
      }
    }
  }
  @media ${device.mobile} {
    display: grid;
    row-gap: 12px;
    > div {
      a {
        padding: 12px 18px;
      }
    }
  }
`;

export default PostNavigation;
