/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';
import R from 'ramda';


export default class UsersTable extends Component {
    _rowGetter (index) {
        var result = this.props.users[index];
        if (result) return result;

        console.log('Failed at index ', index);
        this.noDataAtIndex(index);

        return {
            firstName: 'Loading...',
            lastName: 'Loading...'
        }
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
                <Column label="Id" width={50} dataKey={'id'} />
                <Column label="FirstName" width={100} dataKey={'firstName'} />
                <Column label="LastName" width={100} dataKey={'lastName'} flexGrow={1} />
            </Table>
        );
    }

    noDataAtIndex (index) {
        this.props.noDataAtIndex(index);
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