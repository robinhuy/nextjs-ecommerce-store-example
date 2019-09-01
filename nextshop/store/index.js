import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer } from './reducer';

export function initializeStore(state = initialState) {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
}
