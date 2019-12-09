const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const dist = path.join(__dirname, 'dist');

const webpackConfig = merge(common, {
    entry: {},
    mode: 'development',
    output: {
        filename: '[name].js',
        path: dist
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: dist,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        open: true,
        historyApiFallback: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = webpackConfig
