import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfiq = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authSlice,
});

const persisterReducer = persistReducer(persistConfiq, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persisterReducer,
    middleWare: [thunk],
  },
});
