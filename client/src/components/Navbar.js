import React from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const { authenticated, name, user } = props;
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };

  const handleRegisterButton = () => {
    history.push("/register");
  };

  return (
    <nav>
      {!user ? (
        <>
          <button onClick={handleLoginButton}>Login</button>
          <button onClick={handleRegisterButton}>Register</button>{" "}
        </>
      ) : (
        <>
          <h1>{user.name}</h1>
          <button>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
