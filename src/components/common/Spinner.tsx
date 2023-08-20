'use client';

import styled from 'styled-components';

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
    width: 100px;
    height: 100px;
    border: 10px solid transparent;
    border-top: 10px solid #666;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
`;

export default CommonSpinner;
