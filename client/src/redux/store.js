// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./uiReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    ui: UIReducer,
    user: userReducer,
  },
});
