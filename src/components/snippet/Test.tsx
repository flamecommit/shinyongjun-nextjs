'use client';

import styled from 'styled-components';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';

function SnippetTest() {
  return (
    <StyledSnippetTest>
      <div>teset</div>
      <FullpageContainer>
        <FullpageSection>
          <div>1</div>
        </FullpageSection>
        <FullpageSection>
          <div>1</div>
        </FullpageSection>
        <FullpageSection>
          <div>1</div>
        </FullpageSection>
        <FullpageSection>
          <div>1</div>
        </FullpageSection>
      </FullpageContainer>
    </StyledSnippetTest>
  );
}

const StyledSnippetTest = styled.div`
  padding: 50px;
`;

export default SnippetTest;
