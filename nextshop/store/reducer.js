import { initialState } from './initialState';
import { actionTypes } from './actionTypes';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: initialState.count
      });
    default:
      return state;
  }
}
