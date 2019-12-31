const clone = require('lodash/cloneDeep');

const constraintList = {
  nfl: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        qb: { min: 1, max: 1 },
        rb: { min: 2, max: 3 },
        wr: { min: 3, max: 4 },
        te: { min: 1, max: 2 },
        dst: { min: 1, max: 1 },
        player: { equal: 9 }
      }
    }
  },
  golf: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        g: { equal: 6 }
      }
    }
  }
};

class Model {
  constructor(players, constraints) {

    this.optimize = 'points';
    this.opType = 'max';
    this.constraints = constraints;
    this.variables = players;
    const ints = this.ints = {};


    Object.keys(players).forEach((player) => {

      // Limit results so player only shows up once in results.
      // More players results in more complexity
      players[player][player] = 1;
      constraints[player] = { max: 1 };
      ints[player] = 1;
    });
  }

  removePlayer(player) {

    const { constraints, ints } = this;
    delete constraints[player];
    delete ints[player];
  }
}

module.exports = {
  nfl: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.nfl.draftkings.classic))
    }
  },
  golf: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.golf.draftkings.classic))
    }
  }
};
