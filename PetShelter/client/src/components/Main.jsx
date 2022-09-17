import React, { useEffect, useState } from "react";
import axios from "axios";
import PetList from "./PetList";
export default () => {
  const [pet, setPet] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets").then((res) => {
      setPet(res.data);
      setLoaded(true);
    });
  }, []);

  const removeFromDom = (petId) => {
    setPet(pet.filter((pet) => pet._id != petId));
  };

  return (
    <div>
      {loaded && <PetList pet={pet} removeFromDom={removeFromDom} />}
    </div>
  );
};
