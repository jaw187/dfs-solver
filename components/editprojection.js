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
import players from "../solver/players";
import { log } from './utils';


const getState = () => {
  const dispatch = useDispatch();

  const { slates, selectedSlate, view, projection, editProjectionsSalaryRange, showEditProjectionsTools, editProjectionsGame } = useSelector(state => state, shallowEqual);

  const clearProjections = () => dispatch({ type: "CLEAR_PROJECTIONS" });
  const setEditProjectionsSalaryRange = (range) => dispatch({ type: "SET_EDIT_PROJECTIONS_SALARY_RANGE", payload: range });
  const toggleEditProjectionTools = () => dispatch({ type: "TOGGLE_EDIT_PROJECTIONS_TOOLS"});
  const setEditProjectionsGame = (competitionId) => dispatch({ type: "SET_EDIT_PROJECTIONS_GAME", payload: competitionId });
  const clearEditProjectionsGame = () => dispatch({ type: "CLEAR_EDIT_PROJECTIONS_GAME" });
  const setPlayerProjection = (player, value, ownership) => dispatch({ type: "SET_PLAYER_PROJECTION", payload: { player, value, ownership } });
  const redirectToImport = (selected) => { dispatch({ type: 'SET_VIEW', payload: 'importprojections' });
  };

  return {
    slates,
    selectedSlate,
    view,
    projection,
    clearProjections,
    setEditProjectionsSalaryRange,
    editProjectionsSalaryRange,
    showEditProjectionsTools,
    toggleEditProjectionTools,
    setEditProjectionsGame,
    editProjectionsGame,
    clearEditProjectionsGame,
    setPlayerProjection,
    redirectToImport
  }
}

