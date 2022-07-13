import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerList from "../Answers/AnswerList";
import Recorder from "../Recorder";

export default function EachQuestionPage(props) {
  const { questionId, setQuestionId } = props;
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
      <button 
        onClick={() => setQuestionId(null)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Back
      </button>
      {selectedQuestion && selectedQuestion[0].name}
      <Recorder />
      {selectedQuestion && <AnswerList selectedQuestion={selectedQuestion} />}
    </>
  );
}
