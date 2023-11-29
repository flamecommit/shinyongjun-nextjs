import type { Metadata, Viewport } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import GoogleAnalytics from '@/components/config/GoogleAnalytics';
import Favicon from '@/components/config/Favicon';

interface Props {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const title = '신용준 | Tech & Music Archive';
  const description = process.env.BIO;

  return {
    title,
    description,
    metadataBase: new URL('https://shinyongjun.com'),
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
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </RootProvider>
      </body>
    </html>
  );
}

export default RootLayout;
