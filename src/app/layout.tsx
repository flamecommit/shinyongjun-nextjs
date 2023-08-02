import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/styles/registry';
import TheContainer from '@/components/the/Container';
import TheHeader from '@/components/the/Header';
import RootProvider from '@/stores/provider';

export const metadata: Metadata = {
  title: 'Shinyongjun',
  description: 'Welcome to Shinyongjun.com',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <RootProvider>
            <TheHeader />
            <TheContainer>{children}</TheContainer>
          </RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
