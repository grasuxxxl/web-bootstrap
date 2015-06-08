/**
 * Created by maximilian on 08.06.2015.
 */
import Promise from 'bluebird';

export default {
    getCollection () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    data: [
                        { firstName: 'Ion', lastName: 'Gheo' },
                        { firstName: 'Vasile', lastName: 'Gheorghe' },
                        { firstName: 'Daniela', lastName: 'Costin' },
                        { firstName: 'Maximilian', lastName: new Date().toString() }
                    ],
                    totalData: 4,
                    totalDisplayData: 4
                });
            }, 0);
        });

        return promise;
    }
};