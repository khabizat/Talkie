import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";
import TagQuestionList from "./TagQuestionList";
import TagList from "./TagList";
import "./QuestionsPage.scss";

export default function QuestionsPage(props) {
  const [seeAll, setSeeAll] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState();
  const [questionId, setQuestionId] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const { tagId, setTagId } = props;

  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  const handleSeeAll = () => {
    setSeeAll(true);
    setTagId(null);
    setQuestionId(null);
    setSelectedTag(null);
  };

  return (
    <>
      <main className="questions-page">
        <div className="my-8 mx-auto width-50 w-2/4">

          <h1 className="mb-2">Select a category</h1>
          <TagList
            setTagId={setTagId}
            setQuestionId={setQuestionId}
            setSeeAll={setSeeAll}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </div>

        {questionId && (
          <EachQuestionPage
            questionId={questionId}
            setQuestionId={setQuestionId}
          />
        )}

        {seeAll && !questionId && !tagId && (
          <>
            <div className="flex justify-center px-8 py-4 mx-auto p-5">
              <button
                onClick={handleAddQuestion}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded flex items-center gap-2"
              >
                Add Question
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            <QuestionList setQuestionId={setQuestionId} />
          </>
        )}

        {tagId && !questionId && (
          <>
          <div className="flex justify-center px-8 py-4 mx-auto p-5">
            <button
              onClick={handleAddQuestion}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded flex items-center gap-2"
            >
              Add Question
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
            </button>
            </div>
            <TagQuestionList tagId={tagId} setQuestionId={setQuestionId} />
          </>
        )}
      </main>
    </>
  );
}
