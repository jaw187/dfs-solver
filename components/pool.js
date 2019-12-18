import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';


const getState = () => {
  const dispatch = useDispatch();

  const { slates, selectedSlate, pool, view, projection } = useSelector(state => state, shallowEqual);

  const addPlayerToPool = (player) => dispatch({ type: "ADD_PLAYER_TO_POOL", payload: player});
  const removePlayerFromPool = (player) => dispatch({ type: "REMOVE_PLAYER_FROM_POOL", payload: player });

  return {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool,
    view,
    projection
  }
}

const Pool = () => {
  const {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool,
    view,
    projection
  } = getState();

  if (view !== 'playerpool') {
    return null;
  }

  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return (
      <div>Pick a slate first</div>
    )
  }

  const poolPositions = {};
  slate.players.forEach((player) => {
    const positions = player.position.split('/');
    positions.forEach((position) => {
      if (!poolPositions[position]) {
        poolPositions[position] = [];
      }

      poolPositions[position].push(player);
    });
  });

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

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  }

  const componentContainer = {
    padding: 16
  };

  const positionCard = (which) => {
    const players = poolPositions[which];
    const playerContainerStyle = {
      whiteSpace: 'nowrap',
      fontSize: 12
    };

    const missingProjectionStyle = {
      ...playerContainerStyle,
      color: 'red'
    };

    const checkboxStyle = {
      marginRight: 8
    };

    return (
      <Card>
        <h3 style={{ marginTop: 0 }}>{which.toUpperCase()}</h3>
        {
          players && players.map((player, i) => {
            const ref = React.createRef();
            checkboxes.push(ref);

            const hasProjection = projection && projection.filter((row) => row.player == player.draftableId).length === 1;
            const style = hasProjection ? playerContainerStyle : missingProjectionStyle;

            const inPool = pool && !!pool.find((poolPlayer) => player.playerId === poolPlayer.playerId);
            return (
              <div style={style} key={i}>
                <label>
                  <input ref={ref} style={checkboxStyle} type="checkbox" onClick={togglePlayer(player)} checked={inPool} />{player.displayName} - ${player.salary}
                </label>
              </div>
            )
          })
        }
      </Card>
    );
  }

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Player Pool</h2>
      <div style={cardContainer}>
        { positionCard("QB") }
        { positionCard("RB") }
        { positionCard("WR") }
        { positionCard("TE") }
        { positionCard("DST") }

        <Card>
          <div>
            <div style={{
              display: "flex",
              flexDirection: "row"
            }}>
              <div>
                <h3>Pool</h3>
                <ul>

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
      </div>
    </div>
  );
};

export default Pool;
