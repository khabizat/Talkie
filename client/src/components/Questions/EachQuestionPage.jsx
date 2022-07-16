import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerList from "../Answers/AnswerList";
import Recorder from "../AddAnswer";
import AddAnswer from "../AddAnswer";

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
  }, [selectedQuestion]); // this needs to be watched

  return (
    <>
      <button
        onClick={() => setQuestionId(null)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>

      {/* orange container that holds everything */}
      <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto text-2xl font-bold text-gray-600 hover:text-gray-600 hover:text-gray-600 bg-orange-200 rounded-lg border p-5 shadow-lg transition hover:bg-orange-300 hover:border-blue-100">
        {selectedQuestion && selectedQuestion[0] && selectedQuestion[0].name}
        <div className="grid justify-items-center pb-2">
        <AddAnswer question_id={ questionId }  />
        </div>
        {/* Answers section */}
        {selectedQuestion && (
          <AnswerList
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={() => setSelectedQuestion} //<< this needs to be set as 'callback' to prevent looping
          />
        )}
      </div>
    </>
  );
}