import { actionTypes } from './actionTypes';

export const setEmail = email => {
  return { type: actionTypes.SET_EMAIL, email: email };
};
