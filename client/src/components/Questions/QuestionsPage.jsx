import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";
import TagQuestionList from "./TagQuestionList";
import TagList from "./TagList";
// import axios from "axios";

export default function QuestionsPage() {
  const [tagId, setTagId] = useState(null);
  const [questionId, setQuestionId] = useState(null);

  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  return (
    <>
      <h1>Select a category</h1>
      <TagList 
        setTagId={setTagId}
        setQuestionId={setQuestionId}
      />

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
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Add questions
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
