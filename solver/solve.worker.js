import Queue from './queue';
import OwnershipWatcher from './ownership';

const lineupStrings = [];
let ownership = null;

self.addEventListener('message', (event) => {
  const { data: { action } } = event;
  if (action === 'ownership') {
    const { data: { options } } = event;
    ownership = new OwnershipWatcher({ ...options, lineupStrings });
  }

  if (action === 'enqueue') {
    const { data: { n, maxIterations, model, players, sport, site, type } } = event;
    Queue.register(n, maxIterations, model, ownership, players, sport, site, type);
  }

  if (action === 'solve') {
    const results = Queue.go();
    self.postMessage(results);
  }
});
