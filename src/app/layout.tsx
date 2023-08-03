import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import RootProvider from '@/stores/provider';
import DefaultWrapper from '@/components/wrapper/Default';

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
            <DefaultWrapper>{children}</DefaultWrapper>
          </RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
