// For conveniance we create variable that holds the directory to bower_components
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var node_dir = __dirname + '/node_modules';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
	context: __dirname,
	entry: ['./app/boot.js'],
    resolve: { alias: {} },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('style.css')
    ],
	output: {
     publicPath: '/',
     path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
     filename: 'bundle.js'
	},
    module: {
        noParse: [],
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module') },
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};

// config.addVendor('react', node_dir + '/react/dist/react.min.js');

module.exports = config;