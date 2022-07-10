import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuestionListItem from "./QuestionListItem";
const axios = require("axios");

export default function QuestionList(props) {
  const [result, setResult] = useState(null);
  const { questions, setQuestions, setQuestionId } = props;

  const getAllQuestions = () => {
    axios
      .get("http://localhost:8080/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <section>
      {questions &&
        questions.map((question) => (
          <li>
            <QuestionListItem
              id={question.id}
              key={question.id}
              name={question.name}
              date={question.date}
              setQuestionId={setQuestionId}
            />
          </li>
        ))}
    </section>
  );
}
