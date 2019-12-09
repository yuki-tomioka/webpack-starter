const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const docs = path.join(__dirname, 'docs');

const webpackConfig = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].min.js',
        path: docs
    }
});

module.exports = webpackConfig
