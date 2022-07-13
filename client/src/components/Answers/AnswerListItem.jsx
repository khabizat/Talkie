import React from "react";

export default function AnswerListItem(props) {
  const { answer_id, audio_url, date, setAnswerId } = props;

  return (
    <div>
      <div>
        <ul onClick={() => setAnswerId(answer_id)}>
          {audio_url}
          {date}
        </ul>
      </div>
    </div>
  );
}
