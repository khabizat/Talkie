import React from "react";
import axios from "axios";

export default function QuestionListItem(props) {
  const {
    questionId,
    user_id,
    name,
    date,
    tag,
    user_name,
    tag_name,
    questions,
    setQuestions,
    setQuestionId,
  } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/questions/${questionId}`)
      .then((response) => {
        const questionIndex = questions.findIndex((e) => e.id === questionId);
        const thisQuestion = [...questions];
        thisQuestion.splice(questionIndex, 1);
        setQuestions(thisQuestion);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likedQuestionInfo = {
    userId: creatorId,
    question_name: name,
    tag_name: tag_name,
  };

  const handleHeart = (e) => {
    e.preventDefault();

    axios
      .post("/api/liked", likedQuestionInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* If user created this question */}
      {creatorId === user_id ? (
        <>
          <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto bg-blue-50 rounded-lg border p-5 shadow-lg transition hover:bg-blue-100 hover:border-blue-100 hover:scale-105">
            {/* Header of the container */}
            <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
              <span className="text-xs text-neutral-500">{user_name}</span>
              <span className="text-xs text-neutral-500">{date}</span>
              <button onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
            {/* Body of the container */}
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-600 hover:text-gray-600">
                {name}
              </p>
            </div>
            {/* Footer of the container */}
            <div className="flex items-center justify-between mt-4">
            <button onClick={handleHeart}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-red-700"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold  text-neutral-500">
                {tag_name}
              </button>
              <div className="flex items-center">
                <button
                  onClick={() => setQuestionId(questionId)}
                  class="text-blue-600 hover:underline hover:cursor-pointer "
                >
                  Listen to answers ⟶
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        //If user didn't created this question
        <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto bg-blue-50 rounded-lg border p-5 shadow-lg transition hover:bg-blue-100 hover:border-blue-100 hover:scale-105">
          {/* Header of the container */}
          <div className="flex items-center justify-between">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
            <span className="text-xs text-neutral-500">{user_name}</span>
            <span className="text-xs text-neutral-500">{date}</span>
          </div>
          {/* Body of the container */}
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-600 hover:text-gray-600">
              {name}
            </p>
          </div>
          {/* Footer of the container */}
          <div className="flex items-center justify-between mt-4">
            <button onClick={handleHeart}>
              <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-red-700"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold  text-neutral-500">
              {tag_name}
            </button>
            <div className="flex items-center">
              <button
                onClick={() => setQuestionId(questionId)}
                class="text-blue-600 hover:underline hover:cursor-pointer "
              >
                Listen to answers ⟶
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
