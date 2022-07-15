import React from "react";

export default function CommentList(props) {
  const { selectedAnswer } = props;
  const comments = selectedAnswer.map((sA) => {
    return (
      <section>
        <div>{sA.user_id}</div>
        <div>{sA.comment}</div>
        <div>{sA.timestamp}</div>
      </section>
    );
  });
  console.log(comments);
  console.log("asdasdasdasdas", selectedAnswer);

  return <div>{comments}</div>;
}
