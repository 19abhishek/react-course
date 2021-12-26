import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import uiReducer from "./cart-slice";

const store = configureStore({
  reducer: { cartReducer: cartReducer, uiReducer: uiReducer },
});

export default store;
