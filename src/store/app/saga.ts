import { call, put, takeLatest } from 'redux-saga/effects';

import { FirebaseService } from 'api';
import { IUserWithEmail } from 'common/model/firebase';
import addUserNotification from 'utils/userNotifications';

import {
  CREATE_USER_WITH_EMAIL,
  LOG_IN_USER_WITH_EMAIL,
  LOG_IN_USER_WITH_GOOGLE,
  SEND_RESET_PASSWORD_EMAIL,
  USER_SIGN_OUT
} from './sagaActions';
import { updateLoadingStatus } from './actions';

function* createUserWithEmail(action: {
  type: string;
  payload: IUserWithEmail;
}) {
  yield put(updateLoadingStatus(true));
  try {
    yield call(FirebaseService.createUserWithEmail, action.payload);
    addUserNotification({
      title: 'Success',
      message: 'User created successfully',
      type: 'success'
    });
  } catch (error: any) {
    addUserNotification({
      title: 'Error creating user',
      message: `${error.message}`,
      type: 'danger'
    });
  } finally {
    yield put(updateLoadingStatus(false));
  }
}

function* logInUserWithEmail(action: {
  type: string;
  payload: IUserWithEmail;
}) {
  yield put(updateLoadingStatus(true));
  try {
    yield call(FirebaseService.logInUserWithEmail, action.payload);
  } catch (error: any) {
    addUserNotification({
      title: 'Error at log in',
      message: `${error.message}`,
      type: 'danger'
    });
  } finally {
    yield put(updateLoadingStatus(false));
  }
}

function* logInUserWithGoogle(action: { type: string }) {
  yield put(updateLoadingStatus(true));
  try {
    yield call(FirebaseService.logInUserWithGoogle);
  } catch (error: any) {
    addUserNotification({
      title: 'Error at log in',
      message: `${error.message}`,
      type: 'danger'
    });
  } finally {
    yield put(updateLoadingStatus(false));
  }
}

function* sendResetPasswordEmail(action: { type: string; payload: string }) {
  yield put(updateLoadingStatus(true));
  try {
    yield call(FirebaseService.sendResetPasswordEmail, action.payload);
    addUserNotification({
      title: 'Success',
      message: 'Email for reset password sent',
      type: 'success'
    });
  } catch (error: any) {
    addUserNotification({
      title: 'Error trying to request a reset password email',
      message: `${error.message}`,
      type: 'danger'
    });
  } finally {
    yield put(updateLoadingStatus(false));
  }
}

function* userSignOut(action: { type: string }) {
  yield put(updateLoadingStatus(true));
  try {
    yield call(FirebaseService.userSignOut);
  } catch (error: any) {
    addUserNotification({
      title: 'Error trying to sign out',
      message: `${error.message}`,
      type: 'danger'
    });
  } finally {
    yield put(updateLoadingStatus(false));
  }
}

function* AppSaga() {
  yield takeLatest(CREATE_USER_WITH_EMAIL, createUserWithEmail);
  yield takeLatest(LOG_IN_USER_WITH_EMAIL, logInUserWithEmail);
  yield takeLatest(LOG_IN_USER_WITH_GOOGLE, logInUserWithGoogle);
  yield takeLatest(SEND_RESET_PASSWORD_EMAIL, sendResetPasswordEmail);
  yield takeLatest(USER_SIGN_OUT, userSignOut);
}

export default AppSaga;
