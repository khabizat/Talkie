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
  const handleHomeClick = () => {
    history.push("/");
  };
  const handlePracticeClick = () => {
    history.push("/questions");
  };
  const handleAboutClick = () => {
    history.push("/about");
  };
  const handleContactClick = () => {
    history.push("/contact");
  };
  const handleUserClick = () => {
    history.push("/user");
  };

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
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
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li onClick={handlePracticeClick}>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Practice
              </a>
            </li>
            <li onClick={handleAboutClick}>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li onClick={handleContactClick}>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
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
                class="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-40"
              >
                Login
              </button>
              <button
                onClick={handleRegisterButton}
                class="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-40"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <h2 id="user" class="font-serif" onClick={handleUserClick}>
                | {currentUser.name}
              </h2>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <button
                onClick={handleLogoutButton}
                class="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
