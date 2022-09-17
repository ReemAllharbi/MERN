import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteBtn from "./DeleteBtn";

const PlayerList = (props) => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayer(res.data.player));
  }, []);

  const removeFromDom = (playerId) => {
    setPlayer(player.filter((player) => player._id != playerId));
  };




    return (
        <div className="container p-5">
            <div className="d-flex">
                <h4 className="">Players List | <Link to='/players/new'> Add Player</Link></h4>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Player name</th>
                        <th>Preferred position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.player.map(a =>
                        <tr key={a._id}>
                            <td>{a.name}</td>
                            <td>{a.position}</td>
                            <td>
                            <DeleteBtn  className="btn btn-denger m-2" playerId={a._id} successCallback={() => removeFromDom(a._id)} />
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default PlayerList;


