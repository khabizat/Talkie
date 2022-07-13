import React from "react";

export default function AnswerListItem(props) {
  const { answer_id, audio_url, tag_id, date, setAnswerId } = props;

  return (
    <div>
      <div></div>
      <ul onClick={() => setAnswerId(answer_id)}>
        {audio_url}
        {date}
        {tag_id}
      </ul>
    </div>
  );
}
