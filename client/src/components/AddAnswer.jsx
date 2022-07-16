import React from "react";

import Audio from "./Audio";

export default function AddAnswer(props) {
  const {
    question_id,
    setSelectedQuestion,
    selectedQuestion,
    setFinishedRecord,
  } = props;
  return (
    <div>
      <Audio
        question_id={question_id}
        setSelectedQuestion={setSelectedQuestion}
        selectedQuestion={selectedQuestion}
        setFinishedRecord={setFinishedRecord}
      />
    </div>
  );
}
