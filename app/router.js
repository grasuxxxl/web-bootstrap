/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import Router, { DefaultRoute, browserHistory } from 'react-router';
import routes from './routes.js';


export default {
    init: function (options) {
        var { rootNode } = options;

      React.render((
        <Router history={browserHistory}>
          {routes}
        </Router>
      ), rootNode);
    }
};
