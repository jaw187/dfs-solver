import Card from './card';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Solver from "../solver/index";
import OwnershipWatcher from '../solver/ownership';

const { solve, Models, players } = Solver;

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

  const generate = () => {
    const generateResults = [];
    const playersForModel = players.convertPlayers(pool, projection);

    let n = 0;
    stackCounts.forEach((count) => {
      n = n + count;
    });

    stacks.forEach((stack, i) => {
      const model = Models.nfl.draftkings.classic(playersForModel);
      // Force players in stack into lineup
      stack.forEach((player) => model.constraints[player.draftableId] = { equal: 1 });

      const ownership = new OwnershipWatcher({ players: playersForModel, n });
      generateResults.forEach((result) => ownership.update(result.players));

      console.log(stack.map((player) => player.displayName).join(" "))
      const stackResults = solve(stackCounts[i], 500, model, ownership, playersForModel);
      stackResults.forEach((result) => generateResults.push(result));
    });

    if (generateResults.length) {
      addResults(generateResults);
    }
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
      <button onClick={generate}>Generateee</button>
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
