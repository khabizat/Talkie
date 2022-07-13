import axios from "axios";
import React, { useState } from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList(props) {
  const {
    selectedAnswer,
    setSelectedAnswer,
    setAnswerId,
    comment,
    setComment,
  } = props;

  const findUser = JSON.parse(localStorage.getItem("user"));
  const userId = findUser.id;

  const commentInfo = {
    userId: userId,
    answerId: selectedAnswer[0].answer_id,
    comment: comment,
  };

  const handleCommentButton = (e) => {
    e.preventDefault();

    axios
      .post("/api/comments", commentInfo)
      .then((response) => {
        setSelectedAnswer((prev) => {
          const comment = response.data[0];
          comment.comment_id = comment.id;
          return [...prev, comment];
        });
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(selectedAnswer);
  const comments = selectedAnswer.map((sA) => {
    return (
      <CommentListItem
        user_id={sA.user_id}
        comment_id={sA.comment_id}
        comment={sA.comment}
        timestamp={sA.timestamp}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
    );
  });

  return (
    <>
      <button onClick={() => setAnswerId(null)}>...Back...</button>
      <form>
        <h6>Leave your feedback</h6>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button onClick={handleCommentButton}>comment</button>
      </form>
      <div>{comments}</div>
    </>
  );
}