const EditProjections = () => {
  const {
    slates,
    selectedSlate,
    view,
    projection,
    setEditProjectionsSalaryRange,
    editProjectionsSalaryRange = [2500,13000],
    showEditProjectionsTools,
    toggleEditProjectionTools,
    setEditProjectionsGame,
    editProjectionsGame,
    clearEditProjectionsGame,
    setPlayerProjection,
    redirectToImport
  } = getState();

  if (view !== 'editprojections') {
    return null;
  }

  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return (
      <div>Pick a slate first</div>
    )
  }

  if (!projection || projection.length < 1) {
    redirectToImport();
  }

  const editProjectionsPositions = {};
  slate.players.forEach((player) => {
    const positions = player.position.split('/');
    positions.forEach((position) => {
      if (!editProjectionsPositions[position]) {
        editProjectionsPositions[position] = [];
      }

      editProjectionsPositions[position].push(player);
    });
  });

  const clear = () => {
    log('reset all player projections');
    slate.players.forEach((player) => setPlayerProjection(player.draftableId, 0, 100))
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  }

  const componentContainer = {
    padding: 16
  };

  const generatePositionCard = (which, players) => {
    const playerContainerStyle = {
      whiteSpace: 'nowrap',
      fontSize: 12
    };

    const playerProjectionStyle = {
      textAlign: 'center',
      fontWeight: 700
    }

    const tableHeaderStyle = {
      textAlign: 'left'
    };

    const filterPlayers = (player, i) => {
      if (editProjectionsGame) {
        if (player.competition.competitionId !== editProjectionsGame) {
          return false;
        }
      }

      if (player.salary < editProjectionsSalaryRange[0] || player.salary > editProjectionsSalaryRange[1]) {
        return false;
      }

      return true;
    };

    return (
      <Card>
        <h3 style={{ marginTop: 0 }}>{which.toUpperCase()}</h3>
        <table>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Player</th>
              <th style={tableHeaderStyle}>Salary</th>
              <th style={tableHeaderStyle}>Proj</th>
              <th style={tableHeaderStyle}>Ownership</th>
            </tr>
          </thead>
          {
            players.filter(filterPlayers).map((player, i) => {
              const playerProjection = projection && projection.filter((row) => row.player == player.draftableId)[0];

              const updateProjection = (e) => {
                log('update player projection');
                setPlayerProjection(player.draftableId, Number(e.target.value), playerProjection.ownership);
              };

              const updateOwnership = (e) => {
                log('update player ownership');
                setPlayerProjection(player.draftableId, playerProjection.value, Number(e.target.value));
              };

              const textboxStyle = {
                padding: 4,
                width: 20,
                textAlign: 'center'
              };

              return (
                <tr style={playerContainerStyle} key={i}>
                  <td>{player.displayName}</td>
                  <td>${player.salary}</td>
                  <td style={playerProjectionStyle}><input style={textboxStyle} type="text" onChange={updateProjection} value={playerProjection && playerProjection.value} /></td>
                  <td style={playerProjectionStyle}><input style={textboxStyle} type="text" onChange={updateOwnership} value={playerProjection && playerProjection.ownership} /></td>
                </tr>
              )
            })
          }
        </table>
      </Card>
    );
  }

  const positionCard = (which) => {
    const players = editProjectionsPositions[which];
    if (!players) {
      return null;
    }

    const singlePositions = ['G'];

    if (singlePositions.includes(which)) {
      const splitPlayers = [];
      players.forEach((player, i) => {
        const j = Math.floor(i/40);
        if (!splitPlayers[j]) {
          splitPlayers[j] = [];
        }

        splitPlayers[j].push(player);
      });

      return (
        <div style={cardContainer}>
          { splitPlayers.map((split) => generatePositionCard(which, split)) }
        </div>
      );
    }

    return generatePositionCard(which, players);
  };

  const games = slate;
  const valuetext = (value) => {
    return `$${value}`;
  };

  const setRange = (event, range) => {
    setEditProjectionsSalaryRange(range)
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

  const selectEditProjectionsGame = (event) => {
    const { value } = event.target;
    if (value === null) {
      return clearEditProjectionsGame();
    }

    return setEditProjectionsGame(value);
  }

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Edit Projections</h2>
        {
          showEditProjectionsTools && (
            <div style={cardContainer}>
              <Card>
                <h3 style={{ marginTop: 0 }}>Filters</h3>
                <FormControl style={{ minWidth: 120,  }}>
                  <InputLabel id="select-label">Games</InputLabel>
                  <Select labelId="select-label" onChange={selectEditProjectionsGame} value={editProjectionsGame}>
                  {
                    slate.competitions && slate.competitions.map((competition, i) => (
                      <MenuItem value={competition.competitionId} key={i}>{competition.name}</MenuItem>
                    ))
                  }
                    <MenuItem value={null} selected={true}>ALL</MenuItem>
                  </Select>
                </FormControl>

                <div style={{ marginTop: 48, minWidth: 240 }}>
                  Salary range
                  <Slider
                    value={editProjectionsSalaryRange}
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
                <h3>Clear</h3>
                <div>
                  <Button variant="contained" color="secondary" onClick={clear}>Clear Projections</Button>
                </div>
                <h3>Import</h3>
                <div>
                  <Button variant="contained" color="secondary" onClick={redirectToImport}>Import Projections</Button>
                </div>
                <h3>Hide</h3>
                <Button variant="contained" color="primary" onClick={toggleEditProjectionTools}>Hide Tools</Button>
              </Card>

            </div>
          )
        }

        {
          !showEditProjectionsTools && (
            <div style={cardContainer}>
              <Card>
                <h3 style={{ marginTop: 0 }}>Tools</h3>
                <Button variant="contained" color="primary" onClick={toggleEditProjectionTools}>Show Tools</Button>
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

        { positionCard("G") }

        { positionCard("F") }

        { positionCard("PG") }
        { positionCard("SG") }
        { positionCard("SF") }
        { positionCard("PF") }
        { positionCard("C") }

        { positionCard("D") }
      </div>
    </div>
  );
};

export default EditProjections;
