'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { kindOfChord, chordSymbolList } from '@/constants/chord';
import { device } from '@/styles/mixin';
import ChordSymbol from '@/components/chord/Symbol';
import ChordChart from './Chart';

function ChordList() {
  const [currentChord, setCurrentChord] = useState<string>('');

  const closeChord = () => {
    setCurrentChord('');
  };

  return (
    <>
      <StyledChordList>
        {chordSymbolList.map((symbol) => {
          return (
            <div key={symbol} className="root-area">
              <h2 className="root-head">
                <ChordSymbol chordName={symbol} />
              </h2>
              <div className="chord-area">
                {kindOfChord.map((kind) => {
                  return (
                    <button
                      type="button"
                      key={`${symbol}${kind}`}
                      onClick={() => setCurrentChord(`${symbol}${kind}`)}
                    >
                      <ChordSymbol chordName={`${symbol}${kind}`} />
                    </button>
                  );
                })}
              </div>
            </div>
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
  row-gap: 30px;
  .root-area {
    .root-head {
      margin-bottom: 12px;
      font-weight: 700;
      font-size: 20px;
    }
    .chord-area {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    button {
      padding: 0 30px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.05);
      &:hover {
        background-color: #333;
        color: #fff;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media ${device.mobile} {
  }
`;

export default ChordList;
