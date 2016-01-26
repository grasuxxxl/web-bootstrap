import test from 'tape';
import reducer, { fetchDetails } from './reducers.js';
import actions, { loadingStart } from './actions.js';
import { loop, Effects } from 'redux-loop';


test('reducer works as expected', function (t) {
  const state = { loading: false };

  const result = reducer(state, actions.loadingStart({id: 1}));

  t.deepEqual(result, loop(
    { loading: true },
    Effects.promise(fetchDetails, 1)
  ));

  t.end();
});
