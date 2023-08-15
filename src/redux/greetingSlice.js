// greetingSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const greetUrl = 'http://127.0.0.1:3000/api/messages';
const initialState = {
  greeting: [],
  isLoading: false,
  isError: false,
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await fetch(greetUrl);
    const greeting = await response.json();
    return greeting;
  } catch (err) {
    return err;
  }
});

export const greetSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default greetSlice.reducer;
