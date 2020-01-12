import Card from './card';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Solver from "../solver/index";
import { log } from './utils';
import Generator from './generator';
import Button from '@material-ui/core/Button';

const { solve, Models, players } = Solver;

const getState = () => {
  const dispatch = useDispatch();

  const slates = useSelector(state => state.slates, shallowEqual);
  const selectedSlate = useSelector(state => state.selectedSlate);
  const results = useSelector(state => state.results);
  const view = useSelector(state => state.view);
  const stacksUsed = useSelector(state => state.stacksUsed);

  const removeLineup = (i, j) => {
    dispatch({
      type: 'REMOVE_RESULT',
      payload: { i, j }
    });
  };

  const clearLineups = () => {
    dispatch({ type: 'CLEAR_LINEUPS' });
  };

  return {
    slates,
    selectedSlate,
    results,
    view,
    removeLineup,
    stacksUsed,
    clearLineups
  };
};

const Lineups = () => {
  const {
    slates,
    selectedSlate,
    results,
    view,
    removeLineup,
    stacksUsed,
    clearLineups
  } = getState();

  if (view !== 'results') {
    return null;
  }

  // Reorganized results.  Breaking change.
  if (results.length && !(results[0].length >= 0)) {
    return 'Old state observed.  Clear session';
  }

  const slate = slates && slates[selectedSlate];
  const sport = slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate.GameType.Name.toLowerCase();

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
    },
    mma: {
      draftkings: {
        classic: (result) => {
          const { lineup: { f } } =  result;
          return `${f[0].id},${f[1].id},${f[2].id},${f[3].id},${f[4].id},${f[5].id}`;
        }
      }
    },
    nba: {
      draftkings: {
        classic: (result) => {
          const { lineup: { pg, sg, sf, pf, c, g, f, flex } } =  result;
          return `${pg.id},${sg.id},${sf.id},${pf.id},${c.id},${g.id},${f.id},${flex.id}`;
        }
      }
    }
  };

  const generateLineupString = (lineup) => {
    const ids = exporters[sport][site][type](lineup).split(',');
    ids.sort((a,b) => a > b ? 1 : -1);

    return ids.join('');
  }

  const playerCounts = {};
  const lineupStrings = [];
  results.forEach((stack) => {
    stack.forEach((result) => {
      const lineupString = generateLineupString(result);
      if (!lineupStrings.includes(lineupString)) {
        lineupStrings.push(lineupString)
        result.players.forEach((player) => {
          if (!playerCounts[player]) {
            playerCounts[player] = 0;
          }

          ++playerCounts[player];
        });
      }
    });
  });

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
    },
    mma: {
      draftkings: {
        classic: "F,F,F,F,F,F\n"
      }
    },
    nba: {
      draftkings: {
        classic: "PG,SG,SF,PF,C,G,F,FLEX\n"
      }
    }
  };

  const exportToCSV = () => {
    log('export linieups')
    const header = headers[sport][site][type];
    const lines = [];
    const exportedLines = []
    results.forEach((result) => {
      result.forEach((line) => {
        const lineupString = generateLineupString(line);
        if (!exportedLines.includes(lineupString)) {
          lines.push(line);
          exportedLines.push(lineupString)
        }
      });
    });

    const csv = "data:text/csv;charset=utf-8," + header + lines.map(exporters[sport][site][type]).join('\n');

    const { encodeURI } = window;

    const downloadLink = document.createElement("a");
    downloadLink.href = encodeURI(csv);
    downloadLink.download = `${selectedSlate} - Lineups.csv`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const remove = (i, j) => {
    log('remove lineup')
    return () => removeLineup(i, j);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 32
  };

  const lineupStyle = {
    padding: 16,
    margin: 8,
    backgroundColor: "#f3f3f3",
    border: '1px solid #DDD',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  }

  const componentContainer = {
    padding: 16
  };

  const ownership = Object.keys(playerCounts).map((player) => {
    return {
      player: formatPlayer({ id: player }),
      count: playerCounts[player],
      percentage: ((playerCounts[player] / lineupStrings.length) * 100).toFixed(0)
    }
  });

  const ownershipPlayerStyle = {
    whiteSpace: 'nowrap'
  };

  const removeButtonStyle = {
    marginTop: 16
  }

  const lineupFormats = {
    nfl: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <div>
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
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          )
        }
      }
    },
    golf: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <div>
                <div>{formatPlayer(result.lineup.g[0])}</div>
                <div>{formatPlayer(result.lineup.g[1])}</div>
                <div>{formatPlayer(result.lineup.g[2])}</div>
                <div>{formatPlayer(result.lineup.g[3])}</div>
                <div>{formatPlayer(result.lineup.g[4])}</div>
                <div>{formatPlayer(result.lineup.g[5])}</div>
              </div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          );
        }
      }
    },
    mma: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <div>
                <div>{formatPlayer(result.lineup.f[0])}</div>
                <div>{formatPlayer(result.lineup.f[1])}</div>
                <div>{formatPlayer(result.lineup.f[2])}</div>
                <div>{formatPlayer(result.lineup.f[3])}</div>
                <div>{formatPlayer(result.lineup.f[4])}</div>
                <div>{formatPlayer(result.lineup.f[5])}</div>
              </div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          );
        }
      }
    },
    nba: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <div>
                <div>{formatPlayer(result.lineup.pg)}</div>
                <div>{formatPlayer(result.lineup.sg)}</div>
                <div>{formatPlayer(result.lineup.sf)}</div>
                <div>{formatPlayer(result.lineup.pf)}</div>
                <div>{formatPlayer(result.lineup.c)}</div>
                <div>{formatPlayer(result.lineup.g)}</div>
                <div>{formatPlayer(result.lineup.f)}</div>
                <div>{formatPlayer(result.lineup.flex)}</div>
              </div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          );
        }
      }
    }
  };

  const removeAllButtonStyle = {
    marginLeft: 24
  };

  const stackHeaderStyle = {
    marginBottom: 4
  }

  const displayStack = (stack, i) => {
    return (
      <div>
        <h5 style={stackHeaderStyle}>{ stack.map((player) => player.displayName).join(' - ') }</h5>
        <div style={containerStyle}>
          {
            results[i] && results[i].map(lineupFormats[sport][site][type](i))
          }
        </div>
      </div>
    );
  };

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Lineups</h2>
      <div style={cardContainer}>
        <Generator />
      </div>
      { results && results.length > 0 && (
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
                  <h3 style={{marginTop: 0 }}>Your Lineups</h3>
                  <Button onClick={exportToCSV} variant="contained" color="primary">Export</Button>
                  <Button onClick={clearLineups} variant="contained" color="secondary" style={removeAllButtonStyle}>Remove All</Button>
                  <h4>{lineupStrings.length} unique results</h4>
                  { stacksUsed && stacksUsed.map(displayStack) }
                </div>
              )
            }
          </Card>
        </div>
      )}
    </div>
  );
};

export default Lineups;
