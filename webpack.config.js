"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config =  {
  entry: ['./src/index.js'],
  output: {
    filename: 'dist/app.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /.*\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
  ]
};

module.exports = config;
