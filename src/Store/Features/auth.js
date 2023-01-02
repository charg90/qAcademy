import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  name: null,
  email: null,
  uid: null,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.accessToken = payload.idToken;
      state.name = payload.fullName;
      state.email = payload.email;
      state.uid = payload.uid;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.name = null;
      state.email = null;
      state.uid = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
