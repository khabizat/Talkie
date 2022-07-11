import React from "react";

export default function TagQuestionListItem(props) {
  const { id, name, date, setQuestionId } = props;

  return (
    <div>
      <div onClick={() => setQuestionId(id)}>{name}</div>
      <div>{date}</div>
    </div>
  );
}
