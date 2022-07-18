import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentList from "../Comments/CommentList";

export default function EachAnswerPage(props) {
  const { answerId, setAnswerId } = props;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [comment, setComment] = useState("");

  const getSelectedAnswer = (answerId) => {
    axios
      .get(`/api/answers/${answerId}`)
      .then((response) => {
        setSelectedAnswer(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (answerId) {
      getSelectedAnswer(answerId);
    }
  }, []);

  return (
    <>
        
      {selectedAnswer && selectedAnswer[0] && 
      <div className="flex justify-center">
        <audio
          src={selectedAnswer[0].audio_url}
          controls="controls"
          className="audio-player"
        />
      </div>
      }
      {selectedAnswer && (
        <CommentList
          audio_url={selectedAnswer[0].audio_url}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          answerId={answerId}
          setAnswerId={setAnswerId}
          setComment={setComment}
          comment={comment}
        />
      )}
    </>
  );
}
