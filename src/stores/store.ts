import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coreReducer from './features/core';
import diaryReducer from './features/diary';
import scoreReducer from './features/score';

const reducer = combineReducers({
  core: coreReducer,
  diary: diaryReducer,
  score: scoreReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
