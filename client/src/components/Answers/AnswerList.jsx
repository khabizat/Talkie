import React, { useState } from "react";
import AnswerListItem from "./AnswerListItem";
import EachAnswerPage from "./EachAnswerPage";

export default function AnswerList(props) {
  const [answerId, setAnswerId] = useState(null);
  const { selectedQuestion } = props;
  console.log("asdasdasasd", selectedQuestion);
  return (
    <section>
      {answerId && (
        <EachAnswerPage answerId={answerId} setAnswerId={setAnswerId} />
      )}
      {!answerId &&
        selectedQuestion.map((sQ) => (
          <li key={sQ.answer_id}>
            <AnswerListItem
              answer_id={sQ.answer_id}
              audio_url={sQ.audio_url}
              date={sQ.date}
              setAnswerId={setAnswerId}
            />
          </li>
        ))}
    </section>
  );
}
