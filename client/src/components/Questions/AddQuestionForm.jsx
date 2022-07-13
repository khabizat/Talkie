import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import "./AddQuestionForm.scss";

const axios = require("axios");

const options = [
  { value: '1', label: 'Data Structures and Algorithms' },
  { value: '2', label: 'JavaScript' },
  { value: '3', label: 'HTML' },
  { value: '4', label: 'CSS' },
  { value: '5', label: 'Ruby' },
  { value: '6', label: 'Ruby on Rails' },
  { value: '7', label: 'SQL' },
  { value: '8', label: 'NodeJS' },
  { value: '9', label: 'ReactJS' },
  { value: '10', label: 'Express' },
  { value: '11', label: 'JQuery' },
  { value: '12', label: 'Ajax' },
  { value: '13', label: 'Python' },
  { value: '14', label: 'C' },
  { value: '15', label: 'C++' },
  { value: '16', label: 'C#' },
  { value: '17', label: 'R' },
  { value: '18', label: 'Go' },
  { value: '19', label: 'PHP' },
  { value: '20', label: 'Java' },
  { value: '21', label: 'APIs' },
  { value: '22', label: 'System Design' },
  { value: '23', label: 'Behavioural' }
];


export default function AddQuestionForm(props) {

  const [question, setQuestion] = useState("");
  const [tag, setTag] = useState(null);

  const history = useHistory();
  
  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    const questionData = {
      question,
      tag: Number(tag)
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
        <div className="h-screen flex bg-gray-bg1"> 
          <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">Add New Question</h1>
            <form>
              <div>
                <label htmlFor='question'></label>
                <textarea
                  type="text"
                  placeholder="Type your question here"
                  onChange={(e) => setQuestion(e.target.value)}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                ></textarea>
              </div>
              <Select
                placeholder="Select tag..."
                onChange={(selectedOption) => setTag(selectedOption.value)}
                options={options}
                defaultValue = {tag}
              />
              <div className="flex justify-center items-center mt-6">
                <button onClick={handleQuestionSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
