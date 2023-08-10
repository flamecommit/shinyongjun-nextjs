export interface CompanyType {
  name: string;
  join: [number, number];
  leave: [number, number];
  size?: number;
}

export interface PortfolioType {
  name: string;
  started: [number, number];
  ended: [number, number];
  size?: number;
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
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;

export const companies: CompanyType[] = [
  { name: 'Wise C&S', join: [2013, 9], leave: [2014, 1] },
  { name: 'Megacoding', join: [2014, 2], leave: [2015, 3] },
  { name: 'Newriver', join: [2015, 4], leave: [2018, 8] },
  { name: 'Newborn Holdings', join: [2019, 2], leave: [2022, 2] },
  { name: 'Wemade', join: [2022, 3], leave: [todayYear, todayMonth] },
];

export const portfolios: PortfolioType[] = [
  { name: '에이스카운터', started: [2014, 6], ended: [2014, 6] },
  { name: '올라운드', started: [2020, 10], ended: [2021, 5] },
  { name: '알파스캔', started: [2014, 8], ended: [2014, 9] },
  { name: '바오밥', started: [2015, 6], ended: [2015, 7] },
  { name: '블루버드', started: [2016, 6], ended: [2016, 7] },
  { name: '분당메모리얼파크', started: [2017, 8], ended: [2017, 9] },
  { name: '클립아트코리아', started: [2014, 3], ended: [2014, 4] },
  { name: 'CNT마트', started: [2016, 1], ended: [2016, 2] },
  { name: 'Codenewborn', started: [2021, 11], ended: [2021, 11] },
  { name: '커핀그루나루', started: [2015, 11], ended: [2015, 12] },
  { name: 'DAECO', started: [2016, 3], ended: [2016, 3] },
  { name: 'Dr.PNT', started: [2016, 8], ended: [2016, 8] },
  { name: '서울유로치과', started: [2017, 1], ended: [2017, 1] },
  { name: '가천대학교 총동문회', started: [2021, 12], ended: [2022, 1] },
  { name: '녹십자EM', started: [2017, 5], ended: [2017, 5] },
  { name: '골핑 App', started: [2018, 2], ended: [2018, 3] },
  { name: '공차', started: [2017, 4], ended: [2017, 4] },
  { name: '그래인스쿠키', started: [2015, 5], ended: [2015, 5] },
  { name: 'GSTAR 2022 위메이드', started: [2022, 11], ended: [2022, 11] },
  { name: '껌북', started: [2014, 7], ended: [2014, 7] },
  { name: '핸디소프트', started: [2017, 10], ended: [2017, 12] },
  { name: 'HERIT', started: [2015, 8], ended: [2015, 9] },
  { name: '이미지투데이', started: [2014, 5], ended: [2014, 5] },
  { name: '잼엔터테인먼트', started: [2021, 6], ended: [2021, 6] },
  { name: '죠스떡볶이', started: [2018, 1], ended: [2018, 1] },
  { name: '잡코리아 - 채용공고 페이지', started: [2013, 9], ended: [2014, 1] },
  { name: '롯데정밀화학', started: [2016, 4], ended: [2016, 5] },
  { name: '미르M 공식 사이트', started: [2022, 3], ended: [2022, 5] },
  { name: '미르M - 만월의 밤 이벤트', started: [2022, 9], ended: [2022, 9] },
  { name: '미르M 해외 고객센터', started: [2023, 2], ended: [2023, 2] },
  { name: '미르M 해외 공식 사이트', started: [2023, 1], ended: [2023, 1] },
  { name: '미르M - 귀곡의 밤 이벤트', started: [2022, 10], ended: [2022, 10] },
  { name: '미르M - 만다라 이벤트', started: [2022, 6], ended: [2022, 6] },
  { name: '미르M - 사제 이벤트', started: [2022, 7], ended: [2022, 7] },
  { name: '미르M - 변화의 시대 이벤트', started: [2022, 8], ended: [2022, 8] },
  { name: '맘앤톡', started: [2018, 4], ended: [2018, 6] },
  { name: '마이언 v2', started: [2020, 3], ended: [2020, 9] },
  { name: '마이언', started: [2019, 2], ended: [2019, 7] },
  { name: 'Simplizm', started: [2019, 8], ended: [2020, 2] },
  { name: '뉴본홀딩스', started: [2021, 9], ended: [2021, 10] },
  { name: '필리핀항공', started: [2017, 6], ended: [2017, 6] },
  { name: '뉴리버', started: [2017, 2], ended: [2017, 3] },
  { name: 'NightCrows 공식 사이트', started: [2023, 4], ended: [2023, 6] },
  { name: 'NightCrows 사전예약 사이트', started: [2023, 3], ended: [2023, 3] },
  { name: 'NightCrows 티저 사이트', started: [2022, 12], ended: [2022, 12] },
  { name: 'NightCrows 헛개수 이벤트', started: [2023, 7], ended: [2023, 7] },
  {
    name: 'NightCrows 해외 공식 사이트',
    started: [2023, 8],
    ended: [todayYear, todayMonth],
  },
  { name: '뉴딘몰', started: [2017, 7], ended: [2017, 7] },
  { name: 'SA TECH', started: [2016, 11], ended: [2016, 12] },
  { name: 'slorder', started: [2021, 8], ended: [2021, 8] },
  { name: 'smart well', started: [2021, 7], ended: [2021, 7] },
  { name: '삼성드림이비인후과', started: [2016, 9], ended: [2016, 10] },
  { name: '설화수 - 프로모션 사이트', started: [2018, 11], ended: [2019, 1] },
  { name: '통로이미지', started: [2014, 10], ended: [2014, 11] },
  { name: '뜨르들로', started: [2015, 4], ended: [2015, 4] },
  { name: 'Winsome', started: [2022, 2], ended: [2022, 2] },
  { name: '제오헤어', started: [2015, 10], ended: [2015, 10] },
];
