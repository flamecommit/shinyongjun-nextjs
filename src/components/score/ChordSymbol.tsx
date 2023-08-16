'use client';

import styled from 'styled-components';

interface Props {
  chordName: string;
}

function ChordSymbol({ chordName }: Props) {
  const chordSymbole = chordName.replace('[', '♭').replace(']', '♯');

  return <StyledChordSymbol>{chordSymbole}</StyledChordSymbol>;
}

const StyledChordSymbol = styled.div`
  font-family: 'Roboto';
`;

export default ChordSymbol;
