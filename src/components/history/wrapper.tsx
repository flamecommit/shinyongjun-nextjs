'use client';

import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { companies, portfolios } from '@/constants/history';
import type {
  CompanyType,
  HistoryType,
  PortfolioType,
} from '@/constants/history';

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
      {histories.map((history) => {
        return (
          <Fragment key={history.key}>
            <div
              className="year"
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
            <div className="month">{history.month}</div>
            <div
              className="company"
              data-test={!!history.company?.name}
              style={{
                gridColumnStart: 3,
                gridColumnEnd: 3,
                gridRowStart: history.index,
                gridRowEnd: history.index + (history.company?.size ?? 0),
              }}
            >
              <div className="sticky">{history.company?.name}</div>
            </div>
            <div
              className="portfolio"
              data-test={!!history.portfolio?.name}
              style={{
                gridColumnStart: 4,
                gridColumnEnd: 4,
                gridRowStart: history.index,
                gridRowEnd: history.index + (history.portfolio?.size ?? 0),
              }}
            >
              <div className="sticky">{history.portfolio?.name}</div>
            </div>
          </Fragment>
        );
      })}
    </StyledHistoryWrapper>
  );
}

const StyledHistoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 24px;
  row-gap: 12px;
  column-gap: 12px;
  .month {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .company {
    &[data-test='true'] {
      background-color: #f7f7f7;
    }
  }
  .portfolio {
    &[data-test='true'] {
      background-color: #f7f7f7;
    }
  }
  .sticky {
    position: sticky;
    top: 60px;
    left: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default HistoryWrapper;
