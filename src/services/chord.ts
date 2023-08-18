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

export const setComposition = (root: string, steps: number[]) => {
  return steps.map((step) => getPitch(root, step));
};

/** Major */
const getMajorChord = (root: string) => setComposition(root, [0, 4, 7]);

/** 6 : 6th */
const get6thChord = (root: string) => setComposition(root, [0, 4, 7, 9]);

/** 7 : 7th */
const get7thChord = (root: string) => setComposition(root, [0, 4, 7, 10]);

/** 9 : 9th */
const get9thChord = (root: string) => setComposition(root, [0, 4, 7, 10, 14]);

/** 11 : 11th */
const get11thChord = (root: string) =>
  setComposition(root, [0, 4, 7, 10, 14, 17]);

/** Major 7th */
const getMajor7thChord = (root: string) => setComposition(root, [0, 4, 7, 11]);

/** suspended 2th */
const getSuspended2thChord = (root: string) => setComposition(root, [0, 2, 7]);

/** suspended 4th */
const getSuspended4thChord = (root: string) => setComposition(root, [0, 5, 7]);

/** 7th suspended 2th */
const get7thSuspended2thChord = (root: string) =>
  setComposition(root, [0, 2, 7, 10]);

/** 7th suspended 4th */
const get7thSuspended4thChord = (root: string) =>
  setComposition(root, [0, 5, 7, 10]);

/** dim : Diminished */
const getDiminishedChord = (root: string) => setComposition(root, [0, 3, 6]);

/** dim7 : Diminished */
const getDiminished7thChord = (root: string) =>
  setComposition(root, [0, 3, 6, 9]);

/** Minor */
const getMinorChord = (root: string) => setComposition(root, [0, 3, 7]);

/** Minor 6th */
const getMinor6thChord = (root: string) => setComposition(root, [0, 3, 7, 9]);

/** Minor 7th */
const getMinor7thChord = (root: string) => setComposition(root, [0, 3, 7, 10]);

/** Minor 7th Fret5 */
const getMinor7thFret5Chord = (root: string) =>
  setComposition(root, [0, 3, 6, 10]);

/** Minor 7th Sharp5 */
const getMinor7thSharp5Chord = (root: string) =>
  setComposition(root, [0, 3, 8, 10]);

/** Minor Major 7th */
const getMinorMajor7thChord = (root: string) =>
  setComposition(root, [0, 3, 7, 11]);

/** Minor 9th */
const getMinor9thChord = (root: string) =>
  setComposition(root, [0, 3, 7, 10, 14]);

/** Minor 11th */
const getMinor11thChord = (root: string) =>
  setComposition(root, [0, 3, 7, 10, 14, 17]);

/**
 * 14 or 2 | add2 == add9
 * 17 or 5 | add4 == add11
 * 21 or 9 | add6 == add13
 */

const getAdd9Chord = (root: string) => setComposition(root, [0, 4, 7, 14]);
const getAdd11Chord = (root: string) => setComposition(root, [0, 4, 7, 17]);
const getAdd13Chord = (root: string) => setComposition(root, [0, 4, 7, 21]);

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
  if (chord === `${root}11`) return get11thChord(root);
  if (chord === `${root}M7`) return getMajor7thChord(root);
  if (chord === `${root}sus2`) return getSuspended2thChord(root);
  if (chord === `${root}sus4`) return getSuspended4thChord(root);
  if (chord === `${root}7sus2`) return get7thSuspended2thChord(root);
  if (chord === `${root}7sus4`) return get7thSuspended4thChord(root);
  if (chord === `${root}dim`) return getDiminishedChord(root);
  if (chord === `${root}dim7`) return getDiminished7thChord(root);
  if (chord === `${root}m`) return getMinorChord(root);
  if (chord === `${root}m6`) return getMinor6thChord(root);
  if (chord === `${root}m7`) return getMinor7thChord(root);
  if (chord === `${root}m7[5`) return getMinor7thFret5Chord(root);
  if (chord === `${root}m7]5`) return getMinor7thSharp5Chord(root);
  if (chord === `${root}mM7`) return getMinorMajor7thChord(root);
  if (chord === `${root}m9`) return getMinor9thChord(root);
  if (chord === `${root}m11`) return getMinor11thChord(root);
  if (chord === `${root}add9` || chord === `${root}add2`)
    return getAdd9Chord(root);
  if (chord === `${root}add11` || chord === `${root}add4`)
    return getAdd11Chord(root);
  if (chord === `${root}add13` || chord === `${root}add6`)
    return getAdd13Chord(root);
  return [];
};

export const transChordSymbol = (chord: string) => {
  return chord.replaceAll('[', '♭').replaceAll(']', '♯');
};
