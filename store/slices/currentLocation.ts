import { Location_Type } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initalState: Location_Type = {
  name: "",
  country: "",
  lat: 0,
  lon: 0,
  region: "",
};

export const currentLocationSlice = createSlice({
  name: "currentLocation",
  initialState: initalState,
  reducers: {
    setCurrentLocation: (state, action: { payload: Location_Type }) => {
      state.name = action.payload.name;
      state.country = action.payload.country;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const locationActions = currentLocationSlice.actions;

export default currentLocationSlice.reducer;
