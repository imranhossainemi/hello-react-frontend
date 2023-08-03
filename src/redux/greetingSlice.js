import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GREETINGLIST = 'greet/GREETINGLIST';

const FetchGreeting = createAsyncThunk(GREETINGLIST, async () => {
  const url = 'http://127.0.0.1:3000/api/messages';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch greetings: ${response.status}`);
  }

  const greeting = await response.json();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchGreeting.fulfilled, (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    });
  },
});

export default greetingSlice;
export { FetchGreeting };
