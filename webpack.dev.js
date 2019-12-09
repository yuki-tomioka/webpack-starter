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
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = webpackConfig
