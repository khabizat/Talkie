import axios from "axios";
import React from "react";

export default function CommentListItem(props) {
  const {
    user_id,
    comment_name,
    comment_id,
    comment,
    timestamp,
    selectedAnswer,
    setSelectedAnswer,
  } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/comments/${comment_id}`)
      .then((response) => {
        const commentIndex = selectedAnswer.findIndex(
          (e) => e.comment_id === comment_id
        );
        const thisComment = [...selectedAnswer];
        thisComment.splice(commentIndex, 1);
        setSelectedAnswer(thisComment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {creatorId === user_id ? (
        <>
          <div>{comment_name}</div>
          <div>{comment}</div>
          <div>{timestamp}</div>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <div>{comment_name}</div>
          <div>{comment}</div>
          <div>{timestamp}</div>
        </>
      )}
    </>
  );
}
