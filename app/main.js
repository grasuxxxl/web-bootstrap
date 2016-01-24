import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Fluxxor from 'fluxxor';
import { Provider } from 'react-redux';

import Architecture from './architecture.js';


export default React.createClass({
    render () {
      var {children} = this.props;
        return (
            <Provider store={Architecture.init()}>
                {children}
            </Provider>
        );
    }
})
