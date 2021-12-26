import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { showCart: false };

const ui = createSlice({
  name: "ui",
  initialState: initialAuthState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiAction = ui.actions;

export default ui.reducer;
