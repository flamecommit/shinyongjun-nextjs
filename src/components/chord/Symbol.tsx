'use client';

import styled from 'styled-components';
import { transChordSymbol } from '@/services/chord';
import { roboto, notoSansKr } from '@/styles/fonts';

interface Props {
  chordName: string;
  isAbbr?: boolean;
}

function ChordSymbol({ chordName, isAbbr = false }: Props) {
  let chordSymbole = transChordSymbol(chordName);

  if (!isAbbr) {
    if (chordSymbole.includes('add2')) {
      chordSymbole = `${chordSymbole} (${chordSymbole.replace(
        'add2',
        'add9',
      )})`;
    }
    if (chordSymbole.includes('add4')) {
      chordSymbole = `${chordSymbole} (${chordSymbole.replace(
        'add4',
        'add11',
      )})`;
    }
    if (chordSymbole.includes('add6')) {
      chordSymbole = `${chordSymbole} (${chordSymbole.replace(
        'add6',
        'add13',
      )})`;
    }
  }

  return (
    <StyledChordSymbol dangerouslySetInnerHTML={{ __html: chordSymbole }} />
  );
}

const StyledChordSymbol = styled.div`
  white-space: nowrap;
  font-family: ${roboto.style.fontFamily};
  span {
    position: relative;
    top: -0.1em;
    font-family: ${notoSansKr.style.fontFamily};
    font-size: 0.9em;
    margin-inline: -0.24em;
  }
`;

export default ChordSymbol;
