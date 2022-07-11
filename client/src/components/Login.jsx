import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const axios = require("axios");

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLoginButton = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    axios
      .post("/api/auth/login", userCredentials)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="login-page">
      <div class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <div class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 class="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Log in to your account 🔐
          </h1>
          
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            ></input>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            ></input>
          </div>
 
        <div class="flex justify-center items-center mt-6">
          <button 
            onClick={handleLoginButton}
            value="Log in"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
          Login
          </button>
        </div>

      </form>
      </div>
    </div>
    </div>
    </>
  );
}
