import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import AuthorList from "../components/AuthorList";

export default () => {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/author").then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);

  const removeFromDom = (authorId) => {
    setAuthor(author.filter((author) => author._id != authorId));
  };
  const createAuthor = (author) => {
    axios.post("http://localhost:8000/api/author", author).then((res) => {
      setAuthor([...author, res.data]);
    });
  };
  return (
    <div>
      {loaded && <AuthorList author={author} removeFromDom={removeFromDom} />}
    </div>
  );
};
