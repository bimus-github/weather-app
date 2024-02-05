import { Current_Type } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  today: Current_Type[];
} = {
  today: [],
};

export const todaySlices = createSlice({
  name: "today",
  initialState,
  reducers: {
    setToday: (state, action: { payload: Current_Type[] }) => {
      state.today = action.payload;
    },
  },
});

export const todayActions = todaySlices.actions;

export default todaySlices.reducer;
