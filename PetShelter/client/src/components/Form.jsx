import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const {
    initialName,
    initialType,
    initialDescription,
    initialSkill1,
    initialSkill2,
    initialSkill3,
    onSubmitProp,
  } = props;
  //keep track of what is being typed via useState hook
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setlDescription] = useState(initialDescription);
  const [skill1, setSkill1] = useState(initialSkill1);
  const [skill2, setSkill2] = useState(initialSkill2);
  const [skill3, setSkill3] = useState(initialSkill3);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp({ name, type, description, skill1, skill2, skill3 });
  };

  return (
    <>
      <Link to={"/"}> Back to home </Link>

      <form className="form container px-5 " onSubmit={onSubmitHandler}>
        <div className="contenr">
          <div className="box box1">
            <div>
              <label className="form-label w-100">Pet Name:</label>
              <input
                className="form-control"
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="form-label w-100">Pet Type:</label>
              <input
                className="form-control"
                value={type}
                name="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="form-label w-100">Pet Description:</label>
              <input
                className="form-control"
                value={description}
                name="description"
                onChange={(e) => {
                  setlDescription(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="box box2">
            <div>
              <h5 className="form-label w-100">Skills (Optinal):</h5>
              <label className="form-label w-100">Skill 1:</label>
              <input
                className="form-control"
                value={skill1}
                name="skill1"
                onChange={(e) => {
                  setSkill1(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="form-label w-100">Skill 2:</label>
              <input
                className="form-control"
                value={skill2}
                name="skill2"
                onChange={(e) => {
                  setSkill2(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="form-label w-100">Skill 3:</label>
              <input
                className="form-control"
                value={skill3}
                name="skill3"
                onChange={(e) => {
                  setSkill3(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary m-2" />
        <Link className="btn btn-secondary" to={"/"}>
          Cancel{" "}
        </Link>
      </form>
    </>
  );
};
