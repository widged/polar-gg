var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ],
      "plugins": []
    }
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'app', 'main.js'),
  output: {
    path: path.resolve('docs'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('dev-electron', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: loaders
  }
};
