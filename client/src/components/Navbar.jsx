import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";
// import logo from "../logo.png";

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
      {/* <img src={logo} alt="logo" className="navbar-logo" /> */}
      {!currentUser ? (
        <>
            <button onClick={handleLoginButton} class="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-40">Login</button>
            <button onClick={handleRegisterButton} class="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-40">Register</button>  
        </>
      ) : (
        <>
          <h2 class="font-serif">Logged in as {currentUser.name}</h2>
          <button 
            onClick={handleLogoutButton}
            class="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
