import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Stacks from "./stacks";
import { log } from './utils';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const getState = () => {
  const dispatch = useDispatch();

  const { pool, stack, slates, selectedSlate, view, stackBuilderGame } = useSelector(state => state, shallowEqual);

  const clearStack = () => dispatch({ type: "CLEAR_STACK" });
  const addStack = () => dispatch({ type: "ADD_STACK", payload: stack });
  const removeStack = (i) => dispatch({ type: "REMOVE_STACK", payload: i });
  const addPlayerToStack = (player) => dispatch({ type: "ADD_PLAYER_TO_STACK", payload: player});
  const removePlayerFromStack = (player) => dispatch({ type: "REMOVE_PLAYER_FROM_STACK", payload: player });
  const setStackBuilderGame = (competitionId) => dispatch({ type: "SET_STACK_BUILDER_GAME", payload: competitionId });
  const clearStackBuilderGame = () => dispatch({ type: "CLEAR_STACK_BUILDER_GAME" });

  return {
    pool,
    stack,
    slate: slates[selectedSlate],
    clearStack,
    addStack,
    removeStack,
    addPlayerToStack,
    removePlayerFromStack,
    view,
    stackBuilderGame,
    setStackBuilderGame,
    clearStackBuilderGame
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
    view,
    stackBuilderGame,
    setStackBuilderGame,
    clearStackBuilderGame
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
  };

  const selectStackBuilderGame = (event) => {
    const { value } = event.target;
    if (value === null) {
      return clearStackBuilderGame();
    }

    return setStackBuilderGame(value);
  };

  const filterPlayers = (container) => {
    if (stackBuilderGame) {
      if (container.player.competition.competitionId !== stackBuilderGame) {
        return false;
      }
    }

    return true;
  };

  const isPlayerInStack = (player) => {
    return !!(stack && stack.find((stackPlayer) => player.playerId === stackPlayer.playerId));
  };

  const displayPoolPlayer = (player, ref, i) => (
    <div style={playerContainer}>
      <label>
        <input ref={ref} type="checkbox" onChange={togglePlayer(player)} key={i} checked={isPlayerInStack(player)} /><span style={poolPlayer}>{player.displayName} - ${player.salary}</span>
      </label>
    </div>
  );

  const poolDisplayItems = pool.map((player, i) => {
    const ref = React.createRef();
    checkboxes.push(ref);

    return {
      player,
      container: displayPoolPlayer(player, ref, i)
    };
  });

  return (
    <div style={componentContainer}>
      <div>
        <h2 style={{ marginTop: 0 }}>Stack Builder</h2>
        <div style={cardContainer}>
          <Card>
            <h3 style={{ marginTop: 0 }}>Filters</h3>
            <FormControl style={{ minWidth: 120,  }}>
              <InputLabel id="select-label">Games</InputLabel>
              <Select labelId="select-label" onChange={selectStackBuilderGame} value={stackBuilderGame}>
              {
                slate.competitions && slate.competitions.map((competition, i) => (
                  <MenuItem value={competition.competitionId} key={i}>{competition.name}</MenuItem>
                ))
              }
                <MenuItem value={null} selected={true}>ALL</MenuItem>
              </Select>
            </FormControl>
          </Card>
        </div>
        <div style={cardContainer}>
          <Card>
            <div>
              <div style={{
                display: "flex",
                flexDirection: "row"
              }}>
                <div style={{ minWidth: 240 }}>
                  <h3 style={{ marginTop: 0 }}>Players</h3>
                    {
                      poolDisplayItems && poolDisplayItems.filter(filterPlayers).map(({ container }) => container)
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
