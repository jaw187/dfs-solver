import Card from './card';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Solver from "../solver/index";
import OwnershipWatcher from '../solver/ownership';

const { solve, Models, players } = Solver;

const getState = () => {
  const dispatch = useDispatch();

  const slates = useSelector(state => state.slates, shallowEqual);
  const selectedSlate = useSelector(state => state.selectedSlate);
  const projection = useSelector(state => state.projection);
  const results = useSelector(state => state.results);
  const view = useSelector(state => state.view);

  const removeLineup = (i) => {
    dispatch({
      type: 'REMOVE_RESULT',
      payload: i
    });
  };

  return {
    slates,
    selectedSlate,
    projection,
    results,
    view,
    removeLineup
  };
};

const Lineups = () => {
  const {
    slates,
    selectedSlate,
    projection,
    results,
    view,
    removeLineup
  } = getState();

  if (view !== 'results') {
    return null;
  }

  if (results.length === 0) {
    return (<div>Generate some lineups</div>);
  }

  const slate = slates && slates[selectedSlate];
  const sport = slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate.GameType.Name.toLowerCase();

  const formatPlayer = (lineupPlayer) => {
    const player = slate.players.find((player) => player.draftableId == lineupPlayer.id);
    if (!player) {
      return lineupPlayer.id;
    }

    return `${player.position} - ${player.displayName} - $${player.salary}`;
  };

  const headers = {
    nfl: {
      draftkings: {
        classic: "QB,RB,RB,WR,WR,WR,TE,FLEX,DST\n"
      }
    },
    golf: {
      draftkings: {
        classic: "G,G,G,G,G,G\n"
      }
    }
  };

  const exporters = {
    nfl: {
      draftkings: {
        classic: (result) => {
          const { lineup: { qb, rbs, wrs, te, flex, dst } } = result;
          return `${qb.id},${rbs[0].id},${rbs[1].id},${wrs[0].id},${wrs[1].id},${wrs[2].id},${te.id},${flex.id},${dst.id}`
        }
      }
    },
    golf: {
      draftkings: {
        classic: (result) => {
          const { lineup: { g } } =  result;
          return `${g[0].id},${g[1].id},${g[2].id},${g[3].id},${g[4].id},${g[5].id}`;
        }
      }
    }
  };

  const exportToCSV = () => {
    const header = headers[sport][site][type];
    const csv = "data:text/csv;charset=utf-8," + header + results.map(exporters[sport][site][type]).join('\n');

    const { encodeURI } = window;
    const { createElement, body } = document

    const downloadLink = createElement("a");
    downloadLink.href = encodeURI(csv);
    downloadLink.download = `${selectedSlate} - Lineups.csv`;
    body.appendChild(downloadLink);
    downloadLink.click();
    body.removeChild(downloadLink);
  };

  const remove = (i) => {
    return () => removeLineup(i);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };

  const lineupStyle = {
    padding: 16,
    margin: 8,
    backgroundColor: "#f3f3f3",
    border: '1px solid #DDD',
    fontSize: 12
  }

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  }

  const componentContainer = {
    padding: 16
  };

  const playerCounts = {};
  results.forEach((result) => {
    result.players.forEach((player) => {
      if (!playerCounts[player]) {
        playerCounts[player] = 0;
      }

      ++playerCounts[player];
    });
  });

  const ownership = Object.keys(playerCounts).map((player) => {
    return {
      player: formatPlayer({ id: player }),
      count: playerCounts[player],
      percentage: ((playerCounts[player] / results.length) * 100).toFixed(0)
    }
  });

  const ownershipPlayerStyle = {
    whiteSpace: 'nowrap'
  }

  const lineupFormats = {
    nfl: {
      draftkings: {
        classic: (result, i) => (
          <div key={i} style={lineupStyle}>
            <button onClick={remove(i)}>Remove</button>
            <div>{formatPlayer(result.lineup.qb)}</div>
            <div>{formatPlayer(result.lineup.rbs[0])}</div>
            <div>{formatPlayer(result.lineup.rbs[1])}</div>
            <div>{formatPlayer(result.lineup.wrs[0])}</div>
            <div>{formatPlayer(result.lineup.wrs[1])}</div>
            <div>{formatPlayer(result.lineup.wrs[2])}</div>
            <div>{formatPlayer(result.lineup.te)}</div>
            <div>{formatPlayer(result.lineup.flex)}</div>
            <div>{formatPlayer(result.lineup.dst)}</div>
          </div>
        )
      }
    },
    golf: {
      draftkings: {
        classic: (result, i) => (
          <div key={i} style={lineupStyle}>
            <button onClick={remove(i)}>Remove</button>
            <div>{formatPlayer(result.lineup.g[0])}</div>
            <div>{formatPlayer(result.lineup.g[1])}</div>
            <div>{formatPlayer(result.lineup.g[2])}</div>
            <div>{formatPlayer(result.lineup.g[3])}</div>
            <div>{formatPlayer(result.lineup.g[4])}</div>
            <div>{formatPlayer(result.lineup.g[5])}</div>
          </div>
        )
      }
    }
  };

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Lineups</h2>
      <div style={cardContainer}>
        <Card>
          <h3 style={{ marginTop: 0 }}>Ownership</h3>
          {
            !!ownership.length && (
              <div>
                {
                  ownership.map((data) => (
                    <div style={ownershipPlayerStyle}>
                      {data.player} - {data.count} - {data.percentage}%
                    </div>
                  ))
                }
              </div>
            )
          }
        </Card>
        <Card>
          {
            !!results.length && (
              <div>
                <h3 style={{marginTop: 0 }}>{results.length} lineups</h3>
                <button onClick={exportToCSV}>Export</button>
                <div style={containerStyle}>
                  {
                    results.map(lineupFormats[sport][site][type])
                  }
                </div>
              </div>
            )
          }
        </Card>
      </div>
    </div>
  );
};

export default Lineups;
