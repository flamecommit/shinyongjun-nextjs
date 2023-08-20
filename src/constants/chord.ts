export interface ChordType {
  [key: string]: {
    composition: string[];
    chartList: number[][];
  };
}

// [ => ♭
// ] => ♯
// 코드에서 음을 하나 빼야 한다면 5도음을 뺸다.

export const kindOfChord = [
  '',
  '6', // CM6, add6, add13
  '7',
  '9',
  '11',
  'M7',
  'sus2',
  'sus4',
  '7sus2',
  '7sus4',
  'dim',
  'dim7',
  'm',
  'm6',
  'm7',
  'm7[5',
  'm7]5',
  'mM7',
  'm9',
  'm11',
  'add2', // == add9
  'add4', // == add11
];

export const chordSymbolList = [
  'C',
  'C]',
  'D',
  'E[',
  'E',
  'F',
  'F]',
  'G',
  'G]',
  'A',
  'B[',
  'B',
];

export const pitchList = [
  'C',
  ['C]', 'D['],
  'D',
  ['D]', 'E['],
  'E',
  'F',
  ['F]', 'G['],
  'G',
  ['G]', 'A['],
  'A',
  ['A]', 'B['],
  'B',
];

export const scaleArray = [
  ['E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E'],
  ['B', 'C', 'C]', 'D', 'E[', 'E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B'],
  ['G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E', 'F', 'F]', 'G'],
  ['D', 'E[', 'E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D'],
  ['A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E', 'F', 'F]', 'G', 'G]', 'A'],
  ['E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E'],
];

const rootC: ChordType = {
  C: {
    composition: ['C', 'E', 'G'],
    chartList: [
      [0, 1, 0, 2, 3, -1],
      [0, 1, 0, 2, 3, 3],
      [3, 5, 5, 5, 3, -1],
      [8, 8, 9, 10, 10, 8],
    ],
  },
  C6: {
    composition: ['C', 'E', 'G', 'A'],
    chartList: [[0, 1, 2, 2, 3, -1]],
  },
  C7: {
    composition: ['C', 'E', 'G', 'B['],
    chartList: [
      [0, 1, 3, 2, 3, -1],
      [3, 5, 3, 5, 3, -1],
      [8, 8, 9, 8, 10, 8],
    ],
  },
  C9: {
    composition: ['C', 'E', 'G', 'B[', 'D'],
    chartList: [[0, 3, 3, 2, 3, -1]],
  },
  C11: {
    composition: ['C', 'E', 'G', 'B[', 'D', 'F'],
    chartList: [
      [6, 6, 0, 0, 7, 8],
      [10, 8, 9, 8, 8, 8],
    ],
  },
  CM7: {
    composition: ['C', 'E', 'G', 'B'],
    chartList: [[0, 0, 0, 2, 3, -1]],
  },
  Csus2: {
    composition: ['C', 'D', 'G'],
    chartList: [
      [3, 1, 0, 0, 3, -1],
      [3, 3, 0, 0, 3, -1],
      [3, 3, 5, 5, 3, -1],
    ],
  },
  Csus4: {
    composition: ['C', 'F', 'G'],
    chartList: [
      [1, 1, 0, 3, 3, -1],
      [3, 1, 0, 3, 3, -1],
      [3, 6, 5, 3, 3, -1],
    ],
  },
  C7sus2: {
    composition: ['C', 'D', 'G', 'B['],
    chartList: [
      [3, 3, 3, 5, 3, -1],
      [3, 1, 3, 0, 3, -1],
      [3, 3, 3, 0, 3, -1],
    ],
  },
  C7sus4: {
    composition: ['C', 'F', 'G', 'B['],
    chartList: [
      [3, 6, 3, 3, 3, -1],
      [3, 6, 3, 5, 3, -1],
    ],
  },
  Cdim: {
    composition: ['C', 'E[', 'F]'],
    chartList: [[2, 1, -1, 1, 3, -1]],
  },
  Cdim7: {
    composition: ['C', 'E[', 'F]', 'A'],
    chartList: [[8, 7, 8, 7, 0, 8]],
  },
  Cm: {
    composition: ['C', 'E[', 'G'],
    chartList: [
      [3, 4, 5, 5, 3, -1],
      [8, 8, 8, 10, 10, 8],
    ],
  },
  Cm6: {
    composition: ['C', 'E[', 'G', 'A'],
    chartList: [[8, 10, 8, 10, 10, 8]],
  },
  Cm7: {
    composition: ['C', 'E[', 'G', 'B['],
    chartList: [[3, 4, 3, 5, 3, -1]],
  },
  'Cm7[5': {
    composition: ['C', 'E[', 'F]', 'B['],
    chartList: [[3, 4, 3, 5, 3, -1]],
  },
  'Cm7]5': {
    composition: ['C', 'E[', 'G]', 'B['],
    chartList: [[3, 4, 3, 5, 3, -1]],
  },
  CmM7: {
    composition: ['C', 'E[', 'G', 'B'],
    chartList: [[3, 0, 0, 1, 3, -1]],
  },
  Cm9: {
    composition: ['C', 'E[', 'G', 'B[', 'D'],
    chartList: [[3, 4, 3, 0, 3, -1]],
  },
  Cm11: {
    composition: ['C', 'E[', 'G', 'B[', 'D', 'F'],
    chartList: [[6, 6, 0, 0, 6, 8]],
  },
  Cadd2: {
    composition: ['C', 'E', 'G', 'D'],
    chartList: [[0, 3, 0, 2, 3, -1]],
  },
  Cadd4: {
    composition: ['C', 'E', 'G', 'F'],
    chartList: [[0, 1, 0, 3, 3, -1]],
  },
  Cadd6: {
    composition: ['C', 'E', 'G', 'A'],
    chartList: [],
  },
};

