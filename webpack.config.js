const path = require('path');

module.exports = ( env, argv ) => ({
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		watchContentBase: true,
	}
})