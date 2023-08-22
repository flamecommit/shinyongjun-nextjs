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

/**
 * B8D8D8
 * D3D3D3
 * 001F3F
 * 006400
 */

const StyledBaseFooter = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 60px;
  // background-color: #e0f2c2;
  background-color: #e6e1f2;
  border-top: 1px solid #c6c1e1;
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
