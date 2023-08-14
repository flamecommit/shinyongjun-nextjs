import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'shinyongjun | Home',
  description: 'Welcome to Shinyongjun.com',
  openGraph: {
    images: 'https://shinyongjun.com/og-image.png',
  },
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <head>
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
        <StyledComponentsRegistry>
          <RootProvider>
            <DefaultTemplate>{children}</DefaultTemplate>
          </RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
