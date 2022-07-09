import React from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };
  const { authenticated } = props;

  const handleRegisterButton = () => {
    history.push("/register");
  };
  return (
    <nav>
      {!authenticated ? (
        <>
          <button onClick={handleLoginButton}>Login</button>
          <button onClick={handleRegisterButton}>Register</button>{" "}
        </>
      ) : (
        <h1>hello</h1>
      )}
    </nav>
  );
}

export default Navbar;
