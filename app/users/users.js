/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component } from 'react';
import UsersTable from './users-table.js'

export default class Users extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [
                { firstName: 'Ion', lastName: 'Gheo' },
                { firstName: 'Vasile', lastName: 'Gheorghe' },
                { firstName: 'Daniela', lastName: 'Costin' }
            ]
        };
    }

    render () {
        return (
            <div>
                <UsersTable users={this.state.users} />
            </div>
        );
    }
}