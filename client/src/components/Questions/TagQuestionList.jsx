import axios from "axios";
import React, { useState, useEffect } from "react";
import TagQuestionListItem from "./TagQuestionListItem";

export default function TagQuestionList(props) {
  const [tagQuestions, setTagQuestions] = useState(null);
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
      {tagQuestions &&
        tagQuestions.map((tagQuestion) => (
          <ol role="list" className="p-4 divide-y divide-slate-100">
            <li key={tagQuestion.id}>
              <TagQuestionListItem
                key={tagQuestion.id}
                questionId={tagQuestion.id}
                user_id={tagQuestion.user_id}
                name={tagQuestion.name}
                date={tagQuestion.date}
                tag={tagQuestion.tag_id}
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
