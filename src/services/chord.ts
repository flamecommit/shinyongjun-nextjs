import { pitchList } from '@/constants/chord';
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

const getPitchIndex = (root: string) => {
  return pitchList.findIndex((p) => {
    if (typeof p === 'string') {
      return p === root;
    }
    return p.includes(root);
  });
};

export const getPitch = (root: string, step: number) => {
  // step 4 : Major 3rd, 장 3도
  // step 7 : Perfect 5th, 완전 5도
  const index = getPitchIndex(root);
  const computedIndex =
    pitchList.length > index + step
      ? index + step
      : (index + step) % pitchList.length;

  const pitch = pitchList[computedIndex];
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

/** 6 : 6th */
const get6thChord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 9)];
};

/** 7 : 7th */
const get7thChord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 10)];
};

/** 9 : 9th */
const get9thChord = (root: string) => {
  return [
    root,
    getPitch(root, 4),
    getPitch(root, 7),
    getPitch(root, 10),
    getPitch(root, 14),
  ];
};

/** Major 7th */
const getMajor7thChord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 11)];
};

/** suspended 2th */
const getSuspended2thChord = (root: string) => {
  return [root, getPitch(root, 2), getPitch(root, 7)];
};

/** suspended 4th */
const getSuspended4thChord = (root: string) => {
  return [root, getPitch(root, 5), getPitch(root, 7)];
};

/** 7th suspended 4th */
const get7thSuspended4thChord = (root: string) => {
  return [root, getPitch(root, 5), getPitch(root, 7), getPitch(root, 10)];
};

/** dim : Diminished */
const getDiminishedChord = (root: string) => {
  return [root, getPitch(root, 3), getPitch(root, 6), getPitch(root, 9)];
};

/** Minor */
const getMinorChord = (root: string) => {
  return [root, getPitch(root, 3), getPitch(root, 7)];
};

/** Minor 6th */
const getMinor6thChord = (root: string) => {
  return [root, getPitch(root, 3), getPitch(root, 7), getPitch(root, 9)];
};

/** Minor 7th */
const getMinor7thChord = (root: string) => {
  return [root, getPitch(root, 3), getPitch(root, 7), getPitch(root, 10)];
};

/** add9 (add9 는 add2와 동일하다) */
const getAdd9Chord = (root: string) => {
  return [root, getPitch(root, 4), getPitch(root, 7), getPitch(root, 14)];
};

export const getComposition = (chord: string) => {
  let root = '';

  if (chord.charAt(1) === '[' || chord.charAt(1) === ']') {
    root = chord.substring(0, 2);
  } else {
    root = chord.charAt(0);
  }

  if (chord === root) return getMajorChord(root);
  if (chord === `${root}6`) return get6thChord(root);
  if (chord === `${root}7`) return get7thChord(root);
  if (chord === `${root}9`) return get9thChord(root);
  if (chord === `${root}M7`) return getMajor7thChord(root);
  if (chord === `${root}sus2`) return getSuspended2thChord(root);
  if (chord === `${root}sus4`) return getSuspended4thChord(root);
  if (chord === `${root}7sus4`) return get7thSuspended4thChord(root);
  if (chord === `${root}dim`) return getDiminishedChord(root);
  if (chord === `${root}m`) return getMinorChord(root);
  if (chord === `${root}m6`) return getMinor6thChord(root);
  if (chord === `${root}m7`) return getMinor7thChord(root);
  if (chord === `${root}add9`) return getAdd9Chord(root);
  return [];
};

export const transChordSymbol = (chord: string) => {
  return chord.replaceAll('[', '♭').replaceAll(']', '♯');
};
