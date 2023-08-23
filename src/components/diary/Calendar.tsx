'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import { getFormatDatetime, getMonthArray } from '@/utils/datetime';
import { diaryActions } from '@/stores/features/diary';
import { useAppDispatch } from '@/hooks/useRedux';

function DiaryCalendar() {
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const todayDate = getFormatDatetime(koreaTime, 'YYYY-MM-DD');
  const [year, setYear] = useState(koreaTime.getFullYear());
  const [month, setMonth] = useState(koreaTime.getMonth() + 1);
  const [localCurrentDate, setLocalCurrentDate] = useState(todayDate);
  const dispatch = useAppDispatch();
  const [monthArray, setMonthArray] = useState(getMonthArray(year, month));

  const setCurrentMonth = (move: number) => {
    if (month + move > 12) {
      setYear(year + 1);
      return setMonth(1);
    }
    if (month + move < 1) {
      setYear(year - 1);
      return setMonth(12);
    }
    return setMonth(month + move);
  };

  const actionCurrentDate = (e: React.MouseEvent, date: string) => {
    setLocalCurrentDate(date);
  };

  useEffect(() => {
    setMonthArray(getMonthArray(year, month));
  }, [year, month]);

  useEffect(() => {
    document.title = `shinyongjun | Diary - ${localCurrentDate}`;
    dispatch(diaryActions.setCurrentDate(localCurrentDate));

    return () => {
      dispatch(diaryActions.setCurrentDate(''));
    };
  }, [localCurrentDate, dispatch]);

  return (
    <>
      <StyledDiaryCalendar>
        <div className="calendar-header">
          <button
            type="button"
            className="btn-prev"
            onClick={() => setCurrentMonth(-1)}
          >
            <FiChevronLeft />
          </button>
          <div className="current-year-month">
            {year}. {month}.
          </div>
          <button
            type="button"
            className="btn-next"
            onClick={() => setCurrentMonth(1)}
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="calendar-container">
          {monthArray.map((item) => {
            return (
              <button
                type="button"
                className={`${localCurrentDate === item.ISO && 'active'}`}
                key={item.date}
                data-day={item.day}
                onClick={(e) => actionCurrentDate(e, item.ISO)}
                title={item.ISO}
              >
                {item.date}
              </button>
            );
          })}
        </div>
      </StyledDiaryCalendar>
    </>
  );
}

const StyledDiaryCalendar = styled.div`
  .calendar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 18px;
    margin-bottom: 18px;
    button {
      line-height: 100%;
      svg {
        font-size: 24px;
      }
    }
    .current-year-month {
      font-weight: 700;
      font-size: 20px;
    }
  }
  .calendar-container {
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;
    margin-bottom: 60px;
    button {
      width: 30px;
      height: 30px;
      background-color: #f7f7f7;
      &.active {
        background-color: #333;
        color: #fff;
      }
      &[data-day='6'],
      &[data-day='0'] {
        color: #f00;
      }
    }
  }
`;

export default DiaryCalendar;
