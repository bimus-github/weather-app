import {
  PressureUnit,
  Settings_Type,
  TemperatureUnit,
  WindSpeedUnit,
} from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const intialState: Settings_Type = {
  pressureUnit: "mbar",
  temperatureUnit: "Celsius",
  windSpeedUnit: "km/h",
};

export const settingsSlices = createSlice({
  name: "settings",
  initialState: intialState,
  reducers: {
    setPressureUnit: (state, action: { payload: PressureUnit }) => {
      state.pressureUnit = action.payload;
    },
    setTemperatureUnit: (state, action: { payload: TemperatureUnit }) => {
      state.temperatureUnit = action.payload;
    },
    setWindSpeedUnit: (state, action: { payload: WindSpeedUnit }) => {
      state.windSpeedUnit = action.payload;
    },
  },
});

export const settingsActions = settingsSlices.actions;

export default settingsSlices.reducer;
