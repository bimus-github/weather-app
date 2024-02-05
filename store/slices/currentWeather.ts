import { Current_Type } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  current: Current_Type | null;
} = {
  current: null,
};

export const currentSlices = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrent: (state, action: { payload: Current_Type }) => {
      state.current = action.payload;
    },
  },
});

export const currentActions = currentSlices.actions;
export default currentSlices.reducer;
