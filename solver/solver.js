const solver = require('javascript-lp-solver');
const formaters = require('./formaters');

module.exports.solve = (n, maxIterations, model, ownership, players) => {

  const format = formaters.nfl.draftkings.classic(players);

  const results = [];

  for (let i = 0; i < maxIterations; ++i) {
    const solution = solver.Solve(model);
    console.log('wat', i, solution.feasible)
    if (!solution.feasible) {
      break;
    }

    // Prevents finding solutions which have the same total points
    model.constraints.pointz.max = solution.result - 1;

    const result = format(solution);

    // Test if lineup is allowed as per ownership
    if (!ownership.validate(result.players)) {
      continue;
    }

    results.push(result);
    ownership.update(result.players);

    if (results.length === n) {
      break;
    }
  }

  return results;
}
