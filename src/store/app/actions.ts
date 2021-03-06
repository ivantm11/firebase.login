import { AppReducerActions } from './appSlice';
import SagaActions from './sagaActions';

export const { resetUser, updateCurrentLocalUser, updateLoadingStatus } =
  AppReducerActions;
export const {
  createUserWithEmail,
  logInUserWithEmail,
  logInUserWithGoogle,
  sendResetPasswordEmail,
  userSignOut
} = SagaActions;
