const constraints = {
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
  }
};

module.exports = {
  nfl: {
    draftkings: {
      classic: (players) => {
        const model = {
          optimize: 'points',
          opType: 'max',
          constraints: constraints.nfl.draftkings.classic,
          variables: players,
          ints: {}
        }

        Object.keys(model.variables).forEach((player) => {

          // Limit results so player only shows up once in results.
          // More players results in more complexity
          model.variables[player][player] = 1;
          model.constraints[player] = { max: 1 };
          model.ints[player] = 1;
        });

        return model;
      }
    }
  }
};
