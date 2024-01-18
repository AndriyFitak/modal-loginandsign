// Login.jsx
import React from "react";
import { useDispatch } from "react-redux";
import {  loginUser } from "../redux/uiReducer.js";

const Login = () => {
  const dispatch = useDispatch();

  // const handleLoginClick = () => {
  //   dispatch(changeModal());
  // };

  const handleLogin = () => {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");
    dispatch(loginUser({ username, password }));
  
  };

  return (
    <div>
      {/* <button onClick={handleLoginClick}>Увійти</button> */}
      <button onClick={handleLogin}>Ввійти</button>
    </div>
  );
};

export default Login;

