const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  resolve: {
    root: [
      path.resolve(__dirname, '../src')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&sourceMap'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
