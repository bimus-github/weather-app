// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import currentLocation from "./slices/currentLocation";
import currentWeather from "./slices/currentWeather";
import settings from "./slices/settings";
import week from "./slices/week";
import today from "./slices/today";

const store = configureStore({
  reducer: {
    location: currentLocation,
    current: currentWeather,
    settings: settings,
    week: week,
    today: today,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
