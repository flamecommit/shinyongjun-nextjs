'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { device } from '@/styles/mixin';

type Props = {
  setSearchKeyword: (value: string) => void;
};

function CommonSearch({ setSearchKeyword }: Props) {
  const [value, setValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchKeyword(value.trim());
    }
  };

  return (
    <StyledCommonSearch>
      <input
        type="search"
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      <button type="button" onClick={() => setSearchKeyword(value.trim())}>
        Search
      </button>
    </StyledCommonSearch>
  );
}

const StyledCommonSearch = styled.div`
  background-color: #eee;
  padding: 12px;
  display: flex;
  column-gap: 12px;
  button {
    background-color: #fff;
    padding-inline: 24px;
    border: 1px solid #ccc;
  }
  @media ${device.mobile} {
    padding: 9px;
    column-gap: 9px;
    input {
      height: 30px;
    }
    button {
      font-size: 14px;
    }
  }
`;

export default CommonSearch;
