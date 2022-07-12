import axios from "axios";
import React, { useState, useEffect } from "react";
import TagQuestionListItem from "./TagQuestionListItem";

export default function TagQuestionList(props) {
  const [tagQuestions, setTagQuestions] = useState(null);
  const { tagId, setQuestionId } = props;

  const getTagQuestions = (tagId) => {
    axios
      .get(`/api/questions/${tagId}`)
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
          <TagQuestionListItem
            id={tagQuestion.id}
            key={tagQuestion.id}
            name={tagQuestion.name}
            date={tagQuestion.date}
            setQuestionId={setQuestionId}
          />
        ))}
    </section>
  );
}
