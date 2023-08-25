'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { device, ellipsis } from '@/styles/mixin';
import { config } from '@/styles/config';
import { IPost } from '@/types/post';

interface Props {
  prevPost: IPost | undefined;
  nextPost: IPost | undefined;
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
      background-color: ${config.primaryBg};
      padding: 18px 24px;
      border: 1px solid ${config.primaryLine};
      &:hover {
        background-color: ${config.secondaryBg};
        border-color: ${config.secondaryLine};
      }
      .direction {
        font-size: 14px;
      }
      .title {
        font-weight: 500;
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
    > div {
      &:not(:first-child) {
        a {
          margin-top: 12px;
        }
      }
      a {
        padding: 12px 18px;
        .direction {
          font-size: 12px;
        }
        .title {
          margin-top: 2px;
        }
      }
    }
  }
`;

export default PostNavigation;
