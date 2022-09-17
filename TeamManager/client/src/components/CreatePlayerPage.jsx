import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreateForm from "../components/CreateForm";

export default () => {
  const [player, setPlayer] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  //const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/players/new").then((res) => {
      setPlayer(res.data);
      setLoaded(true);

    });
  }, []);

  const createPlayer = (player) => {
  
    axios
      .post("http://localhost:8000/api/players/new", player)
      
      .then((res) => {
        setPlayer([...player, res.data]);
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
      <h1 className="display-4 text-primary m-4">Create Player:</h1>
      <CreateForm onSubmitProp={createPlayer} initialName="" initialPosition="" />
    </div>
  );
};
