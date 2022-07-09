import React from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };
<<<<<<< HEAD
  const handleQuestionSubmit = () => {
    history.push("/questions/new");
  };

  return (
    <nav>
      <button onClick={handleLoginButton}>Login</button>
      <button>Register</button>
      <button onClick={handleQuestionSubmit}>Add Question</button>
=======
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
>>>>>>> master
    </nav>
  );
}

export default Navbar;
