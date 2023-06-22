import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const url = "/api/v1/greetings"; // Update the URL to match the correct endpoint

// export const fetchGreeting = createAsyncThunk(
//   "greeting/fetchGreeting",
//   async () => {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response.json();
//     // const data = await response.json();
//     // return data;
//   }
// );

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