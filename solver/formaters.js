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

            if (player.wr && roster.positions.wr.length === 2) {
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
              c: []
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
              roster.positions.sf.push(player)
            }

            if (player.pf) {
              ++positions;
              roster.positions.pf.push(player)
            }

            if (player.c) {
              ++positions;
              roster.positions.c.push(player)
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

          // Remove eligibility at multiple positions if the position only has one player.
          playersEligibleAtMoreThanOnePosition.forEach((player) => {
            if (player.pg && roster.positions.pg.length === 1) {
              return removePlayerFromOtherPositions(player, 'pg');
            }

            if (player.sg && roster.positions.sg.length === 1) {
              return removePlayerFromOtherPositions(player, 'sg');
            }

            if (player.sf && roster.positions.sf.length === 1) {
              return removePlayerFromOtherPositions(player, 'sf');
            }

            if (player.pf && roster.positions.pf.length === 1) {
              return removePlayerFromOtherPositions(player, 'pf');
            }

            if (player.c && roster.positions.c.length === 1) {
              return removePlayerFromOtherPositions(player, 'c');
            }
          });

          // Sort by start time
          // Attempting to account for late swap
          const sort = (a, b) => a.startTime - b.startTime;
          Object.keys(roster.positions).forEach((key) => roster.positions[key].sort(sort));

          // Fill out lineup
          const lineup = {};
          lineup.pg = roster.positions.pg.shift();
          removePlayerFromOtherPositions(lineup.pg);

          lineup.sg = roster.positions.sg.shift();
          removePlayerFromOtherPositions(lineup.sg);

          lineup.sf = roster.positions.sf.shift();
          removePlayerFromOtherPositions(lineup.sf);

          lineup.pf = roster.positions.pf.shift();
          removePlayerFromOtherPositions(lineup.pf);

          lineup.c = roster.positions.c.shift();
          removePlayerFromOtherPositions(lineup.c);

          lineup.g = roster.positions.pg[0] || roster.positions.sg[0];
          removePlayerFromOtherPositions(lineup.g);

          lineup.f = roster.positions.pf[0] || roster.positions.sf[0];
          removePlayerFromOtherPositions(lineup.g);

          // May be possible that flex start time is before G or F
          lineup.flex = roster.positions.pg[0] || roster.positions.sg[0] ||  roster.positions.pf[0] || roster.positions.sf[0] || roster.positions.c[0]

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
