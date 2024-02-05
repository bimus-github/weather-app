import { Current_Type, Weekly_Data_Type } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  week: Weekly_Data_Type[];
} = {
  week: [],
};

export const weeklySlices = createSlice({
  name: "week",
  initialState,
  reducers: {
    setWeek: (state, action: { payload: Weekly_Data_Type[] }) => {
      state.week = action.payload;
    },
  },
});

export const weekActions = weeklySlices.actions;

export default weeklySlices.reducer;
