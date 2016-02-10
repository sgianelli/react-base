var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://172.17.0.5:8080',
        'webpack/hot/only-dev-server',
        "./app/assets/js/app.jsx"
    ],
    devServer: {
        hot: true,
        inline: true
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/build/js',
        publicPath: 'http://172.17.0.5:8080/js/',
        sourceMapFilename: 'app.js.map',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.svg?$/, loader: 'url' },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
           ENV: JSON.stringify(require(path.join(__dirname, 'config', 'prod.js')))
        })
    ],
    externals:[{
    }]
};
