import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import axios from "axios";


export default function TagList(props) {
  const [tags, setTags] = useState(null);
  const {setTagId} = props;

  const getTags = () => {
    axios.get("/api/tags").then((response) => {
      setTags(response.data);
    });
  };

  useEffect(() => {
    getTags();
  }, []);

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
  
  return(
    <>
      <Select
        placeholder="Select tag..."
        onChange={(selectedOption) => setTagId(selectedOption.value)}
        options={options}
        defaultValue = {tags}
      />
    </>
  );
}