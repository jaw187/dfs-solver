import Card from './card';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Solver from "../solver/index";
import clone from 'lodash/clone';
import { log } from './utils';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  const generating = useSelector(state => state.generating);
  const preventMmaFightersInSameFight = useSelector(state => state.preventMmaFightersInSameFight);

  const addResults = (results) => {
    dispatch({
      type: 'ADD_RESULT',
      payload: results
    });
  };

  const toggleGenerate = () => {
    dispatch({
      type: 'GENERATE'
    });
  };

  const toggleMmaFightersInSameFight = () => {
    dispatch({
      type: 'MMA_FIGHERS_IN_SAME_FIGHT'
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
    view,
    toggleGenerate,
    generating,
    preventMmaFightersInSameFight,
    toggleMmaFightersInSameFight
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
    view,
    toggleGenerate,
    generating,
    preventMmaFightersInSameFight,
    toggleMmaFightersInSameFight
  } = getState();

  if (view !== 'generator' && view !== 'results') {
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

  let n = 0;
  stackCounts.forEach((count) => {
    n = n + count;
  });

  const generate = () => {
    log('generate');
    toggleGenerate();
    const playersForModel = players.convertPlayers(pool, projection, sport, site, type);

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
        type,
        stack,
        preventMmaFightersInSameFight
      };
      worker.postMessage(enqueueOptions);
    });

    worker.postMessage({ action: 'solve' });
    worker.addEventListener('message', (event) => {
      const results = event.data;
      toggleGenerate();
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
  };

  const generateInfoStyle = {
    paddingLeft: 24
  };

  const generateContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };

  const progressContainerStyle = {
    paddingLeft: 24
  };

  return (
    <Card>
      <div style={generateContainerStyle}>
        <Button onClick={generate} variant="contained" color="primary">{ `Generate ${n} Lineups` }</Button>
        {
          generating && (
            <div style={progressContainerStyle}>
              <CircularProgress />
            </div>
          )
        }
        <div style={generateInfoStyle}>
          {`Pool length: ${pool.length}`}
        </div>
        <div style={generateInfoStyle}>
          {`Stacks: ${stacks.length}`}
        </div>
      </div>
      {
        sport === 'mma' && (
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={preventMmaFightersInSameFight}
                  onChange={toggleMmaFightersInSameFight}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Prevent fighters in the same fight from being in the same lineup"
            />
          </div>
        )
      }
    </Card>
  );
};

export default Generator;
