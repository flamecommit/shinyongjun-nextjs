export type TCompany = {
  name: string;
  join: [number, number];
  leave: [number, number];
  size?: number;
};

export type TProject = {
  name: string;
  started: [number, number];
  ended: [number, number];
  size?: number;
};

export interface IHistory {
  index: number;
  key: string;
  year: number;
  yearSize: number;
  month: number;
  company?: TCompany | undefined;
  project?: TProject | undefined;
}
