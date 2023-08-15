'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { device } from '@/styles/mixin';
import { ChordType } from '@/constants/chord';
import ChordChart from '../chord/Chart';

type Props = {
  phrase: {
    lyrics: string | undefined;
    chord: [{ name: string; position: number }];
  };
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScorePhrase({ phrase }: Props) {
  const [currentChord, setCurrentChord] = useState<string>('');

  const closeChord = () => {
    setCurrentChord('');
  };

  return (
    <>
      <StyledScorePhrase data-lyrics={!!phrase.lyrics}>
        <div className="chordList">
          {phrase.chord.map((chord, i) => {
            return (
              <button
                type="button"
                key={i}
                className="chord"
                style={{ left: `${chord.position}em` }}
                onClick={() => setCurrentChord(chord.name)}
              >
                {chord.name}
              </button>
            );
          })}
        </div>
        <div className="lyrics">
          {phrase.lyrics?.split('').map((letter, i) => {
            return (
              <div key={i} className="letter">
                {letter}
              </div>
            );
          })}
        </div>
      </StyledScorePhrase>
      {currentChord && (
        <ChordChart chordName={currentChord} closeChord={closeChord} />
      )}
    </>
  );
}

const StyledScorePhrase = styled.div`
  position: relative;
  padding-top: 1.5em;
  .chordList {
    .chord {
      position: absolute;
      top: 0;
    }
  }
  .lyrics {
    position: relative;
    display: flex;
    .letter {
      width: 1em;
    }
  }
  &[data-lyrics='false'] {
    // 가사 없을때
  }
`;

export default ScorePhrase;
