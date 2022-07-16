import React, { useState } from "react";
import AnswerListItem from "./AnswerListItem";
import EachAnswerPage from "./EachAnswerPage";

export default function AnswerList(props) {
  const {answerId, setAnswerId} = props;
  const { selectedQuestion, setSelectedQuestion } = props;
  return (
    <section>

    <div className="max-w-2xl w-5/6 px-8 py-4 mx-auto bg-orange-300 rounded-none p-5 text-red-600">
        {answerId && (
          <EachAnswerPage answerId={answerId} setAnswerId={setAnswerId} />
        )}
    </div>
     
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
