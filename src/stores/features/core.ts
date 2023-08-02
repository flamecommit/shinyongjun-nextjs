import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type LocaleType = 'ko' | 'en';

export interface CoreState {
  locale: 'ko' | 'en';
}

const initialState: CoreState = {
  locale: 'ko',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<LocaleType>) => {
      state.locale = action.payload;
    },
  },
});

export const coreActions = coreSlice.actions;

export default coreSlice.reducer;
