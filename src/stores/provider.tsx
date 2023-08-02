'use client';

import { Provider } from 'react-redux';
import { ResetStyle } from '@/styles/reset';
import { store } from './store';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ResetStyle />
      {children}
    </Provider>
  );
}

export default Providers;
