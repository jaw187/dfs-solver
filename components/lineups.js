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
  const projection = useSelector(state => state.projection);

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
    clearLineups,
    projection
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
    clearLineups,
    projection
  } = getState();

  if (view !== 'results') {
    return null;
  }

  // Reorganized results.  Breaking change.
  if (results.length && !results[0].stack) {
    return 'Old state observed.  Clear session';
  }

  const slate = slates && slates[selectedSlate];
  const sport = slate && slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate && slate.GameType.Name.toLowerCase();

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
    },
    xfl: {
      draftkings: {
        classic: (result) => {
          const { lineup: { qb, rb, wrs, flexes, dst } } = result;
          return `${qb.id},${rb.id},${wrs[0].id},${wrs[1].id},${flexes[0].id},${flexes[1].id},${dst.id}`;
        }
      }
    },
    nas: {
      draftkings: {
        classic: (result) => {
          const { lineup: { d } } = result;
          return `${d[0].id},${d[1].id},${d[2].id},${d[3].id},${d[4].id},${d[5].id}`;
        }
      }
    },
    mlb: {
      draftkings: {
        classic: (result) => {
          const { lineup } = result;
          return `${lineup.p[0].id},${lineup.p[1].id},${lineup.c.id},${lineup['1b'].id},${lineup['2b'].id},${lineup['3b'].id},${lineup.ss.id},${lineup.of[0].id},${lineup.of[1].id},${lineup.of[2].id}}`;
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
    stack.results.forEach((result) => {
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

  const projectionStyle = {
    fontWeight: 700,
    textAlign: 'center'
  };

  const ownershipDataStyle = {
    textAlign: 'center'
  };

  const formatPlayer = ({ id, data }) => {
    const player = slate.players.find((player) => player.draftableId == id);
    if (!player) {
      return id;
    }

    const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const playerProjection = Math.round(projection.filter((projectionPlayer) => projectionPlayer.player == id)[0].value);
    return (
      <tr>
        <td>{player.position}</td>
        <td>{player.displayName}</td>
        <td>${numberWithCommas(player.salary)}</td>
        <td style={projectionStyle}>{playerProjection}</td>
        { data && (
          <td style={ownershipDataStyle}>{data.count}</td>
        )}
        {data && (
          <td style={ownershipDataStyle}>{data.percentage}%</td>
        )}
      </tr>
    );
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
        classic: "PG,SG,SF,PF,C,G,F,UTIL\n"
      }
    },
    xfl: {
      draftkings: {
        classic: "QB,RB,WR,WR,FLEX,FLEX,DST\n"
      }
    },
    nas: {
      draftkings: {
        classic: "D,D,D,D,D,D\n"
      }
    },
    mlb: {
      draftkings: {
        classic: "P,P,C,1B,2B,3B,SS,OF,OF,OF\N"
      }
    }
  };

  const exportToCSV = () => {
    log('export linieups')
    const header = headers[sport][site][type];
    const lines = [];
    const exportedLines = []
    results.forEach((stack) => {
      stack.results.forEach((line) => {
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
    const data = {
      count: playerCounts[player],
      percentage: ((playerCounts[player] / lineupStrings.length) * 100).toFixed(0)
    };

    return formatPlayer({ id: player, data })
  });

  const ownershipPlayerStyle = {
    whiteSpace: 'nowrap'
  };

  const removeButtonStyle = {
    marginTop: 16
  }

  const lineupTotalStyle = {
    paddingTop: 8,
    display: 'flex',
    fontSize: 18,
    justifyContent: 'center',
    fontWeight: 700
  };

  const tableHeaderStyle = {
    textAlign: 'left'
  };

  const lineupFormats = {
    nfl: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.qb)}
                {formatPlayer(result.lineup.rbs[0])}
                {formatPlayer(result.lineup.rbs[1])}
                {formatPlayer(result.lineup.wrs[0])}
                {formatPlayer(result.lineup.wrs[1])}
                {formatPlayer(result.lineup.wrs[2])}
                {formatPlayer(result.lineup.te)}
                {formatPlayer(result.lineup.flex)}
                {formatPlayer(result.lineup.dst)}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
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
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.g[0])}
                {formatPlayer(result.lineup.g[1])}
                {formatPlayer(result.lineup.g[2])}
                {formatPlayer(result.lineup.g[3])}
                {formatPlayer(result.lineup.g[4])}
                {formatPlayer(result.lineup.g[5])}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
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
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.f[0])}
                {formatPlayer(result.lineup.f[1])}
                {formatPlayer(result.lineup.f[2])}
                {formatPlayer(result.lineup.f[3])}
                {formatPlayer(result.lineup.f[4])}
                {formatPlayer(result.lineup.f[5])}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
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
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.pg)}
                {formatPlayer(result.lineup.sg)}
                {formatPlayer(result.lineup.sf)}
                {formatPlayer(result.lineup.pf)}
                {formatPlayer(result.lineup.c)}
                {formatPlayer(result.lineup.g)}
                {formatPlayer(result.lineup.f)}
                {formatPlayer(result.lineup.flex)}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          );
        }
      }
    },
    xfl: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.qb)}
                {formatPlayer(result.lineup.rb)}
                {formatPlayer(result.lineup.wrs[0])}
                {formatPlayer(result.lineup.wrs[1])}
                {formatPlayer(result.lineup.flexes[0])}
                {formatPlayer(result.lineup.flexes[1])}
                {formatPlayer(result.lineup.dst)}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          )
        }
      }
    },
    nas: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.d[0])}
                {formatPlayer(result.lineup.d[1])}
                {formatPlayer(result.lineup.d[2])}
                {formatPlayer(result.lineup.d[3])}
                {formatPlayer(result.lineup.d[4])}
                {formatPlayer(result.lineup.d[5])}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          );
        }
      }
    },
    mlb: {
      draftkings: {
        classic: (i) => {
          return (result, j) => (
            <div key={j} style={lineupStyle}>
              <table>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Pos</th>
                    <th style={tableHeaderStyle}>Player</th>
                    <th style={tableHeaderStyle}>Salary</th>
                    <th style={tableHeaderStyle}>Proj</th>
                  </tr>
                </thead>
                {formatPlayer(result.lineup.p[0])}
                {formatPlayer(result.lineup.p[1])}
                {formatPlayer(result.lineup.c)}
                {formatPlayer(result.lineup['1b'])}
                {formatPlayer(result.lineup['2b'])}
                {formatPlayer(result.lineup['3b'])}
                {formatPlayer(result.lineup.ss)}
                {formatPlayer(result.lineup.of[0])}
                {formatPlayer(result.lineup.of[1])}
                {formatPlayer(result.lineup.of[2])}
              </table>
              <div style={lineupTotalStyle}>{Math.round(result.points)}</div>
              <Button onClick={remove(i, j)} variant="contained" color="secondary" size="small" style={removeButtonStyle}>Remove</Button>
            </div>
          )
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
        <h5 style={stackHeaderStyle}>{ stack.stack.map((player) => player.displayName).join(' - ') }</h5>
        <div style={containerStyle}>
          {
            stack.results.map(lineupFormats[sport][site][type](i))
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
                <div style={ownershipPlayerStyle}>
                  <table>
                    <thead>
                      <tr>
                        <th style={tableHeaderStyle}>Pos</th>
                        <th style={tableHeaderStyle}>Player</th>
                        <th style={tableHeaderStyle}>Salary</th>
                        <th style={tableHeaderStyle}>Proj</th>
                        <th style={tableHeaderStyle}>Count</th>
                        <th style={tableHeaderStyle}>Own %</th>
                      </tr>
                    </thead>
                    {
                      ownership.map((result) => result)
                    }
                  </table>
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
                  { results && results.map(displayStack) }
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
