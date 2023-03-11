import { configureStore } from "@reduxjs/toolkit";
import { channelReducer } from "./slice/channelSlice";
import { profileReducer } from "./slice/profileSlice";

export const store = configureStore({
  reducer: {
    channels: channelReducer,
    profiles: profileReducer,
  },
});
