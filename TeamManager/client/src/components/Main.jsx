import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateForm from "../components/CreateForm";
import PlayerList from "../components/PlayerList";

export default () => {
  const [player, setPlayer] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players").then((res) => {
      setPlayer(res.data);
      setLoaded(true);
    });
  }, []);

  const removeFromDom = (playerId) => {
    setPlayer(player.filter((player) => player._id != playerId));
  };

  return (
    <div>
      {loaded && <PlayerList player={player} removeFromDom={removeFromDom} />}
    </div>
  );
};
