var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'client/src');
var DIST_DIR = path.resolve(__dirname, 'client/dist/public');

var config = {
  entry: `${SRC_DIR}/app`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;