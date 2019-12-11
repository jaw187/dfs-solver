import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  slates: {},
  importErrors: [],
  stack: [],
  stacks: [],
  stackCounts: [],
  results: [],
  pool: []
}

const reducer = (state = initialState, { type, payload }) => {
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
      const { i, n } = payload;
      const stackCounts = [...state.stackCounts];
      stackCounts[i] = n;

      return {
        ...state,
        stackCounts
      }
    case 'ADD_RESULT':
      return {
        ...state,
        results: state.results.concat(payload)
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
    default:
      return state
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
