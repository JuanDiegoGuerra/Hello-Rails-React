import { configureStore } from '@reduxjs/toolkit';
import greattingReducer from './greatting/greattingSlice';

const store = configureStore({
  reducer: {
    greatting: greattingReducer,
  },
});

export default store;