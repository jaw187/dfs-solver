import React from "react";
import Card from "./card"
import { useSelector, shallowEqual } from "react-redux";

const PlayerList = () => {
  const { slates, selectedSlate } = useSelector(state => state, shallowEqual);
  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return null;
  }


  return (
    <Card>
      <div>
        <h3>Players</h3>
        <p>{slate.Sport} - {slate.GameType.Name}</p>
        <h4>Players</h4>
        <ul>
          {
            slate && slate.players && slate.players.map((player, i) => (
              <li key={i}>{player.displayName} - ${player.salary}</li>
            ))
          }
        </ul>
      </div>
    </Card>
  );
};

export default PlayerList;
