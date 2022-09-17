import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";

export default () => {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  //const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/author").then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);

  const createAuthor = (author) => {
    axios
      .post("http://localhost:8000/api/author", author)
      .then((res) => {
        setAuthor([...author, res.data]);
      })

      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div>
      {errors.map((err, index) => ( <p className="error" key={index}>{err} </p> ))}
      <h1 className="display-4 text-primary m-4">Create Author</h1>
      <AuthorForm onSubmitProp={createAuthor} initialName="" />
    </div>
  );
};
