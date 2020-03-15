const solver = require('javascript-lp-solver');
const formaters = require('./formaters');

module.exports.solve = (n, maxIterations, model, ownership, players, sport, site, type, stack, preventMmaFightersInSameFight, preventMlbOffenseVsPitcher) => {
  const format = formaters[sport][site][type](players);

  const teams = {
    ids: [],
    abbreviations: []
  };

  Object.keys(players).forEach((playerId) => {
    const player = players[playerId];
    if (!teams.ids.includes(player.teamId)) {
      teams.ids.push(player.teamId);
      teams.abbreviations.push(player.teamAbbreviation)
    }
  })

  const results = [];

  if (sport === 'mma') {
    const competitions = [];
    Object.keys(players).forEach((playerId) => {
      const player = players[playerId];
      const { competition } = player;
      if (!competitions.includes(competition)) {
        competitions.push(competition);
      }
    });

    if (preventMmaFightersInSameFight) {
      competitions.forEach((competition) => {
        model.constraints[`comp${competition}`] = { max: 1 };
      });
    }
    else {
      competitions.forEach((competition) => {
        delete model.constraints[`comp${competition}`];
      });
    }
  }

  let i = 0;
  const go = () => {
    ++i;
    console.log('model', model)
    const solution = solver.Solve(model);
    console.log(`Iteration ${i} is ${solution.feasible ? '' : 'not'} feasible`);
    console.log('ownership - solver', ownership)
    if (!solution.feasible) {
      return { notFeasible: true };
    }

    // Prevents finding solutions which have the same total points
    model.constraints.pointz.max = solution.result - .0001;

    //try {
      console.log('attempting to format', solution)
      const result = format(solution);
      const { lineup } = result;

      console.log('lineup', lineup)

      // Test if lineup is allowed as per ownership
      if (!ownership.validate(result.players)) {
        console.log('failed ownership validation')
        return {};
      }

      // If MLB, test if offense facing pitcher
      if (sport === 'mlb' && preventMlbOffenseVsPitcher) {
        const pitcherOpponents = lineup.p.map((pitcher) => {
          const { teamAbbreviation, competition: { nameDisplay } } = pitcher;
          const opponentAbbreviation = nameDisplay[0].value === teamAbbreviation ? nameDisplay[0].value : nameDisplay[2].value;
          let opponentId = null;
          teams.abbreviations.forEach((abbreviation, i) => {
            if (abbreviation === opponentAbbreviation) {
              opponentId = teams.ids[i];
            }
          });

          return opponentId;
        });

        console.log('pitcher opponents', pitcherOpponents)
        if (
            pitcherOpponents.find(lineup.c.teamId) || pitcherOpponents.find(lineup['1b'].teamId) || pitcherOpponents.find(lineup['2b'].teamId) ||
            pitcherOpponents.find(lineup['3b'].teamId) || pitcherOpponents.find(lineup.ss.teamId) || pitcherOpponents.find(lineup.of[0].teamId) ||
            pitcherOpponents.find(lineup.of[1].teamId) || pitcherOpponents.find(lineup.of[2].teamId)
          ) {
            return {};
            }
      }

      ownership.update(result.players);
      results.push(result);

      return {};
    // }
    // catch (e) {
    //    return {};
    // }
  };

  const isDone = () => {
    return i === maxIterations || results.length === n;
  };

  return {
    go,
    isDone,
    results,
    stack
  };
}
