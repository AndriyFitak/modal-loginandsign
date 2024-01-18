// Signin.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { registerUser } from "../redux/uiReducer.js";

const Signin = () => {
  const dispatch = useDispatch();

  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninClick = () => {
    setRegistering(true);
  };

  const handleRegister = () => {
    const newUser = {
      id: nanoid(),
      username,
      password,
    };
    dispatch(registerUser(newUser));
    setRegistering(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <button onClick={handleSigninClick}>Зареєструватися</button>
      {registering && (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Зареєструватися</button>
        </div>
      )}
    </div>
  );
};

export default Signin;
