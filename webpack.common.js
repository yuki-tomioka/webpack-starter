const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const prodMode = process.env.NODE_ENV === 'production';

const webpackConfig = {
    entry: {},
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: prodMode ? '[name].min.css' : '[name].css'
        })
    ]
};

glob.sync('**/*.js', {
    cwd: 'src',
}).forEach(jsName => {
    const name = jsName.replace('.js', '');
    webpackConfig.entry[name] = path.resolve('src', jsName)
    console.log(name);
    console.log(jsName);
    const tplName = name + '.html'
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        template: path.resolve('src', tplName),
        filename: tplName,
        inject:'body',
        includeSiblingChunks :true,
        chunks:[name]
    }))
})

module.exports = webpackConfig
