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
    pool
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
    pool
  } = getState();

  if (stacks.length === 0) {
    return null;
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
      {
        !!results.length && (
          <div>
            <h3>Results</h3>
            <ul>
              {
                results.map((result, i) => (
                  <li>
                    {
                      result.players.map((id, j) => (
                        <div>{formatPlayer(id)}</div>
                      ))
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </Card>
  );
};

export default Generator;
