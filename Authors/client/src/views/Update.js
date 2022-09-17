import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const Update = (props) => {
  const [author, setAuthor] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id).then((res) => {
      console.log(res);
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);

  const updateAuthor = (e) => {
    axios
      .put("http://localhost:8000/api/author/" + id, e)
      .then((res) => console.log(res))
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
      {loaded && (
        <>
          {errors.map((err, index) => ( <p className="error" key={index}>{err}</p> ))}
          <h1 className="display-4 text-primary m-4">Update a author</h1>
          <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
        </>
      )}
    </div>
  );
};

export default Update;
