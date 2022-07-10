import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

export default function QuestionListItem(props) {

  // const question = props.name;
  const history = useHistory();

  const [state, setState] = useState({
    questions: [],
    users: {}
  });

  axios
  .get("http://localhost:8080/questions")
  .then((response) => {
    history.push("/");
  })
  .catch((err) => {
    console.log(err);
  });

  return(
    <ul>
      <li></li>
    </ul>
  );
}

