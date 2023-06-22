import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk('greeting', async () => {
    const response = await fetch('/api/v1/greetings');
    return response.json();
  });

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
    }));
  },
});

export default greetingSlice.reducer;