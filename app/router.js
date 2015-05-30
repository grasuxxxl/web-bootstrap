/**
 * Created by Maximilian on 5/30/2015.
 */
import React from 'react';
import Router, { DefaultRoute } from 'react-router';
import routes from './routes.js';


export default {
    init: function (options) {
        var { rootNode } = options;

        Router.run(routes, function (Handler) {
            React.render(<Handler />, rootNode);
        });
    }
};