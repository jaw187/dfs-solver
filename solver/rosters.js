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
  }
};
