import { LOADING_START, LOADING_STOP } from './action_types.js';

export default function (state = { loading: false }, action) {

  switch (action.type) {
    case LOADING_START: return { loading: true };
    case LOADING_STOP: return { loading: false };
    default: return state;
  }
};
