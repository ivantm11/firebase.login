import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import appReducer from './app/appSlice';

const middleware = [...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export default store;
export type { AppDispatch, RootState };
