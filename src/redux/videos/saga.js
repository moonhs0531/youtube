import { takeLatest, call, put } from 'redux-saga/effects';

import { getVideos, setVideos } from './slice';
import { getVideosRest } from '../../api';

function* getVideosSaga({ payload }) {
  const result = yield call(getVideosRest, payload);
  console.log('@@result', result);
  yield put(setVideos(result));
}

function* saga() {
  yield takeLatest(getVideos.type, getVideosSaga);
}

export default saga;
