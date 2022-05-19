import { all } from 'redux-saga/effects';

import AppSaga from './app/saga';

function* sagas() {
  yield all([AppSaga()]);
}

export default sagas;
