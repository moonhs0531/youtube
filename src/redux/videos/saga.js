import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getVideoById, getVideos, setVideoById, setVideos,
} from './slice';
import { getVideosRest, getVideoByIdRest } from '../../api';

function* getVideosSaga({ payload }) {
  const result = yield call(getVideosRest, payload);
  yield put(setVideos(result));
}

function* getVideoByIdSaga({ payload }) {
  const result = yield call(getVideoByIdRest, payload);
  yield put(setVideoById(result));
}

function* saga() {
  yield takeLatest(getVideos.type, getVideosSaga);
  yield takeLatest(getVideoById.type, getVideoByIdSaga);
}

export default saga;
