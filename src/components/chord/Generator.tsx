'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { scaleArray, newChordList } from '@/constants/chord';
import { getPitch } from '@/services/chord';
import { removeDuplicates, arraysHaveSameElements } from '@/utils/array';
import ChordSymbol from './Symbol';
import ChordChart from './Chart';

function ChordGenerator() {
  const startPitch = [28, 23, 19, 14, 9, 4];
  const [pitch, setPitch] = useState<Array<number>>([]);
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
    temp[index] = value;
    setPitch(temp);
    /* if (e.target.checked) {
      setPitch([...pitch, value]);
      setComposition([...composition, getPitch('C', value)]);
    } */
    /* if (!e.target.checked) {
      setPitch(pitch.filter((v) => v !== value));
      setComposition(composition.filter((v) => v !== getPitch('C', value)));
    } */
  };

  useEffect(() => {
    const pitchClone = [...pitch].filter((v) => v > 0).sort((a, b) => a - b);
    const temp: string[] = [];
    const sortPitch = removeDuplicates(pitchClone);

    sortPitch.forEach((p) => {
      if (p) {
        temp.push(getPitch('C', p));
      }
    });
    setComposition(temp);
  }, [pitch]);

  useEffect(() => {
    const findChord = Object.entries(newChordList).find((chord) => {
      const isSameArray = arraysHaveSameElements(
        composition,
        chord[1].composition,
      );

      return isSameArray;
    });

    setResultChord(findChord ? findChord[0] : '');
  }, [composition]);

  return (
    <>
      <StyledChordGenerator>
        <div className="guitar-area">
          <div className="guitar-neck">
            {scaleArray.map((string, i) => {
              return (
                <div key={i} className="guitar-string">
                  <label htmlFor={`${i}-m`} className="guitar-fret">
                    <input
                      name={`string-${i}`}
                      id={`${i}-m`}
                      type="radio"
                      onChange={(e) => checkHandler(e, 0, i)}
                    />
                    <div className="mute">M</div>
                  </label>
                  {string.map((fret, j) => {
                    const p = startPitch[i] + j;
                    return (
                      <label
                        htmlFor={`${i}-${j}`}
                        key={j}
                        className="guitar-fret"
                      >
                        <input
                          name={`string-${i}`}
                          id={`${i}-${j}`}
                          type="radio"
                          data-pitch={p}
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
        <div className="result-area">
          {resultChord ? (
            <button type="button" onClick={() => setCurrentChord(resultChord)}>
              <ChordSymbol chordName={resultChord} />
            </button>
          ) : (
            <div>Not Found</div>
          )}
        </div>
        {currentChord && (
          <ChordChart chordName={currentChord} closeChord={closeChord} />
        )}
      </StyledChordGenerator>
    </>
  );
}

const StyledChordGenerator = styled.div`
  .guitar-area {
    margin-bottom: 30px;
    .guitar-neck {
      display: grid;
      row-gap: 24px;
      .guitar-string {
        position: relative;
        display: flex;
        width: 100%;
        height: 1px;
        &::before {
          display: block;
          content: '';
          height: 1px;
          position: absolute;
          top: 0;
          left: 14.2857%;
          right: 0;
          background-color: #000;
        }
        .guitar-fret {
          height: 25px;
          text-align: center;
          position: relative;
          top: -12px;
          flex-basis: 100%;
          flex-grow: 1;
          cursor: pointer;
          input[type='radio'] {
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
          &::after {
            display: block;
            content: '';
            position: absolute;
            top: 5px;
            right: 0;
            bottom: 5px;
            width: 1px;
            background-color: #000;
          }
          &:nth-child(1) {
            flex-grow: 0.5;
            &::after {
              width: 0;
            }
          }
          &:nth-child(2)::after {
            width: 3px;
          }
          div {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            font-family: 'Roboto';
            font-size: 14px;
          }
        }
      }
    }
  }
  .result-area {
    font-family: 'Roboto';
    margin-top: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
  }
`;

export default ChordGenerator;
