/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main.js';
import CounterApp from './counter/container.js';
import TodoContainer from './todo/container.js';
import MediaContainer from './media/container.js';

var routes = (
   <Route path="/" component={Main}>
    <Route path="counter" component={CounterApp} />
    <Route path="todo" component={TodoContainer} />
    <Route path="media" component={MediaContainer} />
   </Route>
);
export default routes;
