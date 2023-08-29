'use client';

import styled from 'styled-components';
import { FullpageWrapper, FullpageSection } from '@shinyongjun/test';

function SnippetTest() {
  return (
    <StyledSnippetTest>
      <FullpageWrapper />
      <FullpageSection />
    </StyledSnippetTest>
  );
}

const StyledSnippetTest = styled.div`
  padding: 50px;
`;

export default SnippetTest;
