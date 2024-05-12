import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import toogleLike from "./wishlistSlice";
import seeMoreSlice from "./seeMoreSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishes: toogleLike,
    seemore: seeMoreSlice,
  },
});
