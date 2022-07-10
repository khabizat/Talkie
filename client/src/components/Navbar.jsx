import React from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const { currentUser, setCurrentUser } = props;
  const history = useHistory();

  const handleLoginButton = () => {
    history.push("/login");
  };
  const handleRegisterButton = () => {
    history.push("/register");
  };
  const handleLogoutButton = () => {
    window.localStorage.removeItem("user");
    setCurrentUser(null);
    history.go(0);
  };

  return (
    <nav>
      {!currentUser ? (
        <>
          <button onClick={handleLoginButton}>Login</button>
          <button onClick={handleRegisterButton}>Register</button>
        </>
      ) : (
        <>
          <h1>{currentUser.name}</h1>
          <button onClick={handleLogoutButton}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