const rootCsharp: ChordType = {
  'C]': {
    composition: ['C]', 'F', 'G]'],
    chartList: [
      [4, 6, 6, 6, 4, -1],
      [9, 9, 10, 11, 11, 9],
    ],
  },
  'C]6': {
    composition: ['C]', 'F', 'G]', 'B['],
    chartList: [[6, 6, 6, 6, 4, -1]],
  },
  'C]7': {
    composition: ['C]', 'F', 'G]', 'B'],
    chartList: [[4, 6, 4, 6, 4, -1]],
  },
  'C]9': {
    composition: ['C]', 'F', 'G]', 'B', 'E['],
    chartList: [[-1, 4, 4, 3, 4, -1]],
  },
  'C]11': {
    composition: ['C]', 'F', 'G]', 'B', 'E[', 'F]'],
    chartList: [],
  },
  'C]M7': {
    composition: ['C]', 'F', 'G]', 'C'],
    chartList: [[4, 6, 5, 6, 4, -1]],
  },
  'C]sus2': {
    composition: ['C]', 'E[', 'G]'],
    chartList: [[4, 4, 6, 6, 4, -1]],
  },
  'C]sus4': {
    composition: ['C]', 'F]', 'G]'],
    chartList: [[4, 7, 6, 4, 4, -1]],
  },
  'C]7sus2': {
    composition: ['C]', 'E[', 'G]', 'B'],
    chartList: [[4, 4, 4, 6, 4, -1]],
  },
  'C]7sus4': {
    composition: ['C]', 'F]', 'G]', 'B'],
    chartList: [
      [4, 7, 4, 4, 4, -1],
      [4, 7, 4, 6, 4, -1],
    ],
  },
  'C]dim': {
    composition: ['C]', 'E', 'G'],
    chartList: [],
  },
  'C]dim7': {
    composition: ['C]', 'E', 'G', 'B['],
    chartList: [],
  },
  'C]m': {
    composition: ['C]', 'E', 'G]'],
    chartList: [
      [4, 5, 6, 6, 4, -1],
      [9, 9, 9, 11, 11, 9],
    ],
  },
  'C]m6': {
    composition: ['C]', 'E', 'G]', 'B['],
    chartList: [],
  },
  'C]m7': {
    composition: ['C]', 'E', 'G]', 'B'],
    chartList: [
      [4, 5, 4, 6, 4, -1],
      [9, 9, 10, 9, 11, 9],
    ],
  },
  'C]m7[5': {
    composition: ['C]', 'E', 'G', 'B'],
    chartList: [],
  },
  'C]m7]5': {
    composition: ['C]', 'E', 'A', 'B'],
    chartList: [],
  },
  'C]mM7': {
    composition: ['C]', 'E', 'G]', 'C'],
    chartList: [],
  },
  'C]m9': {
    composition: ['C]', 'E', 'G]', 'B', 'E['],
    chartList: [],
  },
  'C]m11': {
    composition: ['C]', 'E', 'G]', 'B', 'E[', 'F]'],
    chartList: [],
  },
  'C]add2': {
    composition: ['C]', 'F', 'G]', 'E['],
    chartList: [],
  },
  'C]add4': {
    composition: ['C]', 'F', 'G]', 'F]'],
    chartList: [],
  },
  'C]add6': {
    composition: ['C]', 'F', 'G]', 'B['],
    chartList: [],
  },
};

