import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

export default function CommentListItem(props) {
  const [good, setGood] = useState(0);
  const [clickedGood, setClikedGood] = useState(false);
  const [bad, setBad] = useState(0);
  const [clickedBad, setClickedBad] = useState(false);

  const {
    user_id,
    comment_name,
    comment_id,
    comment,
    date,
    selectedAnswer,
    setSelectedAnswer,
  } = props;

  const dateFormatted = moment.utc(date.toLocaleString()).format("ddd, MMMM Do YYYY");
  const findCreator = JSON.parse(localStorage.getItem("user"));
  const creatorId = findCreator.id;

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/comments/${comment_id}`)
      .then((response) => {
        const commentIndex = selectedAnswer.findIndex(
          (e) => e.comment_id === comment_id
        );
        const thisComment = [...selectedAnswer];
        thisComment.splice(commentIndex, 1);
        setSelectedAnswer(thisComment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goodIncrement = () => {
    setGood(good + 1);
    setClikedGood((prevState) => !prevState);
  };

  const badIncrement = () => {
    setBad(bad - 1);
    setClickedBad((prevState) => !prevState);
  };
  return (
    <>
      {creatorId === user_id ? (
        <>
        <div className="max-w-2xl w-full px-6 py-2 mx-auto bg-blue-100 rounded-lg border p-5 shadow-lg transition hover:bg-blue-200 hover:border-blue-100 border-2">
            {/* Header of the container */}
            <div className="flex items-center justify-between">
              {/* <div>
                <img src={photo} alt="Avatar" className="rounded-full h-12 w-12 bg-slate-400"/>
              </div> */}
                <span className="text-xs text-neutral-500">You commented</span>
                <span className="text-xs font-light text-neutral-500">{dateFormatted}</span>
            </div>
            {/* Body of the container */}
            <div className="mt-2">
              <p className="text-base font-light text-gray-600 hover:text-gray-600">
                {comment}
              </p>
            </div>
            {/* Footer of the container */}
            <div className="flex justify-end mt-8 mb-2">
              {/* delete button */}
              <button onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-rose-600"
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
        </>
      ) : (
        <>
        <div className="max-w-2xl w-full px-6 py-2 mx-auto bg-blue-100 rounded-lg border-round p-5 shadow-lg transition hover:bg-blue-200 hover:border-blue-100 border-2">
          <div className="flex items-center justify-between">
            {/* <div>
              <img src={photo} alt="Avatar" className="rounded-full h-12 w-12 bg-slate-400"/>
            </div> */}
            {/* <div className="flex mx-2 w-2/3"> */}
              <span className="text-xs text-neutral-500">{comment_name}</span>
              <span className="text-xs font-light text-neutral-500">{dateFormatted}</span>
            {/* </div> */}
          </div>
            {/* Body of the container */}
          <div className="mt-2">
            <p className="text-base font-light text-gray-600 hover:text-gray-600">
              {comment}
            </p>
          </div>
          {/* Footer of the container */}
          <div className="flex justify-end mt-2 mb-2">
            {/* upvote button */}
            <button onClick={goodIncrement}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 hover:fill-blue-700 ${
                  clickedGood && "fill-blue-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={1}
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
                <span className="text-blue-600 text-base">{good}</span>
              </button>
              {/* downvote button */}
              <button onClick={badIncrement} className="hover:fill-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 hover:fill-rose-700 ${
                    clickedBad && "fill-rose-700"
                  }`}
                  fill={"none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                  />
                </svg>
                <span className="text-rose-600 text-base">{bad}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
