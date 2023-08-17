// 근음 = 으뜸음 = Root = 뿌리
// 음이름 = pitch names = 음의 고정 위치
// 계이름 = syllable names = 음의 상대 위치
// 화음 = chord

// major
// minor
// dominant
// suspended
// add
// augmented
// diminished

// eslint-disable-next-line prettier/prettier
const pitchList = [
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
const majorPitch = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const getPitchIndex = (root: string) => {
  return pitchList.findIndex((p) => {
    if (typeof p === 'string') {
      return p === root;
    }
    return p.includes(root);
  });
};

const getPitch = (root: string, step: number) => {
  // step 4 : Major 3rd, 장 3도
  // step 7 : Perfect 5th, 완전 5도
  const index = getPitchIndex(root);
  const pitch = pitchList[index + step];
  const type0 = ['C', 'F', 'G'];
  // const type1 = ['B', 'E'];

  function checkType(p: string[]) {
    const letter = p[0].charAt(0);
    return type0.includes(letter) ? p[0] : p[1];
  }

  return typeof pitch === 'string' ? pitch : checkType(pitch);
};

/** Major */
const getMajorChord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7)];
};

/** suspended 4th */
const getSuspended4thChord = (root: string) => {
  return [root, getPitch(root, 5), getPitch(root, 7)];
};

/** add9 (add9 는 add2와 동일하다) */
const getAdd9Chord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 14)];
};

/** 7th */
const get7thChord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 10)];
};

/** 7th suspended 4th */
const get7thSuspended4thChord = (root: string) => {
  return [root, getPitch(root, 5), getPitch(root, 7), getPitch(root, 10)];
};

/** Major 7th */
const getMajor7thChord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 11)];
};

/** Minor */
const getMinorChord = (root: string) => {
  return [root, getPitch(root, 3), getPitch(root, 7)];
};

/** Minor 7th */
const getMinor7thChord = (root: string) => {
  return [root, getPitch(root, 3), getPitch(root, 7), getPitch(root, 10)];
};

export const getComposition = (chord: string) => {
  let root = '';

  if (chord.charAt(1) === '[' || chord.charAt(1) === ']') {
    root = chord.substring(0, 2);
  } else {
    root = chord.charAt(0);
  }

  if (chord === root) return getMajorChord(root);
  if (chord === `${root}7`) return get7thChord(root);
  if (chord === `${root}m`) return getMinorChord(root);
  if (chord === `${root}m7`) return getMinor7thChord(root);
  if (chord === `${root}M7`) return getMajor7thChord(root);
  if (chord === `${root}sus4`) return getSuspended4thChord(root);
  if (chord === `${root}7sus4`) return get7thSuspended4thChord(root);
  if (chord === `${root}add9`) return getAdd9Chord(root);
  return [];
};

export const transChordSymbol = (chord: string) => {
  return chord.replaceAll('[', '♭').replaceAll(']', '♯');
};
