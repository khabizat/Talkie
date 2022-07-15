import axios from "axios";
import React, { useEffect, useState } from "react";

export default function User() {
  const [myQuestions, setMyQuestions] = useState(null);
  const findUser = JSON.parse(localStorage.getItem("user"));
  const userId = findUser.id;

  const handleMyQuestions = (userId) => {
    axios
      .get(`/api/questions/${userId}`)
      .then((response) => {
        console.log(response.data);
        setMyQuestions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleMyQuestions(userId);
  }, []);

  return (
    <section>
      <div>My Questions</div>
      {myQuestions}
      <div>My Answers</div>
      <div>My Favorites</div>
    </section>
  );
}
