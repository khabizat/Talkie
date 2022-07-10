import React from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";

export default function QuestionsPage() {
  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };
  return (
    <>
      <button onClick={handleAddQuestion}>Add questions</button>
      <QuestionList />
    </>
  );
}
