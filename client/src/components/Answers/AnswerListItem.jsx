import React, { useState } from "react";

export default function AnswerListItem(props) {
  const [good, setGood] = useState(0);

  const { answer_id, audio_url, date, user_name, setAnswerId } = props;

  const goodIncrement = () => {
    setGood(good + 1);
  };

  return (
    <div>
      <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto bg-blue-50 rounded-none border p-5 shadow-lg transition hover:bg-blue-100 hover:border-blue-100">
        {/* Header of the container */}
        <div className="flex items-center justify-between">
          <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
          <span className="text-xs text-neutral-500">{user_name}</span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
        {/* Body of the container */}
        <div className="mt-2">
          <span className="text-xl font-bold text-gray-600 hover:text-gray-600">
            {audio_url}
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
          <div>{good}</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
