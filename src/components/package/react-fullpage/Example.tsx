'use client';

import styled from 'styled-components';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';

function PackageReactFullpageExample() {
  return (
    <StyledPackageReactFullpageExample>
      <FullpageContainer>
        <FullpageSection>
          <div className="section first">
            Welcome @shinyongjun/react-fullpage
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="section second">
            <div>
              <h2>HasScroll</h2>
              {Array(100)
                .fill(1)
                .map((i, index) => {
                  return <div key={index}>↓</div>;
                })}
              <div>1</div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="section third">Third Section</div>
        </FullpageSection>
        <FullpageSection isFooter>
          <div className="section footer">Footer Section</div>
        </FullpageSection>
      </FullpageContainer>
    </StyledPackageReactFullpageExample>
  );
}

const StyledPackageReactFullpageExample = styled.div`
  .section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.first {
      background-color: #ebd573;
    }
    &.second {
      background-color: #a2ebbd;
    }
    &.third {
      background-color: #ebda8a;
    }
    &.footer {
      height: 200px;
      background-color: #7374eb;
    }
  }
`;

export default PackageReactFullpageExample;
