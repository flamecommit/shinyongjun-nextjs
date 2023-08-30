import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ContentsState {
  postList: any[];
}

const initialState: ContentsState = {
  postList: [],
};

export const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<any[]>) => {
      return { ...state, postList: action.payload };
    },
  },
});

export const contentsActions = contentsSlice.actions;

export default contentsSlice.reducer;
