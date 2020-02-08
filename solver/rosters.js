let id = 1;
const createPlayer = (points, salary, ownership, startTime) => ({ points, pointz: points, salary, ownership, startTime, player: 1, id: ++id });

module.exports = {
  nfl: {
    draftkings: {
      classic: {
        QB: (points, salary, ownership, startTime) => {
          const positions = { qb: 1, rb: 0, wr: 0, te: 0, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        RB: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 1, wr: 0, te: 0, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        WR: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 0, wr: 1, te: 0, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        TE: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 0, wr: 0, te: 1, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        DST: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 0, wr: 0, te: 0, dst: 1 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        }
      }
    }
  },
  golf: {
    draftkings: {
      classic: {
        G: (points, salary, ownership, startTime) => {
          const positions = { g: 1 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        }
      }
    }
  },
  mma: {
    draftkings: {
      classic: {
        F: (points, salary, ownership, startTime) => {
          const positions = { f: 1 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        }
      }
    }
  },
  nba: {
    draftkings: {
      classic: {
        PG: (points, salary, ownership, startTime) => {
          const positions = { pg: 1, sg: 0, sf: 0, pf: 0, c: 0, g: 1, f: 0, conly: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        SG: (points, salary, ownership, startTime) => {
          const positions = { pg: 0, sg: 1, sf: 0, pf: 0, c: 0, g: 1, f: 0, conly: 0  };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        SF: (points, salary, ownership, startTime) => {
          const positions = { pg: 0, sg: 0, sf: 1, pf: 0, c: 0, g: 0, f: 1, conly: 0  };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        PF: (points, salary, ownership, startTime) => {
          const positions = { pg: 0, sg: 0, sf: 0, pf: 1, c: 0, g: 0, f: 1, conly: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        C: (points, salary, ownership, startTime) => {
          const positions = { pg: 0, sg: 0, sf: 0, pf: 0, c: 1, g: 0, f: 0, conly: 1 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        }
      }
    }
  },
  xfl: {
    draftkings: {
      classic: {
        QB: (points, salary, ownership, startTime) => {
          const positions = { qb: 1, rb: 0, wr: 0, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        RB: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 1, wr: 0, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        WR: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 0, wr: 1, dst: 0 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        },
        DST: (points, salary, ownership, startTime) => {
          const positions = { qb: 0, rb: 0, wr: 0, dst: 1 };
          const player = createPlayer(points, salary, ownership, startTime);

          return {
            ...player,
            ...positions
          }
        }
      }
    }
  }
};
