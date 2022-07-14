import React from "react";

export default function AnswerListItem(props) {
  const { answer_id, audio_url, date, user_name, setAnswerId } = props;

  return (
    <div>
      <div>
        <ul onClick={() => setAnswerId(answer_id)}>
          {user_name}
          {audio_url}
          {date}
        </ul>
      </div>
    </div>
  );
}
