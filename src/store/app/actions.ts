import { AppReducerActions } from './appSlice';
import SagaActions from './sagaActions';

export const { resetUser, saveNewUserCreated, updateLoadingStatus } =
  AppReducerActions;
export const { createUserWithEmail, userSignOut } = SagaActions;
