import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import DefaultLayout from '@/components/layout/Default';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Shinyongjun',
  description: 'Welcome to Shinyongjun.com',
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <RootProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
