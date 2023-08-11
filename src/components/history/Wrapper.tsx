'use client';

import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { companies, portfolios } from '@/constants/history';
import type {
  CompanyType,
  HistoryType,
  PortfolioType,
} from '@/constants/history';
import { device, ellipsis } from '@/styles/mixin';

function HistoryWrapper() {
  const [histories, setHistories] = useState<HistoryType[]>([]);

  useEffect(() => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const historyStart = [2013, 9];
    const temp = [];
    let rowIndex = 0;

    for (let year = todayYear; year >= historyStart[0]; year--) {
      const lastMonth = year === todayYear ? todayMonth : 12;
      const firstMonth = year === historyStart[0] ? historyStart[1] : 1;

      for (let month = lastMonth; month >= firstMonth; month--) {
        const company: CompanyType | undefined = companies.find(
          (item) => item.leave[0] === year && item.leave[1] === month,
        );

        const portfolio: PortfolioType | undefined = portfolios.find(
          (item) => item.ended[0] === year && item.ended[1] === month,
        );

        temp.push({
          index: ++rowIndex,
          key: `${year}-${month}`,
          year,
          yearSize: month === lastMonth ? lastMonth - firstMonth : 0,
          month,
          company: company && {
            ...company,
            size: (year - company.join[0]) * 12 + month - company.join[1] + 1,
          },
          portfolio: portfolio && {
            ...portfolio,
            size:
              (year - portfolio.started[0]) * 12 +
              month -
              portfolio.started[1] +
              1,
          },
          // ...(company && company),
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
                  gridRowEnd: history.index + history.yearSize + 1,
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
                className="portfolio"
                data-value={!!history.portfolio?.size}
                style={{
                  gridColumnStart: 4,
                  gridColumnEnd: 4,
                  gridRowStart: history.index,
                  gridRowEnd: history.index + (history.portfolio?.size ?? 0),
                }}
              >
                <div className="sticky">
                  <div className="ellipsis">{history.portfolio?.name}</div>
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
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
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
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    .month {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .company,
    .portfolio {
      color: #000;
      &[data-value='true'] {
        position: relative;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    .sticky {
      position: sticky;
      top: 120px;
      left: 0;
      height: 60px;
      padding-inline: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      word-break: break-all;
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
