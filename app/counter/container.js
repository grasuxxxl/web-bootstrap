import React from 'react';
import {connect} from 'react-redux';

import {increment, decrement} from './actions.js';

const helloComp = ({counter, dispatch}) => {
    return (
        <div>Counter at: {counter}
        <br />
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};
const mapToCounterProps = (atom) => {
  return {
    counter: atom.counter
  };
};

export default connect(mapToCounterProps)(helloComp);
