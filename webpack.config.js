// For conveniance we create variable that holds the directory to bower_components
var webpack = require('webpack');
var path = require('path');
// var node_dir = __dirname + '/node_modules';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
	context: __dirname,
	entry: ['./app/main.js'],
    resolve: { alias: {} },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
	output: {
     publicPath: '/',
     path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
     filename: 'bundle.js'
	},
    module: {
        noParse: [],
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};

// config.addVendor('react', node_dir + '/react/dist/react.min.js');

module.exports = config;