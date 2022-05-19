import createSagaMiddleware from '@redux-saga/core';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import sagas from './sagas';
import appReducer from './app/appSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware
});

sagaMiddleware.run(sagas);

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export default store;
export type { AppDispatch, RootState };
