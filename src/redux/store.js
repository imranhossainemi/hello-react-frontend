import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice';

const store = configureStore({
  reducer: {
    home: greetingSlice.reducer,
  },
});

export default store;
