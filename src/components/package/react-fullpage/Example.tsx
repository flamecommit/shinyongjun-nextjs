'use client';

import styled from 'styled-components';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';
import { useState } from 'react';
import { device } from '@/styles/mixin';

function PackageReactFullpageExample() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <StyledPackageReactFullpageExample>
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onAfterLoad={() => {
          console.log('After Load');
        }}
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
          className={`${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => setActiveIndex(0)}
        >
          1
        </button>
        <button
          type="button"
          className={`${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => setActiveIndex(1)}
        >
          2
        </button>
        <button
          type="button"
          className={`${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => setActiveIndex(2)}
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
  @media ${device.mobile} {
    .fullpage-controller {
      right: 20px;
    }
  }
`;

export default PackageReactFullpageExample;
