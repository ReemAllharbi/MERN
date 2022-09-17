import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


export default (props) => {
  const { petId } = props;
  const navigate = useNavigate();

  const handleClick = () => {

    axios
      .delete("http://localhost:8000/api/pets/delete/" + petId)
      .then((res) => {
      navigate("/");

      });
  };

  return (
    <button className="btn btn-danger m-2" onClick={handleClick}>
      Adopt Grafield
    </button>
  );
};
