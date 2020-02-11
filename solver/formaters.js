module.exports = {
  nfl: {
    draftkings: {
      classic: (players) => {
        return (solution) => {

          const points = solution.result;
          const roster = {
            positions: {
              qb: [],
              rb: [],
              wr: [],
              te: [],
              dst: []
            }
          };

          const resultPlayers = Object.keys(solution).filter((key) => {
            const keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral']
            return !keysToRemove.includes(key);
          });

          // Add players to positions their eligible for
          const playersEligibleAtMoreThanOnePosition = [];
          resultPlayers.forEach((playerId) => {

            let positions = 0;
            const player = players[playerId];
            player.id = playerId;

            if (player.qb) {
              ++positions;
              roster.positions.qb.push(player);
            }

            if (player.dst) {
              ++positions;
              roster.positions.dst.push(player);
            }

            if (player.rb) {
              ++positions;
              roster.positions.rb.push(player)
            }

            if (player.wr) {
              ++positions;
              roster.positions.wr.push(player)
            }

            if (player.te) {
              ++positions;
              roster.positions.te.push(player)
            }

            const playsMultiplePositions = positions > 1;
            if (playsMultiplePositions) {
              player.multiplePositions = true;
              playersEligibleAtMoreThanOnePosition.push(player);
            }
          });

          // Determine expected position of player.
          playersEligibleAtMoreThanOnePosition.forEach((player) => {

            const removePlayer = (positionPlayer) => !(player.id === positionPlayer.id);
            if (player.qb && roster.positions.qb.length === 1) {
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.rb && roster.positions.rb.length === 2) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.wr && roster.positions.wr.length === 3) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.te && roster.positions.te.length === 1) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.dst && roster.positions.dst.length === 1) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
            }
          });

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          roster.positions.rb.sort(sort);
          roster.positions.wr.sort(sort);
          roster.positions.te.sort(sort);

          //construct lineup
          const lineup = {
            qb: roster.positions.qb[0],
            rbs: roster.positions.rb.slice(0,2),
            wrs: roster.positions.wr.slice(0,3),
            te: roster.positions.te[0],
            flex: roster.positions.rb[2] || roster.positions.wr[3] || roster.positions.te[1],
            dst: roster.positions.dst[0]
          };

          return {
            points,
            lineup,
            players: resultPlayers
          }
        }
      }
    }
  },
  golf: {
    draftkings: {
      classic: (players) => {
        return (solution) => {

          const points = solution.result;
          const roster = {
            positions: {
              g: []
            }
          };

          const resultPlayers = Object.keys(solution).filter((key) => {
            const keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral']
            return !keysToRemove.includes(key);
          });

          // Add players to positions their eligible for
          resultPlayers.forEach((playerId) => {

            const player = players[playerId];
            player.id = playerId;
            roster.positions.g.push(player);
          });

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          roster.positions.g.sort(sort);

          //construct lineup
          const lineup = {
            g: roster.positions.g
          };

          return {
            points,
            lineup,
            players: resultPlayers
          }
        }
      }
    }
  },
  mma: {
    draftkings: {
      classic: (players) => {
        return (solution) => {

          const points = solution.result;
          const roster = {
            positions: {
              f: []
            }
          };

          const resultPlayers = Object.keys(solution).filter((key) => {
            const keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral']
            return !keysToRemove.includes(key);
          });

          // Add players to positions their eligible for
          resultPlayers.forEach((playerId) => {

            const player = players[playerId];
            player.id = playerId;
            roster.positions.f.push(player);
          });

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          roster.positions.f.sort(sort);

          //construct lineup
          const lineup = {
            f: roster.positions.f
          };

          return {
            points,
            lineup,
            players: resultPlayers
          }
        }
      }
    }
  },
  nba: {
    draftkings: {
      classic: (players) => {
        return (solution) => {

          const points = solution.result;
          const roster = {
            positions: {
              pg: [],
              sg: [],
              sf: [],
              pf: [],
              c: [],
              g: [],
              f: []
            }
          };

          const resultPlayers = Object.keys(solution).filter((key) => {
            const keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral']
            return !keysToRemove.includes(key);
          });

          // Add players to positions their eligible for
          const playersEligibleAtMoreThanOnePosition = [];
          resultPlayers.forEach((playerId) => {

            let positions = 0;
            const player = players[playerId];
            player.id = playerId;
            if (player.pg) {
              ++positions;
              roster.positions.pg.push(player);
            }

            if (player.sg) {
              ++positions;
              roster.positions.sg.push(player);
            }

            if (player.sf) {
              ++positions;
              roster.positions.sf.push(player);
            }

            if (player.pf) {
              ++positions;
              roster.positions.pf.push(player);
            }

            if (player.c) {
              ++positions;
              roster.positions.c.push(player);
            }

            if (player.g) {
              roster.positions.g.push(player);
            }

            if (player.f) {
              roster.positions.f.push(player);
            }

            const playsMultiplePositions = positions > 1;
            if (playsMultiplePositions) {
              playersEligibleAtMoreThanOnePosition.push(player);
            }
          });

          const removePlayerFromOtherPositions = (player, positionToIgnore) => {
            Object.keys(roster.positions).forEach((key) => {
              if (key !== positionToIgnore) {
                const removePlayer = (positionPlayer) => !(player.id === positionPlayer.id);
                roster.positions[key] = roster.positions[key].filter(removePlayer);
              }
            })
          }

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          Object.keys(roster.positions).forEach((key) => roster.positions[key].sort(sort));

          // Fill out lineup
          const lineup = {};

          const lineupPositions = ['pg', 'sg', 'sf', 'pf', 'c', 'g', 'f'];
          lineupPositions.sort((a, b) => roster.positions[a].length - roster.positions[b].length);

          lineupPositions.forEach((position) => {
            lineup[position] = roster.positions[position].shift();
            removePlayerFromOtherPositions(lineup[position]);
          });

          lineup.flex = roster.positions.pg[0] || roster.positions.sg[0] ||  roster.positions.pf[0] || roster.positions.sf[0] || roster.positions.c[0]

          return {
            points,
            lineup,
            players: resultPlayers
          }
        }
      }
    }
  },
  xfl: {
    draftkings: {
      classic: (players) => {
        return (solution) => {

          const points = solution.result;
          const roster = {
            positions: {
              qb: [],
              rb: [],
              wr: [],
              dst: []
            }
          };

          const resultPlayers = Object.keys(solution).filter((key) => {
            const keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral']
            return !keysToRemove.includes(key);
          });

          // Add players to positions their eligible for
          const playersEligibleAtMoreThanOnePosition = [];
          resultPlayers.forEach((playerId) => {

            let positions = 0;
            const player = players[playerId];
            player.id = playerId;

            if (player.qb) {
              ++positions;
              roster.positions.qb.push(player);
            }

            if (player.dst) {
              ++positions;
              roster.positions.dst.push(player);
            }

            if (player.rb) {
              ++positions;
              roster.positions.rb.push(player)
            }

            if (player.wr) {
              ++positions;
              roster.positions.wr.push(player)
            }

            const playsMultiplePositions = positions > 1;
            if (playsMultiplePositions) {
              player.multiplePositions = true;
              playersEligibleAtMoreThanOnePosition.push(player);
            }
          });

          // Determine expected position of player.
          playersEligibleAtMoreThanOnePosition.forEach((player) => {

            const removePlayer = (positionPlayer) => !(player.id === positionPlayer.id);
            if (player.qb && roster.positions.qb.length === 1) {
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.rb && roster.positions.rb.length === 1) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.wr && roster.positions.wr.length === 2) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);

              return null;
            }

            if (player.dst && roster.positions.dst.length === 1) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
            }
          });

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          roster.positions.rb.sort(sort);
          roster.positions.wr.sort(sort);

          // Assuming only RB and WRs will have dual eligibility.  This league could end up with a QB eligible at another position too
          const flexes = roster.positions.rb.slice(1,roster.positions.rb.length);
          roster.positions.wr.slice(2,roster.positions.wr.length).forEach((player) => {
            if (!flexes.find((a) => a.id === player.id)) {
              flexes.push(player);
            }
          });

          //construct lineup
          const lineup = {
            qb: roster.positions.qb[0],
            rb: roster.positions.rb[0],
            wrs: roster.positions.wr.slice(0,2),
            flexes,
            dst: roster.positions.dst[0]
          };

          return {
            points,
            lineup,
            players: resultPlayers
          }
        }
      }
    }
  },
  nas: {
    draftkings: {
      classic: (players) => {
        return (solution) => {

          const points = solution.result;
          const roster = {
            positions: {
              d: []
            }
          };

          const resultPlayers = Object.keys(solution).filter((key) => {
            const keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral']
            return !keysToRemove.includes(key);
          });

          // Add players to positions their eligible for
          resultPlayers.forEach((playerId) => {

            const player = players[playerId];
            player.id = playerId;
            roster.positions.d.push(player);
          });

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          roster.positions.d.sort(sort);

          //construct lineup
          const lineup = {
            d: roster.positions.d
          };

          return {
            points,
            lineup,
            players: resultPlayers
          }
        }
      }
    }
  }
}
