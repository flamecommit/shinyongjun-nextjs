import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SeriesType {
  series: string | undefined;
  index: number;
}

export interface SeriesState {
  series: SeriesType[];
}

const initialState: SeriesState = {
  series: [],
};

export const seriesSlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setSeries: (state, action: PayloadAction<SeriesType[]>) => {
      return { ...state, series: action.payload };
    },
  },
});

export const seriesActions = seriesSlice.actions;

export default seriesSlice.reducer;
