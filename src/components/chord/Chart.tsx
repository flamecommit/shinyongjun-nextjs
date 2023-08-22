'use client';

import styled from 'styled-components';
import { Fragment, useState } from 'react';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import { GrClose } from '@react-icons/all-files/gr/GrClose';
import { GrRadial } from '@react-icons/all-files/gr/GrRadial';
import { scaleArray, newChordList } from '@/constants/chord';
import { device } from '@/styles/mixin';
import { getComposition, transChordSymbol } from '@/services/chord';
import ChordSymbol from '@/components/chord/Symbol';
import { roboto } from '@/styles/fonts';

interface Props {
  chordName: string;
  initIndex?: number;
  closeChord: () => void;
}

function ChordChart({ chordName, initIndex, closeChord }: Props) {
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const chord = newChordList[chordName];
  const constituent = getComposition(chordName);

  const chartCount = chord?.chartList.length || 0;
  const [activeIndex, setActiveIndex] = useState(initIndex || 0);
  const clickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeChord();
    }
  };

  const moveToActiveIndex = (index: number) => {
    if (index > chartCount - 1) return setActiveIndex(0);
    if (index < 0) return setActiveIndex(chartCount - 1);
    return setActiveIndex(index);
  };

  const actionTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const actionTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0].clientX - startX;
    setMoveX(x);
  };

  const actionTouchEnd = () => {
    if (Math.abs(moveX) > 50) {
      if (moveX < 0) {
        moveToActiveIndex(activeIndex + 1);
      }
      if (moveX > 0) {
        moveToActiveIndex(activeIndex - 1);
      }
    }
    setMoveX(0);
  };

  return (
    <StyledChordChart onClick={clickBackground}>
      <div className="chord-layer">
        <div className="chord-header">
          <div className="name">
            <ChordSymbol chordName={chordName} />
          </div>
          {constituent.length > 0 && (
            <div className="constituent">
              {constituent.map((c) => {
                return (
                  <div
                    key={c}
                    dangerouslySetInnerHTML={{ __html: transChordSymbol(c) }}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div
          className="chart-area"
          onTouchStart={actionTouchStart}
          onTouchMove={actionTouchMove}
          onTouchEnd={actionTouchEnd}
        >
          {chord &&
            chord.chartList.map((chart, i) => {
              const result = [];
              const maxFret = Math.max(...chart.filter((fret) => fret > 0));
              const minFret = Math.min(...chart.filter((fret) => fret > 0));
              const startFret = maxFret <= 4 ? 1 : minFret;
              const endFret = maxFret <= 3 ? 4 : maxFret + 1;

              for (let j = startFret; j < endFret; j++) {
                const temp = [];
                for (let k = 0; k <= 5; k++) {
                  temp.push(chart[k] === j);
                }
                result.push({
                  number: j,
                  strings: temp,
                });
              }

              return (
                <Fragment key={i}>
                  {activeIndex === i && (
                    <div className="chart">
                      <div className="position">
                        {chart.map((position, j) => {
                          return (
                            <div key={j} data-position={position}>
                              {position === 0 && <GrRadial />}
                              {position === -1 && <GrClose />}
                            </div>
                          );
                        })}
                      </div>
                      <div className="fret-area" data-start-fret={startFret}>
                        {result.map((fret, j) => {
                          return (
                            <div key={j} className="fret">
                              <div className="number">{fret.number}</div>
                              {fret.strings.map((string, k) => {
                                return (
                                  <div
                                    key={k}
                                    className="string"
                                    data-position={chart[k]}
                                  >
                                    {string && <div className="finger" />}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                      <div className="pitch">
                        {chart.map((position, j) => {
                          const pitch = scaleArray[j][position] || '';
                          return (
                            <div
                              key={j}
                              className="name"
                              data-position={position}
                              data-invalid={
                                constituent.length && pitch
                                  ? !constituent.includes(pitch)
                                  : false
                              }
                            >
                              <ChordSymbol chordName={pitch} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
        </div>
        {chartCount > 1 && (
          <div className="chart-navigation">
            <button
              type="button"
              className="btn-prev"
              onClick={() => moveToActiveIndex(activeIndex - 1)}
            >
              <FiChevronLeft />
            </button>
            <div className="paging">
              {activeIndex + 1} / {chartCount}
            </div>
            <button
              type="button"
              className="btn-next"
              onClick={() => moveToActiveIndex(activeIndex + 1)}
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </StyledChordChart>
  );
}

const StyledChordChart = styled.div`
  backdrop-filter: blur(5px);
  position: fixed;
  inset: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  .chord-layer {
    background-color: #fff;
    max-width: 100%;
    width: 440px;
    padding: 20px 20px 60px 20px;
    margin: 20px;
    .chord-header {
      margin-bottom: 20px;
      line-height: 1.2;
      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        text-align: center;
      }
      .constituent {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        font-family: ${roboto.style.fontFamily};
        position: relative;
        bottom: 3px;
        column-gap: 6px;
        font-size: 14px;
        color: #666;
      }
    }
    .chord-null {
      text-align: center;
    }
    .chart-area {
      .chart {
        display: flex;
        column-gap: 10px;
        .position {
          display: grid;
          width: 20px;
          row-gap: 20px;
          > div {
            height: 1px;
            font-size: 16px;
            line-height: 100%;
            svg {
              margin-top: -8px;
            }
            &[data-position='-1'] {
              svg {
                path {
                  stroke: #aaa;
                }
              }
            }
          }
        }
        .fret-area {
          width: 100%;
          position: relative;
          display: flex;
          border-left: 1px solid #000;
          &[data-start-fret='1'] {
            border-left-width: 3px;
          }
          .fret {
            position: relative;
            flex-grow: 1;
            display: grid;
            row-gap: 20px;
            border-right: 1px solid #000;
            .number {
              position: absolute;
              bottom: -2.4em;
              width: 100%;
              text-align: center;
              font-size: 14px;
            }
            .string {
              position: relative;
              width: 100%;
              height: 1px;
              background-color: #000;
              .finger {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #000;
                position: absolute;
                top: calc(50% - 8px);
                left: calc(50% - 8px);
              }
            }
          }
        }
        .pitch {
          display: grid;
          width: 20px;
          row-gap: 20px;
          > div {
            height: 1px;
            font-size: 16px;
            line-height: 100%;
            margin-top: -8px;
            white-space: nowrap;
            &[data-invalid='true'] {
              color: #f00;
            }
          }
        }
      }
    }
    .chart-navigation {
      margin-top: 50px;
      margin-bottom: -20px;
      display: flex;
      justify-content: center;
      column-gap: 18px;
      button {
        font-size: 24px;
        line-height: 100%;
      }
    }
  }
  @media ${device.mobile} {
    .chord-layer {
      .chord-name {
        // font-size: 20px;
      }
    }
  }
`;

export default ChordChart;
