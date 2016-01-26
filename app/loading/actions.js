import { LOADING_START, LOADING_STOP } from './action_types.js';

export default {
  start () {
    return {
      type: LOADING_START
    };
  },
  stop () {
    return {
      type: LOADING_STOP
    };
  }
};
