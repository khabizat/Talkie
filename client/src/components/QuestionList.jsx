import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import QuestionListItem from "./QuestionListItem";
const axios = require("axios");

export default function QuestionList(props) {

  const url = 'http://localhost:3000/questions'
  const [result, setResult] = useState(null)

  const questions = props.questions.map((question) => {
    return (
      <QuestionListItem
        key={question.id}
        name = {question.name}
        date = {question.date}
      />
    );
  });

    return (
      <section>
        <ul>
          <li>
            Questions go here
          </li>
          <li>
            Questions go here
          </li>
        </ul>
      </section>
    );
}

