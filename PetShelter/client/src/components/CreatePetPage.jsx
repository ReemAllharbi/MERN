import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

export default () => {
  const [pet, setPet] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  //const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/new").then((res) => {
      setPet(res.data);
      setLoaded(true);

    });
  }, []);


    const createPet = (pet) => {
  
      axios
        .post("http://localhost:8000/api/pets/new", pet)
        
        .then((res) => {
          setPet([...pet, res.data]);
          this.router.navigate(['./']);
  
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

            <h1 className="display-4 text-primary m-4" ><spam>Pet Shelter:</spam></h1>

      <h3 >Know Pet needing a home?</h3>
      <Form onSubmitProp={createPet} initialName="" initialType="" initialDescription="" initialSkill1="" initialSkill2="" initialSkill3="" />
    </div>
  );
};
