'use client';

import styled from 'styled-components';
import { device } from '@/styles/mixin';

function CommonSpinner() {
  return <StyledCommonSpinner />;
}

const StyledCommonSpinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    display: block;
    content: '';
    width: 60px;
    height: 60px;
    border: 6px solid #ccc;
    border-top: 6px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @media ${device.mobile} {
    &::after {
      width: 40px;
      height: 40px;
      border-width: 4px;
    }
  }
`;

export default CommonSpinner;
