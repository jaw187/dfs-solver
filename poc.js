const solver = require("javascript-lp-solver");
const player = (points, salary, qb, rb, wr, te, dst) => ({ points, salary, qb, rb, wr, te, dst, player: 1 });

const model = {
  optimize: 'points',
  opType: 'max',
  constraints: {
    salary: { max: 50000 },
    qb: { min: 1, max: 1 },
    rb: { min: 2, max: 3 },
    wr: { min: 3, max: 4 },
    te: { min: 1, max: 2 },
    dst: { min: 1, max: 1 },
    player: { equal: 9 }
  },
  variables: {
    'Taysom Hill': player(1000, 1000, 1, 0, 0, 0, 0),
    'Matt Ryan': player(100, 10000, 1, 0, 0, 0, 0),
    'Drew Brees': player(100, 10000, 1, 0, 0, 0, 0),
    'David Blough': player(500, 500, 1, 0, 0, 0, 0),
    'Devin Singletary': player(1000, 10000, 0, 1, 0, 0, 0),
    'Zeke': player(1000, 1000, 0, 1, 0, 0, 0),
    'Kamara': player(100, 10000, 0, 1, 0, 0, 0),
    'David Montgomery': player(145, 3344, 0, 1, 0, 0, 0),
    'Bo': player(66, 8745, 0, 1, 0, 0, 0),
    'Kenny Golladay': player(1000, 1000, 0, 0, 1, 0, 0),
    'Michael Thomas': player(100, 6780, 0, 0, 1, 0, 0),
    'Cole Beasley': player(10000, 10000, 0, 0, 1, 0, 0),
    'Anthony Miller': player(900, 6788, 0, 0, 1, 0, 0),
    'Russell Gage Jr': player(100, 100, 0, 0, 1, 0, 0),
    'Calvin Ridley': player(1000, 1000, 0, 0, 1, 0, 0),
    'Julio Jones': player(0, 100, 0, 0, 1, 0, 0),
    'Dawson Knox': player(5, 1000, 0, 0, 0, 1, 0),
    'Jason Whitten': player(15, 1000, 0, 0, 0, 1, 0),
    'Jared Cook': player(7, 1000, 0, 0, 0, 1, 0),
    'Jaedeanaean Graham': player(25, 4500, 0, 0, 0, 1, 0),
    'Bears': player(5, 1000, 0, 0, 0, 0, 1),
    'Lions': player(5, 1000, 0, 0, 0, 0, 1),
    'Tigers': player(500, 1000, 0, 0, 0, 0, 1)
  }
};

Object.keys(model.variables).forEach((player) => {

  model.variables[player][player] = 1;

  model.constraints[player] = { max: 1 };

  if (!model.ints) {
    model.ints = {};
  }
  model.ints[player] = 1;
});

console.log(solver.Solve(model));
