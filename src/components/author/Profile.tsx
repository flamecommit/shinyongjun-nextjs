'use client';

import styled from 'styled-components';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

function AuthorProfile() {
  return (
    <StyledAuthorProfile>
      <div className="avatar">
        <img src="/images/author-avatar.jpg" alt="" />
      </div>
      <div className="names-container">
        <div className="name">신용준</div>
        <div className="bio">Simplicity rules the world</div>
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
