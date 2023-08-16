// 근음 = 으뜸음 = Root = 뿌리
// 음이름 = pitch names = 음의 고정 위치
// 계이름 = syllable names = 음의 상대 위치
// 화음 = chord

// eslint-disable-next-line prettier/prettier
const pitch = [
  'C',
  'C]',
  'D',
  'D]',
  'E',
  'F',
  'F]',
  'G',
  'G]',
  'A',
  'A]',
  'B',
  'C',
  'C]',
  'D',
  'D]',
  'E',
  'F',
  'F]',
  'G',
  'G]',
  'A',
  'A]',
  'B',
];
const majorPitch = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const getMajor3rd = (root: string) => {
  // 장3도
  return pitch[pitch.indexOf(root) + 4];
};

const getPerfect5th = (root: string) => {
  // 완전 5도
  return pitch[pitch.indexOf(root) + 7];
};

const getMajorChord = (root: string) => {
  // major 코드
  return [root, getMajor3rd(root), getPerfect5th(root)];
};

export const getComposition = (chord: string) => {
  let root = '';
  const composition: string[] = [];

  if (chord.charAt(1) === '[') {
    root = `${majorPitch[majorPitch.indexOf(chord.charAt(0)) - 1]}]`;
  } else if (chord.charAt(1) === ']') {
    root = chord.substring(0, 2);
  } else {
    root = chord.charAt(0);
  }

  console.log(getMajorChord(root));

  // console.log(chord.charAt(1));

  return composition;
};
