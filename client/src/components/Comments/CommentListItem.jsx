import axios from "axios";
import React from "react";

export default function CommentListItem(props) {
  const { user_id, comment, timestamp } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = () => {
    axios.post();
  };

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
