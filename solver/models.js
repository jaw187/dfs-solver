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
  },
  mma: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        f: { equal: 6 }
      }
    }
  },
  nba: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        pg: { min: 1 },
        sg: { min: 1 },
        sf: { min: 1 },
        pf: { min: 1 },
        c: { min: 1 },
        g: { min: 3 },
        f: { min: 3 },
        player: { equal: 8 },
        conly: { max: 2 }
      }
    }
  },
  xfl: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        qb: { equal: 1 },
        rb: { min: 1 },
        wr: { min: 2 },
        dst: { equal: 1 },
        player: { equal: 9 }
      }
    }
  },
  nas: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        d: { equal: 6 }
      }
    }
  },
  mlb: {
    draftkings: {
      classic: {
        pointz: { max: 100000 },
        salary: { max: 50000 },
        p: { equal: 2 },
        c: { min: 1 },
        '1b': { min: 1 },
        '2b': { min: 1 },
        '3b': { min: 1 },
        ss: { min: 1 },
        of: { min: 3 },
        player: { equal: 10 }
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
  },
  mma: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.mma.draftkings.classic))
    }
  },
  nba: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.nba.draftkings.classic))
    }
  },
  xfl: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.xfl.draftkings.classic))
    }
  },
  nas: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.nas.draftkings.classic))
    }
  },
  mlb: {
    draftkings: {
      classic: (players) => new Model(players, clone(constraintList.mlb.draftkings.classic))
    }
  }
};
