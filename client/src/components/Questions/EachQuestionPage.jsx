import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerList from "../Answers/AnswerList";
import AddAnswer from "../AddAnswer";
import "./EachQuestionPage.scss";

export default function EachQuestionPage(props) {
  const [answerId, setAnswerId] = useState(null);
  const { questionId, setQuestionId } = props;
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [finishedRecord, setFinishedRecord] = useState(null);

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
  }, []); // this needs to be watched

  useEffect(() => {
    // USE THIS AS A BACK UP IF THE DATA PULLING FAILS, HIGHLY DO NOT RECOMMEND
    // WILL ONLY WORK if in Audio.jsx, this.props.setFinishRecord is uncommented
    if (finishedRecord) {
      getSelectedQuestion(questionId);
    }
  }, [finishedRecord]);

  return (
    <>
      <div className="max-w-2xl w-9/12 h-8 flex justify-items-center px-8 py-4 mx-1 ml-24 my-6 p-5">
        <button
          onClick={() => setQuestionId(null)}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-4 px-4 rounded flex items-center gap-2"
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          Questions
        </button>
      </div>

      {answerId ? (
        <>
          {/* orange container that holds everything */}
          <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto justify-items-center text-2xl font-bold text-gray-600 hover:text-gray-600 hover:text-gray-600 bg-white-300 rounded-lg transition hover:border-blue-100 mb-8">
            <div class="question_name">
              {selectedQuestion &&
                selectedQuestion[0] &&
                selectedQuestion[0].name}
            </div>
            <div className="grid justify-items-center pb-2"></div>
            {/* Answers section */}
            {selectedQuestion && (
              <AnswerList
                answerId={answerId}
                setAnswerId={setAnswerId}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
              />
            )}
          </div>
        </>
      ) : (
        <>
          {/* orange container that holds everything */}
          <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto text-2xl font-bold text-gray-600 hover:text-gray-600 hover:text-gray-600 bg-blue-70 rounded-lg p-5 transition hover:border-blue-100 mb-8">
            <div class="question_name">
              {selectedQuestion &&
                selectedQuestion[0] &&
                selectedQuestion[0].name}
            </div>
            <div className="grid justify-items-center pb-2">
              <AddAnswer
                question_id={questionId}
                setSelectedQuestion={setSelectedQuestion}
                selectedQuestion={selectedQuestion}
                setFinishedRecord={setFinishedRecord}
              />
            </div>
            {/* Answers section */}
            {selectedQuestion && (
              <AnswerList
                answerId={answerId}
                setAnswerId={setAnswerId}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
