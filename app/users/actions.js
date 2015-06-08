/**
 * Created by maximilian on 08.06.2015.
 */
export default {
    loadUsers (options) {
        this.dispatch('LOAD_USERS', options);
    }
};