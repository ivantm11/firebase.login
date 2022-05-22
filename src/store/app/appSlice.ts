import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserData } from 'common/model/user';
import initialState, { AppState, emptyUser } from './state';

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    resetUser: (state: AppState) => {
      state.user = emptyUser;
    },
    saveNewUserCreated: (state: AppState, action: PayloadAction<UserData>) => {
      const newUser = action.payload;
      state.user = {
        ...newUser,
        loggedIn: true
      };
    },
    updateLoadingStatus: (state: AppState, action: PayloadAction<boolean>) => {
      state.loadingRequest = action.payload;
    }
  }
});

export default appSlice.reducer;
export const sliceName = appSlice.name;
export const AppReducerActions = appSlice.actions;
