import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: {},
};

const slice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComment: (state, action) => ({
      ...state,
    }),
    setComment: (state, { payload }) => ({
      ...state,
      test: {
        ...state.test,
        [payload.id]: payload,
      },
    }),
  },
});

export const {
  getComment, setComment,
} = slice.actions;

export default slice.reducer;
