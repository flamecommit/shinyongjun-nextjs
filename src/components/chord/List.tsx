'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { kindOfChord, chordSymbolList, inversion } from '@/constants/chord';
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
        <div className="link-area">
          <Link href="/chord/generator">Go to Chord Generator</Link>
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
  .link-area {
    a {
      &:hover {
        color: #1f883d;
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
