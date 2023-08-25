'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { scaleArray, NEW_CHORD_LIST } from '@/constants/chord';
import { getPitch } from '@/services/chord';
import {
  removeDuplicates,
  arraysHaveElements,
  arraysHaveSameElements,
} from '@/utils/array';
import ChordSymbol from './Symbol';
import ChordChart from './Chart';
import { roboto } from '@/styles/fonts';
import { config } from '@/styles/config';
import { device } from '@/styles/mixin';

function ChordFinder() {
  const startPitch = [28, 23, 19, 14, 9, 4];
  const [resultType, setResultType] = useState(-1);
  const [pitch, setPitch] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [composition, setComposition] = useState<string[]>([]);
  const [resultChord, setResultChord] = useState<string>('');
  const [currentChord, setCurrentChord] = useState<string>('');

  const closeChord = () => {
    setCurrentChord('');
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: number,
    index: number,
  ) => {
    const temp: Array<number> = [...pitch];
    temp[index] = e.target.checked ? value : 0;
    setPitch(temp);
  };

  useEffect(() => {
    const pitchClone = [...pitch].filter((v) => v > 0).sort((a, b) => a - b);
    const temp: string[] = [];
    const sortPitch = removeDuplicates(pitchClone) as number[];

    sortPitch.forEach((p) => {
      if (p) {
        temp.push(getPitch('C', p));
      }
    });
    setComposition(temp);
  }, [pitch]);

  useEffect(() => {
    if (!composition.length) {
      setResultType(-1);
      setResultChord('');
      return;
    }

    const findChord = Object.entries(NEW_CHORD_LIST).find((chord) => {
      const isSameArray = arraysHaveSameElements(
        composition,
        chord[1].composition,
      );

      return isSameArray;
    });

    if (findChord) {
      setResultType(1);
      setResultChord(findChord[0]);
    } else {
      const similarChord = Object.entries(NEW_CHORD_LIST).find((chord) => {
        const isSimilarArray = arraysHaveElements(
          composition,
          chord[1].composition,
        );

        return isSimilarArray;
      });

      if (similarChord) {
        setResultType(2);
        setResultChord(similarChord[0]);
      } else {
        setResultType(0);
        setResultChord('');
      }
    }
  }, [composition]);

  return (
    <>
      <StyledChordFinder>
        <div className="result-area">
          {resultType <= 0 && <div className="symbol notfound">Not Found</div>}
          {resultType === 1 && (
            <>
              <button
                type="button"
                className="symbol found"
                onClick={() => setCurrentChord(resultChord)}
              >
                <ChordSymbol chordName={resultChord} />
              </button>
              <div className="text">코드와 일치합니다.</div>
            </>
          )}
          {resultType === 2 && (
            <>
              <button
                type="button"
                className="symbol similar"
                onClick={() => setCurrentChord(resultChord)}
              >
                <ChordSymbol chordName={resultChord} />
              </button>
              <div className="text">코드와 유사합니다.</div>
            </>
          )}
        </div>
        <div className="guitar-area">
          <div className="guitar-neck">
            {scaleArray.map((string, i) => {
              return (
                <div key={i} className="guitar-string">
                  {/* <label htmlFor={`${i}-m`} className="guitar-fret">
                    <input
                      name={`string-${i}`}
                      id={`${i}-m`}
                      type="radio"
                      onChange={(e) => checkHandler(e, 0, i)}
                    />
                    <div className="mute">M</div>
                  </label> */}
                  {string.map((fret, j) => {
                    const p = startPitch[i] + j;
                    return (
                      <label
                        htmlFor={`${i}-${j}`}
                        key={j}
                        className="guitar-fret"
                      >
                        <input
                          // name={`string-${i}`}
                          id={`${i}-${j}`}
                          type="checkbox"
                          data-pitch={p}
                          checked={pitch[i] === p}
                          onChange={(e) => checkHandler(e, p, i)}
                        />
                        <ChordSymbol chordName={fret} />
                      </label>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {currentChord && (
          <ChordChart chordName={currentChord} closeChord={closeChord} />
        )}
      </StyledChordFinder>
    </>
  );
}

const StyledChordFinder = styled.div`
  .result-area {
    font-family: ${roboto.style.fontFamily};
    margin-bottom: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    column-gap: 6px;
    .symbol {
      font-weight: 700;
      font-size: 30px;
      &.similar {
        color: #ff7f27;
      }
      &.found {
        color: #1f883d;
      }
    }
    .text {
      position: relative;
      bottom: 5px;
    }
  }
  .guitar-area {
    .guitar-neck {
      display: flex;
      flex-direction: row-reverse;
      background-position-x: center;
      background-size: 360px auto;
      width: 220px;
      margin-inline: auto;
      background-position-y: 50px;
      border: 1px solid #000;
      .guitar-string {
        position: relative;
        display: grid;
        width: 100%;
        .guitar-fret {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          border: 1px solid #000;
          text-align: center;
          position: relative;
          cursor: pointer;
          &:hover {
            background-color: ${config.primaryBg};
          }
          input[type='checkbox'] {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            opacity: 0;
            &:checked + div {
              background-color: #333;
              color: #fff;
            }
          }
          &:nth-child(1) {
            height: 40px;
            &::after {
              display: block;
              position: absolute;
              top: -30px;
              left: 0;
              font-size: 14px;
              line-height: 20px;
              width: 100%;
              text-align: center;
            }
          }
          div {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            font-family: ${roboto.style.fontFamily};
            font-size: 14px;
          }
        }
        &:nth-child(1) {
          .guitar-fret:nth-child(1)::after {
            content: '1';
          }
        }
        &:nth-child(2) {
          .guitar-fret:nth-child(1)::after {
            content: '2';
          }
        }
        &:nth-child(3) {
          .guitar-fret:nth-child(1)::after {
            content: '3';
          }
        }
        &:nth-child(4) {
          .guitar-fret:nth-child(1)::after {
            content: '4';
          }
        }
        &:nth-child(5) {
          .guitar-fret:nth-child(1)::after {
            content: '5';
          }
        }
        &:nth-child(6) {
          .guitar-fret:nth-child(1)::after {
            content: '6';
          }
        }
        &:last-child {
          .guitar-fret {
            &::before {
              display: block;
              content: 'test';
              position: absolute;
              top: calc(50% - 10px);
              left: -60px;
              font-size: 14px;
              line-height: 20px;
              width: 60px;
              text-align: center;
            }
            &:nth-child(1)::before {
              content: '개방현';
            }
            &:nth-child(2)::before {
              content: '1';
            }
            &:nth-child(3)::before {
              content: '2';
            }
            &:nth-child(4)::before {
              content: '3';
            }
            &:nth-child(5)::before {
              content: '4';
            }
            &:nth-child(6)::before {
              content: '5';
            }
            &:nth-child(7)::before {
              content: '6';
            }
            &:nth-child(8)::before {
              content: '7';
            }
            &:nth-child(9)::before {
              content: '8';
            }
            &:nth-child(10)::before {
              content: '9';
            }
            &:nth-child(11)::before {
              content: '10';
            }
            &:nth-child(12)::before {
              content: '11';
            }
            &:nth-child(13)::before {
              content: '12';
            }
          }
        }
      }
    }
  }
  @media ${device.mobile} {
    .result-area {
      column-gap: 4px;
      .symbol {
        font-size: 24px;
      }
    }
  }
`;

export default ChordFinder;
