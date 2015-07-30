/**
 * Created by maximilian on 27.07.2015.
 */
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action_types.js';

export default function counter (state = 0, action = '') {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}