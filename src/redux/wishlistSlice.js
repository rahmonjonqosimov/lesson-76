import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || [],
  },
  reducers: {
    toogleLike(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
        localStorage.setItem("wishes", JSON.stringify(state.value));
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
        localStorage.setItem("wishes", JSON.stringify(state.value));
      }
    },
  },
});

export const { toogleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
