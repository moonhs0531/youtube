import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: {} };

const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getVideos: (state, action) => ({
      ...state,
    }),
    setVideos: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
});

export const { getVideos, setVideos } = slice.actions;
export default slice.reducer;
