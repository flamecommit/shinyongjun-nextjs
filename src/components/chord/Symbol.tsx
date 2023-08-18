'use client';

import styled from 'styled-components';
import { transChordSymbol } from '@/services/chord';

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

  return <StyledChordSymbol>{chordSymbole}</StyledChordSymbol>;
}

const StyledChordSymbol = styled.div`
  font-family: 'Roboto';
`;

export default ChordSymbol;
