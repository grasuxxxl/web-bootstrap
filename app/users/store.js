/**
 * Created by maximilian on 07.06.2015.
 */
import Fluxxor from 'fluxxor';
import Users from '../services/users.js';

var _usersResult = [];

export default Fluxxor.createStore({
    initialize () {
        this._loadUsers();

        this.bindActions(
            'LOAD_USERS', this._loadUsers
        );
    },

    getState () {
        return _usersResult;
    },

    _loadUsers () {
        Users.getCollection()
            .then(function (usersResult) {
                _usersResult = usersResult;
                this.emit('change');
            }.bind(this));
    }
});