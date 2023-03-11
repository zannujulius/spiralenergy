import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allChannels: [],
  data: null,
  channelCount: null,
};

export const channelSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    updateChannels: (state, action) => {
      state.allChannels = action.payload;
    },
    updateChannelCount: (state, action) => {
      state.channelCount = action.payload;
    },
  },
});

export const { updateChannels, updateChannelCount } = channelSlice.actions;

export const channelReducer = channelSlice.reducer;
