import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  slates: {},
  importErrors: []
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
