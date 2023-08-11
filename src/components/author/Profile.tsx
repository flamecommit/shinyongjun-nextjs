'use client';

import styled from 'styled-components';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

interface Props {
  postDetail?: boolean;
}

function AuthorProfile({ postDetail }: Props) {
  return (
    <StyledAuthorProfile data-is-detail={postDetail}>
      <div className="avatar">
        <img src="/images/author-avatar.jpg" alt="" />
      </div>
      <div className="names-container">
        <div className="name">신용준</div>
        <div className="bio">단순함이 세상을 지배한다</div>
        <div className="links">
          <a
            href="https://github.com/shinyj1991"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub style={{ color: '#000000' }} />
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
    margin-top: 120px;
    padding-bottom: 60px;
    border-bottom: 1px solid #ddd;
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
      font-size: 20px;
      letter-spacing: -0.05em;
    }
    .bio {
      color: #666;
      font-size: 14px;
      letter-spacing: -0.02em;
    }
    .links {
      margin-top: 6px;
      a {
        font-size: 20px;
        line-height: 1;
      }
    }
  }
`;

export default AuthorProfile;
