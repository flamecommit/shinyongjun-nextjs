'use client';

import { Provider } from 'react-redux';
import { GlobalStyle } from '@/styles/global';
import { store } from './store';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {children}
    </Provider>
  );
}

export default Providers;
