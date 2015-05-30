/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import Main from './main.js';
import Users from './users/users.js';

var routes = (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Users} />
    </Route>
);
export default routes;