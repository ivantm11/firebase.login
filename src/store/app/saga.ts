import { call, takeLatest } from 'redux-saga/effects';

import { DemoService } from 'api';
import { DUMMY_ACTION } from './sagaActions';

let dummyActionResponse: string;
function* runDummyAction(action: { type: string; payload: string }) {
  try {
    dummyActionResponse = yield call(DemoService.demoCall, action.payload);
    console.info(dummyActionResponse);
  } catch (error) {
    console.error(error);
  }
}

function* AppSaga() {
  yield takeLatest(DUMMY_ACTION, runDummyAction);
}

export default AppSaga;
