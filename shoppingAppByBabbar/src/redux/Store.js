import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";   // ✅ default import

export const store = configureStore({
  reducer: {
    cart: cartReducer,   // ✅ correctly registered
  },
});
