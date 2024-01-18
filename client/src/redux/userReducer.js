// redux/userReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { id, username, password } = action.payload;
      state.users.push({ id, username, password });
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
        console.log(user);
      if (user) {
        state.currentUser = { id: user.id, username: user.username };
      } else {
        state.currentUser = null;
      }
    },
  },
});

export const { registerUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
