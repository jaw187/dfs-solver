import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cloneDeep } from 'lodash'

const initialState = {
  slates: {},
  importErrors: [],
  stack: [],
  stacks: [],
  stackCounts: [],
  results: [],
  pool: [],
  view: 'slatepicker',
  showPoolTools: false,
  generating: false,
  stacksUsed: [],
  slateBackups: {},
  selectedSlate: null,
  preventMmaFightersInSameFight: false,
  showEditProjectionsTools: false,
  projection: [],
  stackBuilderType: 'players',
  preventMlbOffenseVsPitcher: false
};

const setSelectedSlate = (state, slate) => {

  const { selectedSlate } = state;
  if (selectedSlate) {
    const backup = { ...state };
    delete backup.slateBackups;
    delete backup.slates;
    state.slateBackups[selectedSlate] = backup;
  }

  if (state.slateBackups[slate]) {
    return {
      ...state,
      ...state.slateBackups[slate]
    };
  }

  const newState = {
    ...initialState,
    selectedSlate: slate
  };

  delete newState.slates;
  delete newState.slateBackups;

  return {
    ...state,
    ...newState
  };
};

const reducer = (state = initialState, { type, payload }) => {

  const stackCounts = [...state.stackCounts];

  const { i, j, n } = payload ? payload : {};

  switch (type) {
    case 'SET_SLATES':
      return {
        ...state,
        slates: { ...payload }
      };
    case 'SET_SELECTED_SLATE':
      return setSelectedSlate(state, payload);
    case 'CLEAR_IMPORT_ERRORS':
      return {
        ...state,
        importErrors: []
      }
    case 'ADD_IMPORT_ERROR':
      return {
        ...state,
        importErrors: state.importErrors.concat([payload])
      }
    case 'SET_RAW_PROJECTION':
      return {
        ...state,
        rawProjection: payload
      }
    case 'SET_PROJECTION':
      return {
        ...state,
        projection: payload
      }
    case 'CLEAR_STACK':
      return {
        ...state,
        stack: []
      }
    case 'ADD_STACK':
      const newStack = {
        players: payload,
        count: 10,
        type: state.stackBuilderType,
      };

      if (state.stackBuilderType === 'teams') {
        newStack.ranges = payload.map(() => [3,5]);
      }

      return {
        ...state,
        stacks: state.stacks.concat([newStack])
      }
    case 'REMOVE_STACK':
      return {
        ...state,
        stacks: state.stacks.filter((stack, i) => i !== payload)
      }
    case 'ADD_PLAYER_TO_STACK':
      return {
        ...state,
        stack: state.stack.concat([payload])
      }
    case 'REMOVE_PLAYER_FROM_STACK':
      return {
        ...state,
        stack: state.stack.filter((player) => player.playerId !== payload.playerId)
      }
    case 'SET_STACK_N':
      stackCounts[i] = Number(n);

      const newStacks = state.stacks.map((stack, j) => {
        const newStack = cloneDeep(stack);
        if (i === j) {
          newStack.count = Number(n);
        }
        return newStack;
      });

      return {
        ...state,
        stacks: newStacks
      }
    case 'ADD_RESULT':
      return {
        ...state,
        results: state.results.concat(payload)
      }
    case 'REMOVE_RESULT':
      const newResults = [];
      const { results, stacksUsed } = state;
      const stacksToRemove = [];
      results.forEach((result, resultsIndex) => {
        if (resultsIndex !== i) {
          return newResults.push([].concat(result))
        }

        const newResult = result.filter((r, index) => index !== j);
        if (newResult.length) {
          return newResults.push(newResult);
        }

        stacksToRemove.push(resultsIndex);
      });

      const stacksUsedAfterRemove = stacksUsed.filter((s, stacksIndex) => !stacksToRemove.includes(stacksIndex));

      return {
        ...state,
        results: newResults,
        stacksUsed: stacksUsedAfterRemove
      }
    case 'ADD_PLAYER_TO_POOL':
      return {
        ...state,
        pool: state.pool.concat([payload]).sort((a, b) => b.salary - a.salary)
      }
    case 'REMOVE_PLAYER_FROM_POOL':
      return {
        ...state,
        pool: state.pool.filter((player) => player.playerId !== payload.playerId)
      }
    case 'SET_VIEW':
      return {
        ...state,
        view: payload
      }
    case 'MOVE_STACK':
      const { which } = payload;
      const stacks = state.stacks.concat([]);
      const stack = stacks[j];

      if (which === "right" && j < (stacks.length - 1)) {
        const right = stacks[j + 1];
        stacks.splice(j, 1, right);
        stacks.splice(j + 1, 1, stack);
      }

      if (which === "left" && j > 0) {
        const left = stacks[j - 1];
        stacks.splice(j, 1, left);
        stacks.splice(j - 1, 1, stack);
      }

      return {
        ...state,
        stacks,
        stackCounts
      }
    case 'CLEAR_POOL':
      return {
        ...state,
        pool: []
      }
    case 'SET_POOL_SALARY_RANGE':
      return {
        ...state,
        poolSalaryRange: payload
      }
    case 'TOGGLE_POOL_TOOLS':
      return {
        ...state,
        showPoolTools: !state.showPoolTools
      }
    case 'PURGE':
      return state
    case 'GENERATE':
      const newStacksUsed = !state.generating ? state.stacksUsed.concat(state.stacks) : state.stacksUsed;

      return {
        ...state,
        generating: !state.generating,
        stacksUsed: newStacksUsed
      }
    case 'CLEAR_LINEUPS':
      return {
        ...state,
        stacksUsed: [],
        results: []
      }
    case 'SET_POOL_GAME':
      return {
        ...state,
        poolGame: payload
      }
    case 'CLEAR_POOL_GAME':
      return {
        ...state,
        poolGame: null
      }
    case 'SET_STACK_BUILDER_GAME':
      return {
        ...state,
        stackBuilderGame: payload
      }
    case 'CLEAR_STACK_BUILDER_GAME':
      return {
        ...state,
        stackBuilderGame: null
      }
    case 'MMA_FIGHERS_IN_SAME_FIGHT':
      return {
        ...state,
        preventMmaFightersInSameFight: !state.preventMmaFightersInSameFight
      }
    case 'CLEAR_PROJECTIONS':
      return {
        ...state,
        projection: []
      }
    case 'SET_PLAYER_PROJECTION':
      const newProjection = state.projection.filter((row) => row.player != payload.player);
      newProjection.push(payload);

      return {
        ...state,
        projection: newProjection
      }
    case 'SET_EDIT_PROJECTIONS_SALARY_RANGE':
      return {
        ...state,
        editProjectionsSalaryRange: payload
      }
    case 'TOGGLE_EDIT_PROJECTIONS_TOOLS':
      return {
        ...state,
        showEditProjectionsTools: !state.showEditProjectionsTools
      }
    case 'SET_EDIT_PROJECTIONS_GAME':
      return {
        ...state,
        editProjectionsGame: payload
      }
    case 'CLEAR_EDIT_PROJECTIONS_GAME':
      return {
        ...state,
        editProjectionsGame: null
      }
    case 'TOGGLE_STACK_BUILDER_TYPE':
      const newStackBuilderType = state.stackBuilderType === 'players' ? 'teams' : 'players';
      return {
        ...state,
        stackBuilderType: newStackBuilderType
      }
    case 'SET_STACK_RANGE':
      const newStacksForRange = state.stacks.map((stack, m) => {
        const newStack = cloneDeep(stack);
        if (j === m) {
          newStack.ranges[i] = payload.range;
        }
        return newStack;
      });

      return {
        ...state,
        stacks: newStacksForRange
      }
    case 'MLB_OFFENSE_VS_PITCHER':
      return {
        ...state,
        preventMlbOffenseVsPitcher: !state.preventMlbOffenseVsPitcher
      }
    default:
      return state
  }
};

const persistConfig = {
  key: 'primary',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
