import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const { authorId, successCallback } = props;
  const navigate = useNavigate();

  const deleteAuthor = (e) => {
    axios.delete("http://localhost:8000/api/author/" + authorId).then((res) => {
      successCallback();
    });
  };

  return (
    <button className="btn btn-danger m-2" onClick={deleteAuthor}>
      Delete
    </button>
  );
};
