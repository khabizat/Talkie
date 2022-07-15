import React from "react";

export default function AnswerListItem(props) {
  const { user_id, answer_id, audio_url, date, setAnswerId } = props;

  return (
    <div>
      <div>
        <ul onClick={() => setAnswerId(answer_id)}>
          { answer_id }
          <audio src={ audio_url } controls="controls" className="audio-player"/> 
          {date}
        </ul>
      </div>
    </div>
  );
}


