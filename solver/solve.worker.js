import Queue from './queue';
import OwnershipWatcher from './ownership';

const lineupStrings = [];
let ownership = null;

self.addEventListener('message', (event) => {
  const { data: { action } } = event;
console.log('wat', action, event)
  if (action === 'ownership') {
    const { data: { options } } = event;
    ownership = new OwnershipWatcher({ ...options, lineupStrings });
    console.log('ownership', ownership)
  }

  if (action === 'enqueue') {
    const { data: { n, maxIterations, model, players, sport, site, type } } = event;
    Queue.register(n, maxIterations, model, ownership, players, sport, site, type);
    console.log('ownership', ownership)
  }

  if (action === 'solve') {
    const results = Queue.go();
    self.postMessage(results);
    console.log('ownership', ownership)
  }
});
