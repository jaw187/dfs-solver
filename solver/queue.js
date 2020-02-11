import { solve } from './solver';
const queue = [];

const Queue = {
  register: (n, maxIterations, model, ownership, players, sport, site, type, stack, preventMmaFightersInSameFight) => {
    queue.push(solve(n, maxIterations, model, ownership, players, sport, site, type, stack, preventMmaFightersInSameFight))
  },
  go: () => {
    const results = [];

    while (queue.length) {
      console.log('wat')
      const top = queue.shift();
      console.log('errr')
      const response = top.go();

      if (response.notFeasible || top.isDone()) {
        results.push({ results: top.results, stack: top.stack });
        continue;
      }

      queue.push(top);
    }

    return results;
  }
}

export default Queue;
