'use client';

import { config } from '@/styles/config';
import { roboto } from '@/styles/fonts';
import styled from 'styled-components';

function BaseFooter() {
  return (
    <StyledBaseFooter>
      <p className="copyright">
        Copyright 2023. Shinyongjun All rights reserved.
      </p>
    </StyledBaseFooter>
  );
}

const StyledBaseFooter = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 60px;
  border-top: 1px solid ${config.gray2};
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  .copyright {
    font-family: ${roboto.style.fontFamily};
    font-size: 13px;
    color: #000;
  }
`;

export default BaseFooter;
