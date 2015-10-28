/**
 * Created by maximilian on 18.10.2015.
 */

import R from 'ramda';
import LinkedList from 'circular-list';


export default function ({sequence}) {
    var counter = 0;

    let createSequenceOverflow = function (start, count) {
        if (count <= 0) {
            return [];
        }

        var set1 = R.slice(start, start + count, sequence),
            set2 = createSequenceOverflow(0, count - set1.length);

        return R.concat(set1, set2);
    };

    return function (count) {
        var result = createSequenceOverflow(counter, count);

        let length = sequence.length,
            cursor = (count - length) - (length  * (Math.floor(( count / length )) - 1));

        cursor += counter;
        if (cursor > length - 1) { cursor = cursor - length; }

        console.log('cursor: ', cursor);
        console.log('counter: ', counter);
        counter = cursor;

        return result;
    };
};