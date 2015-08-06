/**
 * Created by maximilian on 07.06.2015.
 */
import R from 'ramda';

import { LOADED_USERS } from './action_types.js';

function mergeState(currentState, nextState) {

    var currentData = currentState.data || [],
        dataToAdd = R.filter(function (user) {
            return !R.find(R.eqDeep(user), nextState.data);
        }, currentData);

    var allData = R.concat(dataToAdd, nextState.data);

    var diff = function (a, b) {return a.id - b.id};
    var sortedData = R.sort(diff, allData);

    return {
        data: sortedData,
        totalData: nextState.totalData,
        totalDisplayData: nextState.totalDisplayData
    };
}

export default function (state = {}, action = null) {

    switch (action.type) {
        case LOADED_USERS:
            return mergeState(state, action.usersResult);
        default:
            return state;
    }
}