import React from "react";
import axios from "axios";

export default function TagQuestionListItem(props) {
  const {
    questionId,
    user_id,
    name,
    date,
    tagQuestions,
    setTagQuestions,
    setQuestionId,
  } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/questions/${questionId}`)
      .then((response) => {
        const questionIndex = tagQuestions.findIndex(
          (e) => e.id === questionId
        );
        const thisQuestion = [...tagQuestions];
        thisQuestion.splice(questionIndex, 1);
        setTagQuestions(thisQuestion);
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
