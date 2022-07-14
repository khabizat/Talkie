import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";
import TagQuestionList from "./TagQuestionList";
import TagList from "./TagList";

export default function QuestionsPage(props) {
  const [seeAll, setSeeAll] = useState(true);
  const [questionId, setQuestionId] = useState(null);
  const { tagId, setTagId } = props;

  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  const handleSeeAll = () => {
    setSeeAll(true);
    setTagId(null);
  };

  return (
    <>
      <h1>Select a category</h1>
      <button onClick={handleSeeAll}>See All</button>
      <TagList
        setTagId={setTagId}
        setQuestionId={setQuestionId}
        setSeeAll={setSeeAll}
      />

      {questionId && (
        <EachQuestionPage
          questionId={questionId}
          setQuestionId={setQuestionId}
        />
      )}

      {seeAll && !tagId && (
        <>
          <button
            onClick={handleAddQuestion}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add questions
          </button>
          <QuestionList setQuestionId={setQuestionId} />
        </>
      )}

      {tagId && (
        <>
          <button
            onClick={handleAddQuestion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add questions
          </button>
          <TagQuestionList tagId={tagId} setQuestionId={setQuestionId} />
        </>
      )}
    </>
  );
}
