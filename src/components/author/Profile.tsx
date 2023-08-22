'use client';

import styled from 'styled-components';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';

interface Props {
  postDetail?: boolean;
}

function AuthorProfile({ postDetail }: Props) {
  const { categoryName } = useSelector((state: RootState) => state.core);

  return (
    <StyledAuthorProfile data-is-detail={postDetail}>
      <div className="avatar">
        <img src="/images/author-avatar.jpg" alt="숲길에서 찍은 사진" />
      </div>
      <div className="names-container">
        <Link className="name" href="/about" data-category={categoryName}>
          신용준
        </Link>
        <div className="bio">{process.env.BIO}</div>
        <div className="links">
          <a
            href="https://github.com/shinyj1991"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub style={{ color: '#000000' }} title="Github" />
          </a>
        </div>
      </div>
    </StyledAuthorProfile>
  );
}

const StyledAuthorProfile = styled.div`
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  column-gap: 30px;
  &[data-is-detail='true'] {
    margin-top: 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid ${config.primaryLine};
  }
  .avatar {
    img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
    }
  }
  .names-container {
    .name {
      font-weight: 500;
      font-size: 20px;
      letter-spacing: -0.05em;
      &:hover {
        color: ${config.hoverText};
        text-decoration: underline;
      }
      &[data-category='about'] {
        pointer-events: none;
      }
    }
    .bio {
      color: #777;
      font-size: 14px;
      letter-spacing: -0.02em;
    }
    .links {
      display: flex;
      margin-top: 6px;
      a {
        display: block;
        font-size: 20px;
        line-height: 1;
      }
    }
  }
  @media ${device.mobile} {
    column-gap: 24px;
    margin-bottom: 24px;
    &[data-is-detail='true'] {
      margin-top: 42px;
      padding-bottom: 42px;
    }
    .avatar {
      img {
        width: 96px;
        height: 96px;
      }
    }
    .names-container {
      .name {
        font-size: 16px;
      }
      .bio {
        font-size: 12px;
      }
    }
  }
`;

export default AuthorProfile;
