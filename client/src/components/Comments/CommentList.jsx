import React from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList(props) {
  const { selectedAnswer } = props;
  const comments = selectedAnswer.map((sA) => {
    return (
      <CommentListItem
        user_id={sA.user_id}
        comment={sA.comment}
        timestamp={sA.timestamp}
      />
    );
  });

  return <div>{comments}</div>;
}
