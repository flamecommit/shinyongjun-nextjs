import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type LocaleType = 'ko' | 'en';

export interface CoreState {
  locale: LocaleType;
}

const initialState: CoreState = {
  locale: 'ko',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    // 동기적인 작업
    changeLocale: (state, action: PayloadAction<LocaleType>) => {
      return { ...state, locale: action.payload };
    },
  },
});

export const coreActions = coreSlice.actions;

export default coreSlice.reducer;
