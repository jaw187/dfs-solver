const players = require('./players');
const Models = require('./models');
const OwnershipWatcher = require('./ownership');
const { solve } = require('./solver');


const start = new Date();


const results = [];
const n = 150;
const maxIterationsPerStack = 500;


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
