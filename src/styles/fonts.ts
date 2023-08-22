import { Noto_Sans_KR, Roboto } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  fallback: ['system-ui'],
});
const roboto = Roboto({
  weight: ['400', '500', '700'],
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  fallback: ['system-ui'],
});

export { notoSansKr, roboto };
