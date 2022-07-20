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
    audio_url,
  } = props;

  const findUser = JSON.parse(localStorage.getItem("user"));
  const userId = findUser.id;
  const userName = findUser.name;

  const commentInfo = {
    userId,
    userName,
    answerId,
    comment
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
        <>
          <CommentListItem
            key={sA.comment_id}
            user_id={sA.user_id}
            comment_name={sA.name}
            comment_id={sA.comment_id}
            comment={sA.comment}
            date={sA.date}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          </>

    );
  });

  return (
    <>
      <div className="h-8 flex justify-left py-4 my-6">
        <button
          onClick={() => setAnswerId(null)}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-4 px-4 rounded flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          Answers
        </button>
      </div>

      <div>{comments}</div>

      <div className="max-w-2xl w-full px-6 py-2 mx-auto bg-blue-100 rounded-lg border p-5 shadow-lg transition hover:bg-blue-200 hover:border-blue-100 hover:scale-105">
        <form action="" className="w-full p-4 py-4 rounded-lg">
          <label className="block">
          <span className="font-semibold text-xl text-gray-600">
            Leave your feedback
          </span>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="block w-full mt-4 rounded font-normal text-lg px-3 py-2 mt-6"
            rows="3"
          >
          </textarea>
          </label>
          <button
            onClick={handleCommentButton}
            className="px-3 py-2 mt-4 text-sm  text-center text-blue-100 bg-blue-600 rounded"
          >Comment
          </button>
        </form>
      </div>


    </>
  );
}
