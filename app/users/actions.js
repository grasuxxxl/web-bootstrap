/**
 * Created by maximilian on 08.06.2015.
 */
import { LOADED_USERS } from './action_types.js';
import Promise from 'bluebird';
import Users from '../services/users.js';

var actions = {
    load(options) {
        return (dispatch) => {
            Users.getCollection(options).
                then(function (usersResult) {
                    dispatch(actions.loaded(usersResult));
                });
        };
    },

    loaded(usersResult) {
        return { type: LOADED_USERS, usersResult };
    }
};

export default actions;