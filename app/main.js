import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Fluxxor from 'fluxxor';
import { connect } from 'react-redux';

import actions, {startLoading} from './side_effects/actions.js';

const mapToProps = function (atom) {
  return { loading: atom.sideEffects.loading, details: atom.sideEffects.details };
};

export default connect(mapToProps)(React.createClass({
  render () {
      var {children, loading, dispatch, details} = this.props;
      let loader = loading ? "I'm Loading" : '';
      let result = !loading ? 'Got ' + details.id : '';
      
      return (
        <div>
          <button onClick={() => dispatch(actions.loadingStart({ id: 1})) }>{"start loading"}</button>
          <button onClick={() => dispatch(actions.stop()) }>{"stop loading"}</button>
          {loader}
          {result}
          {children}
        </div>
        );
    }
}));
