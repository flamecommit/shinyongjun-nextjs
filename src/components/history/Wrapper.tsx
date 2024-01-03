'use client';

import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COMPONY_LIST, PROJECT_LIST } from '@/constants/history';
import { device, ellipsis } from '@/styles/mixin';
import { config } from '@/styles/config';
import { IHistory, TCompany, TProject } from '@/types/history';

function HistoryWrapper() {
  const [histories, setHistories] = useState<IHistory[]>([]);

  useEffect(() => {
    const now = new Date();
    const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const todayYear = koreaTime.getFullYear();
    const todayMonth = koreaTime.getMonth() + 1;
    const historyStart = [2013, 9];
    const temp = [];
    let rowIndex = 0;

    for (let year = todayYear; year >= historyStart[0]; year--) {
      const lastMonth = year === todayYear ? todayMonth : 12;
      const firstMonth = year === historyStart[0] ? historyStart[1] : 1;

      for (let month = lastMonth; month >= firstMonth; month--) {
        const company: TCompany | undefined = COMPONY_LIST.find(
          (item) => item.leave[0] === year && item.leave[1] === month,
        );

        const project: TProject | undefined = PROJECT_LIST.find(
          (item) => item.ended[0] === year && item.ended[1] === month,
        );

        temp.push({
          index: ++rowIndex,
          key: `${year}-${month}`,
          year,
          yearSize: month === lastMonth ? lastMonth - firstMonth + 1 : 0,
          month,
          company: company && {
            ...company,
            size: (year - company.join[0]) * 12 + month - company.join[1] + 1,
          },
          project: project && {
            ...project,
            size:
              (year - project.started[0]) * 12 + month - project.started[1] + 1,
          },
        });
      }
    }

    setHistories(temp);
  }, []);

  return (
    <StyledHistoryWrapper>
      <div className="history-head">
        <div>Year</div>
        <div>Month</div>
        <div>Company</div>
        <div>Project</div>
      </div>
      <div className="history-body">
        {histories.map((history) => {
          return (
            <Fragment key={history.key}>
              <div
                className="year"
                data-value={history.yearSize > 0}
                style={{
                  gridColumnStart: 1,
                  gridColumnEnd: 1,
                  gridRowStart: history.index,
                  gridRowEnd: history.index + history.yearSize,
                }}
              >
                <div className="sticky">
                  {history.yearSize > 0 && history.year}
                </div>
              </div>
              <div className="month">
                <div className="sticky">{history.month}</div>
              </div>
              <div
                className="company"
                data-value={!!history.company?.size}
                style={{
                  gridColumnStart: 3,
                  gridColumnEnd: 3,
                  gridRowStart: history.index,
                  gridRowEnd: history.index + (history.company?.size ?? 0),
                }}
              >
                <div className="sticky">
                  <div className="ellipsis">{history.company?.name}</div>
                </div>
              </div>
              <div
                className="project"
                data-value={!!history.project?.size}
                style={{
                  gridColumnStart: 4,
                  gridColumnEnd: 4,
                  gridRowStart: history.index,
                  gridRowEnd: history.index + (history.project?.size ?? 0),
                }}
              >
                <div className="sticky">
                  <div className="ellipsis">{history.project?.name}</div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </StyledHistoryWrapper>
  );
}

const StyledHistoryWrapper = styled.div`
  .history-head {
    margin-inline: -36px;
    padding-inline: 12px;
    display: flex;
    position: sticky;
    top: 60px;
    z-index: 1;
    background-color: ${config.hoverText};
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: ${config.boxShadow1};
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 100%;
      height: 60px;
      flex-grow: 1;
      text-align: center;
      color: #fff;
    }
  }
  .history-body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 12px;
    gap: 12px;
    margin-inline: -24px;
    font-size: 14px;
    line-height: 140%;
    > div {
      width: 100%;
      flex-grow: 1;
      flex-basis: 100%;
    }
    .year {
      &[data-value='true'] {
        position: relative;
        background-color: ${config.primaryBg};
        box-shadow: ${config.boxShadow1};
      }
    }
    .month {
      background-color: ${config.primaryBg};
      box-shadow: ${config.boxShadow1};
    }
    .company,
    .project {
      color: #000;
      &[data-value='true'] {
        position: relative;
        background-color: ${config.primaryBg};
        box-shadow: ${config.boxShadow1};
      }
    }
    .sticky {
      position: sticky;
      top: 120px;
      left: 0;
      height: 60px;
      padding-inline: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      word-break: keep-all;
    }
    .ellipsis {
      ${ellipsis(2)};
    }
  }
  @media ${device.mobile} {
    .history-head {
      margin-inline: -12px;
      padding-inline: 0;
      font-size: 12px;
      top: 48px;
      > div {
        height: 36px;
      }
    }
    .history-body {
      margin-inline: -12px;
      margin-top: 6px;
      gap: 6px;
      font-size: 12px;
      .sticky {
        top: calc(48px + 36px + 6px);
        height: 36px;
      }
    }
  }
`;

export default HistoryWrapper;
