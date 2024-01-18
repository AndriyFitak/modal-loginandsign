// redux/uiReducer.js
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  modalStatus: false,
};

export const changeModal = createAction("ui/change-modal");
export const registerUser = createAction("ui/register-user");
export const loginUser = createAction("ui/login-user");

const UIReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeModal, (state) => {
      state.modalStatus = !state.modalStatus;
    })
    .addCase(registerUser, (state, action) => {
      console.log("User registered:", action.payload);
    })
    .addCase(loginUser, (state, action) => {
      console.log("User logged in:", action.payload);
    });
});

export default UIReducer;
