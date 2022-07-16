import React from "react";


import Audio from "./Audio";

export default function AddAnswer(props) {
  const { question_id } = props;
  return (
    <div>
      <Audio question_id={ question_id } />
    </div>
  );
}