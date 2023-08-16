'use client';

import styled from 'styled-components';
import { useState } from 'react';
import getConfig from 'next/config';
import { device } from '@/styles/mixin';
import ChordChart from '../chord/Chart';
import ChordSymbol from './ChordSymbol';

type Props = {
  phrase: {
    lyrics: string | undefined;
    chordList?: [{ name: string; position: number }];
  };
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScorePhrase({ phrase }: Props) {
  const chordList = phrase.chordList || [];
  const [currentChord, setCurrentChord] = useState<string>('');

  const closeChord = () => {
    setCurrentChord('');
  };

  const phraseArray = [];
  const lyricsArray = phrase.lyrics?.split('') || [];
  const lyricsCount = lyricsArray.length;
  const chordPosMax = Math.max(...chordList.map((chord) => chord.position));

  for (let i = 0; i < Math.max(lyricsCount, chordPosMax + 1); i++) {
    phraseArray.push({
      lyricsLetter: lyricsArray[i],
      chordName: chordList.find((chord) => chord.position === i)?.name || '',
    });
  }

  return (
    <>
      <StyledScorePhrase>
        {phraseArray.map((item, i) => {
          return (
            <div key={i} className="letter" data-letter-index={i}>
              <div className="chord">
                {item.chordName && (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setCurrentChord(item.chordName)}
                  >
                    <ChordSymbol chordName={item.chordName} />
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
        <ChordChart chordName={currentChord} closeChord={closeChord} />
      )}
    </>
  );
}

const StyledScorePhrase = styled.div`
  display: flex;
  flex-wrap: wrap;
  .letter {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-basis: 1em;
    // width: 1em;
    text-align: center;
    .chord {
      height: 1.5em;
      white-space: nowrap;
      font-size: 14px;
      button {
        position: relative;
        min-width: 100%;
        font-weight: 700;
        &:hover {
          background-color: #f7f7f7;
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
`;

export default ScorePhrase;
