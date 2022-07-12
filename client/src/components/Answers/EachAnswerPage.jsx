import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentList from "../Comments/CommentList";

export default function EachAnswerPage(props) {
  const { answerId, setAnswerId } = props;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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
      {selectedAnswer && selectedAnswer[0].audio_url}
      {selectedAnswer && (
        <CommentList
          selectedAnswer={selectedAnswer}
          setNewComments={setSelectedAnswer}
          setAnswerId={setAnswerId}
        />
      )}
    </>
  );
}
