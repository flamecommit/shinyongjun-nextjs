'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface HistoryType {
  index: number;
  key: string;
  year: number;
  yearSize: number;
  month: number;
}

function HistoryWrapper() {
  const [histories, setHistories] = useState<HistoryType[]>([]);
  const companies = [
    { name: 'Wise C&S', joining: [2013, 9], leaving: [2014, 1] },
    { name: 'Megacoding', joining: [2014, 2], leaving: [2015, 3] },
    { name: 'Newriver', joining: [2015, 4], leaving: [2018, 8] },
    { name: 'Newborn Holdings', joining: [2019, 2], leaving: [2022, 2] },
    { name: 'Wemade', joining: [2022, 3], leaving: [] },
  ];

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
        temp.push({
          index: ++rowIndex,
          key: `${year}-${month}`,
          year,
          yearSize: month === lastMonth ? lastMonth - firstMonth : 0,
          month,
        });
      }
    }

    setHistories(temp);
  }, []);

  return (
    <StyledHistoryWrapper>
      {histories.map((history) => {
        return (
          <>
            {history.yearSize > 0 && (
              <div
                className="year"
                style={{
                  gridRowStart: history.index,
                  gridRowEnd: history.index + history.yearSize + 1,
                }}
              >
                {history.year}
              </div>
            )}
            <div className="month">{history.month}</div>
            <div className="company" />
            <div className="work" />
          </>
        );
      })}
    </StyledHistoryWrapper>
  );
}

const StyledHistoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 24px;
`;

export default HistoryWrapper;
