import { actionTypes } from './actionTypes';

export const setEmail = email => {
  return { type: actionTypes.SET_EMAIL, email: email };
};

export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() };
};

export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() };
};

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};
