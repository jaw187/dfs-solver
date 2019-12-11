const Models = require('./models');
const OwnershipWatcher = require('./ownership');
const { solve } = require('./solver');


const start = new Date();


const results = [];
const n = 150;
const maxIterationsPerStack = 500;

const players = {
  'Taysom Hill': positions.qb(1000, 1000, 100, new Date()),
  'Matt Ryan': positions.qb(100, 10000, 100, new Date()),
  'Drew Brees': positions.qb(100, 10000, 100, new Date()),
  'David Blough': positions.qb(500, 500, 100, new Date()),
  'Devin Singletary': positions.rb(1000, 10000, 100, new Date(3)),
  'Zeke': positions.rb(1000, 1000, 100, new Date(2)),
  'Kamara': positions.rb(100, 10000, 100, new Date()),
  'David Montgomery': positions.rb(145, 3344, 50, new Date(1)),
  'Bo': positions.rb(66, 8745, 50, new Date()),
  'Kenny Golladay': positions.wr(1000, 1000, 100, new Date(10000)),
  'Michael Thomas': positions.wr(100, 6780, 50, new Date()),
  'Cole Beasley': positions.wr(10000, 10000, 100, new Date(0)),
  'Anthony Miller': positions.wr(900, 6788, 50, new Date(54545454545454)),
  'Russell Gage Jr': positions.wr(100, 100, 50, new Date()),
  'Calvin Ridley': positions.wr(1000, 1000, 100, new Date(-1)),
  'Julio Jones': positions.wr(0, 100, 50, new Date()),
  'Dawson Knox': positions.te(5, 1000, 50, new Date()),
  'Jason Whitten': positions.te(15, 1000, 50, new Date()),
  'Jared Cook': positions.te(7, 1000, 50, new Date()),
  'Jaedeanaean Graham': positions.te(25, 4500, 50, new Date()),
  'Bears': positions.dst(5, 1000, 50, new Date()),
  'Lions': positions.dst(5, 1000, 50, new Date()),
  'Tigers': positions.dst(500, 1000, 100, new Date())
}


// Stack counts greater than players ownership will prevent n
const stacks = [
  {
    players: ['David Blough', 'Kenny Golladay'],
    count: 80
  },
  {
    players: ['Taysom Hill', 'Calvin Ridley'],
    count: 70
  }
];


stacks.forEach((stack) => {

  const model = Models.nfl.draftkings.classic(players);
  // Force players in stack into lineup
  stack.players.forEach((player) => model.constraints[player] = { equal: 1 });

  const ownership = new OwnershipWatcher({ players, n });
  results.forEach((result) => ownership.update(result.players));

  const stackResults = solve(stack.count, maxIterationsPerStack, model, ownership, players);

  stackResults.forEach((result) => results.push(result));
});


const end = new Date();


//results.forEach((result) => console.log(result.lineup));
const breakdown = {};
results.forEach((result) => {
  result.players.forEach((player) => {
    if (!breakdown[player]) {
      breakdown[player] = 0;
    }

    ++breakdown[player];
  });
});
console.log(breakdown)
console.log(`${results.length} unique lineups generated after ${n} iterations in ${end - start}ms`)
