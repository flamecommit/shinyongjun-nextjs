import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import DefaultTemplate from '@/components/template/Default';
import GoogleAnalytics from '@/components/config/GooglaAnalytics';
import GoogleFonts from '@/components/config/GoogleFonts';
import Favicon from '@/components/config/Favicon';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'shinyongjun | Home',
  description: process.env.BIO,
  viewport: 'width=device-width, initial-scale=1.0',
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
        <Favicon />
        <GoogleAnalytics GA_TRACKING_ID="G-LSSNKXXZKX" />
        <GoogleFonts />
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
