/**
 * Created by maximilian on 07.06.2015.
 */
import Fluxxor from 'fluxxor';
import UsersStore from './users/store.js';

export default {
    init: function () {
        var stores = {
            UsersStore: new UsersStore()
        };

        var flux = new Fluxxor.Flux(stores, {});

        flux.on('dispatch', function (type, payload) {
            console.log("[Dispatch]", type, payload);
        });

        return flux;
    }
};