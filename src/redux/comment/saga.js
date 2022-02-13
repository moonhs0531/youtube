import { takeLatest, call, put } from 'redux-saga/effects';

import { getCommentRest } from '../../api';
import { getComment, setComment } from './slice';

function* getCommentSaga({ payload }) {
  const result = yield call(getCommentRest, payload);
  yield put(setComment(result));
}

function* saga() {
  yield takeLatest(getComment.type, getCommentSaga);
}

export default saga;
