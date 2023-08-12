import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CoreState {
  categoryName: string;
}

const initialState: CoreState = {
  categoryName: '',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setCategoryName: (state, action: PayloadAction<string>) => {
      return { ...state, categoryName: action.payload };
    },
  },
});

export const coreActions = coreSlice.actions;

export default coreSlice.reducer;
