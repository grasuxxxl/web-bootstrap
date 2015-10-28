/**
 * Created by maximilian on 18.10.2015.
 */
import test from '../tape.js';
import Ring from './ring.js';
import R from 'ramda';

test('ring', function (t) {
    var ring = Ring({sequence: R.range(0, 3)});

    t.deepEqual(ring(2), [0, 1], 'should return a sequence of 2 items when no overflow is happening in the ring');

    ring(1); // reset the internal ring counter;
    t.deepEqual(ring(3), [0, 1, 2], 'should return a sequence of 3 items when the items we ' +
        'want is exactly the same as the total items in the ring');

    t.deepEqual(ring(5), [0, 1, 2, 0, 1], 'should return a sequence of 5 items when overflowing');

    t.deepEqual(ring(3), [2, 0, 1], 'should return a sequence of 3 items after it has been previously overflown');


    t.deepEqual(ring(1), [2], 'should be [2]');

    ring(1);
    ring(1);
    t.deepEqual(ring(1), [2], 'should reset the counter after each call');


    t.deepEqual(ring(1), [0], 'should properly reset counter at end of stack');

    t.end();
});