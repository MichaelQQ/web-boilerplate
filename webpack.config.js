var path = require('path');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'eval',
  output: {
    // path: path.join(__dirname, "build"),
    filename: '[name].min.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
  }],
  },
  node: {
    fs: 'empty',
  },
};
