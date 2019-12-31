const solver = require('javascript-lp-solver');
const formaters = require('./formaters');

module.exports.solve = (n, maxIterations, model, ownership, players, sport, site, type) => {

  const format = formaters[sport][site][type](players);

  const results = [];

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

    const result = format(solution);

    // Test if lineup is allowed as per ownership
    if (!ownership.validate(result.players)) {
      return {};
    }

    ownership.update(result.players);
    results.push(result);

    return {};
  };

  const isDone = () => {
    return i === maxIterations || results.length === n;
  };

  return {
    go,
    isDone,
    results
  };
/*
  for (let i = 0; i < maxIterations; ++i) {
    const solution = solver.Solve(model);
    console.log(`Iteration ${i + 1} is ${solution.feasible ? '' : 'not'} feasible`);
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
  */
}
