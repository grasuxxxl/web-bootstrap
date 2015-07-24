/**
 * Created by maximilian on 22.07.2015.
 */
var tape = require('tape');
var R = require('ramda');
var jsdom = require("jsdom");

var options = {
    html: '<html><head></head><body></body></html>'
};

function setupDOM () {
    jsdom.env({
        html: options.html,
        done: function (errors, window) {
            if (global.window === undefined) {
                global.window = window;
                global.document = window.document;
            }
        }
    });
}

var setup = R.once(function () {
    setupDOM();
});

setup();

module.exports = function () {
    tape.apply(this, arguments);
};