/**
 * Created by Maximilian on 5/30/2015.
 */
import Router from './router.js';

// Load initial data
(function (window) {
    window.cache = {

    }
}(window));


// Load I18n resources

// Start router
Router.init({
    rootNode: document.getElementById('app')
});