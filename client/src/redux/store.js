// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./uiReducer.js";

export const store = configureStore({
  reducer: {
    ui: UIReducer,
  },
});
