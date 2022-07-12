import React from "react";

export default function QuestionListItem(props) {
  const { id, setQuestionId, name, date } = props;

  return (
    <div>
      <div onClick={() => setQuestionId(id)}>{name}</div>
      <div>{date}</div>
    </div>
  );
}
