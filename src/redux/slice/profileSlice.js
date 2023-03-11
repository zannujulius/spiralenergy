import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileDetails: null,
};

export const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profileDetails = action.payload;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
