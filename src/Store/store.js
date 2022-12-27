import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth";
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
