/**
 * Created by maximilian on 15.07.2015.
 */
var test = require('./tape.js');
var sinon = require('sinon');
var Boot = require('./boot.js');
var Router = require('./router.js');

test('should initiate the router', function (t) {
    sinon.stub(Router, 'init');

    Boot.init();

    t.equal(Router.init.called, true, 'Router.init to have been called');
    Router.init.reset();
    t.end();
});

test('test', function (t) {

    t.equal(1,1);
    t.end();
});