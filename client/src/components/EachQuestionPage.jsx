import React from "react";
import { useHistory } from "react-router-dom";
import QuestionListItem from "./QuestionListItem";

export default function EachQuestionPage(props) {
  const { questions, questionId } = props;
  const eachQuestion = questions.find((question) => question.id === questionId);

  return <div>{eachQuestion.name}</div>;
}
