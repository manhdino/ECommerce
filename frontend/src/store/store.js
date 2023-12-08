import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import { apiSlice } from "../slices/ApiSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddware) =>
    getDefaultMiddware().concat(apiSlice.middleware),
  // middleware: (getDefaultMiddware) => getDefaultMiddware(),
  devTools: true,
});

export default store;
