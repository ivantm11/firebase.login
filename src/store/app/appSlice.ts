import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState, { AppState } from './state';

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    increment: (state: AppState) => {
      state.value += 1;
    },
    decrement: (state: AppState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: AppState, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export default appSlice.reducer;
export const sliceName = appSlice.name;
export const AppReducerActions = appSlice.actions;
