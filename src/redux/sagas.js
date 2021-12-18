import { all, fork } from 'redux-saga/effects';

import videosSaga from './videos/saga';

function* sagas() {
  yield all([
    fork(videosSaga),
  ]);
}

export default sagas;
