import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";
import axios from "axios";

export default function QuestionsPage() {
  const [questionId, setQuestionId] = useState(null);
  const [questions, setQuestions] = useState(null);

  const history = useHistory();
  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  return (
    <>
      {questionId && (
        <EachQuestionPage questions={questions} questionId={questionId} />
      )}
      {!questionId && (
        <>
          <button onClick={handleAddQuestion}>Add questions</button>
          <QuestionList
            questions={questions}
            setQuestions={setQuestions}
            setQuestionId={setQuestionId}
          />
        </>
      )}
    </>
  );
}
