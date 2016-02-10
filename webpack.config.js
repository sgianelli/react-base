var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./app/assets/js/app.jsx"
    ],
    devServer: {
        hot: true,
        inline: true
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/public/js',
        publicPath: 'http://localhost:8080/js/',
        sourceMapFilename: 'app.js.map',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.svg$/, loader: 'url-loader?limit=8192' },
            { test: /\.gif$/, loader: 'url-loader?limit=8192' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
           ENV: JSON.stringify(require(path.join(__dirname, 'config', 'dev.js')))
        })
    ],
    externals:[{
    }]
};
