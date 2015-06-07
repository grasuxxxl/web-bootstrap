import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Fluxxor from 'fluxxor';

var FluxMixin = Fluxxor.FluxMixin(React);

export default React.createClass({
    mixins: [FluxMixin],

    render () {
        return (
            <div>
                <RouteHandler />
            </div>
        );
    }
})