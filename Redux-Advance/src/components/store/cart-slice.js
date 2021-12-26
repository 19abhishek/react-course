import { createSlice } from "@reduxjs/toolkit";

const initialState = { quantity: 0, price: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment(state, action) {
      state.price = action.payload;
      state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) state.counter--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
