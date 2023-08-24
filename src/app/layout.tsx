import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import DefaultTemplate from '@/components/template/Default';
import GoogleAnalytics from '@/components/config/GooglaAnalytics';
import Favicon from '@/components/config/Favicon';

interface Props {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  const title = '신용준 | Tech & Music Archive';
  const description = process.env.BIO;

  return {
    title,
    description,
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
      type: 'website',
      title,
      siteName: 'shinyongjun.com',
      description,
      images: process.env.OG_IMAGE,
    },
  };
}

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <head>
        <Favicon />
        <GoogleAnalytics GA_TRACKING_ID="G-LSSNKXXZKX" />
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
