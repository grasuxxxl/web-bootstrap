/**
 * Created by maximilian on 22.08.2015.
 */
import React from 'react';

export default React.createClass({
    propTypes : {
        deleteButtonVisible: React.PropTypes.bool
    },

    render () {
        var {deleteButtonVisible} = this.props,
            deleteButton = deleteButtonVisible ? <span>Delete</span> : '';

        return (
            <div>
                {deleteButton}
                <span>2</span>
                <span>3</span>
            </div>
        );
    }
});