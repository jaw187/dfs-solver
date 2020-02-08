const solver = require('javascript-lp-solver');
const formaters = require('./formaters');

module.exports.solve = (n, maxIterations, model, ownership, players, sport, site, type, stack, preventMmaFightersInSameFight) => {
  const format = formaters[sport][site][type](players);

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
    const solution = solver.Solve(model);
    console.log(`Iteration ${i} is ${solution.feasible ? '' : 'not'} feasible`);
    console.log('ownership - solver', ownership)
    if (!solution.feasible) {
      return { notFeasible: true };
    }

    // Prevents finding solutions which have the same total points
    model.constraints.pointz.max = solution.result - 1;

    //try {
      const result = format(solution);

      // Test if lineup is allowed as per ownership
      if (!ownership.validate(result.players)) {
        return {};
      }

      ownership.update(result.players);
      results.push(result);

      return {};
    // }
    // catch (e) {
    //   return {};
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
