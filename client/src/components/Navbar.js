import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handleLoginButton = () => {
    history.push("/login");
  };
  const handleQuestionSubmit = () => {
    history.push("/questions/new");
  };

  return (
    <nav>
      <button onClick={handleLoginButton}>Login</button>
      <button>Register</button>
      <button onClick={handleQuestionSubmit}>Add Question</button>
    </nav>
  );
}

export default Navbar;
