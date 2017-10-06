var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.join(__dirname, 'client/src');
var DIST_DIR = path.join(__dirname, 'public/dist');

var config = {
  entry: `${SRC_DIR}/app`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders : [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: ['node_modules'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;