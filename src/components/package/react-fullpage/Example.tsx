'use client';

import styled from 'styled-components';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';
import { useState } from 'react';

function PackageReactFullpageExample() {
  const [controlIndex, setControlIndex] = useState<number>(0);

  return (
    <StyledPackageReactFullpageExample>
      <FullpageContainer
        controlIndex={controlIndex}
        setControlIndex={setControlIndex}
      >
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
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="section third">Third Section</div>
        </FullpageSection>
        <FullpageSection isAutoHeight>
          <div className="section footer">Footer Section</div>
        </FullpageSection>
      </FullpageContainer>
      <div className="fullpage-controller">
        <button
          type="button"
          className={`${controlIndex === 0 && 'active'}`}
          onClick={() => setControlIndex(0)}
        >
          1
        </button>
        <button
          type="button"
          className={`${controlIndex === 1 && 'active'}`}
          onClick={() => setControlIndex(1)}
        >
          2
        </button>
        <button
          type="button"
          className={`${controlIndex === 2 && 'active'}`}
          onClick={() => setControlIndex(2)}
        >
          3
        </button>
      </div>
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
  .fullpage-controller {
    display: grid;
    row-gap: 6px;
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    button {
      display: block;
      font-size: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #7d4e9f;
      opacity: 0.3;
      &.active {
        opacity: 1;
      }
    }
  }
`;

export default PackageReactFullpageExample;
