import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import videosReducer from './videos/slice';
import commentReducer from './comment/slice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    comment: commentReducer,
    search: {},
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);
