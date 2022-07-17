import axios from "axios";
import React, { useEffect, useState } from "react";

export default function User() {
  const [myQuestions, setMyQuestions] = useState(null);
  const [myAnswers, setMyAnswers] = useState(null);
  const [favourites, setFavourites] = useState(null);
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

  const handleFavourites = () => {
    axios
      .get(`/api/liked/user/${userId}`)
      .then((response) => {
        setFavourites(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleMyQuestions(userId);
    handleMyAnswers(userId);
    handleFavourites(userId);
  }, []);

  return (
    <section>
      <div className="text-2xl text-center font-bold text-gray-600 hover:text-gray-600">
        My Questions
      </div>
      {/* My Questions Container */}
      <div className="p-4 w-full flex flex-wrap text-left bg-white border sm:p-8 mb-4">
        {myQuestions &&
        myQuestions.map((myQuestion) => (
          <>
            {/* Header */}
              <div className="p-4 w-1/2 text-left bg-blue-200 rounded-lg border shadow-md sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Posted on {myQuestion.date}</span>
                </div>
              {/* Body */}
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-gray-600 hover:text-gray-600">
                {myQuestion.question_name}
                </p>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-between">
                <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
                {myQuestion.tag_name}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* My Answers */}
      <div className="text-2xl text-center font-bold text-gray-600 hover:text-gray-600">
        My Answers
      </div>
      <div className="p-4 w-full flex flex-wrap text-center bg-white border sm:p-8 mb-4">
      {myAnswers &&
        myAnswers.map((myAnswer) => (
          <>
            {/* Header */}
            <div className="p-4 w-1/2 text-left bg-blue-200 rounded-lg border shadow-md sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">Posted on {myAnswer.date}</span>
              </div>
            {/* Body */}
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gray-600 hover:text-gray-600">
                {myAnswer.question_name}
              </p>
            </div>
          {/* Footer */}
            <div className="flex items-center justify-between">
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
                {myAnswer.tag_name}
              </button>
            </div>
          <div className="flex items-center justify-between mb-4">
            <span>{myAnswer.answer_audio}</span>
          </div>
          </div>
          </>
        ))}
      </div>

      {/* Favourite Questions */}
      <div className="text-2xl text-center font-bold text-gray-600 hover:text-gray-600">
        Favourite Questions
      </div>
      <div className="p-4 w-full flex flex-wrap text-center bg-white border shadow-md sm:p-8">
        {favourites &&
        favourites.map((favourite) => (
          <>
            {/* Header */}
            <div className="p-4 w-1/2 text-left bg-blue-200 rounded-lg border shadow-md sm:p-8">
            {/* Body */}
            <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-600 hover:text-gray-600">
            {favourite.question_name}
            </p>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between">
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
              {favourite.tag_name}
              </button>
            </div>
          </div>
          </>
        ))}
      </div>
    </section>
  );
}

