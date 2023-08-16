import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import DefaultTemplate from '@/components/template/Default';
import GoogleAnalytics from '@/components/config/GooglaAnalytics';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'shinyongjun | Home',
  description: process.env.BIO,
  viewport:
    'width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=0',
  openGraph: {
    type: 'website',
    title: 'shinyongjun.com',
    siteName: 'shinyongjun.com',
    description: process.env.BIO,
    images: process.env.OG_IMAGE,
  },
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics GA_TRACKING_ID="G-LSSNKXXZKX" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RootProvider>
          <StyledComponentsRegistry>
            <DefaultTemplate>{children}</DefaultTemplate>
          </StyledComponentsRegistry>
        </RootProvider>
      </body>
    </html>
  );
}

export default RootLayout;
