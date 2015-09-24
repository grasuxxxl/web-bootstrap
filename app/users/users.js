/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionBar from './action-bar.js';
import SearchBar from '../components/search_bar.js'
import UsersTable from './users-table.js'
import UsersActions from './actions.js';

import DataList from '../components/data_list.js';

function select(state) {
    return {users: {data: state.data}};
}

var Users = React.createClass({
    getInitialState: function () {
        return {
            deleteButtonVisible: true
        };
    },

    render () {
        var {dispatch, users} = this.props,
            usersData = users && (users.data || []),

            {deleteButtonVisible} = this.state;

        return (
            <div>
                <SearchBar />
                <UsersTable
                    users={usersData || []}
                    totalDisplayData={1000}
                    noDataAtIndex={function (options) {
                        setTimeout(() => dispatch(UsersActions.load(options)), 0);
                    }.bind(this)} />
            </div>
        );
    }
});

export default connect(select)(Users);