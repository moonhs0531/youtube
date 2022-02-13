import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {},
  detail: {},
};

const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getVideos: (state, action) => ({
      ...state,
    }),
    setVideos: (state, { payload }) => ({
      ...state,
      list: payload,
    }),
    getVideoById: (state, { payload }) => ({
      ...state,
    }),

    setVideoById: (state, { payload }) => ({
      ...state,
      detail: {
        ...state.detail,
        [payload.id]: payload,
      },
    }),
  },
});

export const {
  getVideos, setVideos, getVideoById, setVideoById,
} = slice.actions;

export default slice.reducer;
