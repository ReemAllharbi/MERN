import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteBtn from "./DeleteBtn";

const PetList = (props) => {
  const [pet, setPet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => setPet(res.data.pet));
  }, []);





    return (
        <div className="container p-5">
            <div className="d-flex">
                <h4 className=""> <Link to='/pets/new'> Add a pet to the shelter</Link></h4>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {props.pet.map(a =>
                        <tr key={a._id}>
                            <td>{a.name}</td>
                            <td>{a.type}</td>
                            <td>
                            <Link className="btn btn-info m-2" to={"/pets/" + a._id + "/edit"} > Edit </Link> |
                            <Link className="btn btn-info m-2" to={"/pets/" + a._id } > Details </Link>


                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default PetList;


