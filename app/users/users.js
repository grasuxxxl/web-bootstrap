/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component } from 'react';
import UsersTable from './users-table.js'
import Fluxxor from 'fluxxor';


var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

export default React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('UsersStore')],

    getInitialState () {
        return {
            // users: []
        };
    },

    getStateFromFlux () {
        var flux = this.getFlux();
        return flux.store('UsersStore').getState();
    },

    render () {
        return (
            <div>
                <button onClick={this.onReloadClick}>Reload</button>
                <UsersTable
                    users={this.state.data}
                    totalDisplayData={this.state.totalDisplayData}
                    refetchData={function (options) {
                        this._fireReloadUsers(options)
                    }.bind(this)} />
            </div>
        );
    },

    onReloadClick () {
        this._fireReloadUsers();
    },

    _fireReloadUsers (options) {
        this.getFlux().actions.loadUsers(options);
    }
})