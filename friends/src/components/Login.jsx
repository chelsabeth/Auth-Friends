// This will be my login form
import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    isLoggedIn: false
  });

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", login)
      .then(response => {
        console.log("response after login", response);
        localStorage.setItem("token", response.data.payload);
        setLogin({ ...login, isLoggedIn: true });
        props.history.push("/friendslist");
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={login.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
