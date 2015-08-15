/**
 * Created by maximilian on 07.06.2015.
 */

import { createStore, applyMiddleware } from 'redux';
import counter from './misc/store.js';
import users from './users/store.js';

const thunkMiddleware = store => next => action => {
    if (typeof action !== 'function') {
        // Normal action, pass it on
        return next(action);
    }

    // Woah, somebody tried to dispatch a function!
    // We will invoke it immediately and give `store.dispatch`
    // to it. This will invert control and let it dispatch
    // many times. We will also pass `getState` to it so it
    // can peek into the current state and make decisions based on it.

    const result = action(store.dispatch, store.getState);

    // Whatever the user returned from that function, we'll return too,
    // so it becomes `dispatch()` returns value. This is convenient
    // in case user wants to return a Promise to wait for.

    return result;
};

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

export default {
    init: function () {
        return createStoreWithMiddleware(users);
    }
};