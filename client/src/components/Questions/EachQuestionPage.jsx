import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerList from "../Answers/AnswerList";

export default function EachQuestionPage(props) {
  const { questionId } = props;
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const getSelectedQuestion = (questionId) => {
    axios
      .get(`/api/questions/${questionId}`)
      .then((response) => {
        setSelectedQuestion(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (questionId) {
      getSelectedQuestion(questionId);
    }
  }, []);

  return (
    <>
      {selectedQuestion && selectedQuestion[0].name}

      {selectedQuestion && <AnswerList selectedQuestion={selectedQuestion} />}
    </>
  );
}
