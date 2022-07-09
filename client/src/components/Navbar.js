import React from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {

  const { authenticated } = props;
  const history = useHistory();
  
  const handleLoginButton = () => {
    history.push("/login");
  };
  const handleQuestionSubmit = () => {
    history.push("/questions/new");
  };

  const handleRegisterButton = () => {
    history.push("/register");
  };

  return (
    <nav>
      {!authenticated ? (
        <>
          <button onClick={handleLoginButton}>Login</button>
          <button onClick={handleRegisterButton}>Register</button>{" "}
          <button onClick={handleQuestionSubmit}>Add Question</button>
        </>
      ) : (
        <h1>hello</h1>
      )}
    </nav>
  );
}

export default Navbar;
