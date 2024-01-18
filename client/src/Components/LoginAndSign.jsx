// LoginAndSign.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { register } from "./redux/userReducer";
import { nanoid } from "@reduxjs/toolkit";

const LoginAndSign = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    setRegistering(true);
  };

  const handleRegister = () => {
    const newUser = {
      id: nanoid(),
      username,
      password,
    };
    dispatch(register(newUser));
    setRegistering(false);
    // Очищення полів після реєстрації (за необхідності)
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    // Логіка для входу, ви можете додати за потреби
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <div>
          {registering ? (
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
              <button onClick={handleRegister}>Register</button>
            </div>
          ) : (
            <button onClick={handleRegisterClick}>Register</button>
          )}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginAndSign;
