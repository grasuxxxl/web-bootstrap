/**
 * Created by maximilian on 08.06.2015.
 */
import Promise from 'bluebird';
import R from 'ramda';
import users from './users_mock.js';
import {single} from '../utils/async.js'

function setDefault (options, defaults) {
    options = options || {};

    R.forEach(function (key) {
        if (options[key] === null || options[key] === undefined) {
            options[key] = defaults[key];
        }
    }, R.keys(defaults));
    return options;
}

function _getUsers (options) {
    options = setDefault(options, {
        start: 0,
        length: 100
    });

    return R.slice(options.start, options.start + options.length)(users);
}



export default {
    getCollection: single(function (options) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var users = _getUsers(options);
                resolve({
                    data: users,
                    totalData: 1000,
                    totalDisplayData: 1000
                });
            }, 0);
        });
    })
};