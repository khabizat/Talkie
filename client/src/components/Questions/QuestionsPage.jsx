import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";
import TagQuestionList from "./TagQuestionList";
import TagList from "./TagList";

export default function QuestionsPage(props) {
  const {tagId, setTagId} = props;
  const [questionId, setQuestionId] = useState(null);

  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  return (
    <>
      <div className="mb-8">
        <h1>Select a category</h1>
        <TagList 
          setTagId={setTagId}
          setQuestionId={setQuestionId}
        />
      </div>


      {questionId && (
        <EachQuestionPage
          questionId={questionId}
          setQuestionId={setQuestionId}
        />
      )}

      {!tagId && !questionId && (
        <>
          <button 
            onClick={handleAddQuestion}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded flex items-center gap-2"
          >
            Add question
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          <QuestionList setQuestionId={setQuestionId} />
        </>
      )}

      {tagId && !questionId && (
        <>
          <button onClick={handleAddQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Add questions</button>
          <TagQuestionList tagId={tagId} setQuestionId={setQuestionId} />
        </>
      )}
    </>
  );
}
