/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersTable from './users-table.js'
import UsersActions from './actions.js';

function select(state) {
    return {users: {data: state.data}};
}

var Users = React.createClass({
    render () {
        var {dispatch, users} = this.props;
        var usersData = users && (users.data || []);

        return (
            <UsersTable
                users={usersData || []}
                totalDisplayData={1000}
                noDataAtIndex={function (options) {
                    setTimeout(() => dispatch(UsersActions.load(options)), 0);
                }.bind(this)} />
        );
    }
});

export default connect(select)(Users);