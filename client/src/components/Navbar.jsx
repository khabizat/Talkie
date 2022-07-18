import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

function Navbar(props) {
  const { currentUser, setCurrentUser } = props;
  const history = useHistory();

  //this handles the navbar login button. Only a link.
  const handleLoginButton = () => {
    history.push("/login");
  };
  const handleRegisterButton = () => {
    history.push("/register");
  };
  const handleSignoutButton = () => {
    window.localStorage.removeItem("user");
    setCurrentUser(null);
    history.push("/login");
  };
  const handleHomeClick = () => {
    history.push("/");
  };
  const handlePracticeClick = () => {
    if (currentUser) {
      return history.push("/questions");
    }
    history.push("/login");
  };
  const handleAboutClick = () => {
    history.push("/about");
  };
  const handleUserClick = () => {
    history.push("/user");
  };

  return (
    <nav class="bg-white  shadow-md w-full h-16 flex py-2.5">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center" onClick={handleHomeClick}>
          <span class="self-center text-xl font-semibold whitespace-nowrap ">
            Talkie
          </span>
        </a>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li onClick={handleHomeClick}>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-semibold"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li onClick={handlePracticeClick}>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-semibold"
              >
                Practice
              </a>
            </li>
            <li onClick={handleAboutClick}>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-semibold"
              >
                About
              </a>
            </li>
          </ul>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          {!currentUser ? (
            <>
              <button
                onClick={handleLoginButton}
                class="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-26 mx-2"
              >
                Login
              </button>
              <button
                onClick={handleRegisterButton}
                class="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-26 mx-2"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <h2
                id="user"
                class="md:text-sm md:font-medium block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                onClick={handleUserClick}
              >
                | {currentUser.name}
              </h2>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <button
                onClick={handleSignoutButton}
                class="h-10 bg-blue-700 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-26 mx-2"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
