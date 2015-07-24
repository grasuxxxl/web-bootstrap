/**
 * Created by maximilian on 22.07.2015.
 */
var path = require("path"),
    fs = require("fs"),
    Bacon = require('baconjs');


var directoryBus = new Bacon.Bus(),
    testFileBus = new Bacon.Bus();

directoryBus.onValue(function (path) {
    readDirectory(path);
});

testFileBus.onValue(function (file) {
    require(file);
});

function readDirectory(directory) {
    fs.readdir(directory, function (err, files) {

        files.forEach(function (file) {
            var filePath = path.join(directory, file);
            fs.stat(filePath, function (err, stat) {

                if (stat.isDirectory()) {
                    directoryBus.push(filePath);
                }
                else if (file.match(/._spec.js$/)) {
                    testFileBus.push(filePath);
                }
            });

        })

    });
}

readDirectory(__dirname);