const rootD: ChordType = {
  D: {
    composition: ['D', 'F]', 'A'],
    chartList: [
      [2, 3, 2, 0, -1, -1],
      [5, 7, 7, 7, 5, -1],
    ],
  },
  D6: {
    composition: ['D', 'F]', 'A', 'B'],
    chartList: [[2, 0, 2, 0, -1, -1]],
  },
  D7: {
    composition: ['D', 'F]', 'A', 'C'],
    chartList: [
      [2, 1, 2, 0, -1, -1],
      [5, 7, 5, 7, 5, -1],
    ],
  },
  D9: {
    composition: ['D', 'F]', 'A', 'C', 'E'],
    chartList: [],
  },
  D11: {
    composition: ['D', 'F]', 'A', 'C', 'E', 'G'],
    chartList: [],
  },
  DM7: {
    composition: ['D', 'F]', 'A', 'C]'],
    chartList: [[2, 2, 2, 0, -1, -1]],
  },
  Dsus2: {
    composition: ['D', 'E', 'A'],
    chartList: [[5, 5, 7, 7, 5, -1]],
  },
  Dsus4: {
    composition: ['D', 'G', 'A'],
    chartList: [
      [3, 3, 2, 0, -1, -1],
      [5, 8, 7, 5, 5, -1],
    ],
  },
  D7sus2: {
    composition: ['D', 'E', 'A', 'C'],
    chartList: [
      [0, 1, 2, 0, -1, -1],
      [5, 5, 5, 7, 5, -1],
    ],
  },
  D7sus4: {
    composition: ['D', 'G', 'A', 'C'],
    chartList: [
      [3, 1, 2, 0, -1, -1],
      [5, 8, 5, 5, 5, -1],
      [5, 8, 5, 7, 5, -1],
    ],
  },
  Ddim: {
    composition: ['D', 'F', 'G]'],
    chartList: [[1, 3, 1, 0, -1, -1]],
  },
  Ddim7: {
    composition: ['D', 'F', 'G]', 'B'],
    chartList: [[1, 0, 1, 0, -1, -1]],
  },
  Dm: {
    composition: ['D', 'F', 'A'],
    chartList: [
      [1, 3, 2, 0, -1, -1],
      [5, 6, 7, 7, 5, -1],
    ],
  },
  Dm6: {
    composition: ['D', 'F', 'A', 'B'],
    chartList: [[1, 0, 2, 0, -1, -1]],
  },
  Dm7: {
    composition: ['D', 'F', 'A', 'C'],
    chartList: [
      [1, 1, 2, 0, -1, -1],
      [5, 6, 5, 7, 5, -1],
    ],
  },
  Dm9: {
    composition: ['D', 'F', 'A', 'C', 'E'],
    chartList: [],
  },
  Dm11: {
    composition: ['D', 'F', 'A', 'C', 'E', 'G'],
    chartList: [],
  },
  'Dm7[5': {
    composition: ['D', 'F', 'G]', 'C'],
    chartList: [],
  },
  'Dm7]5': {
    composition: ['D', 'F', 'B[', 'C'],
    chartList: [],
  },
  DmM7: {
    composition: ['D', 'F', 'A', 'C]'],
    chartList: [],
  },
  Dadd2: {
    composition: ['D', 'F]', 'A', 'E'],
    chartList: [],
  },
  Dadd4: {
    composition: ['D', 'F]', 'A', 'G'],
    chartList: [],
  },
  Dadd6: {
    composition: ['D', 'F]', 'A', 'B'],
    chartList: [],
  },
};

const rootEfret: ChordType = {
  'E[': {
    composition: ['E[', 'G', 'B['],
    chartList: [[6, 8, 8, 8, 6, -1]],
  },
  'E[6': {
    composition: ['E[', 'G', 'B[', 'C'],
    chartList: [],
  },
  'E[7': {
    composition: ['E[', 'G', 'B[', 'C]'],
    chartList: [],
  },
  'E[9': {
    composition: ['E[', 'G', 'B[', 'C]', 'F'],
    chartList: [],
  },
  'E[11': {
    composition: ['E[', 'G', 'B[', 'C]', 'F', 'G]'],
    chartList: [],
  },
  'E[M7': {
    composition: ['E[', 'G', 'B[', 'D'],
    chartList: [],
  },
  'E[sus2': {
    composition: ['E[', 'F', 'B['],
    chartList: [[6, 6, 8, 8, 6, -1]],
  },
  'E[sus4': {
    composition: ['E[', 'G]', 'B['],
    chartList: [[6, 9, 8, 6, 6, -1]],
  },
  'E[7sus2': {
    composition: ['E[', 'F', 'B[', 'C]'],
    chartList: [[6, 6, 6, 8, 6, -1]],
  },
  'E[7sus4': {
    composition: ['E[', 'G]', 'B[', 'C]'],
    chartList: [
      [6, 9, 6, 6, 6, -1],
      [6, 9, 6, 8, 6, -1],
    ],
  },
  'E[dim': {
    composition: ['E[', 'F]', 'A'],
    chartList: [],
  },
  'E[dim7': {
    composition: ['E[', 'F]', 'A', 'C'],
    chartList: [],
  },
  'E[m': {
    composition: ['E[', 'F]', 'B['],
    chartList: [],
  },
  'E[m6': {
    composition: ['E[', 'F]', 'B[', 'C'],
    chartList: [],
  },
  'E[m7': {
    composition: ['E[', 'F]', 'B[', 'C]'],
    chartList: [],
  },
  'E[m7[5': {
    composition: ['E[', 'F]', 'A', 'C]'],
    chartList: [],
  },
  'E[m7]5': {
    composition: ['E[', 'F]', 'B', 'C]'],
    chartList: [],
  },
  'E[mM7': {
    composition: ['E[', 'F]', 'B[', 'D'],
    chartList: [],
  },
  'E[m9': {
    composition: ['E[', 'F]', 'B[', 'C]', 'F'],
    chartList: [],
  },
  'E[m11': {
    composition: ['E[', 'F]', 'B[', 'C]', 'F', 'G]'],
    chartList: [],
  },
  'E[add2': {
    composition: ['E[', 'G', 'B[', 'F'],
    chartList: [],
  },
  'E[add4': {
    composition: ['E[', 'G', 'B[', 'G]'],
    chartList: [],
  },
  'E[add6': {
    composition: ['E[', 'G', 'B[', 'C'],
    chartList: [],
  },
};

