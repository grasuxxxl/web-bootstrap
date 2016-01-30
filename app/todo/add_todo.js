import React from 'react';
import { connect } from 'react-redux';

import { add } from './reducers.js';

export default connect()(React.createClass({
  getInitialState () { return { text: '' }; },
  
  onTextChange (e) {
    this.setState({ text: e.target.value });
  },
  onCreateClick () {
    var { dispatch } = this.props;
    dispatch(add({text: this.state.text}));
  },
  
  render () {
    return (
      <div>
        <input onChange={this.onTextChange} value={this.state.text} />
        <button onClick={this.onCreateClick}>Create</button>
      </div>
    );
  }
}));
