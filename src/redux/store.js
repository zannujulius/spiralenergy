import { configureStore } from "@reduxjs/toolkit";
import { channelReducer } from "./slice/channelSlice";

export const store = configureStore({
  reducer: {
    channels: channelReducer,
  },
});
