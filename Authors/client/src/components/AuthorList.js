import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const AuthorList = (props) => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => setAuthor(res.data.author));
  }, []);

  const removeFromDom = (authorId) => {
    setAuthor(author.filter((author) => author._id != authorId));
  };

  return (
    <div>
      <h1 className="display-4">Favorite authors</h1>

      <p>We have quate by:</p>
      <Link to={"/author/new"}>Add an author +</Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.author.map((author, idx) => {
            return (
              <tr>
                <td key={idx}>{author.name}</td>
                <td>
                  <Link className="btn btn-info m-2" to={"/author/" + author._id + "/edit"} > Edit </Link>
                  |
                  <DeleteButton  className="btn btn-denger m-2" authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
