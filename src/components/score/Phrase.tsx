'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ChordSymbol from '@/components/chord/Symbol';
import { device } from '@/styles/mixin';
import ChordChart from '../chord/Chart';
import { config } from '@/styles/config';
import { getPitch, getRoot } from '@/services/chord';
import { useAppSelector } from '@/hooks/useRedux';

type Props = {
  phrase: {
    lyrics: string | undefined;
    chordList?: [{ name: string; position: number; initIndex?: number }];
  };
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScorePhrase({ phrase }: Props) {
  const scoreState = useAppSelector((state) => state.score);
  const chordList = phrase.chordList || [];
  const [currentChord, setCurrentChord] = useState<string>('');
  const [initIndex, setInitIndex] = useState<number>(0);
  const [phraseArray, setPhraseArray] = useState<any[]>([]);

  const closeChord = () => {
    setCurrentChord('');
    setInitIndex(0);
  };

  const openChart = (chordName: string, initIndex: number) => {
    setCurrentChord(chordName);
    setInitIndex(initIndex || 0);
  };

  const computedChordName = (chordName: string | undefined) => {
    if (!chordName) return '';

    if (chordName.includes('/')) {
      const split = chordName.split('/');
      const root1 = getRoot(split[0]);
      const root2 = getRoot(split[1]);

      const computedRoot1 = getPitch(root1, scoreState.capo * -1);
      const computedRoot2 = getPitch(root2, scoreState.capo * -1);

      return chordName
        .replace(root1, computedRoot1)
        .replace(root2, computedRoot2);
    } else {
      const root = getRoot(chordName);
      const computedRoot = getPitch(root, scoreState.capo * -1);

      return chordName.replace(root, computedRoot);
    }
  };

  useEffect(() => {
    const temp = [];
    const lyricsArray = phrase.lyrics?.split('') || [];
    const lyricsCount = lyricsArray.length;
    const chordPosMax = Math.max(...chordList.map((chord) => chord.position));

    for (let i = 0; i < Math.max(lyricsCount, chordPosMax + 1); i++) {
      const chordObject = chordList.find((chord) => chord.position === i);

      temp.push({
        lyricsLetter: lyricsArray[i],
        chordName: computedChordName(chordObject?.name),
        initIndex: chordObject?.initIndex || 0,
      });
    }

    setPhraseArray(temp);
  }, [scoreState.capo]);

  return (
    <>
      <StyledScorePhrase className="score-phrase">
        {phraseArray.map((item, i) => {
          return (
            <div key={i} className="letter" data-letter-index={i}>
              <div className="chord">
                {item.chordName && (
                  <button
                    type="button"
                    key={i}
                    onClick={() => openChart(item.chordName, item.initIndex)}
                  >
                    <ChordSymbol chordName={item.chordName} isAbbr />
                  </button>
                )}
              </div>
              <div className="lyrics">{item.lyricsLetter}</div>
              {process.env.MODE === 'development' && (
                <div className="index">{i}</div>
              )}
            </div>
          );
        })}
      </StyledScorePhrase>
      {currentChord && (
        <ChordChart
          chordName={currentChord}
          closeChord={closeChord}
          initIndex={initIndex}
        />
      )}
    </>
  );
}

const StyledScorePhrase = styled.div`
  display: flex;
  flex-wrap: wrap;
  // column-gap: 0.1em;
  padding: 4px;
  // background-color: #fff;
  // border-bottom: 1px solid ${config.primaryLine};
  border-bottom: 1px solid #e4e8ec;
  row-gap: 6px;
  .letter {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-basis: 1em;
    width: 1em;
    text-align: center;
    .chord {
      height: 1.5em;
      white-space: nowrap;
      button {
        position: relative;
        min-width: 100%;
        font-weight: 500;
        letter-spacing: -0.04em;
        &:hover {
          color: ${config.hoverText};
        }
      }
    }
    .lyrics {
      height: 1.5em;
    }
    .index {
      height: 1.5em;
      white-space: nowrap;
      font-size: 10px;
      text-align: center;
    }
  }
  @media ${device.mobile} {
    padding: 3px;
  }
`;

export default ScorePhrase;
