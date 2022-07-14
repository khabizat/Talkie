import React, { useState, useEffect } from "react";
import QuestionListItem from "./QuestionListItem";
const axios = require("axios");

export default function QuestionList(props) {
  const [questions, setQuestions] = useState(null);
  const { setQuestionId } = props;

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
            <li>
              <QuestionListItem
                id={question.id}
                key={question.id}
                name={question.name}
                date={question.date}
                user={question.user_id}
                tag={question.tag_id}
                setQuestionId={setQuestionId}
              />
            </li>
          </ol>
        ))}
    </section>
  );
}
