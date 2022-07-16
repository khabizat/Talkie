import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AnswerListItem(props) {
  const [good, setGood] = useState(0);

  const {
    answer_id,
    user_id,
    audio_url,
    date,
    user_name,
    setAnswerId,
    selectedQuestion,
    setSelectedQuestion,
  } = props;

  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/answers/${answer_id}`)
      .then((response) => {
        // const answerIndex = selectedQuestion.findIndex(
        //   (e) => e.answer_id === answer_id
        // );
        // const thisAnswer = [...selectedQuestion];
        // thisAnswer.splice(answerIndex, 1);
        // setSelectedQuestion(thisAnswer);
        setSelectedQuestion((prev) => {
          const newList = prev.filter((item) => item.answer_id != answer_id);
          return newList;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [selectedQuestion]);

  const goodIncrement = () => {
    setGood(good + 1);
  };

  return (
    <div>
      <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto bg-blue-200 rounded-none border-2 p-5 shadow-lg transition hover:bg-blue-200 hover:border-blue-300">
        {/* Header of the container */}
        {creatorId === user_id ? (
          <>
            <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
              <span className="text-xs text-neutral-500">{user_name}</span>
              <span className="text-xs text-neutral-500">{date}</span>
              {/* delete button */}
              <button onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              <span className="text-xl font-bold text-gray-600 hover:text-gray-600">
                <audio
                  src={audio_url}
                  controls="controls"
                  className="audio-player"
                />
              </span>
            </div>
            {/* Footer of the container */}
            <div className="flex justify-end">
              {/* comment button */}
              <button onClick={() => setAnswerId(answer_id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
              {/* like button */}
              <button onClick={goodIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </button>
              <span>{good}</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
              <span className="text-xs text-neutral-500">{user_name}</span>
              <span className="text-xs text-neutral-500">{date}</span>
            </div>
            {/* Body of the container */}
            <div className="mt-2">
              <span className="text-xl font-bold text-gray-600 hover:text-gray-600">
                <audio
                  src={audio_url}
                  controls="controls"
                  className="audio-player"
                />
              </span>
            </div>
            {/* Footer of the container */}
            {/* <div className="flex items-center justify-between mt-4"> */}
            <div className="flex justify-end">
              {/* comment button */}
              <button onClick={() => setAnswerId(answer_id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
              {/* like button */}
              <button onClick={goodIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </button>
              <span>{good}</span>
            </div>
          </>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}
