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

    fetchingCollection: false,

    _loadUsers (options) {
        if (this.fetchingCollection) return;

        this.fetchingCollection = true;
        Users.getCollection(options)
            .then(function (usersResult) {
                var currentData = _usersResult.data;
                _usersResult = usersResult;

                var dataToAdd = R.filter(function (user) {
                   return !R.find(R.eqDeep(user), _usersResult.data);
                }, currentData);

                _usersResult.data = R.concat(dataToAdd, _usersResult.data);

                this.emit('change');
            }.bind(this))
            .done(function () {
                this.fetchingCollection = false;
            }.bind(this));
    }
});