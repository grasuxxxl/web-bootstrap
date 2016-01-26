import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Fluxxor from 'fluxxor';
import { connect } from 'react-redux';

import actions from './loading/actions.js';

const mapToProps = function (atom) {
  return { loading: atom.loading.loading };
};

export default connect(mapToProps)(React.createClass({
    render () {
      var {children, loading, dispatch} = this.props;
      let loader = loading ? "I'm Loading" : '';
      
      return (
        <div>
          <button onClick={() => dispatch(actions.start()) }>{"start loading"}</button>
          <button onClick={() => dispatch(actions.stop()) }>{"stop loading"}</button>
          {loader}
          {children}
        </div>
        );
    }
}));
