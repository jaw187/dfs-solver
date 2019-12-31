import { solve } from './solver';
const queue = [];

const Queue = {
  register: (n, maxIterations, model, ownership, players, sport, site, type) => {
    queue.push(solve(n, maxIterations, model, ownership, players, sport, site, type))
  },
  go: () => {
    const results = [];

    while (queue.length) {
      const top = queue.shift();
      const response = top.go();

      if (response.notFeasible || top.isDone()) {
        top.results.forEach((result) => results.push(result));
        continue;
      }

      queue.push(top);
    }

    return results;
  }
}

export default Queue;