const rootE: ChordType = {
  E: {
    composition: ['E', 'G]', 'B'],
    chartList: [
      [0, 0, 1, 2, 2, 0],
      [7, 9, 9, 9, 7, -1],
    ],
  },
  E6: {
    composition: ['E', 'G]', 'B', 'C]'],
    chartList: [],
  },
  E7: {
    composition: ['E', 'G]', 'B', 'D'],
    chartList: [[0, 0, 1, 0, 2, 0]],
  },
  E9: {
    composition: ['E', 'G]', 'B', 'D', 'F]'],
    chartList: [[2, 0, 1, 0, 2, 0]],
  },
  E11: {
    composition: ['E', 'G]', 'B', 'D', 'F]', 'A'],
    chartList: [],
  },
  EM7: {
    composition: ['E', 'G]', 'B', 'E['],
    chartList: [[0, 0, 1, 1, 2, 0]],
  },
  Esus2: {
    composition: ['E', 'F]', 'B'],
    chartList: [],
  },
  Esus4: {
    composition: ['E', 'A', 'B'],
    chartList: [
      [0, 0, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 0],
    ],
  },
  E7sus2: {
    composition: ['E', 'F]', 'B', 'D'],
    chartList: [],
  },
  E7sus4: {
    composition: ['E', 'A', 'B', 'D'],
    chartList: [[0, 0, 2, 0, 2, 0]],
  },
  Edim: {
    composition: ['E', 'G', 'B['],
    chartList: [],
  },
  Edim7: {
    composition: ['E', 'G', 'B[', 'C]'],
    chartList: [],
  },
  Em: {
    composition: ['E', 'G', 'B'],
    chartList: [[0, 0, 0, 2, 2, 0]],
  },
  Em6: {
    composition: ['E', 'G', 'B', 'C]'],
    chartList: [],
  },
  Em7: {
    composition: ['E', 'G', 'B', 'D'],
    chartList: [[0, 0, 0, 0, 2, 0]],
  },
  'Em7[5': {
    composition: ['E', 'G', 'B[', 'D'],
    chartList: [],
  },
  'Em7]5': {
    composition: ['E', 'G', 'C', 'D'],
    chartList: [],
  },
  EmM7: {
    composition: ['E', 'G', 'B', 'E['],
    chartList: [],
  },
  Em9: {
    composition: ['E', 'G', 'B', 'D', 'F]'],
    chartList: [],
  },
  Em11: {
    composition: ['E', 'G', 'B', 'D', 'F]', 'A'],
    chartList: [],
  },
  Eadd2: {
    composition: ['E', 'G]', 'B', 'F]'],
    chartList: [[0, 0, 1, 4, 2, 0]],
  },
  Eadd4: {
    composition: ['E', 'G]', 'B', 'A'],
    chartList: [],
  },
  Eadd6: {
    composition: ['E', 'G]', 'B', 'C]'],
    chartList: [],
  },
};

