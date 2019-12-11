import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const getState = () => {
  const dispatch = useDispatch();

  const { slates, selectedSlate, pool } = useSelector(state => state, shallowEqual);

  const addPlayerToPool = (player) => dispatch({ type: "ADD_PLAYER_TO_POOL", payload: player});
  const removePlayerFromPool = (player) => dispatch({ type: "REMOVE_PLAYER_FROM_POOL", payload: player });

  return {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool
  }
}

const Pool = () => {
  const {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool
  } = getState();

  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return null;
  }

  const togglePlayer = (player) => {
    return () => {
      const inPool = pool && !!pool.find((poolPlayer) => player.playerId === poolPlayer.playerId);

      if (inPool) {
        return removePlayerFromPool(player);
      }

      addPlayerToPool(player);
    };
  };

  const checkboxes = [];

  const clear = () => {
    checkboxes.forEach((checkbox) => {
      checkbox.current.checked = false;
    });
    clearPool();
  };

  return (
    <Card>
      <div>
        <h2 style={{ marginTop: 0 }}>Player Pool</h2>
        <p>{slate.Sport} - {slate.GameType.Name}</p>
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div>
            <h3>Players</h3>
              {
                slate && slate.players && slate.players.map((player, i) => {
                  const ref = React.createRef();
                  checkboxes.push(ref);

                  return (
                    <div>
                      <input ref={ref} type="checkbox" onClick={togglePlayer(player)} key={i} />{player.displayName} - ${player.salary}
                    </div>
                  )
                })
              }
          </div>
          <div>
            <h3>Pool</h3>
            <ul>
              {
                pool && pool.map((player, i) => (
                  <li key={i}>{player.displayName}</li>
                ))
              }
            </ul>
            {
              pool && pool.length > 1 && (
                <div>
                  <button onClick={clear}>Clear</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Pool;
