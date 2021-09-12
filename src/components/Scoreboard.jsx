import { useState } from "react";
import Player from "./Player";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Violeta",
      score: 11
    },
    {
      id: 2,
      name: "Eszter",
      score: 14
    },
    {
      id: 3,
      name: "Jeroen",
      score: 4
    },
    {
      id: 4,
      name: "Lisa",
      score: 42
    }
  ]);

  const sortedPlayers = [...players].sort((playerA, playerB) => {
    return playerB.score - playerA.score;
  });

  return (
    <div className="scoreboard">
      <h3>Players score</h3>
      {sortedPlayers.map((player, index) => (
        <Player
          key={index}
          id={player.id}
          name={player.name}
          score={player.score}
        />
      ))}
    </div>
  );
};

export default Scoreboard;
