import axios from "axios";
import React, { useEffect, useState } from "react";

export default function User() {
  const [myQuestions, setMyQuestions] = useState(null);
  const [myAnswers, setMyAnswers] = useState(null);
  const findUser = JSON.parse(localStorage.getItem("user"));
  const userId = findUser.id;

  const handleMyQuestions = (userId) => {
    axios
      .get(`/api/questions/user/${userId}`)
      .then((response) => {
        setMyQuestions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMyAnswers = (userId) => {
    axios
      .get(`/api/answers/user/${userId}`)
      .then((response) => {
        setMyAnswers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleMyQuestions(userId);
    handleMyAnswers(userId);
  }, []);

  return (
    <section>
      <div>My Questions</div>
      {myQuestions &&
        myQuestions.map((myQuestion) => (
          <>
            <div>Question: {myQuestion.question_name}</div>
            <div>Tag: {myQuestion.tag_name}</div>
            <div>Date: {myQuestion.date}</div>
          </>
        ))}
      <div>My Answers</div>
      {myAnswers &&
        myAnswers.map((myAnswer) => (
          <>
            <div>Answer: {myAnswer.answer_audio}</div>
            <div>Question: {myAnswer.question_name}</div>
            <div>Tag: {myAnswer.tag_name}</div>
            <div>Date: {myAnswer.date}</div>
          </>
        ))}
      <div>Favorites Questions</div>
    </section>
  );
}
