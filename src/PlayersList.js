import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "50px" }}>
      <h1>THE list Players: </h1>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
