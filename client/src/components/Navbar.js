import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };

  const handleRegisterButton = () => {
    history.push("/register");
  };
  return (
    <nav>
      <button onClick={handleLoginButton}>Login</button>
      <button onClick={handleRegisterButton}>Register</button>
    </nav>
  );
}

export default Navbar;
