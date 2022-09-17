import axios from "axios";
import React from "react";

export default (props) => {
  const { playerId } = props;

  const handleClick = () => {

    axios
      .delete("http://localhost:8000/api/players/delete/" + playerId)
      .then((res) => {
        window.location.reload(true);

      });
  };

  return (
    <button className="btn btn-danger m-2" onClick={handleClick}>
      Delete
    </button>
  );
};
