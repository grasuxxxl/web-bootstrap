/**
 * Created by maximilian on 27.07.2015.
 */
// The smart component may observe stores using `<Connector />`,
// and bind actions to the dispatcher with `bindActionCreators`.

import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Counter from './counter.js';
import * as CounterActions from './actions.js';

// You can optionally specify `select` for finer-grained subscriptions
// and retrieval. Only when the return value is shallowly different,
// will the child component be updated.
function select(state) {
    return { counter: state.counter };
}

export default React.createClass({
    render() {
        return (
            <Connector select={select}>
                {({ counter, dispatch }) =>
                    <Counter counter={counter}
                        {...bindActionCreators(CounterActions, dispatch)} />
                }
            </Connector>
        );
    }
})