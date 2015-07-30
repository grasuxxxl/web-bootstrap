/**
 * Created by maximilian on 07.06.2015.
 */
import Fluxxor from 'fluxxor';
import Users from '../services/users.js';
import R from 'ramda';

import { LOAD_USERS } from './action_types.js';

export default function test_naming(state = {}, action = null) {
    switch (action.type) {
        case LOAD_USERS:
            return Users.getCollectionSync();
        default:
            return state;
    }
}