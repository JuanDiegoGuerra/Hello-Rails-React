import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = '/api/greetings/random_greeting';

export const getGreatting = createAsyncThunk('greatting/getGreatting', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  message: '',
};

const greattingSlice = createSlice({
  name: 'greatting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreatting.fulfilled, (state, action) => {
        state.message = action.payload;
      })
  },
});

export default greattingSlice.reducer;