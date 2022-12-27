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
      console.log(payload);
      state.accessToken = payload.idToken;
      state.name = payload.fullName;
      state.email = payload.email;
      state.uid = payload.uid;
    },
  },
});

export const { logIn } = authSlice.actions;

export default authSlice.reducer;
