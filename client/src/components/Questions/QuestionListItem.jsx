import React from "react";
import axios from "axios";

export default function QuestionListItem(props) {
  const {
    questionId,
    user_id,
    name,
    date,
    questions,
    setQuestions,
    setQuestionId,
  } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/questions/${questionId}`)
      .then((response) => {
        const questionIndex = questions.findIndex((e) => e.id === questionId);
        const thisQuestion = [...questions];
        thisQuestion.splice(questionIndex, 1);
        setQuestions(thisQuestion);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {creatorId === user_id ? (
        <>
          <div onClick={() => setQuestionId(questionId)}>{name}</div>
          <div>{date}</div>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <div onClick={() => setQuestionId(questionId)}>{name}</div>
          <div>{date}</div>
        </>
      )}
    </div>
  );
}
