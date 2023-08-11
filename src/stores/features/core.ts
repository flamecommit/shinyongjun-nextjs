import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type LocaleType = 'ko' | 'en';

export interface CoreState {
  locale: LocaleType;
  title: string;
}

const initialState: CoreState = {
  locale: 'ko',
  title: 'SHIN YONG JUN',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    // 동기적인 작업
    changeLocale: (state, action: PayloadAction<LocaleType>) => {
      return { ...state, locale: action.payload };
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      return { ...state, title: action.payload };
    },
  },
});

export const coreActions = coreSlice.actions;

export default coreSlice.reducer;
