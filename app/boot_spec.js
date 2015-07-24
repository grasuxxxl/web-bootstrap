/**
 * Created by maximilian on 15.07.2015.
 */
var test = require('./tape.js');
var sinon = require('sinon');
var Boot = require('./boot.js');
var Router = require('./router.js');
var Architecture =require('./architecture.js');

test('boot', function (t) {
    sinon.stub(Router, 'init');

    Boot.init();

    t.equal(Router.init.called, true, 'Router.init to have been called');
    Router.init.reset();
    t.end();
});

test('boot', function (t) {
    sinon.stub(Architecture, 'init');

    Boot.init();

    t.equal(Architecture.init.called, true, 'Architecture.init to have been called');
    Architecture.init.reset();
    t.end();
});