/**
 * Created by maximilian on 11.07.2015.
 */
// Print all of the news items on Hacker News
var jsdom = require("jsdom");
var fs = require("fs");
var bootSpec = require('./boot_spec.js');

var options = {
    html: '<html><head></head><body></body></html>'
};

jsdom.env({
    html: options.html,
    done: function (errors, window) {
        global.window = window;


    }
});