import { initialState } from './initialState';
import { actionTypes } from './actionTypes';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    default:
      return state;
  }
}
