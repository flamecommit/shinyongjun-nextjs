import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DiaryState {
  currentDate: string;
}

const initialState: DiaryState = {
  currentDate: '',
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    // 동기적인 작업
    setCurrentDate: (state, action: PayloadAction<string>) => {
      return { ...state, currentDate: action.payload };
    },
  },
});

export const diaryActions = diarySlice.actions;

export default diarySlice.reducer;
