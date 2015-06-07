/**
 * Created by maximilian on 07.06.2015.
 */
import Fluxxor from 'fluxxor';

export default Fluxxor.createStore({
    initialize () {

    },

    getState () {
        return {
            users: [
                { firstName: 'Ion', lastName: 'Gheo' },
                { firstName: 'Vasile', lastName: 'Gheorghe' },
                { firstName: 'Daniela', lastName: 'Costin' }
            ]
        };
    }
});