'use client';

import { roboto } from '@/styles/fonts';
import { device } from '@/styles/mixin';
import styled from 'styled-components';

interface Props {
  propsData: {
    name: string;
    component?: string;
    required?: string;
    type?: string;
    default?: string;
    description?: string;
  };
}

function PropsTable({ propsData }: Props) {
  return (
    <StyledPropsTable>
      <h3 id={propsData.name}>
        <a href={`#${propsData.name}`}># {propsData.name}</a>
      </h3>
      <div className="parameterList">
        {Object.entries(propsData)
          .filter(([key]) => key !== 'name')
          .map(([key, value]) => (
            <dl className={key} key={key}>
              <dt>{key}</dt>
              <dd>
                {key === 'component' ? (
                  <div className="value">{value}</div>
                ) : (
                  <div
                    className="value"
                    dangerouslySetInnerHTML={{ __html: value }}
                  />
                )}
              </dd>
            </dl>
          ))}
      </div>
    </StyledPropsTable>
  );
}

const StyledPropsTable = styled.div`
  margin-block: 30px;
  h3 {
    scroll-margin-top: 60px;
  }
  .parameterList {
    padding-left: 16px;
    display: grid;
    row-gap: 6px;
  }
  dl {
    position: relative;
    margin: 0;
    display: flex;
    align-items: flex-start;
    &::before {
      display: block;
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #333;
      position: absolute;
      top: 14px;
      left: -8px;
    }
    dt {
      margin: 0;
    }
    dd {
      display: flex;
      align-items: center;
      margin: 0;
    }
  }
  dl.required,
  dl.type,
  dl.default {
    dd {
      .value {
        display: inline-block;
        background-color: #eff1f3;
        font-family: Consolas, ${roboto.style.fontFamily};
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5em;
        padding: 0 0.4em;
        margin-block: 0.25em;
        border-radius: 6px;
      }
    }
  }
  dl.component {
    dd {
      .value {
        font-weight: 700;
        color: #267f99;
        font-family: Consolas, ${roboto.style.fontFamily};
        letter-spacing: -0.05em;
      }
    }
  }
  @media ${device.mobile} {
    .parameterList {
      row-gap: 0;
    }
  }
`;

export default PropsTable;
