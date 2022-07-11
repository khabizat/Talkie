import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

export default function AddQuestionForm(props) {

  const [question, setQuestion] = useState("");
  const [tag, setTag] = useState("");


  const history = useHistory();

  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    const questionData = {
      question,
      tag
    };

    axios
      .post("http://localhost:8080/questions", questionData)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="add-question-form">
        <h1>Add New Question</h1>
        <form>
          <input
          type="text"
          placeholder="Type your question here"
          onChange={(e) => setQuestion(e.target.value)}
          ></input>
          <input
          type="text"
          placeholder="Add tag"
          onChange={(e) => setTag(e.target.value)}
          ></input>
          <button onClick={handleQuestionSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
