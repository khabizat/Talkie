import React from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const { user, handleCurrentUser } = props;
  const history = useHistory();

  const handleLoginButton = () => {
    history.push("/login");
  };
  const handleRegisterButton = () => {
    history.push("/register");
  };
  const handleLogoutButton = () => {
    window.localStorage.removeItem("user");
    handleCurrentUser(null);
    history.go(0);
  };

  return (
    <nav>
      {!user ? (
        <>
          <button onClick={handleLoginButton}>Login</button>
          <button onClick={handleRegisterButton}>Register</button>
        </>
      ) : (
        <>
          <h1>{user.name}</h1>
          <button onClick={handleLogoutButton}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
