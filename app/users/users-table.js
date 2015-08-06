/**
 * Created by Maximilian on 5/30/2015.
 */
import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';
import R from 'ramda';


export default class UsersTable extends Component {
    _rowGetter (index) {
        var result = R.find(R.propEq('id', index + 1), this.props.users);
        if (result) return result;
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
                <Column label="First Name" width={100} dataKey={'firstName'} />
                <Column label="Last Name" width={100} dataKey={'lastName'} flexGrow={1} />
            </Table>
        );
    }

    noDataAtIndex (index) {

        var min = (min, term) => term < 0 ? 0 : term;
        var subtract = (numA, numB) => numA - numB;

        this.props.noDataAtIndex({
            start: min(0, subtract(index, 50)),
            length: 150
        });
    }
}

UsersTable.propTypes = {
    users: PropTypes.array,
    totalData: PropTypes.number,
    totalDisplayData: PropTypes.number,
    noDataAtIndex: R.identity
};

UsersTable.defaultProps = {
    totalDisplayData: 0
};