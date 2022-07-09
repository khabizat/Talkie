import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleRegisterButton = (e) => {
    e.preventDefault();

    const UserInfo = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:8080/auth/register", UserInfo)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>Register</div>
      <form>
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <lable>Email:</lable>
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <lable>Password:</lable>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleRegisterButton}>Register</button>
      </form>
    </>
  );
}
