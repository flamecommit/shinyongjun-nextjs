'use client';

import styled from 'styled-components';

function AuthorProfile() {
  return (
    <StyledAuthorProfile>
      <div className="avatar">
        <img src="/images/author-avatar.jpg" alt="" />
      </div>
      <div className="names-container">
        <div className="name">Yongjun Shin</div>
        <div className="bio">Welcome to shinyongjun.com</div>
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
      font-weight: 700;
      font-size: 20px;
    }
    .bio {
      margin-top: 6px;
      color: #000;
    }
  }
`;

export default AuthorProfile;
