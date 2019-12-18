import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Stacks from "./stacks";

const getState = () => {
  const dispatch = useDispatch();

  const { pool, stack, slates, selectedSlate, view } = useSelector(state => state, shallowEqual);

  const clearStack = () => dispatch({ type: "CLEAR_STACK" });
  const addStack = () => dispatch({ type: "ADD_STACK", payload: stack });
  const removeStack = (i) => dispatch({ type: "REMOVE_STACK", payload: i });
  const addPlayerToStack = (player) => dispatch({ type: "ADD_PLAYER_TO_STACK", payload: player});
  const removePlayerFromStack = (player) => dispatch({ type: "REMOVE_PLAYER_FROM_STACK", payload: player });

  return {
    pool,
    stack,
    slate: slates[selectedSlate],
    clearStack,
    addStack,
    removeStack,
    addPlayerToStack,
    removePlayerFromStack,
    view
  }
}

const StackBuilder = () => {
  const {
    pool,
    stack,
    slate,
    clearStack,
    addStack,
    addPlayerToStack,
    removePlayerFromStack,
    view
  } = getState();

  if (view !== 'stackbuilder') {
    return null;
  }

  if (!pool.length) {
    return (
      <div>Pick players for pool first.</div>
    )
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

  const componentContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 16
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  };

  return (
    <div style={componentContainer}>
      <div>
        <h2 style={{ marginTop: 0 }}>Stack Builder</h2>
        <div style={cardContainer}>
          <Card>
            <div>
              <div style={{
                display: "flex",
                flexDirection: "row"
              }}>
                <div style={{ minWidth: 240 }}>
                  <h3>Players</h3>
                    {
                      pool && pool.map((player, i) => {
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
                <div style={{ paddingLeft: 16, minWidth: 240 }}>
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
        </div>
      </div>
      <div>
        <Stacks />
      </div>
    </div>
  );
};

export default StackBuilder;
