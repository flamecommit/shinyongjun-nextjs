export interface ChordType {
  name: string;
  chart: number[][];
}

// ♭ ♯

export const chordList: ChordType[] = [
  {
    name: 'C',
    chart: [
      [0, 1, 0, 2, 3, -1],
      [0, 1, 0, 2, 3, 3],
      [3, 5, 5, 5, 3, 3],
    ],
  },
  {
    name: 'D',
    chart: [[2, 3, 2, 0, -1, -1]],
  },
  {
    name: 'Dm',
    chart: [[1, 3, 2, 0, -1, -1]],
  },
  {
    name: 'Dm7',
    chart: [[1, 1, 2, 0, -1, -1]],
  },
  {
    name: 'E',
    chart: [[0, 0, 1, 2, 2, 0]],
  },
  {
    name: 'F',
    chart: [[1, 1, 2, 3, 3, 1]],
  },
  {
    name: 'G',
    chart: [
      [3, 0, 0, 0, 2, 3],
      [3, 3, 4, 5, 5, 3],
    ],
  },
  {
    name: 'A',
    chart: [
      [0, 2, 2, 2, 0, -1],
      [5, 5, 6, 7, 7, 5],
    ],
  },
  {
    name: 'Am',
    chart: [
      [0, 1, 2, 2, 0, -1],
      [5, 5, 5, 7, 7, 5],
    ],
  },
  {
    name: 'Am7',
    chart: [
      [0, 1, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  {
    name: 'B♭',
    chart: [[1, 2, 2, 2, 1, 1]],
  },
];
