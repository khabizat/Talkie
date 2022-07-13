import axios from "axios";
import React, { useState, useEffect } from "react";

export default function CommentListItem(props) {
  const [commentId, setCommentId] = useState(null);
  const { user_id, comment_id, comment, timestamp } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = () => {
    setCommentId(comment_id);

    axios
      .post("/api/comments", commentId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleDelete();
  }, commentId);

  return (
    <>
      {creatorId === user_id ? (
        <>
          <div>{user_id}</div>
          <div>{comment}</div>
          <div>{timestamp}</div>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <div>{user_id}</div>
          <div>{comment}</div>
          <div>{timestamp}</div>
        </>
      )}
    </>
  );
}
