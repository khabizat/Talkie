import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.scss";
const axios = require("axios");

export default function Register(props) {
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
      .post("/api/auth/register", UserInfo)
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="register-page">
        <div class="h-screen flex bg-gray-bg1">
          <div class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
            <h1 class="text-2xl font-medium text-primary mt-4 mb-12 text-center">
              Register
            </h1>
    
            <form>
              <div>
                <label htmlFor='name'>Name:</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                >
                </input>
              </div>
              <div>
                <lable htmlFor='email'>Email:</lable>
                <input
                  type="text"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                >
                </input>
              </div>
              <div>
                <lable htmlFor='password'>Password:</lable>
                <input
                  type="password"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                ></input>
              </div>
              <div class="flex justify-center items-center mt-6">
                <button 
                  onClick={handleRegisterButton}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </button> 
              </div>
      </form>
          </div>
        </div>
      </div>
    </>
  );
}
