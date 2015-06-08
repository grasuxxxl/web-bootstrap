/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';

export default class UsersTable extends Component {

    _rowGetter (index) {
        return this.props.users[index];
    }

    render () {

        return (
            <Table
                width={600}
                height={600}
                rowsCount={this.props.totalDisplayData}
                rowHeight={50}
                rowGetter={this._rowGetter.bind(this)}
                headerHeight={50}>
                <Column label="FirstName" width={100} dataKey={'firstName'} />
                <Column label="LastName" width={100} dataKey={'lastName'} flexGrow={1} />
            </Table>
        );
    }
}

UsersTable.propTypes = {
    users: PropTypes.array,
    totalData: PropTypes.number,
    totalDisplayData: PropTypes.number
};

UsersTable.defaultProps = {
    totalDisplayData: 0
};