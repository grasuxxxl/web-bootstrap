/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import { render }  from 'react-dom';
import Router, { DefaultRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes.js';
import Architecture from './architecture.js';

export default {
    init: function (options) {
        var { rootNode } = options;

      render((
        <Provider store={Architecture.init()}>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </Provider>
      ), rootNode);
    }
};
