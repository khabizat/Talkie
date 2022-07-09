import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated } = props;

  const history = useHistory();

  const handleLoginButton = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    axios
      .post("http://localhost:8080/auth/login", userCredentials)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        setAuthenticated(true);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>Log in</div>
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleLoginButton} value="Log in">
          Login
        </button>
      </form>
    </>
  );
}
