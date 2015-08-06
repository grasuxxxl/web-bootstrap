/**
 * Created by Maximilian on 5/30/2015.
 */
import Router from './router.js';
import Architecture from './architecture.js';
import R from 'ramda';

export default {
    init () {
        // Start router
        Router.init({
            rootNode: document.getElementById('app')
        });
    }
}