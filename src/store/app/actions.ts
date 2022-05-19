import { AppReducerActions } from './appSlice';
import SagaActions from './sagaActions';

export const { increment, decrement, incrementByAmount } = AppReducerActions;
export const { dummyAction } = SagaActions;
