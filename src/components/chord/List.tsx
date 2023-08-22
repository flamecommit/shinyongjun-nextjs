'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { kindOfChord, chordSymbolList, inversion } from '@/constants/chord';
import { device } from '@/styles/mixin';
import ChordSymbol from '@/components/chord/Symbol';
import ChordChart from './Chart';
import { config } from '@/styles/config';

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
        <div className="root-area">
          <h2 className="root-head">Inversion</h2>
          <div className="chord-area">
            {Object.entries(inversion).map((chord) => {
              return (
                <button
                  type="button"
                  key={chord[0]}
                  onClick={() => setCurrentChord(chord[0])}
                >
                  <ChordSymbol chordName={chord[0]} />
                </button>
              );
            })}
          </div>
        </div>
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
      background-color: ${config.primaryBg};
      border: 1px solid ${config.primaryLine};
      &:hover {
        background-color: ${config.secondaryBg};
        border-color: ${config.secondaryLine};
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media ${device.mobile} {
    .root-area {
      .root-head {
        font-size: 16px;
        margin-bottom: 6px;
      }
      .chord-area {
        gap: 6px;
      }
      button {
        height: 36px;
        padding: 0 24px;
        div {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ChordList;
