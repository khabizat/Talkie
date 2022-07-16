import React, { useState } from "react";
import AnswerListItem from "./AnswerListItem";
import EachAnswerPage from "./EachAnswerPage";

export default function AnswerList(props) {
  const {answerId, setAnswerId} = props;
  const { selectedQuestion, setSelectedQuestion } = props;
  return (
    <section>

      {answerId && (
        <EachAnswerPage answerId={answerId} setAnswerId={setAnswerId} />
      )}
     
      {!answerId &&
        selectedQuestion.map((sQ) => (
          <ol role="list">
            {/* <ol role="list" className="p-2 divide-y divide-slate-100"> */}
            <li key={sQ.answer_id}>
              <AnswerListItem
                answer_id={sQ.answer_id}
                user_id={sQ.user_id}
                audio_url={sQ.audio_url}
                date={sQ.date}
                user_name={sQ.user_name}
                setAnswerId={setAnswerId}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
              />
            </li>
          </ol>
        ))}
    </section>
  );
}
