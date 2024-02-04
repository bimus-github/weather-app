// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import currentLocation from "./slices/currentLocation";

const store = configureStore({
  reducer: {
    location: currentLocation,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
