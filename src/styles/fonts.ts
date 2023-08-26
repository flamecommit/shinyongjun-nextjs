import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

// Pretendard-Regular
// Pretendard-Bold

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'block',
});

// const notoSansKr = Noto_Sans_KR({
//   weight: ['400', '500', '700'],
//   display: 'swap',
//   subsets: ['latin'],
//   style: 'normal',
// });

const roboto = Roboto({
  weight: ['400', '500', '700'],
  display: 'block',
  subsets: ['latin'],
  style: 'normal',
});

export { pretendard, roboto };
