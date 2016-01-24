/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main.js';
import Users from './users/users.js';
import CounterApp from './misc/counter_app.js';

var routes = (
   <Route path="/" component={Main}>
    <IndexRoute component={Users} />
    <Route path="counter" component={CounterApp} />
   </Route>
);
export default routes;
