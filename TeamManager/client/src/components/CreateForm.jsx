import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default (props) => {
  const { initialName, initialPosition,  onSubmitProp} = props;
  //keep track of what is being typed via useState hook
  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialPosition);


  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp({ name, position });
    

  };
  


  return (
    <>
      <Link to={"/"}>  Players </Link>
      <form className="form container px-5" onSubmit={onSubmitHandler}>
            <div className="d-flex align-items-center px-5 mt-4">
                <label className="form-label w-100">Player Name:</label>
                <input className="form-control" value={name} name="name"onChange={(e)=> { setName(e.target.value) }}  />
            </div>
            <div className="d-flex align-items-center px-5 mt-4">
                <label className="form-label w-100">Preferred Position:</label>
                <select className="form-control" value={position} name="position" onChange={(e)=> { setPosition(e.target.value) }}  >
                <option value="">Select one</option>
                    <option value="Forward">Forward</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                </select>
            </div>
       
            <input type="submit" className="btn btn-primary m-2" />
        <Link className="btn btn-secondary" to={"/"}>Cancel </Link>

 
        </form>
    </>
  );
};
