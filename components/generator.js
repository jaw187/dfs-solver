import Card from './card';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Solver from "../solver/index";
import clone from 'lodash/clone';
import { log } from './utils';

const { Models, players, Worker } = Solver;

const getState = () => {
  const dispatch = useDispatch();

  const stacks = useSelector(state => state.stacks, shallowEqual);
  const stackCounts = useSelector(state => state.stackCounts, shallowEqual);
  const slates = useSelector(state => state.slates, shallowEqual);
  const selectedSlate = useSelector(state => state.selectedSlate);
  const projection = useSelector(state => state.projection);
  const results = useSelector(state => state.results);
  const pool = useSelector(state => state.pool);
  const view = useSelector(state => state.view);

  const addResults = (results) => {
    dispatch({
      type: 'ADD_RESULT',
      payload: results
    });
  };

  return {
    stacks,
    stackCounts,
    slates,
    selectedSlate,
    projection,
    addResults,
    results,
    pool,
    view
  };
};

const Generator = () => {
  const {
    stacks,
    stackCounts,
    slates,
    selectedSlate,
    projection,
    addResults,
    results,
    pool,
    view
  } = getState();

  if (view !== 'generator') {
    return null;
  }

  if (!projection || stacks.length === 0) {
    const issues = [];
    if (stacks.length === 0) {
      issues.push((<div>You need to create stacks first</div>))
    }

    if (!projection) {
      issues.push((<div>You need to import projections first</div>))
    }

    return (
      <div>
        {issues.map((issue) => (<div>{issue}</div>))}
      </div>
    );
  }

  const slate = slates && slates[selectedSlate]
  const sport = slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate.GameType.Name.toLowerCase();

  const generate = () => {
    log('generate');
    const playersForModel = players.convertPlayers(pool, projection, sport, site, type);

    let n = 0;
    stackCounts.forEach((count) => {
      n = n + count;
    });

    const worker = new Worker();

    stacks.forEach((stack, i) => {
      const stackPlayers = clone(playersForModel);
      const model = Models[sport][site][type](stackPlayers);
      // Force players in stack into lineup
      stack.forEach((player) => model.constraints[player.draftableId] = { equal: 1 });

      const ownershipOptions = { players: stackPlayers, n: stackCounts[i], stack }
      worker.postMessage({ action: 'ownership', options: ownershipOptions});

      const enqueueOptions = {
        action: 'enqueue',
        n: stackCounts[i],
        maxIterations: 500,
        model,
        players: stackPlayers,
        sport,
        site,
        type
      };
      worker.postMessage(enqueueOptions);
    });

    worker.postMessage({ action: 'solve' });
    worker.addEventListener('message', (event) => {
      const results = event.data;
      log(`generated ${results.length} lineups`);
      if (results.length) {
        addResults(results);
      }
    });
  };

  const formatPlayer = (draftableId) => {
    const player = slate.players.find((player) => player.draftableId == draftableId);
    if (!player) {
      return draftableId;
    }

    return `${player.position} - ${player.displayName} - ${player.salary}`;
  }

  return (
    <Card>
      <h2>Generator</h2>
      <button onClick={generate}>Generate</button>
      <ul>
      {
        stacks.map((stack, i) => (
          <li key={i}>Stack with {stackCounts[i]} lineups</li>
        ))
      }
      </ul>
    </Card>
  );
};

export default Generator;
