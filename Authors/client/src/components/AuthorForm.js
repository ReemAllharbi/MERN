import React, { useState } from "react";
import { Link } from "react-router-dom";


export default (props) => {
  const { initialName, onSubmitProp} = props;
  //keep track of what is being typed via useState hook
  const [name, setName] = useState(initialName);
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp({ name });
  };
  
  return (
    <>
      <Link to={"/"}>  Home </Link>
      <form onSubmit={onSubmitHandler}>
      <div className="form-group row m-2">
        <label className="col-sm-2 col-form-label text-primary h1"> Name:</label>
          <div className="col-sm-10">    
            <input type="text" className="form-control" name="name" onChange={(e)=> { setName(e.target.value) }} value={name}/>
          </div>
         </div>
        <input type="submit" className="btn btn-primary m-2" />
        <Link className="btn btn-secondary" to={"/"}>Cancel </Link>
      </form>
    </>
  );
};