const rootF: ChordType = {
  F: {
    composition: ['F', 'A', 'C'],
    chartList: [[1, 1, 2, 3, 3, 1]],
  },
  F6: {
    composition: ['F', 'A', 'C', 'D'],
    chartList: [],
  },
  F7: {
    composition: ['F', 'A', 'C', 'E['],
    chartList: [],
  },
  F9: {
    composition: ['F', 'A', 'C', 'E[', 'G'],
    chartList: [],
  },
  F11: {
    composition: ['F', 'A', 'C', 'E[', 'G', 'B['],
    chartList: [],
  },
  FM7: {
    composition: ['F', 'A', 'C', 'E'],
    chartList: [[0, 1, 2, 3, -1, -1]],
  },
  Fsus2: {
    composition: ['F', 'G', 'C'],
    chartList: [],
  },
  Fsus4: {
    composition: ['F', 'B[', 'C'],
    chartList: [],
  },
  F7sus2: {
    composition: ['F', 'G', 'C', 'E['],
    chartList: [],
  },
  F7sus4: {
    composition: ['F', 'B[', 'C', 'E['],
    chartList: [],
  },
  Fdim: {
    composition: ['F', 'G]', 'B'],
    chartList: [],
  },
  Fdim7: {
    composition: ['F', 'G]', 'B', 'D'],
    chartList: [],
  },
  Fm: {
    composition: ['F', 'G]', 'C'],
    chartList: [],
  },
  Fm6: {
    composition: ['F', 'G]', 'C', 'D'],
    chartList: [],
  },
  Fm7: {
    composition: ['F', 'G]', 'C', 'E['],
    chartList: [],
  },
  'Fm7[5': {
    composition: ['F', 'G]', 'B', 'E['],
    chartList: [],
  },
  'Fm7]5': {
    composition: ['F', 'G]', 'C]', 'E['],
    chartList: [],
  },
  FmM7: {
    composition: ['F', 'G]', 'C', 'E'],
    chartList: [],
  },
  Fm9: {
    composition: ['F', 'G]', 'C', 'E[', 'G'],
    chartList: [],
  },
  Fm11: {
    composition: ['F', 'G]', 'C', 'E[', 'G', 'B['],
    chartList: [],
  },
  Fadd2: {
    composition: ['F', 'A', 'C', 'G'],
    chartList: [],
  },
  Fadd4: {
    composition: ['F', 'A', 'C', 'B['],
    chartList: [],
  },
  Fadd6: {
    composition: ['F', 'A', 'C', 'D'],
    chartList: [],
  },
};

const rootFsharp: ChordType = {
  'F]': {
    composition: ['F]', 'B[', 'C]'],
    chartList: [[2, 2, 3, 4, 4, 2]],
  },
  'F]6': {
    composition: ['F]', 'B[', 'C]', 'E['],
    chartList: [],
  },
  'F]7': {
    composition: ['F]', 'B[', 'C]', 'E'],
    chartList: [],
  },
  'F]9': {
    composition: ['F]', 'B[', 'C]', 'E', 'G]'],
    chartList: [],
  },
  'F]11': {
    composition: ['F]', 'B[', 'C]', 'E', 'G]', 'B'],
    chartList: [],
  },
  'F]M7': {
    composition: ['F]', 'B[', 'C]', 'F'],
    chartList: [[2, 2, 3, 3, 4, 2]],
  },
  'F]sus2': {
    composition: ['F]', 'G]', 'C]'],
    chartList: [],
  },
  'F]sus4': {
    composition: ['F]', 'B', 'C]'],
    chartList: [],
  },
  'F]7sus2': {
    composition: ['F]', 'G]', 'C]', 'E'],
    chartList: [],
  },
  'F]7sus4': {
    composition: ['F]', 'B', 'C]', 'E'],
    chartList: [],
  },
  'F]dim': {
    composition: ['F]', 'A', 'C'],
    chartList: [],
  },
  'F]dim7': {
    composition: ['F]', 'A', 'C', 'E['],
    chartList: [],
  },
  'F]m': {
    composition: ['F]', 'A', 'C]'],
    chartList: [[2, 2, 2, 4, 4, 2]],
  },
  'F]m6': {
    composition: ['F]', 'A', 'C]', 'E['],
    chartList: [],
  },
  'F]m7': {
    composition: ['F]', 'A', 'C]', 'E'],
    chartList: [[2, 2, 2, 2, 4, 2]],
  },
  'F]m7[5': {
    composition: ['F]', 'A', 'C', 'E'],
    chartList: [],
  },
  'F]m7]5': {
    composition: ['F]', 'A', 'D', 'E'],
    chartList: [],
  },
  'F]mM7': {
    composition: ['F]', 'A', 'C]', 'F'],
    chartList: [],
  },
  'F]m9': {
    composition: ['F]', 'A', 'C]', 'E', 'G]'],
    chartList: [],
  },
  'F]m11': {
    composition: ['F]', 'A', 'C]', 'E', 'G]', 'B'],
    chartList: [[0, 0, 2, 2, -1, 2]],
  },
  'F]add2': {
    composition: ['F]', 'B[', 'C]', 'G]'],
    chartList: [],
  },
  'F]add4': {
    composition: ['F]', 'B[', 'C]', 'B'],
    chartList: [],
  },
  'F]add6': {
    composition: ['F]', 'B[', 'C]', 'E['],
    chartList: [],
  },
};

