module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: './build'
	},
	module: {
		loaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'babel'}]
	}
}
