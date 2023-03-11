import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allChannels: [],
  data: null,
};

export const channelSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    getAllChannels: (state, action) => {
      state.allChannels = action.payload;
    },
  },
});

export const { getAllChannels } = channelSlice.actions;

export const channelReducer = channelSlice.reducer;
