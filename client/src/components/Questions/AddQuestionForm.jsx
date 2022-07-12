import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddQuestionForm.scss"

const axios = require("axios");

export default function AddQuestionForm(props) {
  const [question, setQuestion] = useState("");
  const [tag, setTag] = useState("");

  const history = useHistory();

  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    const questionData = {
      question,
      tag,
    };

    axios
      .post("/api/questions", questionData)
      .then((response) => {
        history.push("/questions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="add-question-form">
        <div class="h-screen flex bg-gray-bg1"> 
          <div class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
            <h1 class="text-2xl font-medium text-primary mt-4 mb-12 text-center">Add New Question</h1>
            <form>
              <div>
                <label htmlFor='question'></label>
                <textarea
                  type="text"
                  placeholder="Type your question here"
                  onChange={(e) => setQuestion(e.target.value)}
                  class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                ></textarea>
              </div>
              <div>
              <label htmlFor='tag'></label>
              <input
                type="text"
                placeholder="Add tag"
                onChange={(e) => setTag(e.target.value)
                }
                class={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              ></input>
              </div>
              <div class="flex justify-center items-center mt-6">
                <button onClick={handleQuestionSubmit}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Submit
                </button>
              </div>
        
        </form>
        </div>
        </div>
      </div>
    </>
  );
}
