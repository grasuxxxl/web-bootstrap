/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import Main from './main.js';
import Users from './users/users.js';
import CounterApp from './misc/counter_app.js';
import InfiniteListContainer from './components/infinite_list_container.js';

var routes = (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Users} />
        <Route path="counter" handler={CounterApp} />
        <Route path="infinite-list" handler={InfiniteListContainer} />
    </Route>
);
export default routes;