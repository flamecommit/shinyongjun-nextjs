'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { scaleArray, newChordList } from '@/constants/chord';
import { getPitch } from '@/services/chord';
import { removeDuplicates, arraysHaveSameElements } from '@/utils/array';
import ChordSymbol from './Symbol';

function ChordGenerator() {
  const startPitch = [28, 23, 19, 14, 9, 4];
  const [pitch, setPitch] = useState<number[]>([]);
  const [composition, setComposition] = useState<string[]>([]);
  const [resultChord, setResultChord] = useState<string>('');

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: number,
  ) => {
    if (e.target.checked) {
      setPitch([...pitch, value]);
      setComposition([...composition, getPitch('C', value)]);
    }
    if (!e.target.checked) {
      setPitch(pitch.filter((v) => v !== value));
      setComposition(composition.filter((v) => v !== getPitch('C', value)));
    }
  };

  useEffect(() => {
    const temp: string[] = [];
    const sortPitch = removeDuplicates(pitch.sort((a, b) => a - b));
    sortPitch.forEach((p) => {
      temp.push(getPitch('C', p));
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
                  {string.map((fret, j) => {
                    const p = startPitch[i] + j;
                    return (
                      <label
                        htmlFor={`${i}-${j}`}
                        key={j}
                        className="guitar-fret"
                      >
                        <input
                          id={`${i}-${j}`}
                          type="checkbox"
                          data-pitch={p}
                          onChange={(e) => checkHandler(e, p)}
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
        <div>selected : {composition.join(', ')}</div>
        <div>chord : {resultChord}</div>
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
          left: 7.6923%;
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
          &:nth-child(1)::after {
            width: 3px;
          }
          div {
            display: inline-block;
            background-color: rgba(255, 255, 255, 1);
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export default ChordGenerator;
