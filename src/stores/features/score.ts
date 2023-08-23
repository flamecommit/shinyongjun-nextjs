import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ScoreState {
  capo: number;
}

const initialState: ScoreState = {
  capo: 0,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setCapo: (state, action: PayloadAction<number>) => {
      return { ...state, capo: action.payload };
    },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;
