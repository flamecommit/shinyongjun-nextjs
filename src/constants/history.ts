export interface CompanyType {
  name: string;
  join: [number, number];
  leave: [number, number];
  size: number;
}

export interface PortfolioType {
  name: string;
  started: [number, number];
  ended: [number, number];
  size: number;
}

export interface HistoryType {
  index: number;
  key: string;
  year: number;
  yearSize: number;
  month: number;
  company?: CompanyType | undefined;
  portfolio?: PortfolioType | undefined;
}

const today = new Date();

export const companies: CompanyType[] = [
  { name: 'Wise C&S', join: [2013, 9], leave: [2014, 1], size: 0 },
  { name: 'Megacoding', join: [2014, 2], leave: [2015, 3], size: 0 },
  { name: 'Newriver', join: [2015, 4], leave: [2018, 8], size: 0 },
  { name: 'Newborn Holdings', join: [2019, 2], leave: [2022, 2], size: 0 },
  {
    name: 'Wemade',
    join: [2022, 3],
    leave: [today.getFullYear(), today.getMonth() + 1],
    size: 0,
  },
];

export const portfolios: PortfolioType[] = [
  { name: '에이스카운터', started: [2014, 6], ended: [2014, 6], size: 0 },
  { name: '올라운드', started: [2020, 10], ended: [2021, 5], size: 0 },
];
