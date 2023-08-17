'use client';

import styled from 'styled-components';
import { transChordSymbol } from '@/services/chord';

interface Props {
  chordName: string;
}

function ChordSymbol({ chordName }: Props) {
  const chordSymbole = transChordSymbol(chordName);

  return <StyledChordSymbol>{chordSymbole}</StyledChordSymbol>;
}

const StyledChordSymbol = styled.div`
  font-family: 'Roboto';
`;

export default ChordSymbol;
