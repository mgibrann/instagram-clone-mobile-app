import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { profile: null },
  reducers: {
    signin(state, action) {},
  },
});

export const authActions = authSlice.actions;

export default authSlice;
