import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

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
    <section className="user-profile">
      <div className="text-2xl text-center font-bold text-white pt-16">
        My Questions
      </div>
      {/* My Questions Container */}
      <div className="p-4 w-full flex flex-wrap justify-center text-left mb-2">
        {myQuestions &&
        myQuestions.map((myQuestion) => (
          <>
            {/* Header */}
              <div className="p-4 w-1/3 mx-4 text-left bg-blue-100 rounded-lg shadow-md sm:p-8 hover:scale-105 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Posted by you on {moment(myQuestion.dateFormatted).format('ddd, MMMM Do YYYY')}</span>
                </div>
              {/* Body */}
              <div className="flex items-center justify-between mb-2">
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
      <div className="text-2xl text-center font-bold text-white">
        My Answers
      </div>
      <div className="p-4 w-full flex flex-wrap justify-center text-left mb-2">
      {myAnswers &&
        myAnswers.map((myAnswer) => (
          <>
            {/* Header */}
            <div className="p-4 w-1/3 mx-4 text-left bg-blue-100 rounded-lg shadow-md sm:p-8 hover:scale-105 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">Posted by you on {moment(myAnswer.dateFormatted).format('ddd, MMMM Do YYYY')}</span>
              </div>
            {/* Body */}
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gray-600 hover:text-gray-600 mb-2">
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
            <audio
              src={myAnswer.answer_audio}
              controls="controls"
              className="audio-player mt-6"
            >
            </audio>
          </div>
          </div>
          </>
        ))}
      </div>

      {/* Favourite Questions */}
      <div className="text-2xl text-center font-bold text-white">
        Favourite Questions
      </div>
      <div className="p-4 w-full flex flex-wrap justify-center text-left mb-2">
        {favourites &&
        favourites.map((favourite) => (
          <>
            {/* Header */}
            <div className="p-4 w-1/3 mx-4 text-left bg-blue-100 rounded-lg shadow-md sm:p-8 hover:scale-105 mb-4">
            {/* Body */}
            <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-600 hover:text-gray-600 mb-2">
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

