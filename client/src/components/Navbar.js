import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };
  return (
    <div>
      <form>
        <button onClick={handleLoginButton}>Login</button>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Navbar;
