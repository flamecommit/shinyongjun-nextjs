import { Noto_Sans_KR, Roboto } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  style: 'normal',
});
const roboto = Roboto({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  style: 'normal',
});

export { notoSansKr, roboto };
