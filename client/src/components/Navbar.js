import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };
  return (
    <nav>
      <button onClick={handleLoginButton}>Login</button>
      <button>Register</button>
    </nav>
  );
}

export default Navbar;
