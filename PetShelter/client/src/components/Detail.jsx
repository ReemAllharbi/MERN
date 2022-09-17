import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import DeleteBtn from "./DeleteBtn";


const Detail = (props) => {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => setPet(res.data))
      .catch((err) => console.error(err));
 
  }, []);

  const removeFromDom = (petId) => {
    setPet(pet.filter((pet) => pet._id != petId));
  };


  return (
    <div>
            <Link to={"/"}>  Back to home </Link>

     <DeleteBtn  className="btn btn-denger m-2" petId={pet._id} successCallback={() => removeFromDom(pet._id)} /> 

      <h2 className="display-4 text-primary m-4" > <span> Details about: </span>{pet.name} </h2> 
      <p className="col col-form-label text-primary h1">Pet Type: <span> {pet.type}</span> </p>
      <p className="col col-form-label text-primary h1">Pet Description: <span> {pet.description}</span> </p>
      <p className="col col-form-label text-primary h1"> Pet Sill 1: <span> {pet.skill1}</span></p>
      <p className="col col-form-label text-primary h1"> Pet Sill 2: <span> {pet.skill2}</span></p>
      <p className="col col-form-label text-primary h1"> Pet Sill 3: <span> {pet.skill3}</span></p>

      <br/>
          <Link className="btn btn-info m-2" to={"/pets/" + pet._id + "/edit"}>Edit</Link>
    </div>
    
  );
};

export default Detail;
