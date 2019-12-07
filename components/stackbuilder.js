import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const getState = () => {
  const dispatch = useDispatch();

  const { slates, selectedSlate, stack } = useSelector(state => state, shallowEqual);

  const clearStack = () => dispatch({ type: "CLEAR_STACK" });
  const addStack = () => dispatch({ type: "ADD_STACK", payload: stack });
  const removeStack = (i) => dispatch({ type: "REMOVE_STACK", payload: i });
  const addPlayerToStack = (player) => dispatch({ type: "ADD_PLAYER_TO_STACK", payload: player});
  const removePlayerFromStack = (player) => dispatch({ type: "REMOVE_PLAYER_FROM_STACK", payload: player });

  return {
    slates,
    selectedSlate,
    stack,
    clearStack,
    addStack,
    removeStack,
    addPlayerToStack,
    removePlayerFromStack
  }
}

const StackBuilder = () => {
  const {
    slates,
    selectedSlate,
    stack,
    clearStack,
    addStack,
    addPlayerToStack,
    removePlayerFromStack
  } = getState();

  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return null;
  }

  const togglePlayer = (player) => {
    return () => {
      const inStack = stack && !!stack.find((stackPlayer) => player.playerId === stackPlayer.playerId)
      if (inStack) {
        return removePlayerFromStack(player);
      }

      addPlayerToStack(player);
    };
  };

  const checkboxes = [];

  const clear = () => {
    checkboxes.forEach((checkbox) => {
      checkbox.current.checked = false;
    });
    clearStack();
  };

  const add = () => {
    addStack();
    clear();
  };

  return (
    <Card>
      <div>
        <h2 style={{ marginTop: 0 }}>Stack Builder</h2>
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
            <h3>Stack</h3>
            <ul>
              {
                stack && stack.map((player, i) => (
                  <li key={i}>{player.displayName}</li>
                ))
              }
            </ul>
            {
              stack && stack.length > 1 && (
                <div>
                  <button onClick={add}>Add</button>
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

export default StackBuilder;
