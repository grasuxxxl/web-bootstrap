var webpack             = require('webpack'),
    path                = require('path'),
    ExtractTextPlugin   = require('extract-text-webpack-plugin');

// var node_dir = __dirname + '/node_modules';



var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
	context: __dirname,
	entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './app/entry.js'
    ],
    resolve: { alias: {} },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('components.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
            { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ }
        ]
    },
    devtool: 'eval'
};

// config.addVendor('react', node_dir + '/react/dist/react.min.js');

module.exports = config;