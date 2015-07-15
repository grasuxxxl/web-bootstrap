/**
 * Created by Maximilian on 5/30/2015.
 */
import Router from './router.js';
import Architecture from './architecture.js';

export default {
    init: function (document) {
        var flux = Architecture.init();

        Router.init({
            rootNode: document.getElementById('app'),
            flux: flux
        });
    }
}

//// Load I18n resources
//
//// Start Fluxxor
//var flux = Architecture.init();
//
//// Start router
//Router.init({
//    rootNode: document.getElementById('app'),
//    flux: flux
//});