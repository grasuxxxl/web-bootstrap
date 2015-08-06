/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import UsersTable from './users-table.js'
import UsersActions from './actions.js';

function select(state) {
    return {users: state.users};
}

export default React.createClass({
    setState: function () {
        debugger;
    },
    render () {

        return (
            <Connector select={select}>
                {({users, dispatch}) =>
                    <UsersTable
                        users={users.data || []}
                        totalDisplayData={1000}
                        noDataAtIndex={function (options) {
                            setTimeout(() => dispatch(UsersActions.load(options)), 0);
                        }.bind(this)} />
                }
            </Connector>
        );
    }
})