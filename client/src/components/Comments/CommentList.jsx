import axios from "axios";
import React, { useState } from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList(props) {
  const {
    selectedAnswer,
    setSelectedAnswer,
    answerId,
    setAnswerId,
    comment,
    setComment,
  } = props;

  const findUser = JSON.parse(localStorage.getItem("user"));
  const userId = findUser.id;
  const userName = findUser.name;

  const commentInfo = {
    userId,
    userName,
    answerId,
    comment,
  };

  const handleCommentButton = (e) => {
    e.preventDefault();

    axios
      .post("/api/comments", commentInfo)
      .then((response) => {
        setSelectedAnswer((prev) => {
          const comment = response.data[0];
          comment.comment_id = comment.id;
          console.log(comment);
          return [...prev, comment];
        });
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const comments = selectedAnswer.map((sA) => {
    return (
      <CommentListItem
        key={sA.comment_id}
        user_id={sA.user_id}
        comment_name={sA.name}
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
      <button
        onClick={() => setAnswerId(null)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
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
