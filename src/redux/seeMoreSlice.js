import { createSlice } from "@reduxjs/toolkit";

export const seeMoreSlice = createSlice({
  name: "see-more",
  initialState: {
    value: 1,
  },
  reducers: {
    incrementItem(state, action) {
      state.value = state.value + 0.5;
    },
  },
});
export const { incrementItem } = seeMoreSlice.actions;
export default seeMoreSlice.reducer;
