import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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
  stacksUsed: []
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
      return {
        ...state,
        selectedSlate: payload
      };
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
      return {
        ...state,
        stacks: state.stacks.concat([payload]),
        stackCounts: state.stackCounts.concat([0])
      }
    case 'REMOVE_STACK':
      return {
        ...state,
        stacks: state.stacks.filter((stack, i) => i !== payload),
        stackCounts: state.stackCounts.filter((n, i) => i !== payload)
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

      return {
        ...state,
        stackCounts
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
        pool: state.pool.concat([payload])
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
        results: []
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