const rootG: ChordType = {
  G: {
    composition: ['G', 'B', 'D'],
    chartList: [
      [3, 0, 0, 0, 2, 3],
      [3, 3, 4, 5, 5, 3],
    ],
  },
  G6: {
    composition: ['G', 'B', 'D', 'E'],
    chartList: [],
  },
  G7: {
    composition: ['G', 'B', 'D', 'F'],
    chartList: [],
  },
  G9: {
    composition: ['G', 'B', 'D', 'F', 'A'],
    chartList: [],
  },
  G11: {
    composition: ['G', 'B', 'D', 'F', 'A', 'C'],
    chartList: [],
  },
  GM7: {
    composition: ['G', 'B', 'D', 'F]'],
    chartList: [[2, 0, 0, 0, 2, 3]],
  },
  Gsus2: {
    composition: ['G', 'A', 'D'],
    chartList: [],
  },
  Gsus4: {
    composition: ['G', 'C', 'D'],
    chartList: [[3, 1, 0, 0, 3, 3]],
  },
  G7sus2: {
    composition: ['G', 'A', 'D', 'F'],
    chartList: [],
  },
  G7sus4: {
    composition: ['G', 'C', 'D', 'F'],
    chartList: [],
  },
  Gdim: {
    composition: ['G', 'B[', 'C]'],
    chartList: [],
  },
  Gdim7: {
    composition: ['G', 'B[', 'C]', 'E'],
    chartList: [],
  },
  Gm: {
    composition: ['G', 'B[', 'D'],
    chartList: [],
  },
  Gm6: {
    composition: ['G', 'B[', 'D', 'E'],
    chartList: [],
  },
  Gm7: {
    composition: ['G', 'B[', 'D', 'F'],
    chartList: [[3, 3, 3, 3, 5, 3]],
  },
  'Gm7[5': {
    composition: ['G', 'B[', 'C]', 'F'],
    chartList: [],
  },
  'Gm7]5': {
    composition: ['G', 'B[', 'E[', 'F'],
    chartList: [],
  },
  GmM7: {
    composition: ['G', 'B[', 'D', 'F]'],
    chartList: [],
  },
  Gm9: {
    composition: ['G', 'B[', 'D', 'F', 'A'],
    chartList: [],
  },
  Gm11: {
    composition: ['G', 'B[', 'D', 'F', 'A', 'C'],
    chartList: [],
  },
  Gadd2: {
    composition: ['G', 'B', 'D', 'A'],
    chartList: [
      [-1, -1, 2, 0, 2, 3],
      [3, 0, 2, 0, -1, 3],
    ],
  },
  Gadd4: {
    composition: ['G', 'B', 'D', 'C'],
    chartList: [],
  },
  Gadd6: {
    composition: ['G', 'B', 'D', 'E'],
    chartList: [],
  },
};

const rootGsharp: ChordType = {
  'G]': {
    composition: ['G]', 'C', 'E['],
    chartList: [[4, 4, 5, 6, 6, 4]],
  },
  'G]6': {
    composition: ['G]', 'C', 'E[', 'F'],
    chartList: [],
  },
  'G]7': {
    composition: ['G]', 'C', 'E[', 'F]'],
    chartList: [],
  },
  'G]9': {
    composition: ['G]', 'C', 'E[', 'F]', 'B['],
    chartList: [],
  },
  'G]11': {
    composition: ['G]', 'C', 'E[', 'F]', 'B[', 'C]'],
    chartList: [],
  },
  'G]M7': {
    composition: ['G]', 'C', 'E[', 'G'],
    chartList: [],
  },
  'G]sus2': {
    composition: ['G]', 'B[', 'E['],
    chartList: [],
  },
  'G]sus4': {
    composition: ['G]', 'C]', 'E['],
    chartList: [],
  },
  'G]7sus2': {
    composition: ['G]', 'B[', 'E[', 'F]'],
    chartList: [],
  },
  'G]7sus4': {
    composition: ['G]', 'C]', 'E[', 'F]'],
    chartList: [],
  },
  'G]dim': {
    composition: ['G]', 'B', 'D'],
    chartList: [],
  },
  'G]dim7': {
    composition: ['G]', 'B', 'D', 'F'],
    chartList: [],
  },
  'G]m': {
    composition: ['G]', 'B', 'E['],
    chartList: [],
  },
  'G]m6': {
    composition: ['G]', 'B', 'E[', 'F'],
    chartList: [],
  },
  'G]m7': {
    composition: ['G]', 'B', 'E[', 'F]'],
    chartList: [[4, 4, 4, 4, 6, 4]],
  },
  'G]m7[5': {
    composition: ['G]', 'B', 'D', 'F]'],
    chartList: [],
  },
  'G]m7]5': {
    composition: ['G]', 'B', 'E', 'F]'],
    chartList: [[0, 0, 4, 4, -1, 4]],
  },
  'G]mM7': {
    composition: ['G]', 'B', 'E[', 'G'],
    chartList: [],
  },
  'G]m9': {
    composition: ['G]', 'B', 'E[', 'F]', 'B['],
    chartList: [],
  },
  'G]m11': {
    composition: ['G]', 'B', 'E[', 'F]', 'B[', 'C]'],
    chartList: [],
  },
  'G]add2': {
    composition: ['G]', 'C', 'E[', 'B['],
    chartList: [],
  },
  'G]add4': {
    composition: ['G]', 'C', 'E[', 'C]'],
    chartList: [],
  },
  'G]add6': {
    composition: ['G]', 'C', 'E[', 'F'],
    chartList: [],
  },
};

