import { all, fork } from 'redux-saga/effects';

import videosSaga from './videos/saga';
import commentSaga from './comment/saga';

function* sagas() {
  yield all([
    fork(videosSaga),
    fork(commentSaga),
  ]);
}

export default sagas;
