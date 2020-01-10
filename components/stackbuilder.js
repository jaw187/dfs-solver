import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Stacks from "./stacks";
import { log } from './utils';
import Button from '@material-ui/core/Button';

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
    log('stack add')
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

  const poolPlayer = {
    paddingLeft: 4,
    verticalAlign: 'middle',
    fontSize: 12
  };

  const playerContainer = {
    paddingBottom: 4,
    verticalAlign: 'middle'
  };

  const stackPlayer = {
    paddingLeft: 16,
    paddingBottom: 4
  }

  const stackButtons = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16
  }

  const stackButton = {
    marginRight: 16
  }

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
                          <div style={playerContainer}>
                            <label>
                              <input ref={ref} type="checkbox" onClick={togglePlayer(player)} key={i} /><span style={poolPlayer}>{player.displayName} - ${player.salary}</span>
                            </label>
                          </div>
                        )
                      })
                    }
                </div>
                <div style={{ paddingLeft: 16, minWidth: 240 }}>
                  <h3>Stack</h3>
                  {
                    stack && stack.map((player, i) => (
                      <div key={i} style={stackPlayer}>{player.displayName}</div>
                    ))
                  }
                  {
                    stack && stack.length > 1 && (
                      <div style={stackButtons}>
                        <div style={stackButton}>
                          <Button onClick={add} variant="contained" color="primary">Add</Button>
                        </div>
                        <div style={stackButton}>
                          <Button onClick={clear} variant="contained" color="secondary">Clear</Button>
                        </div>
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
