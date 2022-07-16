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
      // <ol role="list">
        // <li key={sA.comment_id}>
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
        // </li>
      // </ol>

    );
  });

  return (
    <>
      <button
        onClick={() => setAnswerId(null)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
      Back to answers
      </button>

      <div>{comments}</div>

      <div className="max-w-2xl w-5/6 px-6 py-2 mx-auto bg-blue-50 rounded-none border p-5 shadow-lg transition hover:bg-blue-100 hover:border-blue-100">
        <form action="" class="w-full p-4">
          <label class="block mb-2">
          <span class="text-gray-600">Leave your feedback</span>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            class="block w-full mt-1 rounded"
            rows="3"
          >
          </textarea>
          </label>
          <button
            onClick={handleCommentButton}
            class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
          >Comment
          </button>
        </form>
      </div>


    </>
  );
}
