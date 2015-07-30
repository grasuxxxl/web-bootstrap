/**
 * Created by maximilian on 27.07.2015.
 */
import React, { PropTypes } from 'react';

export default React.createClass({
    propTypes: {
        incrementAsync: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    },

    render() {
        const { incrementAsync, decrement, counter } = this.props;
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={incrementAsync}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
            </p>
        );
    }
})