import axios from "axios";
import React, { useState, useEffect } from "react";
import TagQuestionListItem from "./TagQuestionListItem";

import "./TagQuestionList.scss";

export default function TagQuestionList(props) {
  const [tagQuestions, setTagQuestions] = useState([]);
  const { tagId, setQuestionId } = props;

  const getTagQuestions = (tagId) => {
    axios
      .get(`/api/tags/${tagId}/questions`)
      .then((response) => {
        setTagQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTagQuestions(tagId);
  }, [tagId]);

  return (
    <section>
      {!tagQuestions.length && (
        <div className="no_questions">
          <h1>There is no questions for this tag yet</h1>
        </div>
      )}
      {tagQuestions &&
        tagQuestions.map((tagQuestion) => (
          <ol className="p-4 divide-y divide-slate-100">
            <li key={tagQuestion.id}>
              <TagQuestionListItem
                key={tagQuestion.id}
                questionId={tagQuestion.id}
                name={tagQuestion.name}
                date={tagQuestion.date}
                user_id={tagQuestion.user_id}
                tag={tagQuestion.tag_id}
                tag_name={tagQuestion.tag_name}
                user_name={tagQuestion.user_name}
                tagQuestions={tagQuestions}
                setTagQuestions={setTagQuestions}
                setQuestionId={setQuestionId}
              />
            </li>
          </ol>
        ))}
    </section>
  );
}
