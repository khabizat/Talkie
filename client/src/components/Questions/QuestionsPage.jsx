import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";

export default function QuestionsPage() {
  const [questionId, setQuestionId] = useState(null);

  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  return (
    <>
      {questionId && <EachQuestionPage questionId={questionId} />}
      {!questionId && (
        <>
          <button onClick={handleAddQuestion}>Add questions</button>
          <QuestionList setQuestionId={setQuestionId} />
        </>
      )}
    </>
  );
}
