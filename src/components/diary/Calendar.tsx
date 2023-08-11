'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFormatDatetime } from '@/utils/time';
import { coreActions } from '@/stores/features/core';

function DiaryCalendar() {
  const today = new Date();
  const yyyymmdd = getFormatDatetime(today, 'YYYY-MM-DD');
  const [date, setDate] = useState(yyyymmdd);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Diary - ${date}`;
    dispatch(coreActions.changeTitle(date));
  }, [date, dispatch]);

  return (
    <>
      <StyledDiaryCalendar>
        <button type="button" onClick={() => setDate('2023-08-11')}>
          1
        </button>
        <button type="button" onClick={() => setDate('2023-08-12')}>
          2
        </button>
        <button type="button" onClick={() => setDate('2023-08-13')}>
          3
        </button>
        <button type="button">4</button>
        <button type="button">5</button>
      </StyledDiaryCalendar>
    </>
  );
}

const StyledDiaryCalendar = styled.div`
  button {
    width: 30px;
    height: 30px;
    background-color: #f7f7f7;
  }
`;

export default DiaryCalendar;
