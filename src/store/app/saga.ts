import { UserCredential } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

import { FirebaseService } from 'api';
import { INewUser } from 'common/model/firebase';
import addUserNotification from 'utils/userNotifications';

import { CREATE_USER_WITH_EMAIL } from './sagaActions';
import { resetUser, saveNewUserCreated, updateLoadingStatus } from './actions';
import { cleanUserData } from 'utils/userData';

let newUserCredentialsResponse: UserCredential;
function* createUserWithEmail(action: { type: string; payload: INewUser }) {
  yield put(updateLoadingStatus(true));
  try {
    newUserCredentialsResponse = yield call(
      FirebaseService.createUserWithEmail,
      action.payload
    );
    const userData = cleanUserData(newUserCredentialsResponse.user);
    yield put(saveNewUserCreated(userData));
    addUserNotification({
      title: 'Success',
      message: 'User created successfully',
      type: 'success'
    });
  } catch (error: any) {
    console.info(error.message);
    yield put(resetUser());
    addUserNotification({
      title: 'Error creating user',
      message: `${error.message}`,
      type: 'danger'
    });
  } finally {
    yield put(updateLoadingStatus(false));
  }
}

function* AppSaga() {
  yield takeLatest(CREATE_USER_WITH_EMAIL, createUserWithEmail);
}

export default AppSaga;
