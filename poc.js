const solver = require('javascript-lp-solver');
const players = require('./players');
const models = require('./models');
const formaters = require('./formaters');
const OwnershipWatcher = require('./ownership');


const start = new Date();


const model = models.nfl.draftkings.classic(players);
const format = formaters.nfl.draftkings.classic(players)


const results = [];
const n = 150;
const maxIterations = 500;

const ownership = new OwnershipWatcher({ players, n });


for (let i = 0; i < maxIterations; ++i) {
  const solution = solver.Solve(model);
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

const end = new Date();
//results.forEach((result) => console.log(result.lineup));
console.log(ownership.originalLineupsAllowed)
console.log(ownership.lineupsAllowed)
console.log(`${results.length} unique lineups generated after ${n} iterations in ${end - start}ms`)
