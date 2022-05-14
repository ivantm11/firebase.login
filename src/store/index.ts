import store from './store';
import type { AppDispatch, RootState } from './store';
import { useAppDispatch, useAppSelector } from './hooks';

export default store;
export type { AppDispatch, RootState };
export { useAppDispatch, useAppSelector };
