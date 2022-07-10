import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function QuestionListItem(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.date}</div>
    </>
  );
}
