import React, { useState, useEffect } from "react";
import QuestionListItem from "./QuestionListItem";
const axios = require("axios");

export default function QuestionList(props) {
  const [questions, setQuestions] = useState(null);
  const { setQuestionId, selectedQuestion } = props;

  const getAllQuestions = () => {
    axios
      .get("/api/questions")
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
          <ol role="list" className="p-4 divide-y divide-slate-100">
            <li key={question.id}>
              <QuestionListItem
                questionId={question.id}
                key={question.id}
                user_id={question.user_id}
                name={question.name}
                date={question.date}
                tag={question.tag_id}
                photo={question.photo}
                user_name={question.user_name}
                tag_name={question.tag_name}
                questions={questions}
                selectedQuestion={selectedQuestion}
                setQuestions={setQuestions}
                setQuestionId={setQuestionId}
              />
            </li>
          </ol>
        ))}
    </section>
  );
}
