import React from "react";

export default function CommentListItem(props) {
  const { user_id, comment, timestamp } = props;
  return (
    <>
      <div>{user_id}</div>
      <div>{comment}</div>
      <div>{timestamp}</div>
    </>
  );
}
