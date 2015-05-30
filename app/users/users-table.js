/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component, PropTypes } from 'react';

export default class UsersTable extends Component {

    render () {
        var listOfUsers = this.makeListOfUsers(this.props.users);

        return (
            <div>
                {listOfUsers}
            </div>
        );
    }

    makeListOfUsers (users) {
        return users.map(function (user) {
            var name = user.firstName + ' ' + user.lastName;
            return (
                <div>
                    <span>{name}</span>
                </div>
            );
        });
    }
}

UsersTable.propTypes = { users: PropTypes.array };