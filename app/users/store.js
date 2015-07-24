/**
 * Created by maximilian on 07.06.2015.
 */
import Fluxxor from 'fluxxor';
import Users from '../services/users.js';
import R from 'ramda';

var _usersResult = {
    data: [],
    totalData: 0,
    totalDisplayData: 0
};

export default Fluxxor.createStore({
    initialize () {
        this._loadUsers({
            length: 100
        });

        this.bindActions(
            'LOAD_USERS', this._loadUsers
        );
    },

    getState () {
        return _usersResult;
    },

    _options: [],

    fetchingCollection: false,

    _loadUsers (options) {
        options.start = options.start || 0;
        options.length = options.length || 100;

        options.start -= 20;
        options.length += 20;
        if (options.start < 0) options.start = 0;
        this._options.push(options);
        if (this.fetchingCollection) return;


        (function recursive(options) {
            this.fetchingCollection = true;
            Users.getCollection(options)
                .then(function (usersResult) {
                    var currentData = _usersResult.data;
                    _usersResult = usersResult;

                    var dataToAdd = R.filter(function (user) {
                        return !R.find(R.eqDeep(user), _usersResult.data);
                    }, currentData);

                    _usersResult.data = R.concat(dataToAdd, _usersResult.data);

                    var diff = function (a, b) {return a.id - b.id};
                    _usersResult.data = R.sort(diff, _usersResult.data);

                    this.emit('change');
                }.bind(this))
                .done(function () {
                    this._options.shift();
                    this.fetchingCollection = false;
                    if (this._options.length > 0) {
                        var options = R.last(this._options);
                        this._options.length = 0;
                        recursive.call(this, options);
                    }
                }.bind(this));
        }.bind(this))(options);
    }
});