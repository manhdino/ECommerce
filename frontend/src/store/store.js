import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/UserSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});

export default store;
