/**
 * Created by maximilian on 27.07.2015.
 */
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action_types.js';

export function increment () {
    return { type: INCREMENT_COUNTER };
}

export function decrement () {
    return { type: DECREMENT_COUNTER };
}

export function incrementAsync () {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
}