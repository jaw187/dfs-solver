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
  }
}
