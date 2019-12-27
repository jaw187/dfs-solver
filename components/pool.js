import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Collapse from '@material-ui/core/Collapse';


const getState = () => {
  const dispatch = useDispatch();

  const { slates, selectedSlate, pool, view, projection, poolSalaryRange, showPoolTools } = useSelector(state => state, shallowEqual);

  const addPlayerToPool = (player) => dispatch({ type: "ADD_PLAYER_TO_POOL", payload: player});
  const removePlayerFromPool = (player) => dispatch({ type: "REMOVE_PLAYER_FROM_POOL", payload: player });
  const clearPool = () => dispatch({ type: "CLEAR_POOL" });
  const setPoolSalaryRange = (range) => dispatch({ type: "SET_POOL_SALARY_RANGE", payload: range });
  const togglePoolTools = () => dispatch({ type: "TOGGLE_POOL_TOOLS"});

  return {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool,
    view,
    projection,
    clearPool,
    setPoolSalaryRange,
    poolSalaryRange,
    showPoolTools,
    togglePoolTools
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
    projection,
    clearPool,
    setPoolSalaryRange,
    poolSalaryRange = [2500,13000],
    showPoolTools,
    togglePoolTools
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
  };

  const games = slate;
  const valuetext = (value) => {
    return `$${value}`;
  };

  const setRange = (event, range) => {
    setPoolSalaryRange(range)
  }

  const marks = [
    {
      value: 3000,
      label: '$3,000'
    },
    {
      value: 5500,
      label: '$5,500'
    },
    {
      value: 10000,
      label: '$10,000'
    }
  ];

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Player Pool</h2>
        {
          showPoolTools && (
            <div style={cardContainer}>
              <Card>
                <h3 style={{ marginTop: 0 }}>Filters</h3>
                <FormControl style={{ minWidth: 120,  }}>
                  <InputLabel id="select-label">Games</InputLabel>
                  <Select labelId="select-label">
                  {
      console.log(slate)
                  }
                    <MenuItem value="foo">BAR</MenuItem>
                  </Select>
                </FormControl>

                <div style={{ marginTop: 48, minWidth: 240 }}>
                  Salary range
                  <Slider
                    value={poolSalaryRange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    onChange={setRange}
                    min={2500}
                    max={13000}
                    step={100}
                    marks={marks}
                  />
                </div>
              </Card>
              <Card>
                <h3 style={{ marginTop: 0 }}>Clear</h3>
                <div>
                  <Button variant="contained" color="secondary" onClick={clear}>Remove All Players From Pool</Button>
                </div>
                <h3>Hide</h3>
                <Button variant="contained" color="primary" onClick={togglePoolTools}>Hide Tools</Button>
              </Card>

            </div>
          )
        }

        {
          !showPoolTools && (
            <div style={cardContainer}>
              <Card>
                <h3 style={{ marginTop: 0 }}>Tools</h3>
                <Button variant="contained" color="primary" onClick={togglePoolTools}>Show Tools</Button>
              </Card>
            </div>
          )
        }
      <div style={cardContainer}>
        { positionCard("QB") }
        { positionCard("RB") }
        { positionCard("WR") }
        { positionCard("TE") }
        { positionCard("DST") }
      </div>
    </div>
  );
};

export default Pool;
