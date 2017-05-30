var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
	},
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, exclude: /node_modules/, loader: 'css-loader'}
    ]
  }
}
