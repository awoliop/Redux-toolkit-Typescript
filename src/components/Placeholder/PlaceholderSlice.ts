import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAgent } from "next/server";
import axios from "axios";
import { stat } from "fs";

interface user {
  value: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}

interface value {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: user = {
  value: {
    userId: 10,
    id: 10,
    title: "Awelker",
    completed: true,
  },
};

export const displayAsyncFetch = createAsyncThunk(
  "user/displayAsyncFetch",
  async (sentFromUser: string) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const data = res.data;
    console.log(data);
    return { data, sentFromUser };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(displayAsyncFetch.pending, () => {
        console.log("Pending....!");
      })
      .addCase(
        displayAsyncFetch.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.value = action.payload.data;
          state.value.title = action.payload.sentFromUser;
        }
      );
  },
});

export default userSlice.reducer;
