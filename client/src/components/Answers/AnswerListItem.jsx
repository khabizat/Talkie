import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

export default function AnswerListItem(props) {
  const [good, setGood] = useState(0);

  const {
    answer_id,
    user_id,
    audio_url,
    date,
    user_name,
    photo,
    setAnswerId,
    selectedQuestion,
    setSelectedQuestion,
  } = props;

  const dateFormatted = moment(date).format("ddd, MMMM Do YYYY");
  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    console.log(answer_id);
    console.log(selectedQuestion);

    axios
      .delete(`/api/answers/${answer_id}`)
      .then((response) => {
        const newList = selectedQuestion.filter(
          (item) => item.answer_id != answer_id
        );
        setSelectedQuestion(newList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goodIncrement = () => {
    setGood(good + 1);
  };

  return (
    <div className="mb-5">
      <div className="max-w-2xl w-3/4 px-8 py-4 mx-auto my-4 bg-blue-100 rounded-md border p-5 shadow-lg transition hover:bg-blue-200 hover:border-blue-300 hover:scale-105">
        {/* Header of the container */}
        {creatorId === user_id ? (
          <>
            {/* Header of the container */}
            <div>
            <div className="flex items-center justify-start">
              {/* Header left */}
              <div>
                <img src={photo} alt="Avatar" className="rounded-full h-12 w-12 bg-slate-400"/>
              </div>
              <div className="grid mx-2 w-1/3">
                <span className="text-xs text-neutral-500 font-bold">You posted</span>
                <span className="text-xs text-neutral-500">{dateFormatted}</span>
              </div>
              {/* Header right / Delete button */}
              <div className="flex w-2/3 justify-end">
              <div className="flex justify-between mt-2">
              {/* delete button */}
              <button className="mr-2" onClick={handleDelete}>
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
              </div>
            </div>
            {/* Body of the container */}
            <div className="mt-4 flex justify-start">
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
                <button className="mr-2" onClick={() => setAnswerId(answer_id)}>
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
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </button>
                {/* like button */}
                <button className="mr-2" onClick={goodIncrement}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </button>
                <span className="font-light text-base">{good}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* If user is not author of the answer */}
            <div>
            <div className="flex items-center justify-start">
                {/* Header left */}
                <div>
                <img src={photo} alt="Avatar" className="rounded-full h-12 w-12 bg-slate-400"/>
                </div>
                <div className="grid mx-2 w-2/3">
                  <span className="text-xs text-neutral-500 font-bold">{user_name}</span>
                  <span className="text-xs text-neutral-500">{dateFormatted}</span>
                </div>
            </div>
            {/* Body of the container */}
            <div className="mt-4 flex justify-start">
              <span className="text-xl font-bold text-gray-600 hover:text-gray-600">
                <audio
                  src={audio_url}
                  controls="controls"
                  className="audio-player"
                />
              </span>
            </div>
            {/* Footer of the container */}
            <div className="flex justify-end mt-2">
              {/* comment button */}
              <button className="mr-2" onClick={() => setAnswerId(answer_id)}>
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
              {/* like button */}
              <button className="mr-2" onClick={goodIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </button>
              <span className="font-light text-base">{good}</span>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
