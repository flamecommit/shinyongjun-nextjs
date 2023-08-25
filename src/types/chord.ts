export type TChord = {
  composition: string[];
  chartList: number[][];
};

export interface IRootChord {
  [key: string]: TChord;
}
