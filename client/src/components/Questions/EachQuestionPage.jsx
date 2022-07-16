import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerList from "../Answers/AnswerList";
import AddAnswer from "../AddAnswer";

export default function EachQuestionPage(props) {
  const [answerId, setAnswerId] = useState(null);
  const { questionId, setQuestionId } = props;
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [finishedRecord, setFinishedRecord] = useState(null);

  const getSelectedQuestion = (questionId) => {
    axios
      .get(`/api/questions/${questionId}`)
      .then((response) => {
        console.log("DATA", response.data);
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
      <button
        onClick={() => setQuestionId(null)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to questions
      </button>

      {answerId ? (
        <>
          {/* orange container that holds everything */}
          <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto text-2xl font-bold text-gray-600 hover:text-gray-600 hover:text-gray-600 bg-orange-200 rounded-lg border p-5 shadow-lg transition hover:bg-orange-300 hover:border-blue-100">
            {selectedQuestion &&
              selectedQuestion[0] &&
              selectedQuestion[0].name}
            <div className="grid justify-items-center pb-2"></div>
            {/* Answers section */}
            {selectedQuestion && (
              <AnswerList
                answerId={answerId}
                setAnswerId={setAnswerId}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={() => setSelectedQuestion}
              />
            )}
          </div>
        </>
      ) : (
        <>
          {/* orange container that holds everything */}
          <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto text-2xl font-bold text-gray-600 hover:text-gray-600 hover:text-gray-600 bg-orange-200 rounded-lg border p-5 shadow-lg transition hover:bg-orange-300 hover:border-blue-100">
            {selectedQuestion &&
              selectedQuestion[0] &&
              selectedQuestion[0].name}
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
                setSelectedQuestion={() => setSelectedQuestion}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
