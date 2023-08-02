import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/libs/registry';
import TheContainer from '@/components/the/Container';
import TheHeader from '@/components/the/Header';
import { RootProviders } from './providers';

export const metadata: Metadata = {
  title: 'Shinyongjun',
  description: 'Welcome to Shinyongjun.com',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <RootProviders>
            <TheHeader />
            <TheContainer>{children}</TheContainer>
          </RootProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
