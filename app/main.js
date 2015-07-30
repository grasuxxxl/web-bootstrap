import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Fluxxor from 'fluxxor';
import { Provider } from 'redux/react';

import Architecture from './architecture.js';

var FluxMixin = Fluxxor.FluxMixin(React);

export default React.createClass({
    render () {
        return (
            <Provider redux={Architecture.init()}>
                {() => <RouteHandler /> }
            </Provider>
        );
    }
})