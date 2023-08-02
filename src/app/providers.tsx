'use client';

import { PropsWithChildren } from 'react';
import { ResetStyle } from '@/styles/reset';
import Providers from '@/stores/provider';

export default function RootProviders({ children }: PropsWithChildren) {
  return (
    <Providers>
      <ResetStyle />
      {children}
    </Providers>
  );
}
