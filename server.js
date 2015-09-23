/**
 * Created by maximilian on 29.07.2015.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

debugger;
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    quite: false,
    noInfo: false,
    stats: {color: true},
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:3000');
    });