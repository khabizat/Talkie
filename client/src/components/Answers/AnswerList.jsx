import React, { useState } from "react";
import AnswerListItem from "./AnswerListItem";
import EachAnswerPage from "./EachAnswerPage";

export default function AnswerList(props) {
  const [answerId, setAnswerId] = useState(null);
  const { selectedQuestion } = props;

  return (
    <section>
      {answerId && (
        <EachAnswerPage answerId={answerId} setAnswerId={setAnswerId} />
      )}
      {!answerId &&
        selectedQuestion.map((sQ) => (
          <li>
            <AnswerListItem
              answer_id={sQ.answer_id}
              audio_url={sQ.audio_url}
              tag_id={sQ.tag_id}
              date={sQ.date}
              setAnswerId={setAnswerId}
            />
          </li>
        ))}
    </section>
  );
}
