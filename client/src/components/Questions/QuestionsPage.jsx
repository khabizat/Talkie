import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";
import EachQuestionPage from "./EachQuestionPage";
import axios from "axios";

export default function QuestionsPage() {
  const [tags, setTags] = useState(null);
  const [tagId, setTagId] = useState(null);
  const [questionId, setQuestionId] = useState(null);

  const history = useHistory();

  const handleAddQuestion = () => {
    history.push("/questions/new");
  };

  const getTags = () => {
    axios.get("/api/tags").then((response) => {
      setTags(response.data);
    });
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <>
      <section>
        {tags &&
          tags.map((tag) => (
            <div
              onClick={() => {
                setTagId(tag.id);
              }}
            >
              {tag.name}
            </div>
          ))}
      </section>
      {questionId && <EachQuestionPage questionId={questionId} />}
      {!questionId && (
        <>
          <button onClick={handleAddQuestion}>Add questions</button>
          <QuestionList setQuestionId={setQuestionId} />
        </>
      )}
    </>
  );
}