const rootA: ChordType = {
  A: {
    composition: ['A', 'C]', 'E'],
    chartList: [
      [0, 2, 2, 2, 0, -1],
      [5, 5, 6, 7, 7, 5],
    ],
  },
  A6: {
    composition: ['A', 'C]', 'E', 'F]'],
    chartList: [],
  },
  A7: {
    composition: ['A', 'C]', 'E', 'G'],
    chartList: [
      [0, 2, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  A9: {
    composition: ['A', 'C]', 'E', 'G', 'B'],
    chartList: [],
  },
  A11: {
    composition: ['A', 'C]', 'E', 'G', 'B', 'D'],
    chartList: [],
  },
  AM7: {
    composition: ['A', 'C]', 'E', 'G]'],
    chartList: [[0, 2, 1, 2, 0, -1]],
  },
  Asus2: {
    composition: ['A', 'B', 'E'],
    chartList: [[0, 0, 2, 2, 0, -1]],
  },
  Asus4: {
    composition: ['A', 'D', 'E'],
    chartList: [],
  },
  A7sus2: {
    composition: ['A', 'B', 'E', 'G'],
    chartList: [],
  },
  A7sus4: {
    composition: ['A', 'D', 'E', 'G'],
    chartList: [[0, 3, 0, 2, 0, -1]],
  },
  Adim: {
    composition: ['A', 'C', 'E['],
    chartList: [],
  },
  Adim7: {
    composition: ['A', 'C', 'E[', 'F]'],
    chartList: [],
  },
  Am: {
    composition: ['A', 'C', 'E'],
    chartList: [
      [0, 1, 2, 2, 0, -1],
      [5, 5, 5, 7, 7, 5],
    ],
  },
  Am6: {
    composition: ['A', 'C', 'E', 'F]'],
    chartList: [[2, 1, 2, 2, 0, -1]],
  },
  Am7: {
    composition: ['A', 'C', 'E', 'G'],
    chartList: [
      [0, 1, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  'Am7[5': {
    composition: ['A', 'C', 'E[', 'G'],
    chartList: [],
  },
  'Am7]5': {
    composition: ['A', 'C', 'F', 'G'],
    chartList: [],
  },
  AmM7: {
    composition: ['A', 'C', 'E', 'G]'],
    chartList: [[0, 1, 1, 2, 0, -1]],
  },
  Am9: {
    composition: ['A', 'C', 'E', 'G', 'B'],
    chartList: [],
  },
  Am11: {
    composition: ['A', 'C', 'E', 'G', 'B', 'D'],
    chartList: [],
  },
  Aadd2: {
    composition: ['A', 'C]', 'E', 'B'],
    chartList: [[0, 2, 4, 2, 0, -1]],
  },
  Aadd4: {
    composition: ['A', 'C]', 'E', 'D'],
    chartList: [],
  },
  Aadd6: {
    composition: ['A', 'C]', 'E', 'F]'],
    chartList: [],
  },
};

const rootBfret: ChordType = {
  'B[': {
    composition: ['B[', 'D', 'F'],
    chartList: [[1, 3, 3, 3, 1, -1]],
  },
  'B[6': {
    composition: ['B[', 'D', 'F', 'G'],
    chartList: [],
  },
  'B[7': {
    composition: ['B[', 'D', 'F', 'G]'],
    chartList: [],
  },
  'B[9': {
    composition: ['B[', 'D', 'F', 'G]', 'C'],
    chartList: [],
  },
  'B[11': {
    composition: ['B[', 'D', 'F', 'G]', 'C', 'E['],
    chartList: [],
  },
  'B[M7': {
    composition: ['B[', 'D', 'F', 'A'],
    chartList: [],
  },
  'B[sus2': {
    composition: ['B[', 'C', 'F'],
    chartList: [],
  },
  'B[sus4': {
    composition: ['B[', 'E[', 'F'],
    chartList: [],
  },
  'B[7sus2': {
    composition: ['B[', 'C', 'F', 'G]'],
    chartList: [],
  },
  'B[7sus4': {
    composition: ['B[', 'E[', 'F', 'G]'],
    chartList: [],
  },
  'B[dim': {
    composition: ['B[', 'C]', 'E'],
    chartList: [],
  },
  'B[dim7': {
    composition: ['B[', 'C]', 'E', 'G'],
    chartList: [],
  },
  'B[m': {
    composition: ['B[', 'C]', 'F'],
    chartList: [[1, 2, 3, 3, 1, -1]],
  },
  'B[m6': {
    composition: ['B[', 'C]', 'F', 'G'],
    chartList: [],
  },
  'B[m7': {
    composition: ['B[', 'C]', 'F', 'G]'],
    chartList: [],
  },
  'B[m7[5': {
    composition: ['B[', 'C]', 'E', 'G]'],
    chartList: [],
  },
  'B[m7]5': {
    composition: ['B[', 'C]', 'F]', 'G]'],
    chartList: [],
  },
  'B[mM7': {
    composition: ['B[', 'C]', 'F', 'A'],
    chartList: [],
  },
  'B[m9': {
    composition: ['B[', 'C]', 'F', 'G]', 'C'],
    chartList: [],
  },
  'B[m11': {
    composition: ['B[', 'C]', 'F', 'G]', 'C', 'E['],
    chartList: [],
  },
  'B[add2': {
    composition: ['B[', 'D', 'F', 'C'],
    chartList: [],
  },
  'B[add4': {
    composition: ['B[', 'D', 'F', 'E['],
    chartList: [],
  },
  'B[add6': {
    composition: ['B[', 'D', 'F', 'G'],
    chartList: [],
  },
};

const rootB: ChordType = {
  B: {
    composition: ['B', 'E[', 'F]'],
    chartList: [
      [2, 4, 4, 4, 2, -1],
      [7, 7, 8, 9, 9, 7],
    ],
  },
  B6: {
    composition: ['B', 'E[', 'F]', 'G]'],
    chartList: [],
  },
  B7: {
    composition: ['B', 'E[', 'F]', 'A'],
    chartList: [
      [2, 0, 2, 1, 2, -1],
      [2, 4, 2, 4, 2, -1],
    ],
  },
  B9: {
    composition: ['B', 'E[', 'F]', 'A', 'C]'],
    chartList: [],
  },
  B11: {
    composition: ['B', 'E[', 'F]', 'A', 'C]', 'E'],
    chartList: [],
  },
  BM7: {
    composition: ['B', 'E[', 'F]', 'B['],
    chartList: [[2, 4, 3, 4, 2, -1]],
  },
  Bsus2: {
    composition: ['B', 'C]', 'F]'],
    chartList: [],
  },
  Bsus4: {
    composition: ['B', 'E', 'F]'],
    chartList: [[0, 0, 4, 4, 2, -1]],
  },
  B7sus2: {
    composition: ['B', 'C]', 'F]', 'A'],
    chartList: [],
  },
  B7sus4: {
    composition: ['B', 'E', 'F]', 'A'],
    chartList: [],
  },
  Bdim: {
    composition: ['B', 'D', 'F'],
    chartList: [],
  },
  Bdim7: {
    composition: ['B', 'D', 'F', 'G]'],
    chartList: [],
  },
  Bm: {
    composition: ['B', 'D', 'F]'],
    chartList: [[2, 3, 4, 4, 2, -1]],
  },
  Bm6: {
    composition: ['B', 'D', 'F]', 'G]'],
    chartList: [[2, 3, 4, 4, 2, -1]],
  },
  Bm7: {
    composition: ['B', 'D', 'F]', 'A'],
    chartList: [[2, 3, 2, 4, 2, -1]],
  },
  'Bm7[5': {
    composition: ['B', 'D', 'F', 'A'],
    chartList: [],
  },
  'Bm7]5': {
    composition: ['B', 'D', 'G', 'A'],
    chartList: [],
  },
  BmM7: {
    composition: ['B', 'D', 'F]', 'B['],
    chartList: [],
  },
  Bm9: {
    composition: ['B', 'D', 'F]', 'A', 'C]'],
    chartList: [],
  },
  Bm11: {
    composition: ['B', 'D', 'F]', 'A', 'C]', 'E'],
    chartList: [[0, 3, 2, 0, 2, -1]],
  },
  Badd2: {
    composition: ['B', 'E[', 'F]', 'C]'],
    chartList: [],
  },
  Badd4: {
    composition: ['B', 'E[', 'F]', 'E'],
    chartList: [],
  },
  Badd6: {
    composition: ['B', 'E[', 'F]', 'G]'],
    chartList: [],
  },
};

export const inversion: ChordType = {
  'Em/D': {
    composition: [],
    chartList: [[0, 0, 0, 0, -1, -1]],
  },
  'B[/D': {
    composition: [],
    chartList: [[1, 3, 3, 0, -1, -1]],
  },
  'C/E': {
    composition: [],
    chartList: [[0, 1, 0, 2, 3, 0]],
  },
  'D/F]': {
    composition: [],
    chartList: [[2, 3, 2, 0, -1, 2]],
  },
  'D7/F]': {
    composition: [],
    chartList: [[2, 1, 2, 0, 0, 2]],
  },
  'G/B': {
    composition: [],
    chartList: [[3, 3, 0, 0, 2, -1]],
  },
};

export const newChordList: ChordType = {
  ...rootC,
  ...rootCsharp,
  ...rootD,
  ...rootEfret,
  ...rootE,
  ...rootF,
  ...rootFsharp,
  ...rootG,
  ...rootGsharp,
  ...rootA,
  ...rootBfret,
  ...rootB,
  ...inversion,
};
