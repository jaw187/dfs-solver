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

  const slate = slates && slates[selectedSlate]

  const formatPlayer = (lineupPlayer) => {
    const player = slate.players.find((player) => player.draftableId == lineupPlayer.id);
    if (!player) {
      return lineupPlayer.id;
    }

    return `${player.position} - ${player.displayName} - $${player.salary}`;
  }

  const exportToCSV = () => {
    const header = "QB,RB,RB,WR,WR,WR,TE,FLEX,DST\n";
    const csv = "data:text/csv;charset=utf-8," + header + results.map(result => {
      const lineup = result.lineup;
      return `${lineup.qb.id},${lineup.rbs[0].id},${lineup.rbs[1].id},${lineup.wrs[0].id},${lineup.wrs[1].id},${lineup.wrs[2].id},${lineup.te.id},${lineup.flex.id},${lineup.dst.id}`
    }).join('\n');
    const { encodeURI, open } = window;
    open(encodeURI(csv));
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

  console.log('ownership', ownership)
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
                    results.map((result, i) => (
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
                    ))
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
