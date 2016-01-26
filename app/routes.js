/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main.js';
import CounterApp from './counter/container.js';

var routes = (
   <Route path="/" component={Main}>
    <Route path="counter" component={CounterApp} />
   </Route>
);
export default routes;
