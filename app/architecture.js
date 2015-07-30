/**
 * Created by maximilian on 07.06.2015.
 */

import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import counter from './misc/store.js';
import users from './users/store.js';

export default {
    init: function () {
        return createRedux({
            counter,
            users
        });
    }
};