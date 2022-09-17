import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./Form";

const Update = (props) => {
  const [pet, setPet] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/" + id).then((res) => {
      console.log(res);
      setPet(res.data);
      setLoaded(true);
    });
  }, []);

  const updatePet = (e) => {
    axios
      .put("http://localhost:8000/api/pets/" + id, e)
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
          {errors.map((err, index) => (
            <p className="error" key={index}>
              {err}
            </p>
          ))}
          <h1 className="display-4 text-primary m-4">Update a Pet</h1>
          <h3 >Edit Garfield</h3>

          <Form
            onSubmitProp={updatePet}
            initialName={pet.name}
            initialType={pet.type}
            initialDescription={pet.description}
            initialSkill1={pet.skill1}
            initialSkill2={pet.skill2}
            initialSkill3={pet.skill3}

          />
        </>
      )}
    </div>
  );
};

export default Update;
