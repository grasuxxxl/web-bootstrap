/**
 * Created by maximilian on 04.07.2015.
 */
var sinon = require('sinon');
var Boot = require('./boot.js');
var Architecture = require('./architecture.js');
var Router = require('./router.js');
var assert = require('assert');
var sandbox, document;


var jsdom = require("jsdom");

var options = {
    html: '<html><head></head><body></body></html>'
};




describe('Bootloader', function () {
    beforeEach(function (done) {
        sandbox = sinon.sandbox.create();

        jsdom.env({
            html: options.html,
            done: function (errors, window) {
                global.window = window;
                document = window.document;
                done();

            }
        });
    });
    afterEach(function () {
        sandbox.restore();
    });

    it('should initiate the data flow mechanism', function () {
        sandbox.stub(Architecture, 'init');
        sandbox.stub(Router, 'init');
        Boot.init(document);
        assert.equal(Architecture.init.called, true);
    });

    it('should initiate the router', function () {
        sandbox.stub(Router, 'init');
        sandbox.stub(Architecture, 'init');
        Boot.init(document);
        assert.equal(Router.init.called, true);
    });
});


