'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { chordList } from '@/constants/chord';
import { device } from '@/styles/mixin';
import ChordChart from './Chart';

function ChordList() {
  const [currentChord, setCurrentChord] = useState<string>('');

  const closeChord = () => {
    setCurrentChord('');
  };

  return (
    <>
      <StyledChordList>
        {chordList.map((chord) => {
          return (
            <button
              type="button"
              key={chord.name}
              onClick={() => setCurrentChord(chord.name)}
            >
              {chord.name}
            </button>
          );
        })}
      </StyledChordList>
      {currentChord && (
        <ChordChart chordName={currentChord} closeChord={closeChord} />
      )}
    </>
  );
}

const StyledChordList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  button {
    height: 60px;
    background-color: rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
  @media ${device.mobile} {
    gap: 6px;
    button {
      height: 36px;
      font-size: 14px;
    }
  }
`;

export default ChordList;
