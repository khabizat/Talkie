import React from "react";

export default function AnswerListItem(props) {
  const { id, audio_url, tag_id, date, setAnswerId } = props;

  return (
    <div>
      <div></div>
      <ul onClick={() => setAnswerId(id)}>
        {audio_url}
        {date}
        {tag_id}
      </ul>
    </div>
  );
}
